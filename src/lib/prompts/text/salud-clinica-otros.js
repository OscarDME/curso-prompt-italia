// src/lib/prompts/text/salud-clinica-otros.js

export const textPromptsSaludClinicaOtros = [
  {
    id: "saludotros-001",
    title: "Nota clínica SOAP (consulta general) lista para expediente",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Estructura una nota SOAP completa, clara y defensible para expediente clínico.",
    prompt: `Actúa como médico. Redacta una nota SOAP profesional.

Inputs:
- Motivo de consulta (CC).
- Historia de la enfermedad actual (HPI) con cronología.
- Antecedentes (AP, AHF, Alergias, Meds).
- Revisión por sistemas (ROS) relevante.
- Exploración física (signos vitales + hallazgos).
- Impresión diagnóstica (Dx diferenciales).
- Plan (estudios, tratamiento, educación, seguimiento).

Genera:
S) Subjetivo (HPI + ROS resumido)
O) Objetivo (vitales + EF + labs/imagen si aplica)
A) Valoración (Dx principal + diferenciales + razonamiento)
P) Plan detallado por problemas + educación + return precautions + follow-up
Incluye: lenguaje médico estándar, conciso, sin inventar datos faltantes (marca "No referido" si falta).`,
    thumbnail: "",
  },

  {
    id: "saludotros-002",
    title: "Dx diferencial con razonamiento y banderas rojas",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Genera diferenciales por probabilidad y urgencia, con qué datos faltan por preguntar.",
    prompt: `Actúa como médico internista. Construye un diferencial.

Inputs:
- Síntoma principal.
- Edad/sexo.
- Duración y evolución.
- Signos/síntomas asociados.
- Factores de riesgo y antecedentes.
- Hallazgos del examen.

Genera:
1) Top 5 diagnósticos probables (con 1–2 líneas de razonamiento cada uno).
2) 3 diagnósticos que NO debo perder (peligrosos) + por qué.
3) Preguntas clave faltantes (10) para afinar.
4) Exploración dirigida (qué buscar) (8 puntos).
5) Estudios iniciales sugeridos (laboratorio/imagen) en términos generales.
6) Señales de alarma que cambian la conducta.`,
    thumbnail: "",
  },

  {
    id: "saludotros-003",
    title: "Algoritmo de triaje (telemedicina) para síntoma frecuente",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Guía de decisión para orientar: autocuidado vs cita vs urgencias.",
    prompt: `Actúa como médico de triaje en telemedicina. Crea un algoritmo seguro.

Inputs:
- Síntoma (ej: dolor de garganta, fiebre, diarrea, cefalea).
- Grupo (adulto/pediatría/embarazo/adulto mayor).
- Factores de riesgo.
- Duración.

Genera:
1) Preguntas de filtro inicial (8–12).
2) Ramas de decisión:
   - Urgencias hoy (criterios).
   - Consulta rápida (24–72h).
   - Manejo en casa (criterios).
3) Recomendaciones de autocuidado (5–8) sin fármacos si no se especifican.
4) Señales de alarma específicas.
5) Mensaje final legal/ético: “esto no sustituye evaluación presencial”.`,
    thumbnail: "",
  },

  {
    id: "saludotros-004",
    title: "Interpretación clínica de signos vitales (contextualizada)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Ayuda a interpretar PA, FC, FR, T°, SatO2 según contexto y síntomas.",
    prompt: `Actúa como médico. Interpreta signos vitales en contexto.

Inputs:
- Edad/sexo.
- Signos vitales (PA, FC, FR, T°, SatO2).
- Síntomas actuales.
- Antecedentes (cardio/pulmón/embarazo).
- Situación (reposo, post-ejercicio, ansiedad, dolor).

Genera:
1) Qué hallazgos son más preocupantes vs esperables (en contexto).
2) 5 causas posibles para cada anormalidad relevante.
3) Qué confirmar/medir de nuevo (técnica y momento).
4) Qué preguntar para diferenciar causas.
5) Cuándo indicar valoración urgente.`,
    thumbnail: "",
  },

  {
    id: "saludotros-005",
    title: "Plan de seguimiento y criterios de revaloración",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Define seguimiento óptimo: cuándo, con qué objetivos y qué cambiar si no mejora.",
    prompt: `Actúa como médico. Diseña plan de seguimiento seguro.

Inputs:
- Diagnóstico o problema clínico (o sospecha).
- Tratamiento inicial.
- Severidad (leve/moderada/severa).
- Barreras (acceso, costo, distancia).
- Objetivos del paciente.

Genera:
1) Seguimiento ideal (tiempo y modalidad: presencial/tele).
2) Qué medir/registrar antes del follow-up (lista).
3) Criterios de mejoría (3–5).
4) Criterios de falla terapéutica (3–5).
5) Qué ajustar si falla (en términos generales).
6) Señales de alarma para consulta inmediata.`,
    thumbnail: "",
  },

  {
    id: "saludotros-006",
    title: "Resumen clínico para referencia a especialista (interconsulta)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Carta breve, clara y útil para el especialista, con pregunta clínica específica.",
    prompt: `Actúa como médico. Redacta un resumen para interconsulta.

Inputs:
- Especialidad destino.
- Motivo de referencia (pregunta clínica).
- Resumen del caso (síntomas, evolución).
- Hallazgos relevantes.
- Estudios realizados (fechas y resultados).
- Tratamientos probados y respuesta.

Genera:
1) Motivo/pregunta clínica en 1–2 líneas.
2) Historia clínica resumida (cronológica).
3) Hallazgos clave (bullets).
4) Estudios adjuntos (lista).
5) Tratamientos previos y respuesta.
6) Qué se solicita al especialista (muy concreto).`,
    thumbnail: "",
  },

  {
    id: "saludotros-007",
    title: "Guion para comunicar malas noticias (SPIKES adaptado)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Estructura empática para comunicar diagnósticos difíciles sin perder claridad.",
    prompt: `Actúa como médico. Prepara un guion con el modelo SPIKES.

Inputs:
- Diagnóstico/noticia.
- Nivel de sospecha del paciente (lo espera/no lo espera).
- Familia presente (sí/no).
- Próximos pasos disponibles.

Genera:
1) S: Setting (cómo preparar el ambiente).
2) P: Perception (preguntas para entender qué sabe).
3) I: Invitation (cuánto desea saber ahora).
4) K: Knowledge (cómo decirlo claro y en porciones).
5) E: Empathy (frases de validación).
6) S: Strategy/Summary (plan inmediato y seguimiento).
Incluye 5 frases exactas para usar y 5 frases a evitar.`,
    thumbnail: "",
  },

  {
    id: "saludotros-008",
    title: "Indicaciones preoperatorias / preprocedimiento (checklist paciente)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Checklist claro para prepararse antes de un procedimiento y reducir cancelaciones.",
    prompt: `Actúa como médico. Redacta indicaciones preprocedimiento.

Inputs:
- Procedimiento.
- Tipo de anestesia/sedación (si aplica).
- Comorbilidades relevantes.
- Medicamentos actuales (anticoagulantes, DM, etc.) si se conocen.

Genera:
1) Checklist 72h antes / 24h antes / día del procedimiento.
2) Ayuno (describe en términos generales si no hay indicación específica).
3) Qué llevar / qué evitar.
4) Señales por las que debe avisar antes (fiebre, infección, etc.).
5) Cuidados iniciales post-procedimiento (generales).
No inventes instrucciones específicas si faltan datos; marca “confirmar con tu equipo”.`,
    thumbnail: "",
  },

  {
    id: "saludotros-009",
    title: "Plantilla de evolución diaria hospitalaria (progress note)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Formato estándar para evolución por problema con plan del día.",
    prompt: `Actúa como médico hospitalista. Redacta una progress note.

Inputs:
- Día de hospitalización.
- Diagnóstico principal.
- Eventos de 24h.
- Signos vitales / balance hídrico.
- Labs / imagen relevantes.
- Tratamientos activos.

Genera:
1) Subjective (síntomas del paciente).
2) Objective (vitales, EF, labs, I/O).
3) Assessment/Plan por problemas (bullets).
4) Disposición y objetivos del día (alta, estudios pendientes, barreras).
5) Profilaxis/seguridad (caídas, trombosis, úlceras, etc. en general).`,
    thumbnail: "",
  },

  {
    id: "saludotros-010",
    title: "Nota de urgencias: enfoque ABCDE + conducta",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Estructura rápida para casos agudos: estabilización, diferencial y plan inmediato.",
    prompt: `Actúa como médico de urgencias. Estructura el caso con ABCDE.

Inputs:
- Presentación aguda.
- Signos vitales.
- Hallazgos de exploración.
- Resultados rápidos disponibles.
- Intervenciones realizadas.

Genera:
1) ABCDE (hallazgos + acciones).
2) Impresión diagnóstica (principal + diferenciales).
3) Plan inmediato (medidas, estudios, reevaluación).
4) Criterios de ingreso vs alta (en términos generales).
5) Instrucciones de egreso y alarmas (si aplica).`,
    thumbnail: "",
  },

  {
    id: "saludotros-011",
    title: "Análisis de interacción fármaco-fármaco y fármaco-condición",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Revisa posibles interacciones y propone preguntas/monitoreo (sin ajustar dosis).",
    prompt: `Actúa como médico. Analiza interacciones y riesgos.

Inputs:
- Lista de medicamentos (incluye OTC y suplementos).
- Diagnósticos/condiciones.
- Síntomas actuales.
- Función renal/hepática si se conoce.

Genera:
1) Interacciones potenciales (organiza por gravedad: alta/media/baja).
2) Qué síntomas vigilar por interacción (lista).
3) Qué preguntas faltan para evaluar riesgo (8–12).
4) Recomendación de monitoreo (labs/PA/ECG) en general.
5) Mensaje de seguridad: “no cambios sin tu médico”.`,
    thumbnail: "",
  },

  {
    id: "saludotros-012",
    title: "Plan de manejo de ansiedad en consulta médica (breve)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Guía práctica para pacientes ansiosos: respiración, reencuadre y plan de acción.",
    prompt: `Actúa como médico. El paciente está muy ansioso por sus síntomas.

Inputs:
- Motivo de ansiedad (síntoma, estudio, diagnóstico).
- Síntomas físicos de ansiedad (palpitaciones, falta de aire, insomnio).
- Contexto (estrés, duelo, trabajo).
- Preferencias (terapia, hábitos, no medicación).

Genera:
1) Validación empática (2–3 frases).
2) Técnica breve de respiración (pasos).
3) Diferenciar “síntomas de alarma” vs “síntomas compatibles con ansiedad” (sin diagnosticar si no aplica).
4) Plan de 7 días (hábitos + seguimiento).
5) Cuándo derivar/consultar de urgencia (criterios).`,
    thumbnail: "",
  },

  {
    id: "saludotros-013",
    title: "Checklist de seguridad del paciente (prevención de errores)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Lista de verificación para reducir riesgos: alergias, identidad, medicación, etc.",
    prompt: `Actúa como médico con enfoque en seguridad del paciente.

Inputs:
- Contexto (consulta externa, urgencias, hospital).
- Procedimientos/meds planeados.
- Riesgos (alergias, anticoagulantes, embarazo, caídas).

Genera:
1) Checklist pre-intervención (10–15 puntos).
2) Checklist durante (5–8 puntos).
3) Checklist alta/egreso (8–12 puntos).
4) “Errores frecuentes” y cómo evitarlos (6).
5) Mensaje de cultura de seguridad (1 párrafo).`,
    thumbnail: "",
  },

  {
    id: "saludotros-014",
    title: "Estrategia de comunicación clínica: paciente difícil / enojado",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Guion para desescalar conflicto, mantener límites y lograr acuerdo terapéutico.",
    prompt: `Actúa como médico. Maneja una conversación con paciente molesto.

Inputs:
- Motivo del enojo (tiempo de espera, diagnóstico, costos, tratamiento).
- Nivel de agresividad (bajo/medio/alto).
- Qué se necesita lograr hoy (plan, adherencia, referencia).

Genera:
1) Frases de apertura para desescalar (5).
2) Preguntas para identificar necesidad real (5).
3) Límites claros y respetuosos (3 frases).
4) Plan de acuerdo (opciones A/B) y cómo presentarlas.
5) Qué documentar en expediente (lista).
6) Señales de seguridad para escalar a apoyo (si aplica).`,
    thumbnail: "",
  },

  {
    id: "saludotros-015",
    title: "Estandarizar “instrucciones de egreso” por síndrome",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Crea un template reusable: cuidados, señales de alarma y seguimiento por síndrome clínico.",
    prompt: `Actúa como médico. Crea una plantilla de egreso reutilizable.

Inputs:
- Síndrome/condición (ej: gastroenteritis, lumbalgia, IVAS).
- Población (adulto/pediatría/embarazo).
- Manejo indicado (general).

Genera:
1) Qué es (explicación breve).
2) Cuidados en casa (8 bullets).
3) Qué evitar (5 bullets).
4) Señales de alarma (8–12).
5) Seguimiento recomendado (cuándo y con quién).
6) FAQ (5) con respuestas cortas.`,
    thumbnail: "",
  },

  {
    id: "saludotros-016",
    title: "Guía rápida para lectura de ECG / Rx / TAC (estructura de reporte)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Plantilla para interpretar estudios de forma sistemática (sin inventar hallazgos).",
    prompt: `Actúa como médico. Genera una plantilla sistemática de lectura.

Inputs:
- Tipo de estudio (ECG / Rx tórax / TAC abdomen, etc.).
- Motivo clínico.
- Hallazgos reportados (si ya existe un reporte).
- Síntomas y contexto.

Genera:
1) Método sistemático paso a paso (checklist).
2) Hallazgos clave a buscar según el motivo (lista).
3) Cómo correlacionarlo con clínica (preguntas).
4) Qué hallazgos exigen acción inmediata (banderas rojas).
5) Cómo documentar conclusión y siguiente paso.`,
    thumbnail: "",
  },

  {
    id: "saludotros-017",
    title: "Plan de atención para pacientes crónicos (care plan anual)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Estructura un plan anual: metas, controles, education, prevención y seguimiento.",
    prompt: `Actúa como médico de atención primaria. Diseña un care plan anual.

Inputs:
- Condición crónica (DM2, HTA, EPOC, asma, etc.).
- Edad y comorbilidades.
- Recursos del paciente (tiempo, acceso, apoyo).
- Metas del paciente.

Genera:
1) Metas SMART (3–5).
2) Controles y monitoreo (qué y cada cuándo, general).
3) Plan de estilo de vida por dominios (alimentación, actividad, sueño, estrés).
4) Señales de descompensación y plan de acción.
5) Calendario de seguimiento (3–4 hitos).
6) Cómo involucrar familia/cuidadores.`,
    thumbnail: "",
  },

  {
    id: "saludotros-018",
    title: "Auditoría de documentación clínica (calidad y riesgo legal)",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Revisa una nota para detectar vacíos, ambigüedades y mejorar defensa clínica.",
    prompt: `Actúa como auditor clínico. Evalúa una nota médica.

Inputs:
- Texto de la nota.
- Contexto (consulta/urgencias/hospital).
- Objetivo (mejorar claridad, facturación, riesgos).

Genera:
1) 10 mejoras concretas (qué falta, qué sobra, qué aclarar).
2) Riesgos medico-legales por omisiones (lista).
3) Sugerencias de redacción para: HPI, EF, razonamiento, plan.
4) Checklist final para futuras notas.`,
    thumbnail: "",
  },

  {
    id: "saludotros-019",
    title: "Guion “explicar por qué no pedir estudio innecesario”",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Responde cuando el paciente exige resonancia/antibiótico/labs sin indicación.",
    prompt: `Actúa como médico. El paciente solicita un estudio sin indicación clara.

Inputs:
- Estudio solicitado.
- Síntoma/diagnóstico actual.
- Miedo del paciente (qué cree que tiene).
- Hallazgos que reducen probabilidad de gravedad.

Genera:
1) Explicación breve (beneficio vs falso positivo/daño/costo).
2) Qué sí haremos (plan alterno) y por qué es más útil ahora.
3) Señales que sí justificarían el estudio (criterios clínicos).
4) Plan de seguimiento con tiempos.
5) Cierre empático para mantener confianza.`,
    thumbnail: "",
  },

  {
    id: "saludotros-020",
    title: "Plantilla para sesión clínica: caso + discusión + perlas",
    area: "Salud & Clínica",
    category: "Otros",
    summary:
      "Estructura un caso para presentar en pase de visita o sesión académica.",
    prompt: `Actúa como médico docente. Estructura presentación de caso.

Inputs:
- Caso (edad, sexo, motivo, HPI, EF, labs/imagen).
- Dx final o sospecha.
- Puntos de aprendizaje.

Genera:
1) Presentación en 60–90 segundos (estilo pase).
2) Problema representativo (1 frase).
3) Dx diferencial por sistemas.
4) Razonamiento clínico (por qué Dx A > B).
5) Manejo y seguimiento.
6) 5 perlas clínicas + 3 errores comunes.`,
    thumbnail: "",
  },
];
