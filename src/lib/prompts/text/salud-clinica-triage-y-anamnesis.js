// src/lib/prompts/text/salud-clinica-triage-y-anamnesis.js

export const textPromptsSaludClinicaTriageYAnamnesis = [
  {
    id: "saludtri-001",
    title: "Triage rápido: clasificar urgencia en 60 segundos (sin diagnosticar)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Estructura preguntas clave para estimar gravedad, priorizar y decidir escalamiento.",
    prompt: `Actúa como médico haciendo triage inicial (no diagnóstico definitivo).

Inputs:
- Motivo de consulta.
- Edad.
- Comorbilidades relevantes.
- Contexto (embarazo, inmunosupresión, anticoagulantes).

Genera:
1) 8–12 preguntas cerradas esenciales (sí/no o opción múltiple).
2) 6–10 preguntas abiertas para contexto (inicio, evolución, severidad).
3) Lista priorizada de “banderas rojas” específicas para este motivo.
4) Clasificación orientativa de urgencia en 4 niveles:
   - Emergencia (ahora)
   - Urgente (hoy)
   - Prioritario (24–72h)
   - Seguimiento programable
5) Recomendación de próximo paso (consulta, urgencias, vigilancia) con una frase de razón.`,
    thumbnail: "",
  },

  {
    id: "saludtri-002",
    title: "Anamnesis completa tipo HPI (Historia del Problema Actual)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Convierte un síntoma en una historia clínica bien estructurada y completa.",
    prompt: `Actúa como médico. Estructura la Historia del Problema Actual (HPI).

Inputs:
- Síntoma principal.
- Narrativa del paciente (texto libre).
- Signos vitales si existen.

Genera:
1) HPI en formato OLDCARTS o equivalente (inicio, localización, duración, carácter, agravantes, atenuantes, irradiación, tiempo, severidad).
2) Síntomas asociados positivos y negativos relevantes (en lista).
3) Impacto funcional (sueño, trabajo, actividad).
4) Percepción del paciente: miedos, expectativas, objetivo de la visita.
5) 5 preguntas de “siguiente capa” para profundizar según lo encontrado.`,
    thumbnail: "",
  },

  {
    id: "saludtri-003",
    title: "Anamnesis por sistemas (Review of Systems) enfocada",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Genera ROS breve pero completo, adaptado al motivo de consulta.",
    prompt: `Actúa como médico. Genera un Review of Systems enfocado.

Inputs:
- Motivo de consulta.
- Edad y sexo.
- Antecedentes principales.

Genera:
1) ROS por sistemas (general, respiratorio, CV, GI, GU, neuro, MSK, piel, endocrino, psiquiátrico) con 2–4 preguntas por sistema.
2) Marca cuáles son “must ask” vs “nice to ask”.
3) Señales que cambian la prioridad (red flags) por cada sistema relevante.`,
    thumbnail: "",
  },

  {
    id: "saludtri-004",
    title: "Plantilla de triage para dolor torácico (seguridad primero)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Preguntas críticas y banderas rojas para dolor torácico sin generar pánico.",
    prompt: `Actúa como médico en triage. Dolor torácico.

Inputs:
- Edad.
- Descripción del dolor.
- Factores de riesgo (tabaco, HTA, DM, dislipidemia).

Genera:
1) Preguntas críticas (12–18) que no se pueden omitir.
2) Lista clara de banderas rojas (10) y por qué importan.
3) Diferenciales “a descartar primero” vs “frecuentes y menos graves” (lista).
4) Recomendación orientativa de urgencia (ahora / hoy / 24–72h / programable).
5) Mensaje para el paciente (3–5 frases) que explique por qué se deriva o no.`,
    thumbnail: "",
  },

  {
    id: "saludtri-005",
    title: "Plantilla de triage para falta de aire / disnea",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Algoritmo de preguntas y escalamiento para disnea incluyendo asma, infección y riesgo trombótico.",
    prompt: `Actúa como médico en triage: disnea.

Inputs:
- Edad y comorbilidades.
- Inicio (súbito/gradual).
- Síntomas asociados (fiebre, dolor torácico, tos, sibilancias).
- Saturación si existe.

Genera:
1) Preguntas esenciales (15).
2) Checklist de riesgo alto (TEP, neumonía, insuficiencia cardiaca, anafilaxia).
3) Señales que requieren urgencias inmediata (lista).
4) Qué datos pedir si hay acceso (SatO2, FC, FR, temperatura).
5) Siguiente paso sugerido y justificación (1–2 frases).`,
    thumbnail: "",
  },

  {
    id: "saludtri-006",
    title: "Plantilla de triage para dolor abdominal",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Estructura preguntas por cuadrantes, síntomas asociados y riesgo quirúrgico.",
    prompt: `Actúa como médico. Triage para dolor abdominal.

Inputs:
- Localización del dolor.
- Edad/sexo.
- Embarazo posible sí/no.
- Cirugías previas.

Genera:
1) Preguntas de caracterización (12).
2) Síntomas asociados críticos (vómito persistente, sangrado, fiebre, ictericia, rigidez).
3) Banderas rojas quirúrgicas (lista).
4) Diferenciales por localización (CUADRANTE/REGIÓN en lista corta).
5) Urgencia orientativa y siguiente paso.`,
    thumbnail: "",
  },

  {
    id: "saludtri-007",
    title: "Plantilla de triage para cefalea (descartar emergencias)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Detecta signos de alarma (SNOOP10) y guía preguntas clave.",
    prompt: `Actúa como médico. Triage de dolor de cabeza.

Inputs:
- Inicio (súbito/gradual).
- Intensidad.
- Síntomas neurológicos sí/no.
- Antecedentes (migraña, HTA, anticoagulantes).

Genera:
1) 12–16 preguntas críticas.
2) Lista de alarmas (peor cefalea de la vida, focalidad, fiebre, rigidez nuca, post-trauma, inmunosupresión, embarazo, etc.).
3) Diferenciales comunes si NO hay alarmas (migraña, tensional, sinusitis) sin diagnosticar.
4) Recomendación de urgencia y explicación breve para el paciente.`,
    thumbnail: "",
  },

  {
    id: "saludtri-008",
    title: "Triage pediátrico: fiebre en niño (enfoque seguro)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Guía preguntas y banderas rojas por edad y estado general sin generar alarma excesiva.",
    prompt: `Actúa como médico. Triage pediátrico por fiebre.

Inputs:
- Edad del niño.
- Días de fiebre.
- Temperatura máxima.
- Vacunas completas sí/no.
- Síntomas (respiratorios, GI, rash).

Genera:
1) Preguntas esenciales (15) enfocadas a hidratación, alerta, respiración.
2) Lista de banderas rojas (somnolencia marcada, rigidez, dificultad respiratoria, petequias, rechazo total de líquidos).
3) Recomendación orientativa de urgencia (ahora/hoy/observación) con justificación.
4) Checklist de datos que los padres pueden registrar (ingesta, pañales, temperatura, conducta).`,
    thumbnail: "",
  },

  {
    id: "saludtri-009",
    title: "Triage ginecológico: sangrado uterino anormal",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Preguntas clave para severidad, embarazo, anemia y urgencia.",
    prompt: `Actúa como médico. Triage por sangrado uterino anormal.

Inputs:
- Edad.
- Fecha de última menstruación.
- Posible embarazo sí/no.
- Cantidad de sangrado (toallas/hora).
- Dolor sí/no.

Genera:
1) Preguntas esenciales (15) para cuantificar sangrado y riesgo.
2) Banderas rojas (inestabilidad, síncope, embarazo ectópico, coágulos grandes, dolor severo).
3) Recomendación de urgencia y siguiente paso.
4) Qué información llevar a consulta (registro, medicamentos, pruebas previas).`,
    thumbnail: "",
  },

  {
    id: "saludtri-010",
    title: "Triage de salud mental: ataque de pánico vs urgencias",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Preguntas para diferenciar ansiedad de causas médicas y evaluar riesgo.",
    prompt: `Actúa como médico. Triage ante crisis de ansiedad/pánico.

Inputs:
- Síntomas (palpitaciones, disnea, opresión).
- Inicio y desencadenante.
- Antecedentes médicos.
- Uso de sustancias/cafeína.

Genera:
1) Preguntas para descartar causas médicas urgentes (dolor torácico típico, síncope, focalidad, fiebre, etc.).
2) Preguntas de seguridad (riesgo de autolesión, apoyo social).
3) Señales para urgencias inmediata.
4) Plan de contención inicial (no farmacológico) y seguimiento recomendado.`,
    thumbnail: "",
  },

  {
    id: "saludtri-011",
    title: "Triage para infección urinaria vs pielonefritis",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Detecta datos de infección alta y redirige a atención urgente cuando aplica.",
    prompt: `Actúa como médico. Triage urinario.

Inputs:
- Síntomas (disuria, urgencia, frecuencia).
- Fiebre sí/no.
- Dolor en costado/lumbar sí/no.
- Embarazo sí/no.

Genera:
1) Preguntas esenciales (12).
2) Checklist de infección alta/complicada.
3) Recomendación de urgencia (hoy vs programable) con razón.
4) Datos útiles: EGO/urocultivo si se pide, hidratación y señales de alarma.`,
    thumbnail: "",
  },

  {
    id: "saludtri-012",
    title: "Anamnesis de medicamentos y alergias (evitar errores)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Recolecta lista de fármacos, dosis, adherencia, reacciones y suplementos.",
    prompt: `Actúa como médico. Elicita medicación y alergias de forma completa.

Inputs:
- Lista parcial del paciente (si existe).
- Motivo de consulta.

Genera:
1) Preguntas para obtener: nombre, dosis, horario, motivo, quién lo indicó, adherencia.
2) Preguntas sobre OTC, suplementos, herbolaria, “remedios”.
3) Alergias: tipo de reacción, gravedad, fecha, sospecha real vs intolerancia.
4) Red flags de interacciones según el motivo de consulta (lista genérica).`,
    thumbnail: "",
  },

  {
    id: "saludtri-013",
    title: "Historia clínica breve para telemedicina (máxima eficiencia)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Formato corto para consulta remota: datos clave, alarmas y plan de escalamiento.",
    prompt: `Actúa como médico en telemedicina. Debes ser eficiente.

Inputs:
- Motivo de consulta.
- Edad/sexo.
- Comorbilidades.
- Acceso a toma de signos vitales sí/no.

Genera:
1) 10 preguntas indispensables (ordenadas).
2) 5 preguntas opcionales según respuesta.
3) “Si dice X → pregunta Y” (árbol simple de decisión en texto).
4) Cierre: resumen + cuándo urgencias + cuándo seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtri-014",
    title: "Anamnesis de dolor: escala, limitación y objetivos del paciente",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Estructura dolor en dimensiones clínicas y metas funcionales medibles.",
    prompt: `Actúa como médico. Elicita historia de dolor de forma completa.

Inputs:
- Zona y tipo de dolor.
- Tiempo de evolución.
- Tratamientos previos.

Genera:
1) Preguntas para: intensidad (0–10), calidad, irradiación, periodicidad, desencadenantes.
2) Impacto funcional (qué cosas dejó de hacer).
3) Objetivo del paciente (qué sería “mejorar” para él).
4) Banderas rojas del dolor (neurológicas, fiebre, peso, trauma).`,
    thumbnail: "",
  },

  {
    id: "saludtri-015",
    title: "Triage respiratorio: tos (aguda vs crónica) + banderas rojas",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Clasifica tos por duración y detecta señales de alarma de forma estructurada.",
    prompt: `Actúa como médico. Triage por tos.

Inputs:
- Duración de la tos.
- Fiebre sí/no.
- Dolor torácico sí/no.
- Expectoración (color/sangre).
- Contactos/enfermedades recientes.

Genera:
1) Preguntas clave (15) separadas en: aguda (<3 semanas) vs subaguda/crónica.
2) Red flags (hemoptisis, pérdida de peso, disnea, saturación baja, dolor pleurítico).
3) Recomendación de urgencia y siguiente paso.`,
    thumbnail: "",
  },

  {
    id: "saludtri-016",
    title: "Triage dermatológico: erupción / rash (descartar urgencias)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Preguntas para identificar alergia severa, infección grave y necesidad de atención inmediata.",
    prompt: `Actúa como médico. Triage por rash.

Inputs:
- Inicio y distribución.
- Prurito/dolor.
- Fiebre sí/no.
- Medicamentos nuevos sí/no.
- Dificultad respiratoria sí/no.

Genera:
1) Preguntas esenciales (15).
2) Lista de urgencias: anafilaxia, Stevens-Johnson sospecha (lesiones mucosas), petequias con fiebre, celulitis extensa.
3) Clasificación orientativa y siguiente paso.`,
    thumbnail: "",
  },

  {
    id: "saludtri-017",
    title: "Triage musculoesquelético: lesión aguda (esguince/trauma)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Evalúa mecanismo, incapacidad funcional, neurovascular y necesidad de RX.",
    prompt: `Actúa como médico. Triage por lesión aguda.

Inputs:
- Zona lesionada.
- Mecanismo (torsión, golpe, caída).
- Capacidad de apoyar o mover.
- Hinchazón/deformidad.

Genera:
1) Preguntas esenciales (12).
2) Checklist neurovascular (sensibilidad, color, temperatura, pulso distal).
3) Señales para urgencias y cuándo indicar imagen.
4) Recomendación de manejo inicial general (RICE/medidas) sin prescribir dosis.`,
    thumbnail: "",
  },

  {
    id: "saludtri-018",
    title: "Anamnesis familiar y social enfocada a riesgo",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Estructura antecedentes familiares y sociales útiles sin hacerlo eterno.",
    prompt: `Actúa como médico. Recolecta antecedentes familiares/sociales relevantes.

Inputs:
- Motivo de consulta.
- Edad.
- Diagnósticos actuales.

Genera:
1) Preguntas familiares “alto impacto” (cardio, diabetes, cánceres clave, trombosis).
2) Social: tabaco, alcohol, sustancias, ocupación, sueño, actividad, dieta.
3) Indicadores de riesgo y cómo cambian el plan (lista corta).`,
    thumbnail: "",
  },

  {
    id: "saludtri-019",
    title: "Triage para mareo/síncope (descartar causas graves)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Diferencia vértigo, presíncope y causas cardiacas/neurológicas con preguntas dirigidas.",
    prompt: `Actúa como médico. Triage por mareo/síncope.

Inputs:
- Tipo (giro del entorno, inestabilidad, desmayo).
- Desencadenante (posición, esfuerzo).
- Duración.
- Medicamentos.

Genera:
1) Preguntas críticas (16).
2) Banderas rojas (dolor torácico, palpitaciones, focalidad, trauma, embarazo).
3) Recomendación de urgencia y siguiente paso.`,
    thumbnail: "",
  },

  {
    id: "saludtri-020",
    title: "Triage para dolor de garganta (evitar antibióticos innecesarios)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Recolecta datos tipo Centor y red flags de absceso/peritonsilar.",
    prompt: `Actúa como médico. Triage por odinofagia/faringitis.

Inputs:
- Días de evolución.
- Fiebre sí/no.
- Tos sí/no.
- Exudado/amígdalas sí/no.
- Ganglios dolorosos sí/no.

Genera:
1) Preguntas esenciales (12).
2) Signos de alarma (voz apagada, trismus, desviación de úvula, dificultad para tragar saliva).
3) Clasificación orientativa y si requiere evaluación hoy.`,
    thumbnail: "",
  },

  {
    id: "saludtri-021",
    title: "Anamnesis de síntomas crónicos (convertir caos en estructura)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Organiza síntomas múltiples en línea de tiempo y patrones para avanzar en diagnóstico diferencial.",
    prompt: `Actúa como médico. El paciente tiene muchos síntomas crónicos.

Inputs:
- Lista de síntomas.
- Tiempo total de evolución.
- Estudios previos.

Genera:
1) Línea de tiempo (primer síntoma → cambios).
2) Agrupación por sistemas.
3) 10 preguntas para encontrar patrón (relación con comida, ciclo, sueño, estrés, ejercicio).
4) 5 banderas rojas y 5 datos tranquilizadores.
5) Próximos pasos para clarificar (sin prescribir).`,
    thumbnail: "",
  },

  {
    id: "saludtri-022",
    title: "Triage de heridas: corte/quemadura/mordedura",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Evalúa profundidad, sangrado, infección y necesidad de vacuna/tétanos (sin indicar esquema exacto).",
    prompt: `Actúa como médico. Triage de heridas.

Inputs:
- Tipo (corte/quemadura/mordedura).
- Tiempo desde el evento.
- Profundidad/área.
- Dolor, enrojecimiento, pus, fiebre.
- Estado de vacunación antitetánica (si se sabe).

Genera:
1) Preguntas esenciales (14).
2) Señales de urgencia (sangrado que no cede, pérdida de sensibilidad, quemadura extensa, mordedura profunda en mano/cara, signos sistémicos).
3) Manejo inicial seguro (limpieza, cobertura, elevación) sin recomendaciones peligrosas.
4) Cuándo reevaluar y qué vigilar.`,
    thumbnail: "",
  },

  {
    id: "saludtri-023",
    title: "Triage cardiometabólico: presión alta detectada en casa",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Distingue urgencia hipertensiva de lectura aislada, y qué datos recabar.",
    prompt: `Actúa como médico. Triage por presión alta en casa.

Inputs:
- Lecturas (PA y hora).
- Síntomas (dolor de cabeza, visión borrosa, dolor torácico, disnea).
- Medicación antihipertensiva actual.

Genera:
1) Preguntas sobre técnica de medición (posición, reposo, brazalete).
2) Síntomas de daño agudo (red flags).
3) Recomendación de urgencia vs seguimiento.
4) Protocolo de registro de PA por 3–7 días (en texto).`,
    thumbnail: "",
  },

  {
    id: "saludtri-024",
    title: "Anamnesis de hábitos (alimentación/actividad) sin juicio",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Recolecta hábitos de forma amable y útil para plan clínico.",
    prompt: `Actúa como médico. Pregunta hábitos sin juzgar.

Inputs:
- Diagnóstico o objetivo (peso, lípidos, glucosa, HTA).
- Preferencias culturales de comida.
- Tiempo disponible.

Genera:
1) Preguntas para entender patrón real (24h recall + fines de semana).
2) Preguntas de actividad física (tipo, frecuencia, barreras).
3) Sueño y estrés (2–3 preguntas cada uno).
4) Resumen en 6 bullets: “lo que ya haces bien” + “oportunidades”.`,
    thumbnail: "",
  },

  {
    id: "saludtri-025",
    title: "Triage para diarrea/vómito: hidratación y riesgo",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Detecta deshidratación, sangre, fiebre alta y necesidad de atención urgente.",
    prompt: `Actúa como médico. Triage por gastroenteritis.

Inputs:
- Días de síntomas.
- Nº de evacuaciones/vómitos.
- Sangre en heces sí/no.
- Fiebre sí/no.
- Capacidad de ingerir líquidos.

Genera:
1) Preguntas esenciales (14).
2) Señales de deshidratación por gravedad.
3) Señales de alarma (sangre, dolor severo localizado, fiebre persistente, inmunosupresión).
4) Recomendación de urgencia y próximos pasos.`,
    thumbnail: "",
  },

  {
    id: "saludtri-026",
    title: "Anamnesis orientada a trombosis/TEP (riesgo) sin alarmismo",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Preguntas clave sobre inmovilización, cirugía, anticonceptivos y síntomas asociados.",
    prompt: `Actúa como médico. Anamnesis de riesgo trombótico.

Inputs:
- Síntoma principal (disnea, dolor torácico, pierna hinchada).
- Edad.
- Situaciones recientes (viajes, cirugía, parto, inmovilización).

Genera:
1) Preguntas de riesgo (12).
2) Síntomas asociados críticos.
3) Lista de signos para urgencias inmediata.
4) Cómo explicarle al paciente por qué preguntas esto (3 frases).`,
    thumbnail: "",
  },

  {
    id: "saludtri-027",
    title: "Triage para dolor ocular/visión borrosa",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Evalúa síntomas visuales que pueden ser urgencia (glaucoma, desprendimiento, queratitis).",
    prompt: `Actúa como médico. Triage ocular.

Inputs:
- Dolor ocular sí/no.
- Pérdida visual súbita sí/no.
- Fotofobia sí/no.
- Secreción sí/no.
- Uso de lentes de contacto sí/no.

Genera:
1) Preguntas esenciales (12).
2) Banderas rojas para urgencias (pérdida súbita, halos, dolor severo, trauma, contacto + dolor).
3) Recomendación de acción (urgencias/oftalmo hoy/seguimiento).`,
    thumbnail: "",
  },

  {
    id: "saludtri-028",
    title: "Triage de alergia: urticaria vs anafilaxia",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Identifica compromiso respiratorio/circulatorio y decide urgencia inmediata.",
    prompt: `Actúa como médico. Triage de reacción alérgica.

Inputs:
- Síntomas (ronchas, hinchazón, dificultad respiratoria).
- Exposición probable (alimento, medicamento, picadura).
- Tiempo desde exposición.

Genera:
1) Preguntas esenciales (12).
2) Criterios de posible anafilaxia (simple).
3) Señales de urgencia inmediata y qué hacer.
4) Si no es anafilaxia: qué vigilar y seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludtri-029",
    title: "Triage endocrino: hipoglucemia/hiperglucemia en casa",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Guía preguntas seguras para síntomas y valores extremos sin dar tratamiento específico.",
    prompt: `Actúa como médico. Triage de glucosa en casa.

Inputs:
- Lectura(s) de glucosa y hora.
- Síntomas (temblor, sudoración, confusión, sed, vómito).
- Tratamiento actual (insulina/hipoglucemiantes).

Genera:
1) Preguntas esenciales (12).
2) Señales de urgencia (alteración mental, vómito persistente, respiración anormal, deshidratación severa).
3) Recomendación de acción (urgencias hoy vs contacto con médico vs vigilancia) con razón.`,
    thumbnail: "",
  },

  {
    id: "saludtri-030",
    title: "Anamnesis para dolor articular: inflamatorio vs mecánico",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Preguntas para definir rigidez matutina, articulaciones afectadas y síntomas sistémicos.",
    prompt: `Actúa como médico. Historia de dolor articular.

Inputs:
- Articulaciones afectadas.
- Duración.
- Rigidez matutina y duración.
- Hinchazón/calor sí/no.

Genera:
1) 12 preguntas clave para patrón inflamatorio vs mecánico.
2) Síntomas sistémicos a buscar (fiebre, pérdida de peso, rash).
3) Banderas rojas (monoartritis aguda, fiebre + articulación, incapacidad total).
4) Próximo paso recomendado (evaluación, estudios) sin prescribir.`,
    thumbnail: "",
  },

  {
    id: "saludtri-031",
    title: "Triage neurológico: debilidad/entumecimiento súbito",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Detecta posibles eventos neurológicos agudos y activa urgencia inmediata.",
    prompt: `Actúa como médico. Triage neurológico por debilidad/entumecimiento.

Inputs:
- Inicio (hora exacta).
- Zonas afectadas.
- Alteración del habla/visión sí/no.
- Dolor de cabeza severo sí/no.

Genera:
1) Preguntas críticas (12) enfocadas a EVC y emergencias.
2) Señales para urgencias inmediata (claras).
3) Mensaje al paciente explicando por qué es urgente (3 frases).`,
    thumbnail: "",
  },

  {
    id: "saludtri-032",
    title: "Triage obstétrico: dolor abdominal en embarazo",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Evalúa sangrado, movimientos fetales, contracciones y urgencias.",
    prompt: `Actúa como médico. Triage en embarazo.

Inputs:
- Semanas de gestación.
- Dolor y localización.
- Sangrado sí/no.
- Fiebre sí/no.
- Movimientos fetales (si aplica).

Genera:
1) Preguntas esenciales (14).
2) Banderas rojas (sangrado abundante, dolor intenso, fiebre, disminución de movimientos, pérdida de líquido).
3) Recomendación inmediata (urgencias hoy vs valoración prioritaria).`,
    thumbnail: "",
  },

  {
    id: "saludtri-033",
    title: "Anamnesis rápida para consulta de seguimiento (control)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Checklist para visitas de control: adherencia, efectos, objetivos y ajustes.",
    prompt: `Actúa como médico. Consulta de seguimiento.

Inputs:
- Diagnóstico en control.
- Tratamiento actual.
- Objetivo (ej. PA, A1c, síntomas).

Genera:
1) 10 preguntas clave para adherencia, efectos, cambios.
2) “Qué mejoró” vs “qué empeoró” (2 listas).
3) Señales de alarma entre consultas.
4) Próximos pasos y plan de seguimiento (general).`,
    thumbnail: "",
  },

  {
    id: "saludtri-034",
    title: "Triage en adultos mayores: caídas y riesgo",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Evalúa trauma, anticoagulantes, síncope y deterioro funcional.",
    prompt: `Actúa como médico. Triage por caída en adulto mayor.

Inputs:
- Edad.
- Cómo fue la caída.
- Golpe en cabeza sí/no.
- Anticoagulantes sí/no.
- Pérdida de conciencia sí/no.

Genera:
1) Preguntas esenciales (14).
2) Red flags para urgencias (cefalea intensa, vómito, somnolencia, dolor intenso, deformidad).
3) Evaluación orientativa de causa (mecánica vs síncope) con preguntas guía.
4) Próximo paso recomendado.`,
    thumbnail: "",
  },

  {
    id: "saludtri-035",
    title: "Triage para dolor de oído / otitis vs urgencias",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Estructura preguntas de severidad, fiebre, secreción, mastoiditis sospecha.",
    prompt: `Actúa como médico. Triage por dolor de oído.

Inputs:
- Edad.
- Fiebre sí/no.
- Secreción sí/no.
- Dolor al mover pabellón sí/no.

Genera:
1) Preguntas esenciales (12).
2) Señales de alarma (dolor severo + fiebre alta, inflamación detrás de oreja, vértigo intenso, parálisis facial).
3) Recomendación de urgencia y siguiente paso.`,
    thumbnail: "",
  },

  {
    id: "saludtri-036",
    title: "Anamnesis de infecciones recurrentes (buscar patrón)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Convierte episodios repetidos en hipótesis: exposición, comorbilidades, inmunidad.",
    prompt: `Actúa como médico. Infecciones recurrentes.

Inputs:
- Tipo de infecciones (respiratorias, urinarias, piel).
- Frecuencia y fechas aproximadas.
- Tratamientos previos.

Genera:
1) Línea de tiempo de episodios (estructura).
2) 12 preguntas para factores predisponentes (diabetes, tabaquismo, higiene, anatomía, sexualidad, trabajo).
3) Señales para evaluación más profunda (inmunodeficiencia, pérdida de peso, fiebre prolongada).
4) Próximos pasos generales.`,
    thumbnail: "",
  },

  {
    id: "saludtri-037",
    title: "Triage para dolor dental / infección odontogénica",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Identifica absceso, celulitis facial y compromiso de vía aérea.",
    prompt: `Actúa como médico. Triage dental.

Inputs:
- Dolor dental.
- Hinchazón facial sí/no.
- Fiebre sí/no.
- Dificultad para abrir la boca o tragar sí/no.

Genera:
1) Preguntas esenciales (12).
2) Banderas rojas (trismus, disnea, fiebre alta, hinchazón rápida, compromiso ocular).
3) Recomendación: urgencias vs odontólogo hoy.
4) Mensaje al paciente explicando la prioridad.`,
    thumbnail: "",
  },

  {
    id: "saludtri-038",
    title: "Triage para dolor pélvico (mujer): descartar urgencias",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Evalúa embarazo ectópico, torsión ovárica, EPI con preguntas clave.",
    prompt: `Actúa como médico. Triage por dolor pélvico.

Inputs:
- Edad.
- Fecha de última regla.
- Embarazo posible sí/no.
- Fiebre sí/no.
- Flujo vaginal anormal sí/no.

Genera:
1) Preguntas esenciales (15).
2) Red flags (dolor súbito severo, síncope, sangrado, fiebre alta, embarazo).
3) Recomendación de urgencia y siguiente paso.`,
    thumbnail: "",
  },

  {
    id: "saludtri-039",
    title: "Triage para dolor testicular (urgencia tiempo-dependiente)",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Detecta torsión testicular y prioriza derivación inmediata.",
    prompt: `Actúa como médico. Triage de dolor testicular.

Inputs:
- Inicio (hora exacta).
- Dolor súbito/gradual.
- Náuseas/vómito sí/no.
- Trauma sí/no.
- Fiebre/disuria sí/no.

Genera:
1) Preguntas críticas (12).
2) Señales de torsión (súbito, intenso, náusea, elevación testicular) en lenguaje simple.
3) Recomendación clara de urgencias inmediata si aplica (sin ambigüedad).
4) Mensaje al paciente explicando por qué el tiempo importa.`,
    thumbnail: "",
  },

  {
    id: "saludtri-040",
    title: "Resumen de triage listo para pegar en nota clínica",
    area: "Salud & Clínica",
    category: "Triage y anamnesis",
    summary:
      "Convierte respuestas del paciente en un resumen clínico breve y útil.",
    prompt: `Actúa como médico. Resume triage en formato clínico.

Inputs:
- Motivo de consulta.
- Respuestas a preguntas clave.
- Signos vitales si hay.

Genera:
1) Resumen en 6–10 líneas, clínico, sin adjetivos.
2) Positivos y negativos relevantes.
3) Evaluación de riesgo (bajo/moderado/alto) con una frase.
4) Plan inmediato recomendado (sin prescribir).`,
    thumbnail: "",
  },
];
