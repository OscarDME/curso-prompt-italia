// src/lib/prompts/text/salud-clinica-explicacion-al-paciente.js

export const textPromptsSaludClinicaExplicacionAlPaciente = [
  {
    id: "saludexp-001",
    title: "Explicación de diagnóstico probable (sin afirmar) en lenguaje simple",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Traduce hallazgos clínicos a una explicación clara, sin alarmismo y sin prometer diagnósticos definitivos.",
    prompt: `Actúa como médico y explica al paciente lo que podría estar pasando, usando lenguaje sencillo.

Inputs:
- Síntoma principal.
- Duración y evolución.
- Hallazgos relevantes (si existen).
- Qué le preocupa al paciente (miedo principal).

Genera:
1) Explicación en 6–10 frases (nivel secundaria).
2) Diferencia entre: "lo más probable" vs "lo que debemos descartar".
3) Qué datos faltan y por qué importan.
4) Próximos pasos (observación, consulta, estudios) con razón clara.
5) Cierre empático + 3 frases que reduzcan ansiedad sin minimizar.`,
    thumbnail: "",
  },

  {
    id: "saludexp-002",
    title: "Entregar resultados de laboratorio: cómo interpretarlos sin confundir",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Explica resultados comunes con contexto, evitando tecnicismos y alarmas innecesarias.",
    prompt: `Actúa como médico. Explica resultados de laboratorio al paciente.

Inputs:
- Lista de resultados con rangos (ej. glucosa, HbA1c, colesterol, TSH, hemograma).
- Síntomas del paciente (si hay).
- Antecedentes relevantes.

Genera:
1) Resumen general (1 párrafo).
2) Tabla en texto (no markdown) con: prueba → qué mide → si está alto/bajo → significado común.
3) Qué cosas pueden alterar el resultado (errores frecuentes).
4) Qué acciones se recomiendan (hábitos / seguimiento / repetir estudio).
5) Señales por las que sí sería urgente consultar.`,
    thumbnail: "",
  },

  {
    id: "saludexp-003",
    title: "Explicación de un plan de tratamiento paso a paso (adherencia)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Convierte indicaciones clínicas en un plan de acción diario para mejorar adherencia.",
    prompt: `Actúa como médico. Explica un plan de tratamiento para que el paciente lo cumpla.

Inputs:
- Diagnóstico o problema (ej. gastritis, hipertensión, asma).
- Medicamentos indicados (nombre/dosis/horario) si aplica.
- Cambios de estilo de vida recomendados.
- Restricciones del paciente (trabajo, horarios, presupuesto).

Genera:
1) Explicación breve del objetivo del tratamiento (2–3 frases).
2) Rutina diaria en bullets (mañana/tarde/noche).
3) “Trucos” de adherencia (recordatorios, asociación a hábitos).
4) Efectos esperados vs efectos secundarios comunes (sin alarmismo).
5) Qué hacer si olvida una dosis (general, sin dar instrucciones peligrosas).
6) Cuándo volver y qué signos obligan a consultar antes.`,
    thumbnail: "",
  },

  {
    id: "saludexp-004",
    title: "Explicar riesgo y pronóstico (sin asustar) usando analogías simples",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Comunica riesgo de forma comprensible con ejemplos cotidianos y enfoque en control.",
    prompt: `Actúa como médico. Tienes que explicar riesgo/probabilidad al paciente.

Inputs:
- Problema de salud.
- Factores de riesgo presentes.
- Dudas o miedos del paciente.

Genera:
1) Explicación en lenguaje simple sin porcentajes complicados.
2) Una analogía cotidiana adecuada (no infantil).
3) Qué puede controlar el paciente (3–5 acciones).
4) Qué no puede controlar (para liberar culpa).
5) Plan de seguimiento y por qué el seguimiento reduce riesgos.`,
    thumbnail: "",
  },

  {
    id: "saludexp-005",
    title: "Explicación de 'banderas rojas' y cuándo ir a urgencias",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Lista clara y priorizada de signos de alarma con instrucciones accionables.",
    prompt: `Actúa como médico. Explica al paciente qué señales significan urgencia.

Inputs:
- Síntoma o diagnóstico probable.
- Edad y comorbilidades.
- Contexto (vive solo, acceso a transporte, etc.).

Genera:
1) 6–10 banderas rojas (en orden de gravedad).
2) Qué hacer exactamente ante cada una (ej. “acudir a urgencias hoy mismo”).
3) Qué NO hacer (errores comunes).
4) Mensaje final calmado: “no es para asustarte, es para cuidarte”.`,
    thumbnail: "",
  },

  {
    id: "saludexp-006",
    title: "Explicar por qué NO se necesitan antibióticos (resistencia)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Responde a la expectativa del paciente con empatía y educación clara.",
    prompt: `Actúa como médico. El paciente pide antibiótico pero no está indicado.

Inputs:
- Síntoma principal (ej. resfriado, bronquitis aguda, faringitis viral).
- Tiempo de evolución.
- Qué espera el paciente (“quiero algo fuerte”).

Genera:
1) Validación empática (1–2 frases).
2) Explicación breve virus vs bacteria (simple).
3) Riesgos reales de antibióticos innecesarios (3 puntos).
4) Qué sí ayuda (plan sintomático general y autocuidado).
5) Señales que sí indicarían reevaluación o posible antibiótico.`,
    thumbnail: "",
  },

  {
    id: "saludexp-007",
    title: "Explicar un estudio de imagen (RX/US/TAC/RM) sin tecnicismos",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Describe qué se busca con el estudio, preparación y qué esperar del resultado.",
    prompt: `Actúa como médico. Explica un estudio de imagen al paciente.

Inputs:
- Estudio solicitado (RX/US/TAC/RM).
- Motivo y sospecha clínica.
- Preocupaciones del paciente (radiación, claustrofobia, costo).

Genera:
1) Qué es el estudio y qué información da (en simple).
2) Por qué se pidió (objetivo clínico).
3) Qué esperar el día del estudio (pasos, duración).
4) Riesgos/precauciones relevantes (sin alarmismo).
5) Qué significan resultados “normales” vs “hallazgo” y próximos pasos.`,
    thumbnail: "",
  },

  {
    id: "saludexp-008",
    title: "Explicar un diagnóstico crónico (HTA/DM) con enfoque motivacional",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Comunica diagnóstico crónico y plan de control sin culpa, resaltando ganancias rápidas.",
    prompt: `Actúa como médico con enfoque de entrevista motivacional.

Inputs:
- Diagnóstico (HTA/DM/dislipidemia).
- Valores recientes (PA, HbA1c, LDL).
- Barreras del paciente (tiempo, comida, ejercicio, estrés).

Genera:
1) Qué significa el diagnóstico en 1 párrafo.
2) Por qué es importante controlarlo (beneficios concretos).
3) 3 cambios pequeños (micro-hábitos) que impacten en 2 semanas.
4) Plan simple de seguimiento (qué medir y cuándo).
5) Mensaje sin culpas + refuerzo de autoeficacia.`,
    thumbnail: "",
  },

  {
    id: "saludexp-009",
    title: "Explicar dolor: diferencia entre daño y sensibilidad (educación)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Ayuda a pacientes con dolor persistente a entender el dolor sin catastrofizar.",
    prompt: `Actúa como médico. Explica el dolor sin asustar al paciente.

Inputs:
- Zona del dolor.
- Tiempo de evolución.
- Qué estudios previos han salido normales (si aplica).
- Miedos del paciente (ej. “me voy a quedar inválido”).

Genera:
1) Explicación simple: dolor ≠ siempre daño (sin invalidar).
2) Qué factores lo amplifican (sueño, estrés, inactividad).
3) Qué acciones suelen bajar el dolor (movimiento graduado, calor, hábitos).
4) Señales que sí indicarían alarma y reevaluación.`,
    thumbnail: "",
  },

  {
    id: "saludexp-010",
    title: "Explicar 'seguimiento' y por qué no es 'me ignoraron'",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Reduce frustración cuando el plan es observar y reevaluar.",
    prompt: `Actúa como médico. Explica por qué el plan es seguimiento/observación.

Inputs:
- Síntoma.
- Hallazgos tranquilizadores.
- Tiempo recomendado de observación.
- ¿Qué le frustra al paciente?

Genera:
1) 5–7 frases claras.
2) Qué cosas pueden cambiar en el tiempo que vuelven el diagnóstico más claro.
3) Qué debe registrar el paciente (diario simple).
4) Cuándo volver antes de tiempo (banderas rojas).`,
    thumbnail: "",
  },

  {
    id: "saludexp-011",
    title: "Explicar efectos secundarios comunes vs peligrosos (sin pánico)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Comunica seguridad del medicamento: qué es esperado y qué no.",
    prompt: `Actúa como médico. Explica efectos secundarios de un tratamiento.

Inputs:
- Medicamento (nombre y para qué se usa).
- Dosis y horario.
- Contexto del paciente (alergias, embarazo, edad).

Genera:
1) Efectos comunes (3–6) y cómo manejarlos de forma general.
2) Efectos raros pero peligrosos (2–4) y qué hacer si ocurren.
3) Consejos para tolerarlo mejor (con comida, hidratación, horarios).
4) Señales para suspender y consultar (con redacción clara).`,
    thumbnail: "",
  },

  {
    id: "saludexp-012",
    title: "Explicar por qué se solicita consulta con especialista (interconsulta)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Justifica la derivación sin hacer sentir al paciente ‘grave’ o abandonado.",
    prompt: `Actúa como médico. Explica una referencia a especialista.

Inputs:
- Motivo de interconsulta.
- Qué se ha intentado hasta ahora.
- Qué duda clínica queda.

Genera:
1) Explicación en 1 párrafo: objetivo de la consulta.
2) Qué preguntas llevará el especialista (2–4).
3) Qué debe llevar el paciente (estudios, lista de síntomas).
4) Qué puede ocurrir después (posibles pasos) sin prometer.`,
    thumbnail: "",
  },

  {
    id: "saludexp-013",
    title: "Explicar un diagnóstico 'funcional' (ej. colon irritable) con legitimidad",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Evita que el paciente sienta que ‘todo está en su cabeza’.",
    prompt: `Actúa como médico. Explica un diagnóstico funcional (ej. colon irritable, dispepsia funcional).

Inputs:
- Síntomas principales.
- Estudios normales (si los hay).
- Disparadores identificados (estrés, alimentos, etc.).

Genera:
1) Explicación que valide síntomas como reales.
2) Qué significa que estudios estén normales (buen pronóstico).
3) Qué mecanismos pueden contribuir (motilidad, sensibilidad, eje intestino-cerebro) en lenguaje simple.
4) Plan de manejo por capas: hábitos, dieta, apoyo, seguimiento.
5) Banderas rojas para reevaluar.`,
    thumbnail: "",
  },

  {
    id: "saludexp-014",
    title: "Explicar una infección común y su curso esperado (timeline)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Da un ‘timeline’ realista para síntomas y recuperación, evitando reconsultas por ansiedad.",
    prompt: `Actúa como médico. Explica el curso esperado de una infección común.

Inputs:
- Tipo (respiratoria, GI, urinaria, piel).
- Día de evolución actual.
- Síntomas predominantes.

Genera:
1) Timeline día a día (o por rangos) de lo esperado.
2) Qué síntomas pueden persistir sin ser peligro (ej. tos 2–3 semanas).
3) Qué signos indican complicación.
4) Cuidados generales seguros.`,
    thumbnail: "",
  },

  {
    id: "saludexp-015",
    title: "Explicar dolor torácico no cardiaco (cuando es probable) sin invalidar",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Maneja ansiedad y explica causas frecuentes cuando no hay signos de alarma.",
    prompt: `Actúa como médico. Explica dolor torácico probablemente no cardiaco, manteniendo seguridad.

Inputs:
- Características del dolor.
- Hallazgos tranquilizadores (si existen).
- Preocupación del paciente.

Genera:
1) Qué hace que NO parezca una emergencia cardiaca (sin garantizar).
2) Causas frecuentes (músculo-esquelético, reflujo, ansiedad) con pistas.
3) Plan de autocuidado y seguimiento.
4) Banderas rojas claras.`,
    thumbnail: "",
  },

  // --- completamos hasta 40 ---
  {
    id: "saludexp-016",
    title: "Explicar resultado 'incidental' en una imagen (hallazgo casual)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Explica hallazgos incidentales comunes y cómo se decide si requieren seguimiento.",
    prompt: `Actúa como médico. Explica un hallazgo incidental.

Inputs:
- Hallazgo (texto del reporte).
- Estudio (TAC/RM/US).
- Síntomas del paciente (si hay).

Genera:
1) Qué significa “incidental” (simple).
2) Qué tan común es (sin inventar estadísticas; habla cualitativamente).
3) Qué criterios suelen definir seguimiento vs no.
4) Próximo paso recomendado (vigilancia, repetir, especialista).`,
    thumbnail: "",
  },

  {
    id: "saludexp-017",
    title: "Explicar por qué un síntoma puede ser por deshidratación",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Conecta síntomas (mareo, taquicardia, fatiga) con hidratación de forma práctica.",
    prompt: `Actúa como médico. Explica deshidratación y su relación con síntomas.

Inputs:
- Síntomas.
- Ingesta de líquidos aproximada.
- Pérdidas (diarrea, vómito, ejercicio, calor).
- Signos vitales si existen.

Genera:
1) Explicación simple del mecanismo.
2) Cómo confirmar en casa (signos/indicadores).
3) Plan práctico de hidratación general y cuándo consultar.`,
    thumbnail: "",
  },

  {
    id: "saludexp-018",
    title: "Explicar gastritis/reflujo y cambios dietéticos realistas",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Educación breve + lista de ajustes de alimentación con alto impacto.",
    prompt: `Actúa como médico. Explica reflujo/gastritis en lenguaje simple.

Inputs:
- Síntomas (ardor, regurgitación, dolor epigástrico).
- Horarios de comida.
- Consumo de café/alcohol/picante.
- Medicación actual.

Genera:
1) Explicación del reflujo/gastritis (simple).
2) 8 ajustes dietéticos realistas (prioriza los 3 más impactantes).
3) Hábitos posturales (horario, elevación de cabecera).
4) Banderas rojas (pérdida de peso, vómito con sangre, anemia, disfagia).`,
    thumbnail: "",
  },

  {
    id: "saludexp-019",
    title: "Explicar asma: qué es, qué dispara y qué significa control",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Definición clara de asma, disparadores y plan general de control.",
    prompt: `Actúa como médico. Explica asma para un paciente.

Inputs:
- Síntomas (sibilancias, tos nocturna, disnea).
- Desencadenantes sospechados.
- Medicación actual si existe.

Genera:
1) Qué pasa en las vías respiratorias (simple).
2) Diferencia entre “alivio” y “control” (sin prescribir).
3) Disparadores comunes y cómo reducirlos.
4) Plan de acción general: qué vigilar y cuándo consultar urgente.`,
    thumbnail: "",
  },

  {
    id: "saludexp-020",
    title: "Explicar EPOC: curso, metas y autocuidado",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Comunicación clara en pacientes fumadores o exfumadores sin culpa.",
    prompt: `Actúa como médico. Explica EPOC.

Inputs:
- Síntomas y limitaciones.
- Historia de tabaquismo.
- Exacerbaciones recientes.

Genera:
1) Explicación simple de qué es EPOC.
2) Qué metas son realistas (mejorar tolerancia, reducir crisis).
3) Acciones prioritarias (dejar tabaco, vacunas, actividad).
4) Señales de exacerbación y urgencia.`,
    thumbnail: "",
  },

  {
    id: "saludexp-021",
    title: "Explicar anemia: por qué da síntomas y qué investigar",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Traduce anemia a síntomas cotidianos y plan de evaluación general.",
    prompt: `Actúa como médico. Explica anemia al paciente.

Inputs:
- Hb/hematocrito (si se tiene).
- Síntomas (fatiga, palidez, disnea).
- Menstruación/sangrados/ dieta.

Genera:
1) Qué es anemia (simple).
2) Por qué causa síntomas.
3) Causas comunes por grupos (pérdida, falta de hierro, crónica) sin diagnosticar.
4) Próximos pasos típicos (estudios y seguimiento).
5) Banderas rojas (síncope, dolor torácico, sangrado activo).`,
    thumbnail: "",
  },

  {
    id: "saludexp-022",
    title: "Explicar tiroides (TSH/T4) y síntomas típicos",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Aclara qué significa hipo/hipertiroidismo sin tecnicismos.",
    prompt: `Actúa como médico. Explica función tiroidea y resultados.

Inputs:
- TSH, T4 (si hay).
- Síntomas (peso, ánimo, palpitaciones, frío/calor).
- Medicación y antecedentes.

Genera:
1) Qué hace la tiroides (simple).
2) Qué significa TSH alta/baja de forma intuitiva.
3) Relación con síntomas.
4) Qué suele hacerse después (confirmar, repetir, tratamiento/seguimiento).`,
    thumbnail: "",
  },

  {
    id: "saludexp-023",
    title: "Explicar dolor lumbar: por qué el movimiento ayuda",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Reduce miedo al movimiento y fomenta recuperación con seguridad.",
    prompt: `Actúa como médico. Explica lumbalgia mecánica y manejo general.

Inputs:
- Inicio (carga/posición).
- Irradiación sí/no.
- Red flags ausentes/presentes.

Genera:
1) Explicación simple del dolor mecánico.
2) Por qué reposo absoluto empeora (simple).
3) Qué tipo de movimiento suele ayudar (general).
4) Banderas rojas neurológicas para urgencias.`,
    thumbnail: "",
  },

  {
    id: "saludexp-024",
    title: "Explicar colesterol y riesgo cardiovascular (sin culpar)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Comunica LDL/HDL/triglicéridos y acciones de alto impacto.",
    prompt: `Actúa como médico. Explica perfil de lípidos al paciente.

Inputs:
- LDL, HDL, TG.
- Historia familiar y factores de riesgo.
- Hábitos actuales.

Genera:
1) Explicación simple de cada componente.
2) Qué significa “riesgo” y por qué importa a largo plazo.
3) 5 acciones de alto impacto (alimentación/actividad/sueño).
4) Seguimiento recomendado y motivación.`,
    thumbnail: "",
  },

  {
    id: "saludexp-025",
    title: "Explicar por qué un síntoma puede ser por estrés (sin invalidar)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Integra mente-cuerpo de forma respetuosa y valida síntomas reales.",
    prompt: `Actúa como médico. Explica relación estrés-síntomas sin decir “es psicológico”.

Inputs:
- Síntomas físicos.
- Contexto de estrés.
- Estudios normales (si aplica).

Genera:
1) Validación: “tu síntoma es real”.
2) Explicación del eje estrés-cuerpo (simple).
3) Plan de manejo: hábitos + seguimiento + cuándo reevaluar.
4) 3 técnicas prácticas de regulación (respiración, pausa, sueño).`,
    thumbnail: "",
  },

  {
    id: "saludexp-026",
    title: "Explicar un ECG 'normal' y qué NO descarta",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Evita falsa tranquilidad o falsa alarma: comunica límites del estudio.",
    prompt: `Actúa como médico. Explica un ECG normal.

Inputs:
- Motivo por el que se tomó ECG.
- Síntomas actuales.
- Factores de riesgo.

Genera:
1) Qué mira el ECG.
2) Qué significa que sea normal.
3) Qué NO descarta (explicado con cuidado).
4) Qué sigue (observación, estudios adicionales o seguimiento) según síntomas.`,
    thumbnail: "",
  },

  {
    id: "saludexp-027",
    title: "Explicar por qué duele más de noche (inflamación vs mecánico)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Ayuda a interpretar patrones de dolor sin auto-diagnóstico.",
    prompt: `Actúa como médico. Explica patrones de dolor día/noche.

Inputs:
- Zona.
- Patrón (nocturno, matutino, con movimiento).
- Rigidez y duración.
- Síntomas sistémicos.

Genera:
1) Explicación simple de patrones típicos (mecánico vs inflamatorio) sin diagnosticar.
2) Qué datos ayudarían a aclarar.
3) Cuándo sí es alarma (fiebre, pérdida de peso, déficits).`,
    thumbnail: "",
  },

  {
    id: "saludexp-028",
    title: "Explicar vacunación: beneficios, efectos comunes y mitos",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Comunicación calmada y basada en seguridad para dudas de vacunas.",
    prompt: `Actúa como médico. Explica una vacuna recomendada para el paciente.

Inputs:
- Vacuna (influenza, COVID, tétanos, neumococo, VPH, etc.).
- Edad y comorbilidades.
- Dudas del paciente.

Genera:
1) Beneficios principales (2–4).
2) Efectos secundarios comunes (qué esperar).
3) Señales raras para consultar.
4) Respuesta a 3 mitos frecuentes con lenguaje respetuoso.`,
    thumbnail: "",
  },

  {
    id: "saludexp-029",
    title: "Explicar higiene del sueño para insomnio (plan práctico)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Da recomendaciones accionables sin moralina ni perfeccionismo.",
    prompt: `Actúa como médico. Explica higiene de sueño.

Inputs:
- Hora habitual de dormir/despertar.
- Consumo de cafeína/alcohol.
- Siestas sí/no.
- Estrés.

Genera:
1) 8 reglas prácticas (prioriza 3 primeras).
2) Rutina de 30 minutos pre-sueño (paso a paso).
3) Qué hacer si no se duerme en 20–30 min.
4) Cuándo evaluar causas médicas (apnea, depresión, tiroides).`,
    thumbnail: "",
  },

  {
    id: "saludexp-030",
    title: "Explicar dolor de cabeza: migraña vs tensional (educación)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Ayuda al paciente a reconocer patrones y disparadores.",
    prompt: `Actúa como médico. Explica migraña vs cefalea tensional.

Inputs:
- Características del dolor.
- Síntomas asociados (náusea, fotofobia).
- Frecuencia/mes.
- Uso de analgésicos.

Genera:
1) Explicación simple de ambos tipos.
2) Disparadores comunes y cómo identificarlos.
3) Importancia de evitar sobreuso de analgésicos (explicado fácil).
4) Banderas rojas para urgencias.`,
    thumbnail: "",
  },

  {
    id: "saludexp-031",
    title: "Explicar dolor abdominal funcional vs alarmas GI",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Aclara por qué a veces no hay una ‘lesión’ visible y cómo se maneja.",
    prompt: `Actúa como médico. Explica dolor abdominal recurrente sin alarmas.

Inputs:
- Patrón del dolor.
- Relación con comidas/estrés/evacuación.
- Estudios previos.

Genera:
1) Explicación simple (validando).
2) Estrategias prácticas: dieta, fibra, hidratación, rutina.
3) Qué observar (diario de síntomas).
4) Alarmas GI (sangrado, fiebre, pérdida de peso, anemia, nocturno).`,
    thumbnail: "",
  },

  {
    id: "saludexp-032",
    title: "Explicar infección urinaria: síntomas, cuidados y prevención",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Educación clara para cistitis no complicada + alarmas.",
    prompt: `Actúa como médico. Explica infección urinaria (cistitis) al paciente.

Inputs:
- Síntomas.
- Episodios previos sí/no.
- Embarazo sí/no.
- Fiebre/dolor lumbar sí/no.

Genera:
1) Qué pasa y por qué arde (simple).
2) Qué ayuda (hidratación, medidas).
3) Prevención (hábitos).
4) Señales que sugieren infección “arriba” (pielonefritis) y urgencia.`,
    thumbnail: "",
  },

  {
    id: "saludexp-033",
    title: "Explicar un resultado de HbA1c y metas realistas",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Convierte HbA1c en un concepto fácil (promedio) y define próximos pasos.",
    prompt: `Actúa como médico. Explica HbA1c.

Inputs:
- HbA1c.
- Glucosas capilares (si hay).
- Tratamiento actual.
- Dificultades del paciente.

Genera:
1) Qué es HbA1c (promedio de 2–3 meses).
2) Qué significa el valor actual (cualitativo).
3) 3 acciones con impacto (comidas, movimiento, sueño).
4) Plan de seguimiento y medición simple.`,
    thumbnail: "",
  },

  {
    id: "saludexp-034",
    title: "Explicar por qué el ejercicio es parte del tratamiento (sin regaño)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Motiva con beneficios inmediatos y plan mínimo viable.",
    prompt: `Actúa como médico. Explica actividad física como tratamiento.

Inputs:
- Diagnóstico (HTA, DM, ansiedad, dolor lumbar, etc.).
- Estado actual (sedentario, lesiones).
- Barreras (tiempo, dolor, vergüenza).

Genera:
1) Beneficios a corto plazo (7–14 días) y a largo plazo.
2) Plan mínimo viable (10–15 min/día) con progresión semanal.
3) Cómo hacerlo seguro (calentamiento, señales para parar).
4) Mensaje motivacional realista.`,
    thumbnail: "",
  },

  {
    id: "saludexp-035",
    title: "Explicar sobrepeso/obesidad como condición médica (sin estigma)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Enfoque compasivo: biología, ambiente, hábitos y metas sostenibles.",
    prompt: `Actúa como médico. Habla de peso sin estigmatizar.

Inputs:
- IMC o peso/talla (si aplica).
- Comorbilidades.
- Objetivo del paciente.

Genera:
1) Explicación sin culpas: por qué el cuerpo regula peso.
2) Metas realistas (salud > estética).
3) 5 acciones sostenibles por orden de impacto.
4) Seguimiento y señales de trastorno alimentario para considerar apoyo.`,
    thumbnail: "",
  },

  {
    id: "saludexp-036",
    title: "Explicar dolor menstrual (dismenorrea) y cuándo preocuparse",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Diferencia dolor común de señales de endometriosis/alarma.",
    prompt: `Actúa como médico. Explica dolor menstrual.

Inputs:
- Intensidad y evolución.
- Si interfiere con actividades.
- Sangrado abundante sí/no.
- Dolor entre periodos o al tener relaciones (si aplica).

Genera:
1) Explicación simple de dismenorrea.
2) Medidas generales de alivio y hábitos.
3) Señales que sugieren evaluación (endometriosis, anemia, etc.).
4) Plan de seguimiento.`,
    thumbnail: "",
  },

  {
    id: "saludexp-037",
    title: "Explicar por qué se recomienda fisioterapia",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Aumenta adherencia: explica propósito, expectativas y tiempos.",
    prompt: `Actúa como médico. Explica indicación de fisioterapia.

Inputs:
- Diagnóstico (lumbalgia, hombro, rodilla, esguince).
- Dolor actual.
- Tiempo de evolución.

Genera:
1) Qué hace la fisioterapia y por qué funciona.
2) Qué esperar en 2 semanas vs 6 semanas.
3) Importancia de ejercicios en casa (sin culpar).
4) Señales para reevaluar si empeora.`,
    thumbnail: "",
  },

  {
    id: "saludexp-038",
    title: "Explicar un plan de prevención (chequeo) por edad y riesgo",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Checklist sencillo de prevención (vacunas, tamizajes) adaptado a contexto.",
    prompt: `Actúa como médico. Explica plan de prevención/tamizaje.

Inputs:
- Edad/sexo.
- Antecedentes familiares.
- Hábitos (tabaco, alcohol).
- Comorbilidades.

Genera:
1) 5–10 acciones preventivas priorizadas.
2) Por qué cada una importa (1 frase c/u).
3) Frecuencia de seguimiento (anual, cada 3–5 años, etc. en términos generales).
4) Mensaje motivacional centrado en longevidad y calidad de vida.`,
    thumbnail: "",
  },

  {
    id: "saludexp-039",
    title: "Explicar por qué se recomienda bajar sal/azúcar (mecanismo simple)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Conecta consumo con síntomas/valores y propone sustituciones realistas.",
    prompt: `Actúa como médico. Explica reducción de sal y/o azúcar.

Inputs:
- Diagnóstico (HTA, prediabetes, edema, etc.).
- Hábitos actuales.
- Barreras culturales y presupuesto.

Genera:
1) Explicación simple del mecanismo (por qué afecta al cuerpo).
2) 7 sustituciones realistas (comida real, supermercado).
3) ‘Regla de 3’: 3 cambios que dan 80% del resultado.
4) Seguimiento: qué medir y cuándo.`,
    thumbnail: "",
  },

  {
    id: "saludexp-040",
    title: "Mensaje postconsulta: resumen + próximos pasos (WhatsApp/email)",
    area: "Salud & Clínica",
    category: "Explicación al paciente",
    summary:
      "Resumen breve para enviar al paciente: plan, seguimiento y alarmas.",
    prompt: `Actúa como médico. Redacta un mensaje postconsulta para el paciente.

Inputs:
- Problema principal.
- Plan acordado (hábitos/estudios/medicación general).
- Fecha sugerida de seguimiento.
- Banderas rojas.

Genera:
1) Mensaje corto (máx 1200 caracteres) con tono cálido y claro.
2) Lista de próximos pasos (máx 5 bullets).
3) Señales de alarma (máx 5 bullets).
4) Cierre empático.`,
    thumbnail: "",
  },
];
