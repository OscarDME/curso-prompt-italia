// src/lib/prompts/text/salud-clinica-educacion-del-paciente-y-adherencia.js

export const textPromptsSaludClinicaEducacionYAdherencia = [
  {
    id: "saluded-001",
    title: "Explicación del diagnóstico en lenguaje simple (sin infantilizar)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Traduce un diagnóstico a un mensaje claro, empático y accionable para el paciente.",
    prompt: `Actúa como médico y educador clínico. Explica el diagnóstico de forma clara.

Inputs:
- Diagnóstico o sospecha clínica.
- Edad y nivel de comprensión (básico/medio/alto).
- Contexto del paciente (trabajo, familia, ansiedad, barreras).
- Qué le preocupa al paciente (miedo principal).

Genera:
1) Explicación en 5–7 frases: qué es, por qué pasa, qué esperar.
2) Lo más importante que NO es (para tranquilizar sin prometer).
3) Señales de alarma (3–6) por las que debe acudir a urgencias.
4) Qué puede hacer en casa hoy (5 acciones concretas).
5) Cómo se medirá mejoría (2–4 indicadores).
6) Un cierre empático (1–2 frases).`,
    thumbnail: "",
  },

  {
    id: "saluded-002",
    title: "Plan de tratamiento en formato checklist (alta adherencia)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Convierte un plan clínico en una lista de pasos diaria/semanal fácil de seguir.",
    prompt: `Actúa como médico. Convierte el plan en un checklist práctico.

Inputs:
- Diagnóstico.
- Recomendaciones (higiene, dieta, actividad, control).
- Medicamentos (si aplica, sin dosis si no se provee).
- Duración del plan (días/semanas).

Genera:
1) Checklist diario (mañana/tarde/noche).
2) Checklist semanal (controles, registro, hábitos).
3) “Si pasa X, haz Y” (5 reglas simples).
4) Errores comunes a evitar (5).
5) Recordatorio de seguimiento (cuándo y por qué).`,
    thumbnail: "",
  },

  {
    id: "saluded-003",
    title: "Mensajes estilo WhatsApp para mejorar adherencia (7 días)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Crea mensajes cortos, motivadores y clínicamente correctos para seguimiento.",
    prompt: `Actúa como médico. Crea una secuencia de mensajes tipo WhatsApp para adherencia.

Inputs:
- Diagnóstico/objetivo (ej: controlar PA, glucosa, dolor).
- 3 hábitos o tareas clave.
- Tono (cálido / directo / motivacional).
- Barrera principal (olvido, falta de tiempo, miedo, efectos adversos).

Genera:
1) 7 mensajes (día 1 a día 7) de máximo 240 caracteres.
2) 2 mensajes “si se saltó el plan” (sin culpar).
3) 2 mensajes para reforzar señales de alarma y cuándo consultar.
4) Un mensaje final para agendar seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saluded-004",
    title: "Guía de automonitoreo (PA, glucosa, síntomas) con plantilla",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Instrucciones claras para registrar medidas/síntomas y detectar cambios relevantes.",
    prompt: `Actúa como médico. Diseña una guía de automonitoreo.

Inputs:
- Qué se monitoriza (PA / glucosa / peso / síntomas).
- Frecuencia deseada.
- Equipo disponible (baumanómetro, glucómetro, app, libreta).
- Objetivo clínico (control, seguimiento, ajuste).

Genera:
1) Instrucciones paso a paso para medir/registrar (técnica).
2) Tabla plantilla en texto (campos: fecha, hora, valor, notas, síntomas).
3) Cómo interpretar tendencias (qué significa subir/bajar).
4) Umbrales orientativos para contactar al médico vs urgencias (sin dar números si no se proporcionan; usa “muy alto/muy bajo” y guía de síntomas).
5) Recomendación de revisión del registro (cada X días) y qué enviar.`,
    thumbnail: "",
  },

  {
    id: "saluded-005",
    title: "Efectos secundarios: explicación + cuándo preocuparse",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Ayuda a manejar temores sobre medicamentos y distinguir efectos esperables vs peligrosos.",
    prompt: `Actúa como médico. Educa sobre efectos secundarios de un tratamiento.

Inputs:
- Medicamento o clase (si no se sabe, describir “tratamiento para X”).
- Motivo de uso.
- Duración estimada.
- Condiciones del paciente (embarazo, riñón, hígado, alergias).

Genera:
1) Efectos comunes (lista, con descripción simple).
2) Qué hacer si aparecen (acciones seguras).
3) Efectos raros pero graves (lista) y qué hacer.
4) Señales de alergia/anafilaxia (lenguaje simple).
5) Frase para mejorar adherencia sin minimizar riesgos.`,
    thumbnail: "",
  },

  {
    id: "saluded-006",
    title: "Consentimiento informado simplificado (procedimiento / estudio)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Explica qué se hará, beneficios, riesgos y alternativas en lenguaje accesible.",
    prompt: `Actúa como médico. Redacta consentimiento simplificado para el paciente.

Inputs:
- Procedimiento/estudio.
- Objetivo.
- Alternativas.
- Riesgos principales.
- Preparación requerida.

Genera:
1) Qué es y para qué sirve (5 frases).
2) Beneficios esperados (3–5 bullets).
3) Riesgos/complicaciones (3–7 bullets) en lenguaje simple.
4) Alternativas razonables (lista).
5) Preparación antes y cuidados después (checklist).
6) Preguntas frecuentes (5) con respuestas breves.`,
    thumbnail: "",
  },

  {
    id: "saluded-007",
    title: "Entrevista motivacional breve (5 minutos) para cambio de hábito",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Guion clínico para aumentar motivación y compromiso sin regañar.",
    prompt: `Actúa como médico usando entrevista motivacional (MI) en versión breve.

Inputs:
- Hábito a cambiar (tabaco, sedentarismo, dieta, alcohol, sueño).
- Nivel de disposición (0–10).
- Barreras principales.
- Beneficio deseado por el paciente.

Genera:
1) 6 preguntas abiertas estilo MI.
2) 6 afirmaciones empáticas (reflejo y validación).
3) Técnica “importancia” y “confianza” (2 preguntas cada una).
4) Cierre con compromiso mínimo viable (1 acción en 24h + 1 en 7 días).
5) Plan para recaídas (si pasa X, haré Y).`,
    thumbnail: "",
  },

  {
    id: "saluded-008",
    title: "Educación en sala de espera: hoja informativa 1 página",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Crea una hoja breve para imprimir y entregar al paciente.",
    prompt: `Actúa como médico. Crea una hoja informativa de 1 página.

Inputs:
- Tema (enfermedad o síntoma frecuente).
- Público (adultos / pediatría / adultos mayores).
- Nivel de lectura (básico/medio).
- Mitos comunes del tema.

Genera:
1) Título + resumen en 2–3 líneas.
2) Qué es / por qué ocurre (sección corta).
3) Qué ayuda (5–8 bullets).
4) Qué evitar (5 bullets).
5) Cuándo consultar de inmediato (señales de alarma).
6) Mitos y realidades (3–5).
7) Nota final: “esto no sustituye consulta médica”.`,
    thumbnail: "",
  },

  {
    id: "saluded-009",
    title: "Plan de prevención: chequeos y vacunas por perfil (general)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Organiza prevención por edad/riesgo sin dar recomendaciones locales específicas.",
    prompt: `Actúa como médico. Crea un plan preventivo general.

Inputs:
- Edad y sexo.
- Factores de riesgo (tabaco, DM, HTA, obesidad).
- Historial familiar relevante.
- País/entorno (si aplica).

Genera:
1) Lista de chequeos recomendables (general, sin sustituir guías locales).
2) Frecuencia orientativa (anual / cada 2–3 años / según riesgo).
3) Vacunas a revisar (sin calendario exacto si no se especifica país).
4) Hábitos protectores (5).
5) “Qué llevar a la consulta” (lista).`,
    thumbnail: "",
  },

  {
    id: "saluded-010",
    title: "Explicar un resultado de laboratorio en lenguaje claro",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Traduce resultados a: qué significa, qué puede influirlo y próximos pasos.",
    prompt: `Actúa como médico. Explica un resultado de laboratorio.

Inputs:
- Nombre del estudio.
- Valor del paciente.
- Rango de referencia.
- Síntomas y comorbilidades.

Genera:
1) Qué mide y por qué importa (3–5 frases).
2) Interpretación del valor (en términos generales).
3) Causas frecuentes de alteración (lista).
4) Qué repetir/confirmar y cuándo (orientativo).
5) Qué cambios de estilo de vida podrían ayudar (si aplica).
6) Señales por las que debe consultar antes.`,
    thumbnail: "",
  },

  {
    id: "saluded-011",
    title: "Script para explicar antibióticos: cuándo sí / cuándo no",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Mensaje claro para evitar antibióticos innecesarios y mantener satisfacción del paciente.",
    prompt: `Actúa como médico. El paciente pide antibiótico.

Inputs:
- Motivo de consulta (resfriado, tos, garganta, sinusitis, etc.).
- Duración de síntomas.
- Fiebre sí/no.
- Factores de riesgo.

Genera:
1) Explicación breve de por qué NO siempre ayuda.
2) Qué sí ayuda (manejo sintomático) con 5 recomendaciones generales.
3) Cuándo sí se reconsidera (señales de alarma / empeoramiento).
4) Plan de seguimiento (en cuántos días revalorar).
5) Frase de cierre para mantener confianza.`,
    thumbnail: "",
  },

  {
    id: "saluded-012",
    title: "Educación y decisión compartida (Shared Decision-Making)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Estructura opciones A/B/C con pros/contras para decidir con el paciente.",
    prompt: `Actúa como médico. Usa decisión compartida.

Inputs:
- Problema clínico.
- Opciones disponibles (A/B/C).
- Preferencias del paciente (tiempo, costo, invasividad).
- Aversiones o miedos.

Genera:
1) Tabla mental A/B/C (sin tabla): para cada opción: beneficios, riesgos, esfuerzo, tiempo, costo aproximado (si se da).
2) Preguntas para explorar valores del paciente (5).
3) Recomendación final condicionada: “Si valoras X, opción Y”.
4) Próximo paso y plan de reevaluación.`,
    thumbnail: "",
  },

  {
    id: "saluded-013",
    title: "Educación para señales de alarma: tarjeta de 'cuándo regresar'",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Crea una lista corta, memorable y específica de signos por los que debe consultar.",
    prompt: `Actúa como médico. Crea tarjeta de “return precautions”.

Inputs:
- Diagnóstico/síntoma.
- Tratamiento indicado.
- Riesgos del paciente (edad, embarazo, comorbilidades).

Genera:
1) 6–10 señales de alarma específicas.
2) Qué hacer ante cada una (urgencias / llamar / consultar).
3) Qué es normal que sienta durante la recuperación (3–5 puntos).
4) Tiempo esperado de mejoría (orientativo).`,
    thumbnail: "",
  },

  {
    id: "saluded-014",
    title: "Plan de adherencia para toma de medicamentos (sin olvidar)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Estrategias prácticas: recordatorios, anclajes, pastilleros, rutina y manejo de olvidos.",
    prompt: `Actúa como médico. Diseña un plan de adherencia para medicación.

Inputs:
- Número de medicamentos.
- Horarios aproximados.
- Problema (olvidos, efectos, costo, complejidad).
- Rutina diaria del paciente.

Genera:
1) Estrategia de anclaje (medicación ligada a hábitos existentes).
2) Sistema de recordatorios (app/alarma/pastillero).
3) Qué hacer si olvida una dosis (indicación general: consultar etiqueta/médico; no dar instrucciones específicas si no corresponde).
4) Plan para efectos secundarios leves (cuándo reportar).
5) Mini-checklist semanal para reordenar/abastecer.`,
    thumbnail: "",
  },

  {
    id: "saluded-015",
    title: "Educación para familia/cuidadores (paciente dependiente)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Guía de cuidados, vigilancia, comunicación y escalamiento para cuidadores.",
    prompt: `Actúa como médico. Educa a un cuidador.

Inputs:
- Diagnóstico.
- Nivel de dependencia.
- Riesgos (caídas, confusión, deshidratación).
- Rutina del cuidador.

Genera:
1) Qué observar a diario (checklist).
2) Señales de alarma (lista).
3) Cómo apoyar adherencia (meds, citas, hidratación, actividad).
4) Comunicación con el equipo de salud: qué reportar y cómo.
5) Autocuidado del cuidador (3 tips).`,
    thumbnail: "",
  },

  {
    id: "saluded-016",
    title: "Guion para explicar 'por qué referimos a especialista'",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Mensaje para reducir ansiedad y aumentar colaboración con interconsulta.",
    prompt: `Actúa como médico. Explica una referencia a especialista.

Inputs:
- Motivo de referencia.
- Estudios realizados.
- Lo que se busca descartar/confirmar.
- Preocupación principal del paciente.

Genera:
1) Explicación en 4–6 frases: por qué, qué aporta, qué se espera.
2) Qué información llevar (lista).
3) Qué podría pasar en la consulta (pasos típicos).
4) Señales por las que debe acudir antes de la cita.`,
    thumbnail: "",
  },

  {
    id: "saluded-017",
    title: "Educación sobre estilo de vida: plan realista en 2 semanas",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Micro-hábitos y metas medibles para iniciar cambios sin saturar al paciente.",
    prompt: `Actúa como médico. Crea un plan de 14 días de hábitos.

Inputs:
- Objetivo (peso, PA, glucosa, colesterol, sueño, estrés).
- Nivel actual (sedentario, moderado, activo).
- Restricciones (tiempo, presupuesto, lesiones).
- Preferencias (comida, horarios).

Genera:
1) 3 micro-hábitos (máximo 10 min cada uno).
2) Metas por semana (semana 1 y 2).
3) Cómo medir progreso (2 métricas).
4) Obstáculos probables y plan “si-entonces” (5).
5) Mensaje motivacional clínico (sin promesas).`,
    thumbnail: "",
  },

  {
    id: "saluded-018",
    title: "Educación para dolor: expectativas y recuperación (sin prometer)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Explica por qué duele, que es normal, qué evitar y cómo avanzar.",
    prompt: `Actúa como médico. Educa a paciente con dolor.

Inputs:
- Tipo de dolor (muscular, articular, neuropático).
- Tiempo de evolución.
- Actividades que empeoran.
- Miedo principal (ej: “me voy a lastimar más”).

Genera:
1) Explicación de dolor (simple, 5–7 frases).
2) Qué es normal vs preocupante (2 listas).
3) Plan progresivo de actividad (3 niveles).
4) Señales para reevaluación.
5) Frase para reducir miedo al movimiento.`,
    thumbnail: "",
  },

  {
    id: "saluded-019",
    title: "Educación para pacientes con múltiples comorbilidades (resumen único)",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Integra varias condiciones en un solo plan claro para evitar confusión.",
    prompt: `Actúa como médico. El paciente tiene varias condiciones.

Inputs:
- Lista de diagnósticos.
- Medicación base.
- Objetivo principal del paciente.
- Síntomas que más le molestan.

Genera:
1) Resumen de “qué cuidar primero” (prioridades 1–3).
2) Plan integrado (hábitos + controles + medicación).
3) Señales de interacción o conflicto entre planes (ej. dieta vs riñón) en lenguaje simple.
4) Próximo seguimiento: qué revisar y cuándo.`,
    thumbnail: "",
  },

  {
    id: "saluded-020",
    title: "Carta post-consulta (After Visit Summary) lista para copiar",
    area: "Salud & Clínica",
    category: "Educación del paciente y adherencia",
    summary:
      "Resumen final listo para enviar al paciente con plan, alarmas y seguimiento.",
    prompt: `Actúa como médico. Redacta el resumen post-consulta.

Inputs:
- Diagnóstico/sospecha.
- Hallazgos relevantes.
- Plan (meds, cuidados, estudios).
- Seguimiento.

Genera:
1) Resumen de lo hablado (3–5 líneas).
2) Plan de acción (bullets claros).
3) Señales de alarma (bullets).
4) Próxima cita: cuándo y qué llevar.
5) Nota final empática y profesional.`,
    thumbnail: "",
  },
];
