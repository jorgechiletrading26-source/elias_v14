// src/ai/flows/analyze-math-pdf-topics.ts
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { bookPDFs } from '@/lib/books-data';

const AnalyzeMathPdfTopicsInputSchema = z.object({
  courseName: z.string().describe('Course name to find the math PDF in library.'),
  language: z.enum(['es', 'en']).describe('Output language.'),
});

export type AnalyzeMathPdfTopicsInput = z.infer<typeof AnalyzeMathPdfTopicsInputSchema>;

const AnalyzeMathPdfTopicsOutputSchema = z.object({
  topics: z.array(z.string()).max(40).describe('Distinct math topics detected in the PDF.'),
  bookTitle: z.string().optional().describe('Title of the book analyzed.'),
});

export type AnalyzeMathPdfTopicsOutput = z.infer<typeof AnalyzeMathPdfTopicsOutputSchema>;

// Cache para evitar re-descargar PDFs
const pdfTextCache = new Map<string, { text: string; timestamp: number }>();
const PDF_CACHE_TTL = 30 * 60 * 1000; // 30 minutos

const analyzeMathPdfTopicsPrompt = ai.definePrompt({
  name: 'analyzeMathPdfTopicsPrompt',
  input: { schema: z.object({ pdfTextSample: z.string(), language: z.string(), courseName: z.string() }) },
  output: { schema: AnalyzeMathPdfTopicsOutputSchema },
  config: {
    temperature: 0.2,
  },
  prompt: `Eres un experto en didáctica y currículo de matemáticas.

Tu tarea: a partir del TEXTO extraído de un libro de matemáticas de nivel "{{courseName}}", identificar los temas matemáticos que se pueden estudiar.

REGLAS IMPORTANTES:
- Devuelve SOLO temas de matemáticas específicos (no autores, no fechas, no indicaciones pedagógicas genéricas).
- Los temas deben ser frases cortas (2-6 palabras), por ejemplo: "Matrices", "Sistemas de ecuaciones", "Funciones cuadráticas", "Raíces cuadradas".
- Sin duplicados (une sinónimos).
- Máximo 30 temas ordenados de más básico a más avanzado.
- Idioma de salida: {{{language}}}.

TEXTO DEL LIBRO (muestra):
{{pdfTextSample}}

Devuelve un JSON válido con la forma:
{ "topics": ["...", "..."], "bookTitle": "Título del libro" }
`,
});

function normalize(text: string): string {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function uniqPreserveOrder(items: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const it of items) {
    const key = normalize(it);
    if (!key) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(it.trim());
  }
  return out;
}

// Temas heurísticos basados en nivel de curso
function getHeuristicTopicsByCourse(courseName: string, language: 'es' | 'en'): string[] {
  const course = normalize(courseName);
  
  // Temas por nivel (español)
  const topicsByLevelEs: Record<string, string[]> = {
    'basico': [
      'Números naturales', 'Suma y resta', 'Multiplicación', 'División',
      'Fracciones', 'Decimales', 'Geometría básica', 'Medidas', 'Patrones numéricos'
    ],
    'medio': [
      'Álgebra', 'Ecuaciones lineales', 'Sistemas de ecuaciones', 'Funciones',
      'Funciones cuadráticas', 'Trigonometría', 'Geometría analítica', 'Vectores',
      'Matrices', 'Determinantes', 'Probabilidad', 'Estadística', 'Logaritmos',
      'Exponenciales', 'Límites', 'Derivadas', 'Integrales', 'Números complejos'
    ]
  };
  
  const topicsByLevelEn: Record<string, string[]> = {
    'basico': [
      'Natural numbers', 'Addition and subtraction', 'Multiplication', 'Division',
      'Fractions', 'Decimals', 'Basic geometry', 'Measurements', 'Number patterns'
    ],
    'medio': [
      'Algebra', 'Linear equations', 'Systems of equations', 'Functions',
      'Quadratic functions', 'Trigonometry', 'Analytic geometry', 'Vectors',
      'Matrices', 'Determinants', 'Probability', 'Statistics', 'Logarithms',
      'Exponentials', 'Limits', 'Derivatives', 'Integrals', 'Complex numbers'
    ]
  };
  
  const topics = language === 'es' ? topicsByLevelEs : topicsByLevelEn;
  
  if (course.includes('medio')) {
    return topics['medio'];
  }
  return topics['basico'];
}

async function fetchPdfText(driveId: string): Promise<string> {
  // Verificar caché
  const cached = pdfTextCache.get(driveId);
  if (cached && Date.now() - cached.timestamp < PDF_CACHE_TTL) {
    console.log('[analyze-math] Using cached PDF text');
    return cached.text;
  }

  try {
    // Intentar descargar el PDF desde Google Drive
    const url = `https://drive.google.com/uc?export=download&id=${driveId}`;
    const response = await fetch(url, { 
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SmartStudent/1.0)'
      }
    });
    
    if (!response.ok) {
      console.warn('[analyze-math] Failed to fetch PDF:', response.status);
      return '';
    }

    const buffer = await response.arrayBuffer();
    
    // Intentar extraer texto básico del PDF
    // Nota: En servidor, la extracción de PDF es limitada
    // Usamos un enfoque heurístico basado en el contenido binario
    const bytes = new Uint8Array(buffer);
    const textParts: string[] = [];
    
    // Buscar streams de texto en el PDF (enfoque simplificado)
    let currentText = '';
    for (let i = 0; i < bytes.length - 10 && textParts.length < 50; i++) {
      // Buscar secuencias de caracteres ASCII imprimibles
      const char = bytes[i];
      if (char >= 32 && char <= 126) {
        currentText += String.fromCharCode(char);
      } else if (currentText.length > 20) {
        // Filtrar solo texto que parezca contenido real
        if (/[a-záéíóúñ]{3,}/i.test(currentText)) {
          textParts.push(currentText);
        }
        currentText = '';
      } else {
        currentText = '';
      }
    }
    
    const extractedText = textParts.join(' ').slice(0, 50000);
    
    // Guardar en caché
    pdfTextCache.set(driveId, { text: extractedText, timestamp: Date.now() });
    
    return extractedText;
  } catch (error) {
    console.error('[analyze-math] Error fetching PDF:', error);
    return '';
  }
}

function makeSample(text: string): string {
  const t = (text || '').replace(/\u0000/g, '').trim();
  if (t.length <= 40_000) return t;
  const head = t.slice(0, 30_000);
  const tail = t.slice(-8_000);
  return `${head}\n\n[...recortado...]\n\n${tail}`;
}

export async function analyzeMathPdfTopics(input: AnalyzeMathPdfTopicsInput): Promise<AnalyzeMathPdfTopicsOutput> {
  try {
    // Buscar el libro de matemáticas para el curso en la biblioteca
    const mathBook = bookPDFs.find(b => 
      b.course === input.courseName && 
      b.subject.toLowerCase().includes('matem')
    );

    if (!mathBook) {
      console.log('[analyze-math] No math book found for course:', input.courseName);
      return { 
        topics: getHeuristicTopicsByCourse(input.courseName, input.language),
        bookTitle: input.language === 'es' ? 'Matemáticas (General)' : 'Mathematics (General)'
      };
    }

    console.log('[analyze-math] Found math book:', mathBook.title);

    // Intentar obtener texto del PDF
    const pdfText = await fetchPdfText(mathBook.driveId);
    
    // Si no hay texto o es muy corto, usar heurísticas
    if (!pdfText || pdfText.length < 500) {
      console.log('[analyze-math] Using heuristic topics (PDF text too short or empty)');
      return { 
        topics: getHeuristicTopicsByCourse(input.courseName, input.language),
        bookTitle: mathBook.title
      };
    }

    // Verificar si hay API key disponible
    const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_google_api_key_here') {
      console.log('[analyze-math] No API key, using heuristic topics');
      return { 
        topics: getHeuristicTopicsByCourse(input.courseName, input.language),
        bookTitle: mathBook.title
      };
    }

    // Usar IA para analizar el contenido
    const pdfTextSample = makeSample(pdfText);
    const res = await analyzeMathPdfTopicsPrompt({
      pdfTextSample,
      language: input.language,
      courseName: input.courseName,
    });

    const topics = uniqPreserveOrder((res.output?.topics || []).map(String)).slice(0, 30);
    
    if (topics.length === 0) {
      return { 
        topics: getHeuristicTopicsByCourse(input.courseName, input.language),
        bookTitle: mathBook.title
      };
    }

    return { 
      topics,
      bookTitle: res.output?.bookTitle || mathBook.title
    };
  } catch (error) {
    console.error('[analyze-math-pdf-topics] Error:', error);
    return { 
      topics: getHeuristicTopicsByCourse(input.courseName, input.language),
      bookTitle: input.language === 'es' ? 'Matemáticas' : 'Mathematics'
    };
  }
}
