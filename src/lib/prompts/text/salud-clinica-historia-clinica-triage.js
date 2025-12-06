// src/lib/prompts/text/salud-clinica-historia-clinica-triage.js

export const textPromptsSaludClinicaHistoriaClinicaTriage = [
  {
    id: "saludtriage-001",
    title: "Triage inicial (urgencias) con banderas rojas",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Estructura una entrevista rápida para detectar gravedad, red flags y decisión de nivel de atención.",
    prompt: `Actúa como médico de urgencias con enfoque en seguridad del paciente.

Inputs:
- Edad/sexo (si aplica).
- Motivo de consulta (1 frase).
- Inicio y evolución (horas/días).
- Signos vitales (si se tienen).
- Antecedentes relevantes y fármacos.
- Alergias.
- Embarazo (si aplica).

Tarea:
1) Resume el caso en 2–3 líneas.
2) Realiza triage con escala práctica (Bajo/Medio/Alto) y justificación.
3) Identifica "banderas rojas" específicas para este motivo de consulta.
4) Haz 12 preguntas dirigidas (no genéricas) para completar la historia enfocada.
5) Sugiere exploración física dirigida (10 puntos).
6) Propón plan inmediato por prioridad:
   - Medidas en casa (si procede).
   - Estudios mínimos iniciales (si procede).
   - Recomendación de acudir a urgencias / consulta / seguimiento.
7) Da consejos de seguridad: qué signos obligan a ir a urgencias hoy mismo.
8) Incluye un mensaje final empático y claro para el paciente (lenguaje sencillo).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-002",
    title: "Anamnesis completa (formato clínico) para primera consulta",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Genera una plantilla de interrogatorio completo y adaptable para primera vez.",
    prompt: `Actúa como médico de atención primaria y crea una anamnesis completa, estructurada y eficiente.

Inputs:
- Motivo de consulta.
- Edad/sexo (si aplica).
- Contexto (primera vez / seguimiento).

Genera:
1) Lista ordenada de secciones de historia clínica:
   - Padecimiento actual (con OPQRST + cronología).
   - Antecedentes heredofamiliares.
   - Personales patológicos y no patológicos.
   - Quirúrgicos/trauma.
   - Medicamentos actuales (dosis/horarios) + adherencia.
   - Alergias y reacciones.
   - Gineco-obstétricos (si aplica).
   - Hábitos (tabaco/alcohol/sueño/actividad/dieta).
   - Ocupación y riesgos.
   - Salud mental (tamizaje breve).
2) Para cada sección, escribe preguntas concretas (no genéricas).
3) Cierra con: lista de problemas (problem list), hipótesis iniciales, y datos faltantes críticos.
4) Incluye cómo documentar negativas relevantes (“niega…”).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-003",
    title: "Dolor torácico: entrevista dirigida + riesgo cardiovascular",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Obtén historia dirigida y estratifica riesgo con enfoque de urgencia.",
    prompt: `Actúa como médico clínico. Vas a evaluar DOLOR TORÁCICO.

Inputs:
- Edad/sexo.
- Descripción libre del dolor (texto del paciente).
- Antecedentes (HTA, DM, dislipidemia, tabaquismo, etc.).
- Signos vitales si existen.

Genera:
1) 15 preguntas dirigidas (características, irradiación, disparadores, alivio, duración, asociados).
2) Banderas rojas específicas (síntomas y factores de riesgo).
3) Diagnósticos diferenciales por gravedad:
   - Letales/tiempo-dependientes (top 5).
   - Moderados (top 5).
   - Benignos frecuentes (top 5).
4) Recomendación de nivel de atención (urgencias inmediata vs consulta) con justificación.
5) Instrucciones claras para el paciente y advertencias de seguridad.
Usa lenguaje claro y profesional. No inventes estudios ni diagnósticos definitivos.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-004",
    title: "Disnea (falta de aire): historia dirigida + severidad",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Estructura preguntas para disnea y define urgencia según gravedad.",
    prompt: `Actúa como médico de urgencias. Evalúa DISNEA.

Inputs:
- Edad/sexo.
- Inicio (súbito/progresivo).
- Contexto (reposo/esfuerzo, infección reciente, asma/EPOC, etc.).
- Saturación O2 si existe.

Genera:
1) Preguntas clave (mínimo 14) para diferenciar causas cardíacas, pulmonares, metabólicas y ansiedad.
2) Banderas rojas que obligan a urgencias.
3) Exploración física dirigida (10 hallazgos y qué significan).
4) Prioridades de manejo inicial (seguridad) y estudios sugeridos (si procede).
5) Explicación al paciente (sencilla) de por qué podría ser urgente.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-005",
    title: "Fiebre en adulto: enfoque por síndrome + riesgos",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Guía para evaluar fiebre, origen probable y señales de alarma.",
    prompt: `Actúa como médico de primer contacto. Evalúa FIEBRE en adulto.

Inputs:
- Edad.
- Duración de fiebre.
- Síntomas acompañantes.
- Comorbilidades / inmunosupresión.
- Viajes/exposiciones recientes.

Genera:
1) Entrevista dirigida (12–16 preguntas).
2) Probables focos por sistema (respiratorio, urinario, GI, piel, SNC).
3) Señales de alarma según edad/comorbilidad.
4) Qué se puede manejar en casa vs cuándo ir a urgencias.
5) Recomendaciones generales seguras (hidratación, control térmico, cuándo evitar AINEs, etc.).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-006",
    title: "Dolor abdominal: mapa de localización + alarmas",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Evalúa dolor abdominal por cuadrantes, evolución y diagnósticos prioritarios.",
    prompt: `Actúa como médico clínico. Evalúa DOLOR ABDOMINAL.

Inputs:
- Edad/sexo.
- Localización principal (cuadrante/epigastrio).
- Inicio, evolución, intensidad.
- Vómito/diarrea, fiebre, urinario, ginecológico (si aplica).

Genera:
1) 18 preguntas dirigidas (OPQRST + asociados + antecedentes GI/quirúrgicos).
2) Red flags (peritonitis, sangrado, embarazo ectópico, etc.).
3) Diferenciales por localización (top 5 por cuadrante relevante).
4) Plan de evaluación (exploración y estudios sugeridos) según gravedad.
5) Recomendación de nivel de atención (hogar/consulta/urgencias).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-007",
    title: "Cefalea: clasificación (primary vs secondary) + banderas rojas",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Diferencia migraña/cefalea tensional de causas secundarias graves.",
    prompt: `Actúa como médico. Evalúa CEFALEA.

Inputs:
- Edad.
- Inicio (súbito vs gradual).
- Duración y patrón.
- Síntomas neurológicos asociados.
- Antecedentes (migraña, HTA, anticoagulantes).

Genera:
1) 15 preguntas dirigidas con enfoque SNOOP10 (banderas rojas).
2) Criterios que obligan a urgencias el mismo día.
3) Diferenciales principales (primarias y secundarias) con pistas clínicas.
4) Recomendaciones seguras iniciales y plan de seguimiento.
Evita diagnosticar definitivo; prioriza seguridad.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-008",
    title: "Diarrea aguda: evaluación de deshidratación y riesgo",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Entrevista dirigida, gravedad, hidratación y cuándo derivar.",
    prompt: `Actúa como médico. Evalúa DIARREA AGUDA.

Inputs:
- Edad.
- Duración.
- Número de deposiciones/día.
- Sangre/moco.
- Fiebre, dolor.
- Exposición (viajes, alimentos, antibióticos).
- Comorbilidades.

Genera:
1) 14 preguntas dirigidas.
2) Evaluación de deshidratación (signos y síntomas).
3) Red flags (sangrado, fiebre alta, inmunosupresión, etc.).
4) Manejo inicial seguro (hidratación oral, dieta, qué evitar).
5) Criterios claros de urgencias o consulta prioritaria.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-009",
    title: "Vómito: causas probables + señales de alarma",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Guía de preguntas clave para vómito agudo y evaluación de gravedad.",
    prompt: `Actúa como médico. Evalúa VÓMITO.

Inputs:
- Edad.
- Inicio y frecuencia.
- Dolor abdominal, fiebre.
- Sangre en vómito, bilis, contenido fecaloide.
- Medicamentos y alcohol.
- Embarazo (si aplica).

Genera:
1) 12–16 preguntas dirigidas.
2) Red flags y motivos para urgencias.
3) Diferenciales principales (GI, neurológico, metabólico, tóxico).
4) Recomendaciones iniciales seguras (hidratación, antieméticos solo como idea, no prescripción) y seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-010",
    title: "Síntomas urinarios (disuria): cistitis vs pielonefritis vs ETS",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Clasifica gravedad y orienta el diferencial en síntomas urinarios.",
    prompt: `Actúa como médico. Evalúa DISURIA/SÍNTOMAS URINARIOS.

Inputs:
- Sexo/edad.
- Síntomas: ardor, urgencia, frecuencia, dolor lumbar, fiebre.
- Embarazo (si aplica).
- Riesgo sexual.

Genera:
1) 14 preguntas dirigidas.
2) Señales de pielonefritis/complicación y criterios de urgencia.
3) Diferencial: cistitis, ETS/uretritis, prostatitis, litiasis.
4) Sugerencia de estudios básicos (ej. EGO) y plan de seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-011",
    title: "Mareo/vertigo: diferenciar periférico vs central",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida + banderas rojas neurológicas para mareo/vertigo.",
    prompt: `Actúa como médico. Evalúa MAREO/VÉRTIGO.

Inputs:
- Edad.
- Descripción del síntoma (giro vs inestabilidad vs lipotimia).
- Inicio y duración episodios.
- Síntomas neurológicos, auditivos.
- Factores de riesgo vascular.

Genera:
1) 16 preguntas dirigidas.
2) Banderas rojas (posible EVC) y acción recomendada.
3) Diferenciales: VPPB, neuritis vestibular, migraña vestibular, hipotensión, arritmia.
4) Exploración física sugerida (incluye signos tipo nistagmo y pruebas básicas).
5) Educación al paciente y cuándo volver de inmediato.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-012",
    title: "Dolor lumbar: mecánico vs neurológico (cauda equina/red flags)",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Evalúa lumbalgia y detecta banderas rojas neurológicas o infecciosas.",
    prompt: `Actúa como médico. Evalúa DOLOR LUMBAR.

Inputs:
- Edad.
- Inicio (trauma / levantamiento / espontáneo).
- Irradiación.
- Fiebre, pérdida de peso.
- Alteraciones esfínteres o debilidad.

Genera:
1) 15 preguntas dirigidas.
2) Red flags: cauda equina, fractura, infección, malignidad.
3) Clasifica urgencia (rutinario vs urgente).
4) Plan de manejo inicial conservador seguro y recomendaciones de actividad.
5) Señales claras para urgencias.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-013",
    title: "Trauma menor: evaluación inicial y necesidad de imagen",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Estructura preguntas y examen para golpes/caídas y decide derivación.",
    prompt: `Actúa como médico. Evalúa TRAUMA MENOR (caída/golpe).

Inputs:
- Mecanismo.
- Zona afectada.
- Dolor, deformidad, limitación.
- Síntomas neurológicos si cabeza/cuello.

Genera:
1) Historia dirigida según zona (cabeza, muñeca, tobillo, rodilla).
2) Red flags (pérdida de conciencia, vómitos persistentes, deformidad, entumecimiento).
3) Exploración física sugerida.
4) Recomendación: observación en casa vs valoración inmediata en urgencias.
5) Instrucciones de cuidado y signos de alarma.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-014",
    title: "Rash/lesiones en piel: diferenciar alérgico vs infeccioso vs grave",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Evaluación segura de erupciones cutáneas y banderas rojas (anafilaxia, SJS, meningococo).",
    prompt: `Actúa como médico. Evalúa ERUPCIÓN CUTÁNEA/RASH.

Inputs:
- Edad.
- Aparición y evolución.
- Distribución (dónde empezó y dónde está).
- Prurito/dolor.
- Fiebre y síntomas sistémicos.
- Medicamentos nuevos (últimas 2–8 semanas).

Genera:
1) 16 preguntas dirigidas.
2) Banderas rojas: anafilaxia, síndrome de Stevens-Johnson, púrpura meningocócica, celulitis grave.
3) Diferenciales probables con pistas clínicas.
4) Recomendación de urgencia y cuidados iniciales seguros.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-015",
    title: "Ansiedad vs cuadro orgánico: entrevista clínica segura",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Guía para no atribuir a ansiedad sin descartar causas médicas y detectar riesgo.",
    prompt: `Actúa como médico. Evalúa SÍNTOMAS compatibles con ansiedad (palpitaciones, opresión, disnea, mareo).

Inputs:
- Edad.
- Síntoma principal.
- Inicio y contexto.
- Antecedentes (cardíacos, tiroideos, anemia, sustancias).

Genera:
1) Preguntas para descartar causas orgánicas (cardio/pulmonar/endocrino/metabólico).
2) Red flags que obligan a urgencias.
3) Preguntas de salud mental (tamizaje breve) con lenguaje respetuoso.
4) Plan de seguridad y recomendaciones de seguimiento.
No minimices al paciente.`,
    thumbnail: "",
  },

  // --- Nota: Del 16 al 40 seguimos igual de "médico profesional" y detallados. ---
  {
    id: "saludtriage-016",
    title: "Hipertensión detectada: confirmar, riesgo y urgencia",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Evalúa lectura alta de presión y decide si es urgencia hipertensiva.",
    prompt: `Actúa como médico. Evalúa PRESIÓN ARTERIAL ELEVADA.

Inputs:
- Lecturas (con hora y cómo se midió).
- Síntomas: cefalea, dolor torácico, disnea, déficit neurológico, visión borrosa.
- Antecedentes y fármacos.
- Embarazo (si aplica).

Genera:
1) Checklist para confirmar medición correcta.
2) Preguntas dirigidas a daño a órgano blanco.
3) Clasifica: control ambulatorio vs urgencia.
4) Recomendaciones inmediatas seguras + seguimiento y signos de alarma.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-017",
    title: "Hipoglucemia/hiperglucemia: síntomas, riesgo y acciones",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Triage de alteraciones de glucosa y cuándo acudir a urgencias.",
    prompt: `Actúa como médico. Evalúa posibles ALTERACIONES DE GLUCOSA.

Inputs:
- Diabetes sí/no, tratamiento.
- Lectura de glucosa (si hay).
- Síntomas (temblor, sudoración, confusión; o poliuria/polidipsia, vómito).
- Estado de conciencia.

Genera:
1) Preguntas rápidas para diferenciar hipo vs hiperglucemia.
2) Red flags (cetoacidosis, estado hiperosmolar, neuroglucopenia).
3) Medidas inmediatas seguras (según escenario) y criterios de urgencias.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-018",
    title: "Embarazo: dolor y sangrado en primer trimestre (seguridad)",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Evalúa urgencia ante sangrado/dolor temprano para descartar ectópico.",
    prompt: `Actúa como médico. Evalúa SANGRADO y/o DOLOR en embarazo temprano.

Inputs:
- Semanas estimadas.
- Cantidad de sangrado.
- Dolor (localización e intensidad).
- Mareo/síncope.
- Antecedentes ectópico/IVU/cirugías.

Genera:
1) Preguntas dirigidas (mín. 14).
2) Banderas rojas de embarazo ectópico/choque.
3) Recomendación inmediata (urgencias vs consulta) con justificación clara.
4) Mensaje empático y de seguridad.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-019",
    title: "Niño con fiebre: triage por edad y signos de alarma",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Estructura evaluación pediátrica básica y define urgencia.",
    prompt: `Actúa como médico con enfoque pediátrico. Evalúa FIEBRE EN NIÑO.

Inputs:
- Edad exacta (meses/años).
- Temperatura y método.
- Duración.
- Comportamiento (irritable, somnoliento, come/bebe).
- Vacunas al día sí/no.

Genera:
1) Preguntas dirigidas por sistema (respiratorio, GI, urinario, piel).
2) Signos de alarma que requieren urgencias (lista clara).
3) Orientación de manejo en casa (hidratación, antipiréticos como idea general) y seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-020",
    title: "Tos: diferenciar infección leve vs neumonía vs asma/EPOC",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia clínica dirigida para tos y criterio de gravedad.",
    prompt: `Actúa como médico. Evalúa TOS.

Inputs:
- Duración (aguda/subaguda/crónica).
- Fiebre, disnea, dolor pleurítico.
- Expectoración (color/cantidad), hemoptisis.
- Antecedentes asma/EPOC.

Genera:
1) 14 preguntas dirigidas.
2) Red flags (disnea, saturación baja, hemoptisis, dolor torácico, confusión).
3) Diferenciales y recomendación de nivel de atención.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-021",
    title: "Ojo rojo: conjuntivitis vs uveítis vs glaucoma agudo",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Evalúa ojo rojo y detecta urgencias oftalmológicas.",
    prompt: `Actúa como médico. Evalúa OJO ROJO.

Inputs:
- Dolor (sí/no), fotofobia, visión borrosa.
- Secreción.
- Uso de lentes de contacto.
- Trauma o químicos.

Genera:
1) 12–15 preguntas dirigidas.
2) Banderas rojas (dolor intenso, fotofobia, visión disminuida, contacto, químico).
3) Diferenciales probables y recomendación (urgente vs consulta).
4) Consejos de seguridad (no automedicar gotas con esteroide).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-022",
    title: "Dolor de garganta: faringitis vs absceso periamigdalino",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida y señales de complicación en odinofagia.",
    prompt: `Actúa como médico. Evalúa DOLOR DE GARGANTA.

Inputs:
- Duración.
- Fiebre.
- Tos/rinorrea.
- Dificultad para tragar, voz apagada, trismus.
- Contactos enfermos.

Genera:
1) 12 preguntas dirigidas.
2) Red flags (disnea, estridor, trismus, babeo, voz de papa caliente).
3) Diferenciales y urgencia.
4) Recomendaciones de cuidado seguro y seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-023",
    title: "Dolor de oído: otitis vs mastoiditis (alarma)",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Guía de preguntas y criterios de complicación en otalgia.",
    prompt: `Actúa como médico. Evalúa DOLOR DE OÍDO.

Inputs:
- Edad.
- Fiebre.
- Secreción.
- Disminución auditiva.
- Dolor detrás de la oreja / desviación del pabellón.

Genera:
1) 12 preguntas dirigidas.
2) Signos de mastoiditis/complicación y urgencia.
3) Diferenciales y plan de atención.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-024",
    title: "Palpitaciones: evaluar arritmia vs ansiedad vs estimulantes",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Entrevista dirigida para palpitaciones y banderas rojas.",
    prompt: `Actúa como médico. Evalúa PALPITACIONES.

Inputs:
- Edad.
- Inicio súbito/gradual.
- Duración del episodio.
- Síntomas asociados (síncope, dolor torácico, disnea).
- Cafeína/energéticos/sustancias.

Genera:
1) 14 preguntas dirigidas.
2) Red flags (síncope, dolor torácico, hipotensión, historia familiar muerte súbita).
3) Recomendación de urgencia y estudios sugeridos (ej. ECG) si procede.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-025",
    title: "Edema de piernas: diferenciar insuficiencia venosa vs IC vs TVP",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida para edema y detección de trombosis venosa profunda.",
    prompt: `Actúa como médico. Evalúa EDEMA EN PIERNAS.

Inputs:
- Unilateral vs bilateral.
- Dolor, calor, enrojecimiento.
- Disnea/dolor torácico.
- Antecedentes (viaje, cáncer, cirugía, anticonceptivos).

Genera:
1) 14 preguntas dirigidas.
2) Red flags (TVP/TEP, IC descompensada).
3) Diferenciales y recomendación inmediata.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-026",
    title: "Desmayo/síncope: causas benignas vs riesgo cardiaco",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Estructura evaluación de síncope con enfoque de seguridad.",
    prompt: `Actúa como médico. Evalúa SÍNCOPE.

Inputs:
- Contexto (de pie, esfuerzo, dolor, emoción).
- Pródromos (náusea, sudor, visión túnel).
- Trauma asociado.
- Antecedentes cardiacos/familiares.

Genera:
1) 16 preguntas dirigidas.
2) Red flags de síncope cardiogénico.
3) Recomendación de urgencia y estudios iniciales sugeridos.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-027",
    title: "Pérdida de peso involuntaria: enfoque clínico y diferenciales",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida para pérdida de peso y síntomas sistémicos.",
    prompt: `Actúa como médico internista. Evalúa PÉRDIDA DE PESO INVOLUNTARIA.

Inputs:
- Cantidad (kg) y tiempo.
- Apetito.
- Síntomas: fiebre, sudores nocturnos, diarrea, tos, dolor.
- Antecedentes y medicación.

Genera:
1) 18 preguntas dirigidas (endocrino, GI, infeccioso, neoplásico, psiquiátrico).
2) Red flags.
3) Plan de evaluación inicial (laboratorios/estudios sugeridos) y seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-028",
    title: "Fatiga crónica: descartar anemia, tiroides, depresión, sueño",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Entrevista estructurada para fatiga y plan inicial.",
    prompt: `Actúa como médico. Evalúa FATIGA.

Inputs:
- Duración.
- Sueño (horas/calidad).
- Estrés/ánimo.
- Síntomas asociados.
- Medicamentos.

Genera:
1) 16 preguntas dirigidas.
2) Red flags (pérdida de peso, fiebre prolongada, sangrado).
3) Plan inicial de evaluación y recomendaciones de estilo de vida.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-029",
    title: "Dolor articular: inflamatorio vs mecánico + signos de alarma",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida para artralgias y sospecha de artritis inflamatoria.",
    prompt: `Actúa como médico. Evalúa DOLOR ARTICULAR.

Inputs:
- Articulaciones afectadas.
- Rigidez matutina y duración.
- Inflamación visible, calor.
- Fiebre, lesiones en piel.
- Antecedentes autoinmunes.

Genera:
1) 16 preguntas dirigidas.
2) Diferenciales (OA, AR, gota, espondiloartritis, infecciosa).
3) Red flags (artritis séptica).
4) Plan inicial y urgencia.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-030",
    title: "Herida/corte: evaluación de infección y necesidad de sutura",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Guía para heridas: tiempo, contaminación, tétanos y alarma.",
    prompt: `Actúa como médico. Evalúa HERIDA/CORTE.

Inputs:
- Tiempo desde la lesión.
- Profundidad y localización.
- Contaminación (tierra, animal, vidrio).
- Dolor, enrojecimiento, secreción.
- Vacuna tétanos (última dosis).

Genera:
1) 12 preguntas dirigidas.
2) Criterios para sutura/urgencias.
3) Signos de infección y cuidados iniciales seguros.
4) Recomendaciones de seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-031",
    title: "Quemadura: severidad, superficie y criterios de referencia",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Clasifica quemaduras y decide derivación a urgencias/centro especializado.",
    prompt: `Actúa como médico. Evalúa QUEMADURA.

Inputs:
- Causa (térmica/química/eléctrica).
- Zona afectada.
- Tamaño aproximado.
- Ampollas/dolor.
- Inhalación de humo (si aplica).

Genera:
1) Preguntas clínicas clave (mín. 12).
2) Clasificación probable (superficial/parcial/profunda) por signos.
3) Criterios de referencia urgente (cara/manos/genitales, grande, química, eléctrica, inhalación).
4) Primeros auxilios seguros y qué NO hacer.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-032",
    title: "Reacción alérgica: urticaria vs anafilaxia (plan de seguridad)",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Diferencia urticaria simple de anafilaxia y define urgencia.",
    prompt: `Actúa como médico. Evalúa REACCIÓN ALÉRGICA.

Inputs:
- Síntomas (ronchas, hinchazón, dificultad respiratoria, ronquera).
- Exposición probable (alimento, fármaco, picadura).
- Tiempo de inicio.

Genera:
1) 12 preguntas dirigidas.
2) Criterios clínicos de anafilaxia (para urgencias inmediata).
3) Consejos de seguridad y seguimiento.
No minimices; prioriza vida.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-033",
    title: "Infección respiratoria alta: resfriado vs influenza vs COVID (orientación)",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida y criterios de gravedad para infecciones respiratorias.",
    prompt: `Actúa como médico. Evalúa SÍNTOMAS RESPIRATORIOS ALTOS.

Inputs:
- Días de evolución.
- Fiebre, tos, congestión, odinofagia.
- Disnea.
- Comorbilidades.

Genera:
1) 14 preguntas dirigidas.
2) Red flags.
3) Recomendaciones generales seguras (cuidado en casa) y cuándo acudir a consulta/urgencias.
4) Consejos de aislamiento racional si aplica.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-034",
    title: "Dolor testicular agudo: descartar torsión (urgencia)",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Evaluación rápida para dolor testicular y criterios de urgencia.",
    prompt: `Actúa como médico. Evalúa DOLOR TESTICULAR AGUDO.

Inputs:
- Edad.
- Inicio súbito vs gradual.
- Náusea/vómito.
- Trauma.
- Síntomas urinarios.

Genera:
1) 12–15 preguntas dirigidas.
2) Banderas rojas de torsión testicular y urgencia.
3) Diferenciales (epididimitis, hernia, torsión apéndice).
4) Mensaje claro de seguridad.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-035",
    title: "Sangrado rectal: hemorroides vs causas serias (triage)",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida y señales de alarma en rectorragia.",
    prompt: `Actúa como médico. Evalúa SANGRADO RECTAL.

Inputs:
- Edad.
- Color de sangre (roja rutilante vs oscura).
- Cantidad y frecuencia.
- Dolor al evacuar.
- Pérdida de peso/anemia.

Genera:
1) 14 preguntas dirigidas.
2) Red flags (melena, anemia, hipotensión, pérdida de peso, >50 años con cambio de hábito intestinal).
3) Recomendación de nivel de atención y estudios iniciales.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-036",
    title: "Dolor pélvico en mujer: ginecológico vs urinario vs GI",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida para dolor pélvico y criterios de urgencia.",
    prompt: `Actúa como médico. Evalúa DOLOR PÉLVICO.

Inputs:
- Edad.
- Fecha última menstruación.
- Posible embarazo.
- Flujo vaginal, sangrado.
- Fiebre, síntomas urinarios.

Genera:
1) 16 preguntas dirigidas.
2) Red flags (embarazo ectópico, torsión ovárica, EPI severa).
3) Diferenciales y recomendación de urgencia.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-037",
    title: "Hormigueo/entumecimiento: diferenciar neuropatía vs EVC",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Historia dirigida para parestesias y banderas rojas neurológicas.",
    prompt: `Actúa como médico. Evalúa HORMIGUEO/ENTUMECIMIENTO.

Inputs:
- Inicio (súbito vs gradual).
- Distribución (cara/brazo/pierna; unilateral/bilateral).
- Debilidad asociada.
- Factores de riesgo (HTA, DM).

Genera:
1) 14 preguntas dirigidas.
2) Banderas rojas (EVC/AIT, síndrome medular).
3) Diferenciales (neuropatía periférica, compresión, ansiedad, déficit B12).
4) Recomendación de urgencia.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-038",
    title: "Control de signos vitales en casa: interpretación clínica",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Ayuda a interpretar PA, FC, temperatura y SpO2 con contexto clínico.",
    prompt: `Actúa como médico. Interpreta SIGNOS VITALES TOMADOS EN CASA.

Inputs:
- PA, FC, temperatura, SpO2 (si hay).
- Síntomas actuales.
- Edad y comorbilidades.
- Medicación.

Genera:
1) Validación de medición correcta (pasos).
2) Interpretación por rangos y contexto.
3) Señales que ameritan urgencias vs consulta.
4) Recomendaciones de seguimiento (cuándo repetir, cómo registrar).`,
    thumbnail: "",
  },

  {
    id: "saludtriage-039",
    title: "Checklist preconsulta: preparar al paciente para valorar mejor",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Lista de información y documentos que un paciente debe llevar para una consulta efectiva.",
    prompt: `Actúa como médico. Crea un CHECKLIST para pacientes antes de consulta.

Inputs:
- Tipo de consulta (general / cardiología / gastro / etc.).
- Motivo principal.

Genera:
1) Qué datos traer (síntomas, cronología, desencadenantes).
2) Lista de medicamentos con dosis.
3) Estudios previos útiles.
4) Preguntas que el paciente debería hacer.
5) Cómo describir dolor/síntomas (OPQRST) en 60 segundos.`,
    thumbnail: "",
  },

  {
    id: "saludtriage-040",
    title: "Resumen clínico para referencia (interconsulta) estilo profesional",
    area: "Salud & Clínica",
    category: "Historia clínica + triage",
    summary:
      "Convierte datos sueltos en un resumen clínico breve para referir a especialista.",
    prompt: `Actúa como médico. Redacta un RESUMEN CLÍNICO para interconsulta.

Inputs:
- Motivo de referencia.
- Hallazgos clave.
- Antecedentes relevantes.
- Medicación.
- Estudios realizados y resultados (si los hay).
- Preguntas clínicas a responder por el especialista.

Genera:
1) Resumen de 8–12 líneas (claro y conciso).
2) Lista de problemas/diagnósticos diferenciales.
3) Preguntas específicas para el especialista.
4) Prioridad (rutina vs preferente vs urgente) con justificación.`,
    thumbnail: "",
  },
];
