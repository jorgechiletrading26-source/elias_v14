// PDF Content Generator - Shared module for extracting educational content
// This module provides topic-specific educational content from curriculum books

export interface BookInfo {
  course: string;
  subject: string;
  title: string;
}

// Generate topic-specific educational content based on subject, topic, and course
export function generateTopicContent(subject: string, topic: string, course: string): string {
  const topicNormalized = topic.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const subjectNormalized = subject.toLowerCase();
  
  // Ciencias Naturales topics
  if (subjectNormalized.includes('ciencias naturales') || subjectNormalized.includes('biología') || subjectNormalized.includes('biologia')) {
    const content = generateCienciasNaturalesContent(topicNormalized, topic, course);
    if (content) return content;
  }
  
  // Matemáticas topics
  if (subjectNormalized.includes('matemáticas') || subjectNormalized.includes('matematicas') || subjectNormalized.includes('matemática')) {
    const content = generateMatematicasContent(topicNormalized, topic, course);
    if (content) return content;
  }
  
  // Historia topics
  if (subjectNormalized.includes('historia') || subjectNormalized.includes('sociales') || subjectNormalized.includes('geografía')) {
    const content = generateHistoriaContent(topicNormalized, topic, course);
    if (content) return content;
  }
  
  // Lenguaje topics
  if (subjectNormalized.includes('lenguaje') || subjectNormalized.includes('comunicación') || subjectNormalized.includes('comunicacion')) {
    const content = generateLenguajeContent(topicNormalized, topic, course);
    if (content) return content;
  }
  
  // Fallback - generate generic educational content
  return generateGenericContent(topic, subject, course);
}

function generateCienciasNaturalesContent(topicNormalized: string, topic: string, course: string): string | null {
  // Sistema Respiratorio
  if (topicNormalized.includes('sistema respiratorio') || topicNormalized.includes('respiratorio') || topicNormalized.includes('respiracion')) {
    return `
SISTEMA RESPIRATORIO - Contenido del Libro de Ciencias Naturales ${course}

CAPÍTULO: EL SISTEMA RESPIRATORIO HUMANO

1. INTRODUCCIÓN AL SISTEMA RESPIRATORIO
El sistema respiratorio es el conjunto de órganos que permite el intercambio de gases entre nuestro cuerpo y el ambiente. Su función principal es incorporar oxígeno (O₂) al organismo y eliminar dióxido de carbono (CO₂), un producto de desecho del metabolismo celular.

2. ÓRGANOS DEL SISTEMA RESPIRATORIO

2.1 Vías Respiratorias Superiores:

FOSAS NASALES
- Son las cavidades de entrada del aire al sistema respiratorio
- Están revestidas por mucosa nasal con cilios y moco
- Funciones: filtrar partículas, calentar y humedecer el aire
- Los vellos nasales atrapan partículas grandes

FARINGE
- Conducto muscular compartido con el sistema digestivo
- Mide aproximadamente 13 cm de longitud
- Conecta las fosas nasales con la laringe
- Contiene las amígdalas que ayudan a combatir infecciones

LARINGE
- Órgano cartilaginoso que contiene las cuerdas vocales
- Permite la producción de la voz (fonación)
- La epiglotis cierra la laringe durante la deglución para evitar que los alimentos entren a las vías respiratorias

2.2 Vías Respiratorias Inferiores:

TRÁQUEA
- Tubo de aproximadamente 12 cm de largo y 2 cm de diámetro
- Formada por anillos cartilaginosos en forma de "C"
- Revestida internamente por células ciliadas que mueven el moco hacia arriba

BRONQUIOS
- La tráquea se divide en dos bronquios principales (derecho e izquierdo)
- Cada bronquio entra a un pulmón
- Se ramifican sucesivamente en bronquios secundarios y terciarios

BRONQUIOLOS
- Son ramificaciones más pequeñas de los bronquios
- Carecen de cartílago en sus paredes
- Terminan en los sacos alveolares

ALVÉOLOS PULMONARES
- Pequeñas bolsas de aire donde ocurre el intercambio gaseoso
- Cada pulmón contiene aproximadamente 300 millones de alvéolos
- Están rodeados por una red de capilares sanguíneos
- Sus paredes son muy delgadas (0.2 micras) para facilitar la difusión de gases

PULMONES
- Son los órganos principales del sistema respiratorio
- El pulmón derecho tiene 3 lóbulos, el izquierdo tiene 2
- Están protegidos por la caja torácica
- Cubiertos por una membrana llamada pleura

DIAFRAGMA
- Músculo en forma de cúpula ubicado debajo de los pulmones
- Principal músculo de la respiración
- Al contraerse, desciende y permite la entrada de aire

3. EL PROCESO DE RESPIRACIÓN

3.1 Mecánica Respiratoria:

INSPIRACIÓN (Inhalación)
- El diafragma se contrae y desciende
- Los músculos intercostales elevan las costillas
- La cavidad torácica aumenta de volumen
- Los pulmones se expanden
- El aire entra por diferencia de presión

ESPIRACIÓN (Exhalación)
- El diafragma se relaja y asciende
- Los músculos intercostales se relajan
- La cavidad torácica disminuye de volumen
- Los pulmones se comprimen
- El aire sale al exterior

3.2 Frecuencia Respiratoria:
- Adulto en reposo: 12-20 respiraciones por minuto
- Niños: 20-30 respiraciones por minuto
- Durante el ejercicio la frecuencia aumenta

4. INTERCAMBIO GASEOSO

4.1 En los Alvéolos Pulmonares (Respiración Externa):
- El oxígeno pasa del aire alveolar a la sangre de los capilares
- El dióxido de carbono pasa de la sangre al aire alveolar
- Este proceso ocurre por difusión simple
- Depende de las diferencias de presión parcial de los gases

4.2 En los Tejidos (Respiración Interna):
- El oxígeno pasa de la sangre a las células
- El dióxido de carbono pasa de las células a la sangre
- Las células usan el oxígeno para la respiración celular

5. CUIDADOS DEL SISTEMA RESPIRATORIO

5.1 Hábitos Saludables:
- Respirar por la nariz para filtrar y calentar el aire
- Evitar ambientes con aire contaminado
- No fumar ni exponerse al humo del tabaco
- Realizar ejercicio físico regularmente
- Mantener una buena postura para facilitar la respiración

5.2 Prevención de Enfermedades:
- Lavarse las manos frecuentemente
- Cubrirse al toser o estornudar
- Ventilar los espacios cerrados
- Evitar cambios bruscos de temperatura
- Vacunarse según el calendario de vacunación

6. ENFERMEDADES DEL SISTEMA RESPIRATORIO

ENFERMEDADES COMUNES:
- Resfriado común: Infección viral leve de las vías superiores
- Gripe: Infección viral más severa con fiebre y malestar general
- Bronquitis: Inflamación de los bronquios
- Neumonía: Infección de los pulmones
- Asma: Inflamación crónica con dificultad para respirar

FACTORES DE RIESGO:
- Tabaquismo (causa principal de enfermedades respiratorias graves)
- Contaminación del aire
- Exposición a sustancias tóxicas
- Falta de actividad física
- Sistema inmune debilitado

7. ACTIVIDADES DE APRENDIZAJE

EXPERIMENTO: La Capacidad Pulmonar
Materiales: Botella grande, manguera, recipiente con agua
Procedimiento: Medir el volumen de aire que puedes exhalar

REFLEXIÓN:
¿Por qué es importante cuidar nuestro sistema respiratorio?
¿Cómo afecta la contaminación a nuestra salud respiratoria?
¿Qué podemos hacer para mantener sanos nuestros pulmones?
`;
  }
  
  // Célula
  if (topicNormalized.includes('celula') || topicNormalized.includes('celular') || topicNormalized.includes('célula')) {
    return `
LA CÉLULA - Contenido del Libro de Ciencias Naturales ${course}

CAPÍTULO: LA CÉLULA - UNIDAD BÁSICA DE LA VIDA

1. INTRODUCCIÓN
La célula es la unidad estructural y funcional de todos los seres vivos. Es la estructura más pequeña capaz de realizar todas las funciones vitales: nutrición, relación y reproducción.

2. TEORÍA CELULAR

La teoría celular, establecida en el siglo XIX, postula que:
1. Todos los seres vivos están formados por células
2. La célula es la unidad funcional de los seres vivos
3. Toda célula proviene de otra célula preexistente

Científicos importantes:
- Robert Hooke (1665): Observó por primera vez las células en el corcho
- Anton van Leeuwenhoek: Observó microorganismos
- Matthias Schleiden y Theodor Schwann: Formularon la teoría celular
- Rudolf Virchow: Estableció que toda célula proviene de otra célula

3. TIPOS DE CÉLULAS

3.1 CÉLULAS PROCARIOTAS
- No poseen núcleo definido (el material genético está libre en el citoplasma)
- Son más pequeñas y simples
- No tienen organelos membranosos
- Ejemplos: bacterias y arqueas

3.2 CÉLULAS EUCARIOTAS
- Poseen núcleo definido con envoltura nuclear
- Son más grandes y complejas
- Tienen organelos membranosos especializados
- Ejemplos: células animales, vegetales, de hongos y protistas

4. PARTES DE LA CÉLULA EUCARIOTA

4.1 MEMBRANA CELULAR (Membrana Plasmática)
- Estructura: Bicapa de fosfolípidos con proteínas
- Función: Controla el paso de sustancias hacia dentro y fuera de la célula
- Es selectivamente permeable
- Participa en la comunicación celular

4.2 CITOPLASMA
- Medio gelatinoso entre la membrana y el núcleo
- Compuesto principalmente por agua, sales y moléculas orgánicas
- Contiene el citoesqueleto que da forma a la célula
- Alberga los organelos celulares

4.3 NÚCLEO
- Centro de control de la célula
- Contiene el material genético (ADN)
- Está rodeado por la envoltura nuclear
- Contiene el nucléolo donde se forman los ribosomas

4.4 ORGANELOS CELULARES

MITOCONDRIAS
- Función: Producen energía (ATP) mediante la respiración celular
- Llamadas "las centrales energéticas de la célula"
- Tienen su propio ADN

RIBOSOMAS
- Función: Síntesis de proteínas
- Pueden estar libres en el citoplasma o adheridos al retículo endoplasmático
- Formados por ARN ribosomal y proteínas

RETÍCULO ENDOPLASMÁTICO
- RE Rugoso: Con ribosomas, sintetiza proteínas
- RE Liso: Sin ribosomas, sintetiza lípidos y desintoxica

APARATO DE GOLGI
- Función: Modifica, empaqueta y distribuye proteínas y lípidos
- Forma vesículas para transporte

LISOSOMAS
- Función: Digestión intracelular
- Contienen enzimas digestivas
- Eliminan desechos y estructuras dañadas

5. ORGANELOS EXCLUSIVOS DE CÉLULAS VEGETALES

PARED CELULAR
- Estructura rígida exterior a la membrana
- Compuesta principalmente de celulosa
- Función: Protección y soporte estructural

CLOROPLASTOS
- Función: Realizan la fotosíntesis
- Contienen clorofila (pigmento verde)
- Producen glucosa usando luz solar

VACUOLA CENTRAL
- Gran vacuola que ocupa la mayor parte de la célula
- Función: Almacena agua, nutrientes, pigmentos y desechos
- Mantiene la presión de turgencia

6. FUNCIONES CELULARES

NUTRICIÓN
- Obtención de nutrientes del medio
- Transformación en energía y materiales para la célula

RELACIÓN
- Respuesta a estímulos del ambiente
- Comunicación con otras células

REPRODUCCIÓN
- División celular para crear nuevas células
- Mitosis (células somáticas)
- Meiosis (células reproductivas)

7. DIFERENCIAS ENTRE CÉLULA ANIMAL Y VEGETAL

CÉLULA ANIMAL:
- No tiene pared celular
- No tiene cloroplastos
- Tiene centriolos
- Vacuolas pequeñas y múltiples
- Forma irregular

CÉLULA VEGETAL:
- Tiene pared celular de celulosa
- Tiene cloroplastos para fotosíntesis
- No tiene centriolos
- Una gran vacuola central
- Forma regular (generalmente rectangular)
`;
  }
  
  // Fotosíntesis
  if (topicNormalized.includes('fotosintesis') || topicNormalized.includes('fotosíntesis')) {
    return `
LA FOTOSÍNTESIS - Contenido del Libro de Ciencias Naturales ${course}

CAPÍTULO: LA FOTOSÍNTESIS - EL PROCESO QUE SOSTIENE LA VIDA

1. DEFINICIÓN
La fotosíntesis es el proceso mediante el cual las plantas, algas y algunas bacterias transforman la energía luminosa del sol en energía química almacenada en forma de glucosa.

2. ECUACIÓN DE LA FOTOSÍNTESIS

6CO₂ + 6H₂O + Luz solar → C₆H₁₂O₆ + 6O₂

Dióxido de carbono + Agua + Energía luminosa → Glucosa + Oxígeno

3. ESTRUCTURAS INVOLUCRADAS

CLOROPLASTOS
- Organelos donde ocurre la fotosíntesis
- Contienen tilacoides (membranas internas) y estroma
- Poseen su propio ADN

CLOROFILA
- Pigmento verde que captura la luz
- Ubicada en los tilacoides
- Absorbe luz roja y azul, refleja verde

ESTOMAS
- Poros en las hojas
- Permiten entrada de CO₂ y salida de O₂
- Regulan la pérdida de agua

4. FASES DE LA FOTOSÍNTESIS

FASE LUMINOSA (Reacciones Dependientes de la Luz)
- Ocurre en los tilacoides
- Requiere luz solar directa
- Proceso:
  1. La clorofila absorbe energía luminosa
  2. El agua se descompone (fotólisis): 2H₂O → 4H⁺ + 4e⁻ + O₂
  3. Se libera oxígeno como subproducto
  4. Se produce ATP y NADPH (moléculas energéticas)

FASE OSCURA (Ciclo de Calvin)
- Ocurre en el estroma del cloroplasto
- No requiere luz directa (pero usa productos de la fase luminosa)
- Proceso:
  1. Fijación del CO₂ (se incorpora carbono)
  2. Reducción usando ATP y NADPH
  3. Síntesis de glucosa (C₆H₁₂O₆)
  4. Regeneración de la molécula receptora

5. FACTORES QUE AFECTAN LA FOTOSÍNTESIS

INTENSIDAD LUMINOSA
- Mayor luz = mayor fotosíntesis (hasta un punto de saturación)
- Muy poca luz reduce significativamente el proceso

CONCENTRACIÓN DE CO₂
- Mayor CO₂ = mayor fotosíntesis (hasta cierto límite)
- Es el factor limitante más común

TEMPERATURA
- Temperatura óptima: 25-35°C para la mayoría de plantas
- Temperaturas extremas reducen la eficiencia

DISPONIBILIDAD DE AGUA
- El agua es reactivo esencial
- La falta de agua cierra los estomas y reduce la fotosíntesis

6. IMPORTANCIA DE LA FOTOSÍNTESIS

PARA LA VIDA EN LA TIERRA:
- Produce el oxígeno que respiramos
- Es la base de las cadenas alimenticias
- Regula el CO₂ atmosférico (efecto invernadero)
- Produce toda la materia orgánica del planeta

PARA EL ECOSISTEMA:
- Las plantas son productores primarios
- Transforman energía solar en energía química
- Sostienen a todos los demás organismos

7. RELACIÓN CON LA RESPIRACIÓN CELULAR

La fotosíntesis y la respiración celular son procesos complementarios:

FOTOSÍNTESIS:
- Consume CO₂ y H₂O
- Libera O₂
- Almacena energía en glucosa
- Ocurre en cloroplastos
- Requiere luz

RESPIRACIÓN CELULAR:
- Consume O₂ y glucosa
- Libera CO₂ y H₂O
- Libera energía (ATP)
- Ocurre en mitocondrias
- No requiere luz
`;
  }
  
  // Sistema digestivo
  if (topicNormalized.includes('sistema digestivo') || topicNormalized.includes('digestivo') || topicNormalized.includes('digestion')) {
    return `
SISTEMA DIGESTIVO - Contenido del Libro de Ciencias Naturales ${course}

CAPÍTULO: EL SISTEMA DIGESTIVO

1. FUNCIÓN DEL SISTEMA DIGESTIVO
El sistema digestivo transforma los alimentos en nutrientes que pueden ser absorbidos y utilizados por las células del cuerpo.

2. ÓRGANOS DEL TUBO DIGESTIVO

BOCA
- Inicia la digestión mecánica (masticación) y química (saliva)
- Contiene dientes, lengua y glándulas salivales
- La saliva contiene amilasa que digiere almidones

FARINGE
- Conecta la boca con el esófago
- Participa en la deglución

ESÓFAGO
- Tubo muscular de aproximadamente 25 cm
- Transporta el bolo alimenticio al estómago
- Movimientos peristálticos impulsan el alimento

ESTÓMAGO
- Órgano en forma de bolsa
- Digiere proteínas con ácido clorhídrico y pepsina
- El quimo es el resultado de la digestión estomacal

INTESTINO DELGADO
- Mide aproximadamente 6-7 metros
- Tres partes: duodeno, yeyuno e íleon
- Ocurre la mayor absorción de nutrientes
- Vellosidades intestinales aumentan la superficie de absorción

INTESTINO GRUESO
- Mide aproximadamente 1.5 metros
- Absorbe agua y sales minerales
- Forma y almacena las heces fecales
- Contiene bacterias beneficiosas (flora intestinal)

3. GLÁNDULAS ANEXAS

GLÁNDULAS SALIVALES
- Producen saliva con enzimas digestivas
- Humedecen el alimento

HÍGADO
- Produce bilis para emulsionar grasas
- Almacena glucosa como glucógeno
- Desintoxica la sangre

PÁNCREAS
- Produce jugo pancreático con enzimas digestivas
- Produce insulina y glucagón (hormonas)

VESÍCULA BILIAR
- Almacena y concentra la bilis
- Libera bilis al duodeno durante la digestión

4. PROCESOS DIGESTIVOS

DIGESTIÓN MECÁNICA
- Fragmentación física del alimento
- Incluye masticación y movimientos peristálticos

DIGESTIÓN QUÍMICA
- Enzimas descomponen moléculas complejas
- Amilasa: digiere almidones
- Proteasas: digieren proteínas
- Lipasas: digieren grasas

ABSORCIÓN
- Paso de nutrientes al torrente sanguíneo
- Ocurre principalmente en el intestino delgado

ELIMINACIÓN
- Expulsión de materiales no digeridos
- Formación de heces fecales

5. CUIDADOS DEL SISTEMA DIGESTIVO

- Masticar bien los alimentos
- Comer despacio y en horarios regulares
- Consumir fibra (frutas, verduras, cereales integrales)
- Beber suficiente agua
- Evitar comidas muy grasas o picantes
- Realizar actividad física
`;
  }
  
  return null;
}

function generateMatematicasContent(topicNormalized: string, topic: string, course: string): string | null {
  // Sumas y Restas
  if (topicNormalized.includes('suma') || topicNormalized.includes('resta') || topicNormalized.includes('adicion') || topicNormalized.includes('sustraccion')) {
    return `
SUMAS Y RESTAS - Contenido del Libro de Matemáticas ${course}

CAPÍTULO: OPERACIONES BÁSICAS - SUMA Y RESTA

═══════════════════════════════════════════════════════════════════
PARTE 1: LA SUMA (ADICIÓN)
═══════════════════════════════════════════════════════════════════

1. ¿QUÉ ES LA SUMA?
La suma o adición es una operación matemática que consiste en combinar o añadir dos o más cantidades para obtener una cantidad total llamada SUMA o TOTAL.

2. PARTES DE LA SUMA
┌─────────────────────────────────────┐
│   25  ←── Primer sumando            │
│ + 18  ←── Segundo sumando           │
│ ────                                │
│   43  ←── Suma, total o resultado   │
│                                     │
│ El símbolo "+" se lee "más"         │
└─────────────────────────────────────┘

3. PROPIEDADES DE LA SUMA

✓ PROPIEDAD CONMUTATIVA: El orden de los sumandos no altera la suma
  Ejemplo: 5 + 3 = 3 + 5 = 8

✓ PROPIEDAD ASOCIATIVA: Se pueden agrupar los sumandos de diferentes formas
  Ejemplo: (2 + 3) + 4 = 2 + (3 + 4) = 9

✓ ELEMENTO NEUTRO: Cualquier número sumado con cero da el mismo número
  Ejemplo: 7 + 0 = 7

4. PASOS PARA SUMAR (Método vertical)

PASO 1: Escribir los números uno debajo del otro, alineando las unidades
PASO 2: Sumar de derecha a izquierda (comenzando por las unidades)
PASO 3: Si la suma de una columna es 10 o más, "llevar" la decena a la siguiente columna
PASO 4: Escribir el resultado

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #1: SUMA SIN LLEVAR
═══════════════════════════════════════════════════════════════════

Calcular: 234 + 152

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│  Centenas | Decenas | Unidades                                  │
│     2     |    3    |    4                                      │
│  +  1     |    5    |    2                                      │
│  ─────────────────────────                                      │
│     3     |    8    |    6                                      │
│                                                                 │
│  • Unidades: 4 + 2 = 6                                          │
│  • Decenas: 3 + 5 = 8                                           │
│  • Centenas: 2 + 1 = 3                                          │
│                                                                 │
│  RESULTADO: 234 + 152 = 386                                     │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #2: SUMA CON LLEVADA
═══════════════════════════════════════════════════════════════════

Calcular: 567 + 285

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│      1  1    ← Números que "llevamos"                           │
│     5  6  7                                                     │
│  +  2  8  5                                                     │
│  ──────────                                                     │
│     8  5  2                                                     │
│                                                                 │
│  PASO 1 - Unidades: 7 + 5 = 12                                  │
│           → Escribo 2, llevo 1 a las decenas                    │
│                                                                 │
│  PASO 2 - Decenas: 6 + 8 = 14, más 1 que llevaba = 15           │
│           → Escribo 5, llevo 1 a las centenas                   │
│                                                                 │
│  PASO 3 - Centenas: 5 + 2 = 7, más 1 que llevaba = 8            │
│           → Escribo 8                                           │
│                                                                 │
│  RESULTADO: 567 + 285 = 852                                     │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 2: LA RESTA (SUSTRACCIÓN)
═══════════════════════════════════════════════════════════════════

1. ¿QUÉ ES LA RESTA?
La resta o sustracción es una operación matemática que consiste en quitar una cantidad de otra para encontrar la DIFERENCIA entre ambas.

2. PARTES DE LA RESTA
┌─────────────────────────────────────┐
│   45  ←── Minuendo (cantidad mayor) │
│ - 18  ←── Sustraendo (lo que quito) │
│ ────                                │
│   27  ←── Diferencia o resultado    │
│                                     │
│ El símbolo "-" se lee "menos"       │
└─────────────────────────────────────┘

3. REGLA IMPORTANTE
⚠️ El MINUENDO siempre debe ser MAYOR o IGUAL que el SUSTRAENDO
   (No podemos quitar más de lo que tenemos en números naturales)

4. PASOS PARA RESTAR (Método vertical)

PASO 1: Escribir el minuendo arriba y el sustraendo abajo, alineando las unidades
PASO 2: Restar de derecha a izquierda (comenzando por las unidades)
PASO 3: Si el dígito de arriba es menor, "pedir prestado" a la posición siguiente
PASO 4: Escribir el resultado

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #3: RESTA SIN PRESTAR
═══════════════════════════════════════════════════════════════════

Calcular: 586 - 243

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│  Centenas | Decenas | Unidades                                  │
│     5     |    8    |    6                                      │
│  -  2     |    4    |    3                                      │
│  ─────────────────────────                                      │
│     3     |    4    |    3                                      │
│                                                                 │
│  • Unidades: 6 - 3 = 3                                          │
│  • Decenas: 8 - 4 = 4                                           │
│  • Centenas: 5 - 2 = 3                                          │
│                                                                 │
│  RESULTADO: 586 - 243 = 343                                     │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #4: RESTA CON PRÉSTAMO
═══════════════════════════════════════════════════════════════════

Calcular: 523 - 187

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│     4  11  13   ← Números después de pedir prestado             │
│     5   2   3                                                   │
│  -  1   8   7                                                   │
│  ────────────                                                   │
│     3   3   6                                                   │
│                                                                 │
│  PASO 1 - Unidades: 3 - 7 = No se puede!                        │
│           → Pido 1 decena prestada (el 2 se convierte en 1)     │
│           → 13 - 7 = 6                                          │
│                                                                 │
│  PASO 2 - Decenas: 1 - 8 = No se puede!                         │
│           → Pido 1 centena prestada (el 5 se convierte en 4)    │
│           → 11 - 8 = 3                                          │
│                                                                 │
│  PASO 3 - Centenas: 4 - 1 = 3                                   │
│                                                                 │
│  RESULTADO: 523 - 187 = 336                                     │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 3: RELACIÓN ENTRE SUMA Y RESTA
═══════════════════════════════════════════════════════════════════

La suma y la resta son OPERACIONES INVERSAS. Una deshace lo que hace la otra.

VERIFICACIÓN DE RESULTADOS:
• Si 25 + 18 = 43, entonces 43 - 18 = 25 y 43 - 25 = 18
• Si 50 - 23 = 27, entonces 27 + 23 = 50

Esto nos sirve para COMPROBAR si nuestros cálculos están correctos.

═══════════════════════════════════════════════════════════════════
PARTE 4: PROBLEMAS DE LA VIDA REAL
═══════════════════════════════════════════════════════════════════

★★★ PROBLEMA 1: DINERO ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ María tenía $1.250 ahorrados. Su abuela le regaló $780 por su   │
│ cumpleaños. ¿Cuánto dinero tiene María ahora?                   │
│                                                                 │
│ IDENTIFICACIÓN:                                                 │
│ • Dato 1: Tenía $1.250                                          │
│ • Dato 2: Le dieron $780                                        │
│ • Pregunta: ¿Cuánto tiene ahora? → SUMA (le dieron más)         │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│      1 1                                                        │
│    1.250                                                        │
│  +   780                                                        │
│  ───────                                                        │
│    2.030                                                        │
│                                                                 │
│ RESPUESTA: María tiene $2.030                                   │
│                                                                 │
│ COMPROBACIÓN: 2.030 - 780 = 1.250 ✓                             │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 2: DISTANCIA ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Un ciclista debe recorrer 2.500 metros. Ya ha recorrido 1.875   │
│ metros. ¿Cuántos metros le faltan por recorrer?                 │
│                                                                 │
│ IDENTIFICACIÓN:                                                 │
│ • Dato 1: Total a recorrer = 2.500 m                            │
│ • Dato 2: Ya recorrió = 1.875 m                                 │
│ • Pregunta: ¿Cuánto falta? → RESTA (quitar lo recorrido)        │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│     14  9  10                                                   │
│    2. 5  0  0                                                   │
│  - 1. 8  7  5                                                   │
│  ────────────                                                   │
│       6  2  5                                                   │
│                                                                 │
│ RESPUESTA: Le faltan 625 metros                                 │
│                                                                 │
│ COMPROBACIÓN: 1.875 + 625 = 2.500 ✓                             │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 3: EDADES ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Pedro tiene 12 años y su hermana Ana tiene 8 años. Su papá      │
│ tiene 35 años más que Ana. ¿Cuántos años tiene el papá?         │
│ ¿Cuál es la diferencia de edad entre Pedro y Ana?               │
│                                                                 │
│ RESOLUCIÓN PARTE A (Edad del papá):                             │
│ • Ana tiene 8 años                                              │
│ • Papá tiene 35 años MÁS que Ana → SUMA                         │
│ • Edad del papá = 8 + 35 = 43 años                              │
│                                                                 │
│ RESOLUCIÓN PARTE B (Diferencia de edad):                        │
│ • Pedro = 12 años, Ana = 8 años                                 │
│ • Diferencia = 12 - 8 = 4 años                                  │
│                                                                 │
│ RESPUESTAS:                                                     │
│ • El papá tiene 43 años                                         │
│ • La diferencia entre Pedro y Ana es de 4 años                  │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 4: TIENDA ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ En una tienda había 456 manzanas. Llegaron 238 manzanas más.    │
│ Durante el día se vendieron 389 manzanas.                       │
│ ¿Cuántas manzanas quedan en la tienda?                          │
│                                                                 │
│ PASO 1: Calcular el total después de que llegaron más           │
│    456 + 238 = 694 manzanas                                     │
│                                                                 │
│ PASO 2: Restar las que se vendieron                             │
│     5  8  14                                                    │
│     6  9   4                                                    │
│  -  3  8   9                                                    │
│  ───────────                                                    │
│     3  0   5                                                    │
│                                                                 │
│ RESPUESTA: Quedan 305 manzanas en la tienda                     │
│                                                                 │
│ COMPROBACIÓN: 305 + 389 = 694 ✓                                 │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 5: EJERCICIOS PARA PRACTICAR
═══════════════════════════════════════════════════════════════════

NIVEL BÁSICO:
1. 345 + 231 = ?
2. 567 - 234 = ?
3. 189 + 456 = ?

NIVEL INTERMEDIO:
4. 678 + 394 = ?
5. 805 - 467 = ?
6. 1.234 + 876 = ?

NIVEL AVANZADO:
7. 3.456 + 2.789 = ?
8. 5.002 - 1.847 = ?
9. 8.765 - 4.987 = ?

PROBLEMAS:
10. Juan tenía 1.500 figuritas y regaló 875. ¿Cuántas le quedan?
11. Una biblioteca tiene 2.340 libros. Llegan 567 libros nuevos. ¿Cuántos hay ahora?
12. Un estadio tiene 15.000 asientos. Se ocuparon 12.456. ¿Cuántos quedan vacíos?

═══════════════════════════════════════════════════════════════════
CONSEJOS PARA NO EQUIVOCARSE
═══════════════════════════════════════════════════════════════════

✓ Siempre alinear bien los números por posición (unidades con unidades)
✓ Comenzar siempre de derecha a izquierda
✓ No olvidar lo que llevamos o pedimos prestado
✓ Comprobar el resultado con la operación inversa
✓ En problemas, identificar primero qué operación usar
✓ Leer el problema completo antes de resolver
`;
  }

  // Multiplicación y División
  if (topicNormalized.includes('multiplicacion') || topicNormalized.includes('division') || topicNormalized.includes('multiplicar') || topicNormalized.includes('dividir')) {
    return `
MULTIPLICACIÓN Y DIVISIÓN - Contenido del Libro de Matemáticas ${course}

CAPÍTULO: OPERACIONES - MULTIPLICACIÓN Y DIVISIÓN

═══════════════════════════════════════════════════════════════════
PARTE 1: LA MULTIPLICACIÓN
═══════════════════════════════════════════════════════════════════

1. ¿QUÉ ES LA MULTIPLICACIÓN?
La multiplicación es una suma abreviada de sumandos iguales.
En lugar de sumar: 4 + 4 + 4 + 4 + 4 = 20
Escribimos: 4 × 5 = 20 (4 sumado 5 veces)

2. PARTES DE LA MULTIPLICACIÓN
┌─────────────────────────────────────┐
│   23  ←── Multiplicando             │
│ ×  4  ←── Multiplicador             │
│ ────                                │
│   92  ←── Producto (resultado)      │
│                                     │
│ Los números que se multiplican      │
│ también se llaman FACTORES          │
└─────────────────────────────────────┘

3. LAS TABLAS DE MULTIPLICAR
Es fundamental memorizar las tablas del 1 al 10.

TABLA DEL 1    TABLA DEL 2    TABLA DEL 3    TABLA DEL 4    TABLA DEL 5
1×1=1          2×1=2          3×1=3          4×1=4          5×1=5
1×2=2          2×2=4          3×2=6          4×2=8          5×2=10
1×3=3          2×3=6          3×3=9          4×3=12         5×3=15
1×4=4          2×4=8          3×4=12         4×4=16         5×4=20
1×5=5          2×5=10         3×5=15         4×5=20         5×5=25
1×6=6          2×6=12         3×6=18         4×6=24         5×6=30
1×7=7          2×7=14         3×7=21         4×7=28         5×7=35
1×8=8          2×8=16         3×8=24         4×8=32         5×8=40
1×9=9          2×9=18         3×9=27         4×9=36         5×9=45
1×10=10        2×10=20        3×10=30        4×10=40        5×10=50

TABLA DEL 6    TABLA DEL 7    TABLA DEL 8    TABLA DEL 9    TABLA DEL 10
6×1=6          7×1=7          8×1=8          9×1=9          10×1=10
6×2=12         7×2=14         8×2=16         9×2=18         10×2=20
6×3=18         7×3=21         8×3=24         9×3=27         10×3=30
6×4=24         7×4=28         8×4=32         9×4=36         10×4=40
6×5=30         7×5=35         8×5=40         9×5=45         10×5=50
6×6=36         7×6=42         8×6=48         9×6=54         10×6=60
6×7=42         7×7=49         8×7=56         9×7=63         10×7=70
6×8=48         7×8=56         8×8=64         9×8=72         10×8=80
6×9=54         7×9=63         8×9=72         9×9=81         10×9=90
6×10=60        7×10=70        8×10=80        9×10=90        10×10=100

4. PROPIEDADES DE LA MULTIPLICACIÓN

✓ PROPIEDAD CONMUTATIVA: El orden no altera el producto
  Ejemplo: 3 × 5 = 5 × 3 = 15

✓ PROPIEDAD ASOCIATIVA: Se pueden agrupar los factores
  Ejemplo: (2 × 3) × 4 = 2 × (3 × 4) = 24

✓ ELEMENTO NEUTRO: Todo número multiplicado por 1 da el mismo número
  Ejemplo: 7 × 1 = 7

✓ ELEMENTO ABSORBENTE: Todo número multiplicado por 0 da 0
  Ejemplo: 8 × 0 = 0

✓ PROPIEDAD DISTRIBUTIVA: a × (b + c) = (a × b) + (a × c)
  Ejemplo: 3 × (4 + 2) = 3×4 + 3×2 = 12 + 6 = 18

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #1: MULTIPLICACIÓN POR UNA CIFRA
═══════════════════════════════════════════════════════════════════

Calcular: 347 × 6

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│        2  4      ← Lo que llevamos                              │
│        3  4  7                                                  │
│     ×        6                                                  │
│     ──────────                                                  │
│     2  0  8  2                                                  │
│                                                                 │
│  PASO 1: 7 × 6 = 42 → Escribo 2, llevo 4                        │
│  PASO 2: 4 × 6 = 24, + 4 = 28 → Escribo 8, llevo 2              │
│  PASO 3: 3 × 6 = 18, + 2 = 20 → Escribo 20                      │
│                                                                 │
│  RESULTADO: 347 × 6 = 2.082                                     │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #2: MULTIPLICACIÓN POR DOS CIFRAS
═══════════════════════════════════════════════════════════════════

Calcular: 234 × 56

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│            2  3  4                                              │
│         ×     5  6                                              │
│         ──────────                                              │
│         1  4  0  4   ← Primera fila: 234 × 6                    │
│      1  1  7  0      ← Segunda fila: 234 × 5 (desplazada)       │
│      ───────────────                                            │
│      1  3  1  0  4   ← Suma de las filas                        │
│                                                                 │
│  PASO 1: Multiplicar 234 × 6 = 1.404                            │
│  PASO 2: Multiplicar 234 × 5 = 1.170 (escribir desplazado)      │
│  PASO 3: Sumar los productos parciales                          │
│                                                                 │
│  RESULTADO: 234 × 56 = 13.104                                   │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 2: LA DIVISIÓN
═══════════════════════════════════════════════════════════════════

1. ¿QUÉ ES LA DIVISIÓN?
La división es repartir una cantidad en partes iguales o averiguar cuántas veces cabe un número en otro.

2. PARTES DE LA DIVISIÓN
┌─────────────────────────────────────┐
│                                     │
│   156  │  12                        │
│  ─────  ────                        │
│    36  │  13                        │
│    36                               │
│   ────                              │
│     0  ←── Resto                    │
│                                     │
│  156 = Dividendo (lo que reparto)   │
│   12 = Divisor (en cuántas partes)  │
│   13 = Cociente (resultado)         │
│    0 = Resto (lo que sobra)         │
└─────────────────────────────────────┘

3. TIPOS DE DIVISIÓN

DIVISIÓN EXACTA: El resto es 0
  Ejemplo: 20 ÷ 4 = 5 (resto 0)

DIVISIÓN INEXACTA: El resto es mayor que 0
  Ejemplo: 23 ÷ 4 = 5 (resto 3)

4. RELACIÓN FUNDAMENTAL
  Dividendo = Divisor × Cociente + Resto
  Ejemplo: 23 = 4 × 5 + 3 ✓

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #3: DIVISIÓN POR UNA CIFRA
═══════════════════════════════════════════════════════════════════

Calcular: 847 ÷ 7

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   8  4  7  │  7                                                 │
│   ─        ─────                                                │
│   7        1  2  1                                              │
│   ──                                                            │
│   1  4                                                          │
│   1  4                                                          │
│   ────                                                          │
│      0  7                                                       │
│         7                                                       │
│      ────                                                       │
│         0                                                       │
│                                                                 │
│  PASO 1: ¿Cuántas veces cabe 7 en 8? → 1 vez (1×7=7)            │
│          8 - 7 = 1 → Bajo el 4 → Queda 14                       │
│                                                                 │
│  PASO 2: ¿Cuántas veces cabe 7 en 14? → 2 veces (2×7=14)        │
│          14 - 14 = 0 → Bajo el 7 → Queda 7                      │
│                                                                 │
│  PASO 3: ¿Cuántas veces cabe 7 en 7? → 1 vez (1×7=7)            │
│          7 - 7 = 0                                              │
│                                                                 │
│  RESULTADO: 847 ÷ 7 = 121 (resto 0) → División exacta           │
│                                                                 │
│  COMPROBACIÓN: 7 × 121 + 0 = 847 ✓                              │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #4: DIVISIÓN CON RESTO
═══════════════════════════════════════════════════════════════════

Calcular: 593 ÷ 8

PASO A PASO:
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   5  9  3  │  8                                                 │
│            ─────                                                │
│   5  6     7  4                                                 │
│   ────                                                          │
│      3  3                                                       │
│      3  2                                                       │
│      ────                                                       │
│         1   ← Resto                                             │
│                                                                 │
│  PASO 1: ¿Cuántas veces cabe 8 en 5? → 0 veces (tomamos 59)     │
│  PASO 2: ¿Cuántas veces cabe 8 en 59? → 7 veces (7×8=56)        │
│          59 - 56 = 3 → Bajo el 3 → Queda 33                     │
│                                                                 │
│  PASO 3: ¿Cuántas veces cabe 8 en 33? → 4 veces (4×8=32)        │
│          33 - 32 = 1                                            │
│                                                                 │
│  RESULTADO: 593 ÷ 8 = 74 (resto 1)                              │
│                                                                 │
│  COMPROBACIÓN: 8 × 74 + 1 = 592 + 1 = 593 ✓                     │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 3: RELACIÓN ENTRE MULTIPLICACIÓN Y DIVISIÓN
═══════════════════════════════════════════════════════════════════

La multiplicación y la división son OPERACIONES INVERSAS.

• Si 6 × 8 = 48, entonces 48 ÷ 8 = 6 y 48 ÷ 6 = 8
• Si 72 ÷ 9 = 8, entonces 8 × 9 = 72

═══════════════════════════════════════════════════════════════════
PARTE 4: PROBLEMAS DE LA VIDA REAL
═══════════════════════════════════════════════════════════════════

★★★ PROBLEMA 1: COMPRAS ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Una caja de galletas cuesta $1.250. Si compras 8 cajas,         │
│ ¿cuánto pagas en total?                                         │
│                                                                 │
│ IDENTIFICACIÓN:                                                 │
│ • Precio de una caja: $1.250                                    │
│ • Cantidad de cajas: 8                                          │
│ • Pregunta: Total a pagar → MULTIPLICACIÓN                      │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│      1.250                                                      │
│    ×     8                                                      │
│    ───────                                                      │
│   10.000                                                        │
│                                                                 │
│ RESPUESTA: Debes pagar $10.000                                  │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 2: REPARTIR ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Una profesora tiene 156 lápices para repartir entre 12          │
│ estudiantes en partes iguales. ¿Cuántos lápices recibe cada     │
│ estudiante?                                                     │
│                                                                 │
│ IDENTIFICACIÓN:                                                 │
│ • Total de lápices: 156                                         │
│ • Número de estudiantes: 12                                     │
│ • Pregunta: ¿Cuántos para cada uno? → DIVISIÓN                  │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│   156 ÷ 12 = 13                                                 │
│                                                                 │
│ RESPUESTA: Cada estudiante recibe 13 lápices                    │
│                                                                 │
│ COMPROBACIÓN: 12 × 13 = 156 ✓                                   │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 3: TRANSPORTE ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Un bus escolar puede llevar 45 pasajeros. Si hay 320            │
│ estudiantes que deben ir a un paseo, ¿cuántos buses se          │
│ necesitan?                                                      │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│   320 ÷ 45 = 7 (resto 5)                                        │
│                                                                 │
│   7 buses llevan: 7 × 45 = 315 estudiantes                      │
│   Quedan: 5 estudiantes sin bus                                 │
│                                                                 │
│ ⚠️ ATENCIÓN: Aunque el resto es 5, necesitamos un bus más       │
│    para esos estudiantes                                        │
│                                                                 │
│ RESPUESTA: Se necesitan 8 buses                                 │
│   (7 buses completos + 1 bus para los 5 restantes)              │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 4: PRODUCCIÓN ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Una fábrica produce 2.340 botellas por hora. ¿Cuántas           │
│ botellas produce en 24 horas?                                   │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│       2.340                                                     │
│    ×     24                                                     │
│    ────────                                                     │
│       9.360   ← 2.340 × 4                                       │
│      46.80    ← 2.340 × 20                                      │
│    ────────                                                     │
│      56.160                                                     │
│                                                                 │
│ RESPUESTA: La fábrica produce 56.160 botellas en 24 horas       │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
CONSEJOS PARA MULTIPLICAR Y DIVIDIR
═══════════════════════════════════════════════════════════════════

PARA LA MULTIPLICACIÓN:
✓ Memorizar las tablas de multiplicar
✓ Alinear bien los productos parciales
✓ No olvidar lo que llevamos
✓ Usar la propiedad conmutativa si es más fácil

PARA LA DIVISIÓN:
✓ El divisor siempre debe ser menor que el dividendo parcial
✓ El resto siempre debe ser menor que el divisor
✓ Comprobar con la fórmula: D = d × c + r
✓ Practicar la estimación de cuántas veces cabe
`;
  }

  // Fracciones
  if (topicNormalized.includes('fraccion') || topicNormalized.includes('fracciones')) {
    return `
LAS FRACCIONES - Contenido del Libro de Matemáticas ${course}

CAPÍTULO: FRACCIONES - CONCEPTOS Y OPERACIONES

═══════════════════════════════════════════════════════════════════
PARTE 1: ¿QUÉ ES UNA FRACCIÓN?
═══════════════════════════════════════════════════════════════════

Una fracción representa una o más partes iguales de un todo dividido en partes iguales.

PARTES DE UNA FRACCIÓN:
┌─────────────────────────────────────┐
│         3   ←── NUMERADOR           │
│        ───     (cuántas partes      │
│         4   ←── DENOMINADOR         │
│                (en cuántas partes   │
│                 se divide el todo)  │
│                                     │
│  Se lee: "tres cuartos"             │
└─────────────────────────────────────┘

REPRESENTACIÓN VISUAL DE 3/4:
┌───┬───┬───┬───┐
│ ▓ │ ▓ │ ▓ │   │  → 3 partes pintadas de 4 = 3/4
└───┴───┴───┴───┘

═══════════════════════════════════════════════════════════════════
PARTE 2: TIPOS DE FRACCIONES
═══════════════════════════════════════════════════════════════════

1. FRACCIONES PROPIAS (menor que 1)
   Numerador < Denominador
   Ejemplos: 1/2, 2/3, 3/4, 5/8

2. FRACCIONES IMPROPIAS (igual o mayor que 1)
   Numerador ≥ Denominador
   Ejemplos: 5/3, 7/4, 9/5, 8/8

3. NÚMEROS MIXTOS
   Combinan un entero y una fracción
   Ejemplo: 2 3/4 (dos enteros y tres cuartos)

═══════════════════════════════════════════════════════════════════
PARTE 3: OPERACIONES CON FRACCIONES - PASO A PASO
═══════════════════════════════════════════════════════════════════

═══ SUMA DE FRACCIONES CON IGUAL DENOMINADOR ═══

REGLA: Se suman los numeradores y se mantiene el denominador

EJEMPLO RESUELTO:
┌─────────────────────────────────────────────────────────────────┐
│ Calcular: 2/7 + 3/7                                             │
│                                                                 │
│ PASO 1: Verificar que los denominadores son iguales (7 = 7) ✓   │
│ PASO 2: Sumar los numeradores: 2 + 3 = 5                        │
│ PASO 3: Mantener el denominador: 7                              │
│                                                                 │
│         2     3     2 + 3     5                                 │
│        ─── + ─── = ────── = ───                                 │
│         7     7       7       7                                 │
│                                                                 │
│ RESULTADO: 2/7 + 3/7 = 5/7                                      │
└─────────────────────────────────────────────────────────────────┘

═══ SUMA DE FRACCIONES CON DIFERENTE DENOMINADOR ═══

REGLA: Primero encontrar denominador común (MCM)

EJEMPLO RESUELTO:
┌─────────────────────────────────────────────────────────────────┐
│ Calcular: 1/2 + 1/3                                             │
│                                                                 │
│ PASO 1: Los denominadores son diferentes (2 ≠ 3)                │
│                                                                 │
│ PASO 2: Encontrar el MCM de 2 y 3                               │
│         Múltiplos de 2: 2, 4, 6, 8, 10...                       │
│         Múltiplos de 3: 3, 6, 9, 12...                          │
│         MCM = 6                                                 │
│                                                                 │
│ PASO 3: Convertir a fracciones equivalentes con denominador 6   │
│         1/2 = ?/6 → 6÷2=3 → 1×3=3 → 1/2 = 3/6                   │
│         1/3 = ?/6 → 6÷3=2 → 1×2=2 → 1/3 = 2/6                   │
│                                                                 │
│ PASO 4: Sumar las fracciones equivalentes                       │
│         3/6 + 2/6 = 5/6                                         │
│                                                                 │
│ RESULTADO: 1/2 + 1/3 = 5/6                                      │
│                                                                 │
│ VERIFICACIÓN VISUAL:                                            │
│ ┌───┬───┬───┬───┬───┬───┐                                       │
│ │ ▓ │ ▓ │ ▓ │ ▓ │ ▓ │   │  → 5 partes de 6 = 5/6               │
│ └───┴───┴───┴───┴───┴───┘                                       │
└─────────────────────────────────────────────────────────────────┘

═══ RESTA DE FRACCIONES ═══

EJEMPLO RESUELTO:
┌─────────────────────────────────────────────────────────────────┐
│ Calcular: 3/4 - 1/3                                             │
│                                                                 │
│ PASO 1: Encontrar MCM de 4 y 3 = 12                             │
│                                                                 │
│ PASO 2: Convertir a denominador común                           │
│         3/4 = 9/12  (12÷4=3, 3×3=9)                             │
│         1/3 = 4/12  (12÷3=4, 1×4=4)                             │
│                                                                 │
│ PASO 3: Restar los numeradores                                  │
│         9/12 - 4/12 = 5/12                                      │
│                                                                 │
│ RESULTADO: 3/4 - 1/3 = 5/12                                     │
└─────────────────────────────────────────────────────────────────┘

═══ MULTIPLICACIÓN DE FRACCIONES ═══

REGLA: Multiplicar numerador × numerador y denominador × denominador

EJEMPLO RESUELTO:
┌─────────────────────────────────────────────────────────────────┐
│ Calcular: 2/3 × 4/5                                             │
│                                                                 │
│ PASO 1: Multiplicar numeradores: 2 × 4 = 8                      │
│ PASO 2: Multiplicar denominadores: 3 × 5 = 15                   │
│                                                                 │
│         2     4     2 × 4     8                                 │
│        ─── × ─── = ────── = ────                                │
│         3     5     3 × 5    15                                 │
│                                                                 │
│ RESULTADO: 2/3 × 4/5 = 8/15                                     │
└─────────────────────────────────────────────────────────────────┘

═══ DIVISIÓN DE FRACCIONES ═══

REGLA: Multiplicar por el inverso (dar vuelta la segunda fracción)

EJEMPLO RESUELTO:
┌─────────────────────────────────────────────────────────────────┐
│ Calcular: 3/4 ÷ 2/5                                             │
│                                                                 │
│ PASO 1: Identificar las fracciones                              │
│         Primera: 3/4    Segunda: 2/5                            │
│                                                                 │
│ PASO 2: Invertir la segunda fracción (recíproco)                │
│         2/5 → 5/2                                               │
│                                                                 │
│ PASO 3: Multiplicar por el inverso                              │
│         3/4 × 5/2 = (3×5)/(4×2) = 15/8                          │
│                                                                 │
│ PASO 4: Simplificar o convertir a mixto si es necesario         │
│         15/8 = 1 7/8 (un entero y siete octavos)                │
│                                                                 │
│ RESULTADO: 3/4 ÷ 2/5 = 15/8 = 1 7/8                             │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 4: SIMPLIFICACIÓN DE FRACCIONES
═══════════════════════════════════════════════════════════════════

REGLA: Dividir numerador y denominador por el mismo número (MCD)

EJEMPLO RESUELTO:
┌─────────────────────────────────────────────────────────────────┐
│ Simplificar: 12/18                                              │
│                                                                 │
│ PASO 1: Encontrar divisores comunes de 12 y 18                  │
│         Divisores de 12: 1, 2, 3, 4, 6, 12                      │
│         Divisores de 18: 1, 2, 3, 6, 9, 18                      │
│         MCD = 6 (el mayor divisor común)                        │
│                                                                 │
│ PASO 2: Dividir ambos por 6                                     │
│         12 ÷ 6 = 2                                              │
│         18 ÷ 6 = 3                                              │
│                                                                 │
│         12     12÷6     2                                       │
│        ──── = ────── = ───                                      │
│         18     18÷6     3                                       │
│                                                                 │
│ RESULTADO: 12/18 = 2/3 (fracción irreducible)                   │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 5: PROBLEMAS DE LA VIDA REAL
═══════════════════════════════════════════════════════════════════

★★★ PROBLEMA 1: RECETA DE COCINA ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Una receta de bizcocho necesita 3/4 de taza de azúcar y 1/2     │
│ taza de aceite. ¿Cuántas tazas de ingredientes son en total?    │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│ Debemos sumar: 3/4 + 1/2                                        │
│                                                                 │
│ PASO 1: MCM de 4 y 2 = 4                                        │
│ PASO 2: 3/4 = 3/4 (ya tiene denominador 4)                      │
│         1/2 = 2/4 (multiplicando por 2)                         │
│ PASO 3: 3/4 + 2/4 = 5/4 = 1 1/4                                 │
│                                                                 │
│ RESPUESTA: Necesitas 1 1/4 tazas de ingredientes                │
│            (una taza y un cuarto)                               │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 2: PIZZA ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Pedro comió 2/8 de una pizza y María comió 3/8 de la misma      │
│ pizza. ¿Cuánto queda de pizza?                                  │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│ PASO 1: Calcular lo que comieron entre los dos                  │
│         2/8 + 3/8 = 5/8                                         │
│                                                                 │
│ PASO 2: La pizza completa es 8/8. Restar lo comido              │
│         8/8 - 5/8 = 3/8                                         │
│                                                                 │
│ RESPUESTA: Queda 3/8 de pizza                                   │
│                                                                 │
│ VISUAL:                                                         │
│ ┌─┬─┬─┬─┬─┬─┬─┬─┐                                               │
│ │▓│▓│▓│ │ │ │ │ │ → Quedan 3 de 8 partes                       │
│ └─┴─┴─┴─┴─┴─┴─┴─┘                                               │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 3: TERRENO ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Un agricultor tiene 2/3 de hectárea. Quiere dividirla en        │
│ parcelas de 1/6 de hectárea. ¿Cuántas parcelas puede hacer?     │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│ Debemos dividir: 2/3 ÷ 1/6                                      │
│                                                                 │
│ PASO 1: Invertir la segunda fracción: 1/6 → 6/1                 │
│ PASO 2: Multiplicar: 2/3 × 6/1 = 12/3 = 4                       │
│                                                                 │
│ RESPUESTA: Puede hacer 4 parcelas                               │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
RESUMEN DE REGLAS
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│ OPERACIÓN          │ REGLA                                      │
│────────────────────│────────────────────────────────────────────│
│ Suma/Resta         │ Mismo denominador: sumar/restar numeradores│
│ (igual denom.)     │ a/c ± b/c = (a±b)/c                        │
│────────────────────│────────────────────────────────────────────│
│ Suma/Resta         │ Encontrar MCM, convertir, operar           │
│ (distinto denom.)  │                                            │
│────────────────────│────────────────────────────────────────────│
│ Multiplicación     │ Numerador × numerador                      │
│                    │ Denominador × denominador                  │
│                    │ a/b × c/d = (a×c)/(b×d)                    │
│────────────────────│────────────────────────────────────────────│
│ División           │ Multiplicar por el inverso                 │
│                    │ a/b ÷ c/d = a/b × d/c                      │
│────────────────────│────────────────────────────────────────────│
│ Simplificación     │ Dividir por el MCD                         │
└─────────────────────────────────────────────────────────────────┘
`;
  }
  
  // Ecuaciones
  if (topicNormalized.includes('ecuacion') || topicNormalized.includes('ecuaciones')) {
    return `
ECUACIONES - Contenido del Libro de Matemáticas ${course}

CAPÍTULO: ECUACIONES - FUNDAMENTOS Y RESOLUCIÓN PASO A PASO

═══════════════════════════════════════════════════════════════════
PARTE 1: ¿QUÉ ES UNA ECUACIÓN?
═══════════════════════════════════════════════════════════════════

Una ecuación es una IGUALDAD que contiene una o más INCÓGNITAS 
(valores desconocidos que debemos encontrar).

PARTES DE UNA ECUACIÓN:
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     2x + 5 = 13                                                 │
│     ├────┤   ├─┤                                                │
│       │       │                                                 │
│       │       └── Segundo miembro                               │
│       └── Primer miembro                                        │
│                                                                 │
│  • 2x = Término con incógnita                                   │
│  • 2 = Coeficiente (número que multiplica a x)                  │
│  • x = Incógnita (lo que buscamos)                              │
│  • 5 y 13 = Términos independientes                             │
│  • = = Signo igual (separa los miembros)                        │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 2: REGLAS FUNDAMENTALES
═══════════════════════════════════════════════════════════════════

REGLA DE ORO: Lo que hacemos a un lado, debemos hacerlo al otro.

┌─────────────────────────────────────────────────────────────────┐
│ OPERACIÓN EN UN LADO  →  MISMA OPERACIÓN EN EL OTRO LADO       │
├─────────────────────────────────────────────────────────────────┤
│ Si sumamos 5 a la izquierda → Sumamos 5 a la derecha           │
│ Si restamos 3 a la izquierda → Restamos 3 a la derecha         │
│ Si multiplicamos por 2 → Multiplicamos ambos lados por 2       │
│ Si dividimos por 4 → Dividimos ambos lados por 4               │
└─────────────────────────────────────────────────────────────────┘

OBJETIVO: Dejar la incógnita SOLA en un lado de la ecuación.

═══════════════════════════════════════════════════════════════════
PARTE 3: MÉTODO DE RESOLUCIÓN - PASO A PASO
═══════════════════════════════════════════════════════════════════

PASOS PARA RESOLVER UNA ECUACIÓN DE PRIMER GRADO:

1. Eliminar paréntesis (si los hay)
2. Agrupar términos con x a un lado
3. Agrupar términos sin x (números) al otro lado
4. Reducir términos semejantes
5. Despejar x dividiendo por su coeficiente
6. Verificar la solución

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #1: ECUACIÓN BÁSICA
═══════════════════════════════════════════════════════════════════

Resolver: x + 7 = 15

┌─────────────────────────────────────────────────────────────────┐
│ ECUACIÓN: x + 7 = 15                                            │
│                                                                 │
│ OBJETIVO: Dejar x sola                                          │
│                                                                 │
│ PASO 1: El 7 está sumando, lo pasamos restando al otro lado     │
│                                                                 │
│         x + 7 = 15                                              │
│         x = 15 - 7                                              │
│         x = 8                                                   │
│                                                                 │
│ VERIFICACIÓN: Reemplazamos x = 8 en la ecuación original        │
│         8 + 7 = 15                                              │
│         15 = 15 ✓ ¡Correcto!                                    │
│                                                                 │
│ RESULTADO: x = 8                                                │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #2: CON COEFICIENTE
═══════════════════════════════════════════════════════════════════

Resolver: 3x = 24

┌─────────────────────────────────────────────────────────────────┐
│ ECUACIÓN: 3x = 24                                               │
│                                                                 │
│ OBJETIVO: Dejar x sola                                          │
│                                                                 │
│ PASO 1: El 3 está multiplicando a x, lo pasamos dividiendo      │
│                                                                 │
│         3x = 24                                                 │
│         x = 24 ÷ 3                                              │
│         x = 8                                                   │
│                                                                 │
│ VERIFICACIÓN: Reemplazamos x = 8                                │
│         3 × 8 = 24                                              │
│         24 = 24 ✓ ¡Correcto!                                    │
│                                                                 │
│ RESULTADO: x = 8                                                │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #3: ECUACIÓN COMPLETA
═══════════════════════════════════════════════════════════════════

Resolver: 2x + 5 = 13

┌─────────────────────────────────────────────────────────────────┐
│ ECUACIÓN: 2x + 5 = 13                                           │
│                                                                 │
│ PASO 1: Pasar el 5 al otro lado (está sumando, pasa restando)   │
│         2x + 5 = 13                                             │
│         2x = 13 - 5                                             │
│         2x = 8                                                  │
│                                                                 │
│ PASO 2: Pasar el 2 al otro lado (está multiplicando, pasa       │
│         dividiendo)                                             │
│         2x = 8                                                  │
│         x = 8 ÷ 2                                               │
│         x = 4                                                   │
│                                                                 │
│ VERIFICACIÓN:                                                   │
│         2(4) + 5 = 13                                           │
│         8 + 5 = 13                                              │
│         13 = 13 ✓ ¡Correcto!                                    │
│                                                                 │
│ RESULTADO: x = 4                                                │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #4: CON INCÓGNITA EN AMBOS LADOS
═══════════════════════════════════════════════════════════════════

Resolver: 5x + 3 = 2x + 15

┌─────────────────────────────────────────────────────────────────┐
│ ECUACIÓN: 5x + 3 = 2x + 15                                      │
│                                                                 │
│ PASO 1: Agrupar las x a la izquierda                            │
│         Pasar 2x al otro lado (está sumando, pasa restando)     │
│         5x - 2x + 3 = 15                                        │
│         3x + 3 = 15                                             │
│                                                                 │
│ PASO 2: Agrupar números a la derecha                            │
│         Pasar el 3 al otro lado                                 │
│         3x = 15 - 3                                             │
│         3x = 12                                                 │
│                                                                 │
│ PASO 3: Despejar x                                              │
│         x = 12 ÷ 3                                              │
│         x = 4                                                   │
│                                                                 │
│ VERIFICACIÓN:                                                   │
│         5(4) + 3 = 2(4) + 15                                    │
│         20 + 3 = 8 + 15                                         │
│         23 = 23 ✓ ¡Correcto!                                    │
│                                                                 │
│ RESULTADO: x = 4                                                │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
EJEMPLO RESUELTO #5: CON PARÉNTESIS
═══════════════════════════════════════════════════════════════════

Resolver: 3(x + 4) = 21

┌─────────────────────────────────────────────────────────────────┐
│ ECUACIÓN: 3(x + 4) = 21                                         │
│                                                                 │
│ PASO 1: Eliminar paréntesis (propiedad distributiva)            │
│         3 × x + 3 × 4 = 21                                      │
│         3x + 12 = 21                                            │
│                                                                 │
│ PASO 2: Pasar 12 al otro lado                                   │
│         3x = 21 - 12                                            │
│         3x = 9                                                  │
│                                                                 │
│ PASO 3: Despejar x                                              │
│         x = 9 ÷ 3                                               │
│         x = 3                                                   │
│                                                                 │
│ VERIFICACIÓN:                                                   │
│         3(3 + 4) = 21                                           │
│         3(7) = 21                                               │
│         21 = 21 ✓ ¡Correcto!                                    │
│                                                                 │
│ RESULTADO: x = 3                                                │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
PARTE 4: PROBLEMAS DE LA VIDA REAL
═══════════════════════════════════════════════════════════════════

★★★ PROBLEMA 1: EDADES ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Juan tiene el triple de edad que su hermana María. Si entre     │
│ los dos suman 24 años, ¿qué edad tiene cada uno?                │
│                                                                 │
│ PLANTEAMIENTO:                                                  │
│ • Sea x = edad de María                                         │
│ • Entonces 3x = edad de Juan (el triple)                        │
│ • La suma es 24: x + 3x = 24                                    │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│     x + 3x = 24                                                 │
│     4x = 24                                                     │
│     x = 24 ÷ 4                                                  │
│     x = 6                                                       │
│                                                                 │
│ RESPUESTAS:                                                     │
│ • María tiene 6 años                                            │
│ • Juan tiene 3 × 6 = 18 años                                    │
│                                                                 │
│ VERIFICACIÓN: 6 + 18 = 24 ✓                                     │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 2: DINERO ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Carla tiene cierta cantidad de dinero. Si gasta $350 en un      │
│ libro, le quedan $520. ¿Cuánto dinero tenía Carla?              │
│                                                                 │
│ PLANTEAMIENTO:                                                  │
│ • Sea x = dinero inicial de Carla                               │
│ • Gasta $350: x - 350                                           │
│ • Le quedan $520: x - 350 = 520                                 │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│     x - 350 = 520                                               │
│     x = 520 + 350                                               │
│     x = 870                                                     │
│                                                                 │
│ RESPUESTA: Carla tenía $870                                     │
│                                                                 │
│ VERIFICACIÓN: 870 - 350 = 520 ✓                                 │
└─────────────────────────────────────────────────────────────────┘

★★★ PROBLEMA 3: PERÍMETRO ★★★
┌─────────────────────────────────────────────────────────────────┐
│ SITUACIÓN:                                                      │
│ Un rectángulo tiene un perímetro de 36 cm. Si el largo mide     │
│ el doble que el ancho, ¿cuáles son las dimensiones?             │
│                                                                 │
│ PLANTEAMIENTO:                                                  │
│ • Sea x = ancho del rectángulo                                  │
│ • Largo = 2x (el doble del ancho)                               │
│ • Perímetro = 2(ancho) + 2(largo) = 36                          │
│ • 2x + 2(2x) = 36                                               │
│                                                                 │
│ RESOLUCIÓN:                                                     │
│     2x + 4x = 36                                                │
│     6x = 36                                                     │
│     x = 36 ÷ 6                                                  │
│     x = 6                                                       │
│                                                                 │
│ RESPUESTAS:                                                     │
│ • Ancho = 6 cm                                                  │
│ • Largo = 2 × 6 = 12 cm                                         │
│                                                                 │
│ VERIFICACIÓN: 2(6) + 2(12) = 12 + 24 = 36 ✓                     │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
RESUMEN DE REGLAS PARA TRANSPONER TÉRMINOS
═══════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  SI ESTÁ...         │  PASA AL OTRO LADO...                     │
│─────────────────────│─────────────────────────────────────────│
│  SUMANDO (+)        │  RESTANDO (-)                             │
│  RESTANDO (-)       │  SUMANDO (+)                              │
│  MULTIPLICANDO (×)  │  DIVIDIENDO (÷)                           │
│  DIVIDIENDO (÷)     │  MULTIPLICANDO (×)                        │
└─────────────────────────────────────────────────────────────────┘

RECUERDA: ¡Siempre verifica tu respuesta sustituyendo en la 
ecuación original!
`;
  }
  
  // Geometría
  if (topicNormalized.includes('geometria') || topicNormalized.includes('figuras geometricas') || topicNormalized.includes('poligono')) {
    return `
GEOMETRÍA - Contenido del Libro de Matemáticas ${course}

CAPÍTULO: FIGURAS GEOMÉTRICAS

1. ELEMENTOS BÁSICOS DE GEOMETRÍA

PUNTO
- Es la unidad más pequeña de la geometría
- No tiene dimensiones
- Se representa con una letra mayúscula

RECTA
- Sucesión infinita de puntos en una dirección
- No tiene principio ni fin
- Se nombra con letras minúsculas

SEGMENTO
- Porción de recta limitada por dos puntos
- Tiene principio y fin
- Se puede medir

ÁNGULO
- Región formada por dos semirrectas con origen común
- Se mide en grados (°)
- Tipos: agudo (<90°), recto (90°), obtuso (>90°), llano (180°)

2. POLÍGONOS

DEFINICIÓN
- Figura plana cerrada formada por segmentos
- Tiene lados, vértices y ángulos

CLASIFICACIÓN POR NÚMERO DE LADOS:
- Triángulo: 3 lados
- Cuadrilátero: 4 lados
- Pentágono: 5 lados
- Hexágono: 6 lados
- Heptágono: 7 lados
- Octágono: 8 lados

3. TRIÁNGULOS

SEGÚN SUS LADOS:
- Equilátero: 3 lados iguales
- Isósceles: 2 lados iguales
- Escaleno: 3 lados diferentes

SEGÚN SUS ÁNGULOS:
- Acutángulo: 3 ángulos agudos
- Rectángulo: 1 ángulo recto
- Obtusángulo: 1 ángulo obtuso

PROPIEDADES:
- Suma de ángulos interiores = 180°
- Área = (base × altura) / 2

4. CUADRILÁTEROS

PARALELOGRAMOS:
- Cuadrado: 4 lados iguales, 4 ángulos rectos
- Rectángulo: lados opuestos iguales, 4 ángulos rectos
- Rombo: 4 lados iguales, ángulos opuestos iguales
- Romboide: lados opuestos iguales

TRAPECIO:
- Solo 2 lados paralelos

5. PERÍMETRO Y ÁREA

PERÍMETRO: Suma de todos los lados

ÁREA DE FIGURAS:
- Cuadrado: lado²
- Rectángulo: base × altura
- Triángulo: (base × altura) / 2
- Círculo: π × radio²
`;
  }
  
  return null;
}

function generateHistoriaContent(topicNormalized: string, topic: string, course: string): string | null {
  // Independencia de Chile
  if (topicNormalized.includes('independencia') || topicNormalized.includes('emancipacion')) {
    return `
LA INDEPENDENCIA DE CHILE - Contenido del Libro de Historia ${course}

CAPÍTULO: EL PROCESO DE INDEPENDENCIA

1. ANTECEDENTES DE LA INDEPENDENCIA

CAUSAS EXTERNAS:
- Independencia de Estados Unidos (1776)
- Revolución Francesa (1789)
- Invasión napoleónica a España (1808)
- Ideas de la Ilustración (libertad, igualdad, soberanía popular)

CAUSAS INTERNAS:
- Descontento criollo por discriminación en cargos públicos
- Restricciones comerciales impuestas por España
- Deseo de participación política
- Conciencia de identidad americana

2. ETAPAS DE LA INDEPENDENCIA

PATRIA VIEJA (1810-1814)
- 18 de septiembre de 1810: Primera Junta Nacional de Gobierno
- Primer Congreso Nacional (1811)
- Gobierno de José Miguel Carrera
- Primeras reformas: libertad de comercio, libertad de prensa
- Desastre de Rancagua (octubre 1814): Derrota patriota

RECONQUISTA ESPAÑOLA (1814-1817)
- Restauración del dominio español
- Gobierno represivo de Mariano Osorio y Casimiro Marcó del Pont
- Tribunales de Vindicación
- Patriotas exiliados a Argentina
- Resistencia guerrillera (Manuel Rodríguez)

PATRIA NUEVA (1817-1823)
- Cruce de los Andes por el Ejército Libertador
- Batalla de Chacabuco (12 febrero 1817): Victoria patriota
- Bernardo O'Higgins asume como Director Supremo
- Proclamación de la Independencia (12 febrero 1818)
- Batalla de Maipú (5 abril 1818): Victoria decisiva
- Gobierno de O'Higgins hasta 1823

3. PERSONAJES IMPORTANTES

BERNARDO O'HIGGINS (1778-1842)
- "Padre de la Patria"
- Director Supremo de Chile
- Organizó el Ejército patriota
- Proclamó la Independencia

JOSÉ DE SAN MARTÍN (1778-1850)
- Libertador de Argentina, Chile y Perú
- Organizó el Ejército de los Andes
- Estratega del cruce de los Andes

JOSÉ MIGUEL CARRERA (1785-1821)
- Líder de la Patria Vieja
- Impulsó reformas liberales
- Creó los primeros símbolos patrios

MANUEL RODRÍGUEZ (1785-1818)
- Guerrillero patriota
- Símbolo de resistencia durante la Reconquista
- "El guerrillero"

4. OBRAS DEL GOBIERNO DE O'HIGGINS
- Abolición de títulos de nobleza
- Creación del Cementerio General
- Fundación de escuelas
- Apertura del Instituto Nacional
- Organización de la Armada de Chile
- Abolición de las corridas de toros

5. SÍMBOLOS PATRIOS
- Bandera nacional (actual desde 1817)
- Escudo nacional
- Himno nacional
- Escarapela
`;
  }
  
  // Pueblos originarios
  if (topicNormalized.includes('pueblos originarios') || topicNormalized.includes('indigenas') || topicNormalized.includes('mapuche')) {
    return `
PUEBLOS ORIGINARIOS DE CHILE - Contenido del Libro de Historia ${course}

CAPÍTULO: LOS PUEBLOS ORIGINARIOS

1. INTRODUCCIÓN
Chile fue habitado por diversos pueblos originarios antes de la llegada de los españoles. Cada pueblo desarrolló su propia cultura, adaptándose al medio ambiente donde vivía.

2. PUEBLOS DEL NORTE

AYMARAS
- Ubicación: Altiplano (regiones de Arica y Parinacota, Tarapacá)
- Actividades: Agricultura en terrazas, ganadería de llamas y alpacas
- Características: Cultivo de papa, quinoa y maíz
- Organización: Ayllus (comunidades familiares)

ATACAMEÑOS (Lickanantay)
- Ubicación: Desierto de Atacama, oasis
- Actividades: Agricultura de oasis, comercio, metalurgia
- Características: Sistemas de riego, cultivo en terrazas
- Importante centro: San Pedro de Atacama

CHANGOS
- Ubicación: Costa del norte de Chile
- Actividades: Pesca, caza de lobos marinos
- Características: Balsas de cuero de lobo marino inflado

DIAGUITAS
- Ubicación: Valles transversales (Copiapó, Huasco, Elqui)
- Actividades: Agricultura, ganadería, metalurgia
- Características: Cerámica decorada, influencia incaica

3. PUEBLOS DE LA ZONA CENTRAL Y SUR

MAPUCHES
- Ubicación: Desde el río Aconcagua hasta Chiloé
- Organización social: Lof (comunidad), rewe (agrupación de lof)
- Autoridades: Lonko (jefe), machi (sanador/a espiritual)
- Actividades: Agricultura, ganadería, recolección
- Lengua: Mapudungún
- Religión: Creencia en Ngenechen (dios creador)
- Vivienda: Ruka
- Resistencia a la conquista española

4. PUEBLOS DEL SUR Y ZONA AUSTRAL

HUILLICHES
- Ubicación: Sur del río Toltén hasta Chiloé
- Características: Parte del pueblo mapuche, adaptados al clima lluvioso
- Actividades: Agricultura, pesca, recolección de mariscos

CHONOS
- Ubicación: Archipiélago de los Chonos
- Actividades: Pesca, caza de lobos marinos
- Características: Nómades del mar

KAWÉSQAR (Alacalufes)
- Ubicación: Canales patagónicos
- Actividades: Pesca, caza, recolección
- Características: Nómades canoeros, adaptados al frío extremo

SELK'NAM (Onas)
- Ubicación: Tierra del Fuego
- Actividades: Caza de guanacos
- Características: Nómades terrestres, ceremonias de iniciación

YAGANES (Yámanas)
- Ubicación: Extremo sur, Cabo de Hornos
- Actividades: Pesca, caza marina
- Características: El pueblo más austral del mundo

5. LEGADO DE LOS PUEBLOS ORIGINARIOS
- Lenguas y toponimia (nombres de lugares)
- Alimentos: papa, maíz, quinoa, porotos
- Textiles y artesanías
- Conocimientos medicinales
- Tradiciones y ceremonias
- Cosmovisión y relación con la naturaleza
`;
  }
  
  return null;
}

function generateLenguajeContent(topicNormalized: string, topic: string, course: string): string | null {
  // Sustantivos
  if (topicNormalized.includes('sustantivo') || topicNormalized.includes('sustantivos')) {
    return `
EL SUSTANTIVO - Contenido del Libro de Lenguaje ${course}

CAPÍTULO: LAS CLASES DE PALABRAS - EL SUSTANTIVO

1. DEFINICIÓN
El sustantivo es la palabra que sirve para nombrar personas, animales, cosas, lugares, sentimientos o ideas.

2. CLASIFICACIÓN DE SUSTANTIVOS

POR SU SIGNIFICADO:

SUSTANTIVOS COMUNES
- Nombran de forma general
- Se escriben con minúscula
- Ejemplos: perro, ciudad, libro, mesa

SUSTANTIVOS PROPIOS
- Nombran de forma específica y única
- Se escriben con mayúscula inicial
- Ejemplos: Pedro, Chile, Andes, Amazonas

POR SU EXTENSIÓN:

SUSTANTIVOS INDIVIDUALES
- Nombran un solo elemento
- Ejemplos: árbol, abeja, soldado, estrella

SUSTANTIVOS COLECTIVOS
- Nombran un conjunto de elementos
- Ejemplos: bosque (conjunto de árboles), enjambre (conjunto de abejas)

POR SU NATURALEZA:

SUSTANTIVOS CONCRETOS
- Se perciben con los sentidos
- Ejemplos: mesa, flor, música, perfume

SUSTANTIVOS ABSTRACTOS
- No se perciben con los sentidos
- Expresan ideas, sentimientos o cualidades
- Ejemplos: amor, libertad, justicia, belleza

3. GÉNERO DE LOS SUSTANTIVOS

MASCULINO:
- Generalmente terminan en -o
- Usan artículos: el, un, los, unos
- Ejemplos: el niño, el perro, el libro

FEMENINO:
- Generalmente terminan en -a
- Usan artículos: la, una, las, unas
- Ejemplos: la niña, la perra, la casa

EXCEPCIONES IMPORTANTES:
- Masculinos en -a: el día, el mapa, el planeta, el problema
- Femeninos en -o: la mano, la radio, la foto
- Sustantivos invariables: el/la estudiante, el/la artista

4. NÚMERO DE LOS SUSTANTIVOS

SINGULAR: Indica uno solo
- Ejemplos: gato, flor, lápiz

PLURAL: Indica más de uno
- Ejemplos: gatos, flores, lápices

FORMACIÓN DEL PLURAL:
- Palabras terminadas en vocal: +s (casa → casas)
- Palabras terminadas en consonante: +es (pared → paredes)
- Palabras terminadas en -z: cambia a -ces (lápiz → lápices)
- Palabras terminadas en -s (agudas): +es (autobús → autobuses)
- Palabras terminadas en -s (no agudas): no cambian (el lunes → los lunes)

5. FUNCIÓN EN LA ORACIÓN

El sustantivo puede ser:
- SUJETO de la oración: "El perro ladra"
- COMPLEMENTO del verbo: "Compré un libro"
- COMPLEMENTO de otro sustantivo: "La casa de Pedro"

6. ACOMPAÑANTES DEL SUSTANTIVO
- Artículos: el, la, los, las, un, una, unos, unas
- Adjetivos: grande, pequeño, rojo, hermoso
- Determinantes: este, ese, aquel, mi, tu, su
`;
  }
  
  // Verbos
  if (topicNormalized.includes('verbo') || topicNormalized.includes('verbos')) {
    return `
EL VERBO - Contenido del Libro de Lenguaje ${course}

CAPÍTULO: LAS CLASES DE PALABRAS - EL VERBO

1. DEFINICIÓN
El verbo es la palabra que expresa acción, estado o proceso. Es el núcleo del predicado y la palabra más importante de la oración.

2. ACCIDENTES DEL VERBO

PERSONA:
- Primera persona: quien habla (yo, nosotros)
- Segunda persona: a quien se habla (tú, ustedes, vosotros)
- Tercera persona: de quien se habla (él, ella, ellos, ellas)

NÚMERO:
- Singular: una persona (yo canto, tú cantas, él canta)
- Plural: varias personas (nosotros cantamos, ellos cantan)

TIEMPO:
- Presente: acción actual (yo camino)
- Pasado/Pretérito: acción ya realizada (yo caminé)
- Futuro: acción por realizarse (yo caminaré)

MODO:
- Indicativo: expresa hechos reales
- Subjuntivo: expresa deseos, dudas, posibilidades
- Imperativo: expresa órdenes o mandatos

3. CONJUGACIONES VERBALES

PRIMERA CONJUGACIÓN: Verbos terminados en -AR
- Infinitivo: amar, cantar, caminar, saltar
- Modelo: AMAR
  - Presente: amo, amas, ama, amamos, aman
  - Pretérito: amé, amaste, amó, amamos, amaron
  - Futuro: amaré, amarás, amará, amaremos, amarán

SEGUNDA CONJUGACIÓN: Verbos terminados en -ER
- Infinitivo: comer, beber, correr, temer
- Modelo: COMER
  - Presente: como, comes, come, comemos, comen
  - Pretérito: comí, comiste, comió, comimos, comieron
  - Futuro: comeré, comerás, comerá, comeremos, comerán

TERCERA CONJUGACIÓN: Verbos terminados en -IR
- Infinitivo: vivir, partir, escribir, subir
- Modelo: VIVIR
  - Presente: vivo, vives, vive, vivimos, viven
  - Pretérito: viví, viviste, vivió, vivimos, vivieron
  - Futuro: viviré, vivirás, vivirá, viviremos, vivirán

4. TIEMPOS SIMPLES Y COMPUESTOS

TIEMPOS SIMPLES (una sola palabra):
- Presente: canto
- Pretérito imperfecto: cantaba
- Pretérito perfecto simple: canté
- Futuro: cantaré
- Condicional: cantaría

TIEMPOS COMPUESTOS (verbo haber + participio):
- Pretérito perfecto compuesto: he cantado
- Pretérito pluscuamperfecto: había cantado
- Futuro perfecto: habré cantado
- Condicional perfecto: habría cantado

5. VERBOS REGULARES E IRREGULARES

VERBOS REGULARES:
- Siguen el modelo de su conjugación
- Mantienen su raíz sin cambios
- Ejemplos: amar, comer, vivir

VERBOS IRREGULARES:
- Cambian su raíz o sus desinencias
- No siguen completamente el modelo
- Ejemplos: ser, ir, tener, hacer, decir, poder

6. FORMAS NO PERSONALES DEL VERBO

INFINITIVO: Forma básica (termina en -ar, -er, -ir)
- Ejemplo: cantar, comer, vivir

GERUNDIO: Expresa acción en desarrollo
- Termina en -ando (1ª conj.) o -iendo (2ª y 3ª conj.)
- Ejemplo: cantando, comiendo, viviendo

PARTICIPIO: Forma que puede funcionar como adjetivo
- Termina en -ado (1ª conj.) o -ido (2ª y 3ª conj.)
- Ejemplo: cantado, comido, vivido
`;
  }
  
  // Comprensión lectora
  if (topicNormalized.includes('comprension lectora') || topicNormalized.includes('lectura')) {
    return `
COMPRENSIÓN LECTORA - Contenido del Libro de Lenguaje ${course}

CAPÍTULO: ESTRATEGIAS DE COMPRENSIÓN LECTORA

1. ¿QUÉ ES LA COMPRENSIÓN LECTORA?
Es la capacidad de entender lo que se lee, interpretando el significado de las palabras, las ideas del autor y el mensaje del texto.

2. NIVELES DE COMPRENSIÓN

NIVEL LITERAL
- Identificar información explícita en el texto
- Reconocer personajes, lugares, hechos
- Responder: ¿Qué? ¿Quién? ¿Dónde? ¿Cuándo?

NIVEL INFERENCIAL
- Deducir información no explícita
- Interpretar significados implícitos
- Relacionar ideas y sacar conclusiones

NIVEL CRÍTICO
- Evaluar el contenido del texto
- Formar opiniones propias
- Distinguir hechos de opiniones

3. ESTRATEGIAS ANTES DE LEER

ACTIVAR CONOCIMIENTOS PREVIOS
- ¿Qué sé sobre este tema?
- ¿Qué he leído antes sobre esto?

FORMULAR PREDICCIONES
- ¿De qué tratará el texto según el título?
- ¿Qué información espero encontrar?

ESTABLECER UN PROPÓSITO
- ¿Para qué voy a leer este texto?
- ¿Qué quiero aprender?

4. ESTRATEGIAS DURANTE LA LECTURA

SUBRAYAR IDEAS IMPORTANTES
- Identificar ideas principales
- Marcar palabras clave

HACER PREGUNTAS
- ¿Qué significa esta palabra?
- ¿Por qué sucede esto?

VISUALIZAR
- Crear imágenes mentales
- Imaginar la escena descrita

RELEER CUANDO SEA NECESARIO
- Volver a leer partes confusas
- Aclarar significados

5. ESTRATEGIAS DESPUÉS DE LEER

RESUMIR
- Expresar las ideas principales con tus palabras
- Organizar la información

EVALUAR
- ¿Entendí el texto?
- ¿Logré mi propósito de lectura?

RELACIONAR
- Conectar con experiencias personales
- Relacionar con otros textos

6. TIPOS DE TEXTOS

TEXTOS NARRATIVOS
- Cuentan una historia
- Tienen personajes, lugar, tiempo y acontecimientos
- Ejemplos: cuentos, novelas, fábulas

TEXTOS INFORMATIVOS
- Entregan información sobre un tema
- Organización clara de ideas
- Ejemplos: artículos, enciclopedias, noticias

TEXTOS ARGUMENTATIVOS
- Presentan opiniones y las defienden
- Incluyen argumentos y evidencias
- Ejemplos: ensayos, cartas al editor

TEXTOS INSTRUCTIVOS
- Indican cómo hacer algo
- Tienen pasos ordenados
- Ejemplos: recetas, manuales, instrucciones
`;
  }
  
  return null;
}

function generateGenericContent(topic: string, subject: string, course: string): string {
  return `
CONTENIDO EDUCATIVO: ${topic.toUpperCase()}
Libro: ${subject} - ${course}

UNIDAD DE APRENDIZAJE

1. INTRODUCCIÓN AL TEMA
${topic} es un contenido fundamental del currículo de ${subject} para ${course}. Su estudio permite desarrollar competencias específicas establecidas en los objetivos de aprendizaje.

2. OBJETIVOS DE APRENDIZAJE
Al finalizar esta unidad, los estudiantes serán capaces de:
- Comprender los conceptos básicos relacionados con ${topic}
- Identificar los elementos principales del tema
- Aplicar los conocimientos en situaciones prácticas
- Relacionar el tema con otros contenidos de ${subject}
- Desarrollar habilidades de pensamiento crítico

3. CONCEPTOS FUNDAMENTALES

3.1 Definición
${topic} se define como un conjunto de conocimientos y habilidades que permiten comprender aspectos importantes de ${subject}.

3.2 Características principales
- El tema presenta componentes esenciales que deben ser identificados
- Existe una estructura organizada de conceptos
- Se relaciona con otros temas del currículo
- Tiene aplicaciones en la vida cotidiana

3.3 Elementos clave
- Componente teórico: fundamentos conceptuales
- Componente práctico: aplicaciones y ejemplos
- Componente de evaluación: criterios de logro

4. DESARROLLO DEL CONTENIDO

4.1 Marco teórico
El estudio de ${topic} requiere una comprensión progresiva de sus componentes. Los estudiantes deben ser capaces de identificar, analizar y aplicar estos conocimientos.

4.2 Aspectos importantes
- Primera dimensión: conceptos básicos y definiciones
- Segunda dimensión: relaciones y conexiones
- Tercera dimensión: aplicaciones prácticas

4.3 Ejemplos y casos
Los ejemplos permiten ilustrar los conceptos de manera concreta, facilitando la comprensión y la transferencia del aprendizaje.

5. METODOLOGÍA DE ESTUDIO

5.1 Pasos para el aprendizaje
1. Lectura comprensiva del material
2. Identificación de ideas principales
3. Elaboración de resúmenes y esquemas
4. Aplicación en ejercicios prácticos
5. Autoevaluación del aprendizaje

5.2 Recursos de apoyo
- Textos escolares y material complementario
- Recursos digitales y multimedia
- Actividades grupales y colaborativas

6. ACTIVIDADES SUGERIDAS

ACTIVIDAD 1: Exploración inicial
- Investigar sobre ${topic}
- Compartir conocimientos previos

ACTIVIDAD 2: Análisis de casos
- Estudiar ejemplos concretos
- Identificar patrones y características

ACTIVIDAD 3: Aplicación práctica
- Resolver problemas relacionados
- Crear productos o presentaciones

7. EVALUACIÓN DEL APRENDIZAJE

Criterios de evaluación:
- Comprensión de conceptos fundamentales
- Capacidad de análisis y síntesis
- Aplicación práctica de conocimientos
- Trabajo colaborativo y participación

8. CONEXIONES CON OTROS CONTENIDOS

${topic} se relaciona con otros temas de ${subject} y con otras asignaturas del currículo, permitiendo una comprensión integrada del conocimiento.

9. IMPORTANCIA DEL TEMA

El dominio de ${topic} permite a los estudiantes:
- Avanzar en su comprensión de ${subject}
- Desarrollar habilidades de pensamiento crítico
- Aplicar conocimientos en situaciones reales
- Prepararse para contenidos más avanzados

10. SÍNTESIS

En resumen, ${topic} representa un contenido esencial que contribuye al desarrollo integral de los estudiantes de ${course} en el área de ${subject}.
`;
}
