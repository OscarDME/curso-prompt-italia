// src/lib/prompts-data.js

// 🎯 Prompts de TEXTO
// src/lib/prompts-data.js

export const textPrompts = [
  // 🧠 ESTRATEGIA / NEGOCIO
  {
    id: "mapa-oportunidades-negocio-ia",
    title: "Mapa de oportunidades de negocio con IA",
    category: "Negocio",
    summary:
      "Detecta oportunidades de negocio usando IA a partir de tu situación actual, habilidades y audiencia.",
    prompt: `Actúa como un consultor de negocios experto en inteligencia artificial.

Te voy a dar tres cosas:
1) Mi situación actual: [descríbete: qué haces, qué vendes o quieres vender].
2) Mis habilidades principales: [lista de habilidades].
3) El tipo de público al que quiero ayudar: [describe a tu audiencia].

Con esta información, haz lo siguiente:
- Lista de 10 oportunidades de negocio donde la IA pueda potenciar mis resultados.
- Para cada oportunidad, indica:
  • Qué problema resuelve.
  • Qué tipo de contenido podría crear para validarla.
  • Qué tipo de producto o servicio podría ofrecer.
- Al final, recomienda las 3 oportunidades con mayor potencial a corto plazo y explica por qué.`,
    thumbnail: "",
  },

  {
    id: "producto-digital-desde-cero",
    title: "Diseñar un producto digital desde cero",
    category: "Negocio",
    summary:
      "Crea la estructura de un infoproducto o curso completo basado en tu experiencia.",
    prompt: `Actúa como un diseñador de infoproductos experto.

Quiero crear un producto digital sobre: [tema].

Usa esta estructura:
1) Definición del avatar: quién es, qué quiere y qué le duele.
2) Transformación prometida: de qué punto A a qué punto B lo voy a llevar.
3) Nombre tentativo del producto (5 opciones).
4) Módulos y lecciones:
   - Propón entre 4 y 7 módulos.
   - Para cada módulo, su objetivo y de 3 a 7 lecciones con título.
5) Bonus sugeridos:
   - 3–5 ideas de bonus que aumenten el valor percibido.
6) Siguiente paso:
   - Qué tipo de contenido debo crear para atraer a este avatar hacia el producto.`,
    thumbnail: "",
  },

  // 📱 CONTENIDO PARA REDES
  {
    id: "calendario-contenido-30-dias",
    title: "Calendario de contenido para 30 días",
    category: "Redes sociales",
    summary:
      "Genera un calendario de 30 días de contenido para una red social específica.",
    prompt: `Eres estratega de contenidos para redes sociales.

Objetivo: crear un calendario de contenido de 30 días para [red social: Instagram, TikTok, YouTube Shorts, etc.] sobre [tema/nicho].

Necesito:
- 30 ideas de contenido, una por día.
- Para cada idea, dame:
  • Tipo de pieza (reel, carrusel, live, story, post estático, etc.).
  • Título o hook principal.
  • Idea central del contenido en 2–3 líneas.
  • Llamado a la acción sugerido.

Organiza la respuesta en formato tabla o lista numerada (Día 1, Día 2, etc.).`,
    thumbnail: "",
  },

  {
    id: "guion-reel-educativo",
    title: "Guion para reel educativo",
    category: "Redes sociales",
    summary:
      "Crea un guion corto para explicar un concepto complejo de forma sencilla.",
    prompt: `Actúa como guionista de contenido educativo corto para redes.

Objetivo: explicar el concepto de [concepto] de forma simple, en un reel de máximo 60 segundos.

Estructura del guion:
1) Hook en los primeros 3 segundos (1 frase).
2) Presentación rápida (quién soy y por qué importa).
3) Explicación del concepto:
   - Divide la explicación en 3 pasos o ideas clave.
   - Usa ejemplos concretos.
4) Cierre:
   - Resumen en una frase.
   - Llamado a la acción (seguir la cuenta, guardar el vídeo, compartir, etc.).

Devuélvelo como texto listo para leer frente a cámara, en tono cercano y conversacional.`,
    thumbnail: "",
  },

  {
    id: "hilos-twitter-linkedin",
    title: "Hilo para Twitter o LinkedIn",
    category: "Redes sociales",
    summary:
      "Genera un hilo completo a partir de una idea central o una experiencia.",
    prompt: `Eres un creador experto en escribir hilos para Twitter / LinkedIn.

Tema del hilo: [tema o idea principal].

Necesito:
- Un título o primer tweet/post muy llamativo.
- Entre 7 y 12 tweets/posts.
- En cada tweet/post:
  • Idea clara y directa.
  • Ejemplo o mini historia cuando tenga sentido.
  • Lenguaje sencillo y práctico.

Termina el hilo con un cierre que:
- Invite a seguir la cuenta.
- Proponga guardar o compartir el contenido.
- Opcional: menciona un recurso gratuito o lead magnet si aplica.`,
    thumbnail: "",
  },

  // 💸 ANUNCIOS Y VENTAS
  {
    id: "facebook-ads-multiples-variantes",
    title: "Variaciones de anuncios para Facebook / Instagram Ads",
    category: "Anuncios",
    summary:
      "Crea múltiples variaciones de copy para anuncios enfocados en conversión.",
    prompt: `Actúa como copywriter especializado en anuncios de pago.

Producto/servicio: [describe qué vendes].  
Audiencia ideal: [describe a quién va dirigido].  
Objetivo: [clics, leads, ventas directas, etc.].

Genera:
1) 5 ideas de ángulos diferentes para el anuncio.
2) Para cada ángulo, crea:
   - 1 versión corta (máx. 2 líneas).
   - 1 versión media.
   - 1 versión larga.

Incluye:
- 3 propuestas de títulos/headlines por ángulo.
- 3 llamados a la acción posibles al final.

Usa lenguaje claro, persuasivo y centrado en beneficios, no en características.`,
    thumbnail: "",
  },

  {
    id: "pagina-ventas-estructura",
    title: "Estructura para página de ventas",
    category: "Ventas",
    summary:
      "Saca un esquema completo para escribir una página de ventas sin quedarte en blanco.",
    prompt: `Actúa como especialista en páginas de venta de alto rendimiento.

Producto: [describe brevemente el producto o servicio].  
Público objetivo: [describe a quién va dirigido].

Quiero una estructura detallada para la página de ventas que incluya:
1) Título principal (headline) con promesa fuerte.
2) Subtítulo que refuerce la promesa.
3) Sección “esta página es para ti si…”.
4) Historia o contexto: cómo llegué a crear esta solución.
5) Presentación del problema y consecuencias de no resolverlo.
6) Presentación de la solución (producto) y qué incluye.
7) Beneficios concretos y transformaciones posibles.
8) Pruebas sociales sugeridas (testimonios, casos, etc.).
9) Garantía (si la hay) explicada de forma clara.
10) Llamado a la acción principal.
11) Preguntas frecuentes sugeridas (5–7).

No escribas aún la página final; solo dame la estructura con ejemplos de frases que podría usar en cada sección.`,
    thumbnail: "",
  },

  {
    id: "oferta-irresistible",
    title: "Construir una oferta irresistible",
    category: "Ventas",
    summary:
      "Define una oferta clara con promesa, elementos, bonus y garantía.",
    prompt: `Eres un estratega de ofertas para infoproductores y creadores.

Quiero construir una oferta irresistible para este producto: [describe producto/servicio].

Por favor:
1) Define la promesa principal en una frase.
2) Describe la transformación antes / después de usar el producto.
3) Lista los elementos principales de la oferta (lo que incluye).
4) Propón 3–5 ideas de bonus complementarios.
5) Redacta una garantía fuerte (opcional, si aplica).
6) Sugiere 3 formas de presentar el precio (anclaje, comparaciones, etc.).
7) Redacta 3 versiones de “elevator pitch” de 2–3 líneas para presentar la oferta en redes o en vídeo.`,
    thumbnail: "",
  },

  // ✉️ EMAIL MARKETING
  {
    id: "secuencia-bienvenida-email",
    title: "Secuencia de bienvenida por email",
    category: "Email",
    summary:
      "Crea una secuencia de emails de bienvenida para nuevos suscriptores.",
    prompt: `Actúa como experto en email marketing.

Objetivo: crear una secuencia de bienvenida para nuevas personas que entran a mi lista sobre [tema/nicho].

Necesito:
- De 4 a 7 correos.
- Para cada correo:
  • Asunto (3 opciones).
  • Objetivo del correo.
  • Esquema del contenido (bloques principales).
  • Llamado a la acción principal.

Estructura sugerida:
- Email 1: Bienvenida y qué pueden esperar.
- Email 2: Historia y autoridad.
- Email 3: Valor educativo (tips o mini-guía).
- Email 4: Presentación suave de la oferta.
- Email 5+: Objeciones, testimonios, urgencia ética (si aplica).`,
    thumbnail: "",
  },

  {
    id: "email-relaciones-valor",
    title: "Emails de valor para mantener relación",
    category: "Email",
    summary:
      "Ideas de emails tipo contenido para no solo vender, sino educar y aportar valor.",
    prompt: `Eres un estratega de email marketing centrado en relaciones a largo plazo.

Tema/nicho: [describe tu nicho].  
Tipo de público: [describe brevemente a tu audiencia].

Necesito:
- 10 ideas de emails de valor (no puramente de venta).
- Para cada idea:
  • Título tentativo del email.
  • Idea central.
  • Tipo de formato (historia, lista de tips, reflexión, caso de estudio, etc.).
  • Cómo podríamos conectar este contenido con una oferta sin ser agresivos.

El enfoque debe ser: educar, entretener y posicionarme como referencia en el tema.`,
    thumbnail: "",
  },

  // 🎓 EDUCACIÓN / PROGRAMAS
  {
    id: "disenar-clase-individual",
    title: "Diseñar una clase individual",
    category: "Educación",
    summary:
      "Organiza una sola clase con objetivo claro, índice y actividades.",
    prompt: `Actúa como diseñador instruccional.

Quiero estructurar una clase sobre: [tema de la clase].  
Duración aproximada: [minutos].

Devuélveme:
1) Objetivo principal de la clase (qué sabrá/habrá logrado el alumno al terminar).
2) Esquema del contenido dividido en secciones.
3) Ideas de ejemplos o demostraciones.
4) Actividades o ejercicios que el alumno pueda hacer durante o después de la clase.
5) Preguntas poderosas para reflexionar al final.
6) Sugerencia de material descargable (checklist, plantilla, etc.) que podría acompañar la clase.`,
    thumbnail: "",
  },

  {
    id: "feedback-tareas-alumnos",
    title: "Plantilla de feedback para tareas de alumnos",
    category: "Educación",
    summary:
      "Genera una estructura para dar retroalimentación clara y accionable.",
    prompt: `Actúa como mentor que da feedback constructivo.

Tipo de tarea: [describe el tipo de ejercicio/trabajo].  
Nivel de los alumnos: [principiante/intermedio/avanzado].

Genera una plantilla de feedback que incluya:
- Un inicio empático (validación del esfuerzo).
- Lo que está bien / fortalezas.
- Puntos específicos a mejorar.
- Recomendaciones concretas (pasos siguientes).
- Un cierre motivador.

Luego, dame un ejemplo de cómo usar esta plantilla con un caso ficticio.`,
    thumbnail: "",
  },

  // 🧩 PRODUCTIVIDAD / SISTEMAS PERSONALES
  {
    id: "sistema-contenidos-semana",
    title: "Sistema semanal de creación de contenido",
    category: "Productividad",
    summary:
      "Crea un sistema paso a paso para producir contenido de forma constante cada semana.",
    prompt: `Eres un consultor de productividad para creadores de contenido.

Objetivo: diseñar un sistema semanal para crear contenido constante sin quemarme.

Datos:
- Plataformas donde publico: [lista de plataformas].
- Tiempo que puedo dedicar por semana: [horas].
- Tipo de contenido principal: [vídeo, texto, carruseles, etc.].

Diseña:
1) Una rutina semanal dividida por días y bloques de tiempo.
2) Qué tareas hago en cada bloque (brainstorming, guiones, grabación, edición, publicación, análisis).
3) Cómo puedo reciclar una idea en varios formatos (ej: un vídeo largo → varios clips → posts de texto).
4) Checklist semanal para saber si “cumplí” el sistema.
5) Sugerencias para automatizar partes del proceso usando IA.`,
    thumbnail: "",
  },

  {
    id: "prompt-diario-reflexion",
    title: "Prompt diario de reflexión y enfoque",
    category: "Productividad",
    summary:
      "Usa IA como diario guiado para revisar tu día y ajustar tu enfoque.",
    prompt: `Quiero que actúes como un diario de reflexión guiada usando preguntas poderosas.

Cada vez que te escriba al final del día, respóndeme con:
1) 5 preguntas sobre:
   - Qué hice bien hoy.
   - Qué aprendí.
   - Qué puedo mejorar.
   - Qué me frenó.
   - De qué me siento agradecido.
2) Un mini-resumen de lo que percibes sobre mi situación actual (en base a mis respuestas).
3) 3 recomendaciones concretas para mañana, con foco en:
   - Priorizar lo importante.
   - Usar mejor mi energía.
   - Aprovechar la IA como apoyo (si aplica).

Haz las preguntas de forma conversacional, una a una, esperando mis respuestas.`,
    thumbnail: "",
  },

  // 🧬 MARCA PERSONAL / POSICIONAMIENTO
  {
    id: "propuesta-valor-marca-personal",
    title: "Definir propuesta de valor de marca personal",
    category: "Marca personal",
    summary: "Aclara qué haces, para quién y por qué deberían elegirte a ti.",
    prompt: `Actúa como consultor de marca personal.

Quiero definir mi propuesta de valor.  
Te doy esta información:
- Quién soy / qué hago actualmente: [texto].
- A quién quiero ayudar: [tipo de persona/negocio].
- Qué tipo de resultados quiero ayudarles a conseguir: [resultados].

Con esto:
1) Hazme 5–7 preguntas para profundizar.
2) Tras mis respuestas, crea:
   - Una frase corta de presentación (estilo bio).
   - Una versión expandida (2–3 frases).
   - 3 versiones de “ayudo a X a conseguir Y mediante Z”.
3) Sugiere 5 temas de contenido que refuercen esa propuesta de valor en redes y contenidos.`,
    thumbnail: "",
  },

  {
    id: "historia-origen-marca",
    title: "Historia de origen de tu marca",
    category: "Marca personal",
    summary:
      "Construye una historia de origen que conecte emocionalmente con tu audiencia.",
    prompt: `Eres storyteller profesional para marcas personales.

Objetivo: crear mi historia de origen (origin story) para usar en página web, charlas y redes.

Pídeme primero:
- 3 momentos clave de mi vida relacionados con lo que hago ahora.
- Una situación difícil o fracaso relevante.
- Un punto de inflexión donde decidí cambiar algo.
- Qué hago hoy y a quién ayudo.

Con eso, escribe:
1) Una versión corta (1 párrafo).
2) Una versión media (3–5 párrafos).
3) Una versión larga, tipo relato, que pueda usar en “Sobre mí” o en una masterclass.`,
    thumbnail: "",
  },
  {
    id: "lanzamiento-express-7-dias",
    title: "Lanzamiento express en 7 días",
    category: "Lanzamientos",
    summary:
      "Crea un plan de lanzamiento rápido de 7 días para vender o relanzar un producto.",
    prompt: `Actúa como estratega de lanzamientos.

Producto: [describe el producto].  
Precio aproximado: [precio].  
Audiencia: [describe a quién va dirigido].

Quiero un plan de lanzamiento express de 7 días que incluya:
- Objetivo de cada día.
- Tipo de contenido a publicar (redes, email, stories, etc.).
- Mensaje clave de cada pieza.
- Idea principal de llamada a la acción.

Devuelve la respuesta en formato tabla o lista: Día 1, Día 2, etc.`,
    thumbnail: "",
  },
  {
    id: "secuencia-calentar-audiencia",
    title: "Secuencia para calentar audiencia antes de vender",
    category: "Lanzamientos",
    summary:
      "Diseña una serie de contenidos para preparar a la audiencia antes de mostrar la oferta.",
    prompt: `Eres un estratega de contenido para lanzamientos.

Objetivo: calentar a mi audiencia antes de lanzar [producto/servicio].

Crea una secuencia de 10 contenidos que:
1) Rompan creencias limitantes.
2) Eduquen sobre el problema.
3) Muestren oportunidades.
4) Introduzcan mi solución sin vender aún de forma agresiva.

Para cada contenido indica:
- Tipo (post, reel, historia, email, live, etc.).
- Idea principal.
- Mensaje clave.
- Llamado a la acción suave (guardar, comentar, responder, etc.).`,
    thumbnail: "",
  },
  {
    id: "ofertas-fast-cash",
    title: "Ofertas rápidas de caja (Fast Cash)",
    category: "Lanzamientos",
    summary:
      "Genera ideas de ofertas rápidas para inyectar caja en tu negocio usando IA.",
    prompt: `Actúa como consultor de monetización rápida.

Contexto: tengo una audiencia de [tamaño y tipo de audiencia] y productos/servicios como: [lista].  

Quiero ideas de ofertas rápidas para generar caja en los próximos 7–14 días.

Devuélveme:
1) 7 ideas de ofertas fast cash.
2) Para cada una:
   - Qué incluyo exactamente.
   - Duración/alcance del servicio.
   - Precio sugerido (rango).
   - Cómo la presentaría en una historia o post.
   - A quién de mi audiencia le encaja mejor.`,
    thumbnail: "",
  },

  // 🎥 WEBINARS, MASTERCLASS Y CLASES EN VIVO
  {
    id: "guion-masterclass-venta",
    title: "Guion para masterclass con venta al final",
    category: "Webinar",
    summary:
      "Crea un guion estructurado para una clase en vivo que cierre con invitación a tu oferta.",
    prompt: `Eres especialista en guiones para masterclass que venden sin ser agresivas.

Tema de la masterclass: [tema].  
Producto que quiero ofrecer al final: [producto].

Crea un guion que incluya:
1) Introducción (quién soy y por qué deberían escucharme).
2) Agenda clara de la clase.
3) Historia corta que conecte con el problema de la audiencia.
4) 3–5 bloques de contenido fuerte (enseñanza real, no solo relleno).
5) Transición natural hacia la oferta.
6) Presentación de la oferta (beneficios, qué incluye, para quién es).
7) Manejo de 3 objeciones principales.
8) Cierre con llamado a la acción.

Devuelve el guion en puntos, con frases sugeridas que pueda adaptar.`,
    thumbnail: "",
  },
  {
    id: "plantilla-qna-final",
    title: "Plantilla para sesión de preguntas y respuestas",
    category: "Webinar",
    summary:
      "Ten una guía para manejar un Q&A al final de una clase o live sin desorden.",
    prompt: `Actúa como facilitador de sesiones en vivo.

Quiero una plantilla para manejar una sesión de preguntas y respuestas al final de mi clase sobre [tema].

Incluye:
- Frases para invitar a la audiencia a preguntar.
- Cómo priorizar preguntas (ej. más repetidas, más estratégicas).
- Cómo responder cuando no sé algo.
- Cómo reconducir preguntas muy largas o fuera de tema.
- Cómo enlazar algunas respuestas con mi oferta, sin sonar forzado.`,
    thumbnail: "",
  },

  // 📲 WHATSAPP / COMUNIDAD / DM
  {
    id: "mensajes-bienvenida-comunidad",
    title: "Mensajes de bienvenida para comunidad",
    category: "Comunidad",
    summary:
      "Crea mensajes de bienvenida listos para usar en WhatsApp, Telegram o Discord.",
    prompt: `Eres community manager de una comunidad de pago.

Tipo de comunidad: [describe la comunidad].  
Plataforma: [WhatsApp / Telegram / Discord].

Necesito:
- 3 versiones de mensaje de bienvenida para nuevos miembros.
- 1 mensaje fijado con reglas básicas y cómo aprovechar la comunidad.
- 3 recordatorios suaves para incentivar participación (ej. compartir wins, dudas, avances).

Estilo cercano, claro y motivador.`,
    thumbnail: "",
  },
  {
    id: "secuencia-follow-up-dm",
    title: "Secuencia de follow up por DM",
    category: "Comunidad",
    summary:
      "Crea una secuencia de mensajes privados para hacer seguimiento sin ser intenso.",
    prompt: `Actúa como closer que vende por mensajes privados con empatía.

Contexto:
- El lead mostró interés en [producto/servicio].
- Ya tuvimos un primer contacto, pero no cerró.

Quiero una secuencia de 5 mensajes de follow up para enviar por DM o WhatsApp, que:
- No sean agresivos.
- Mantengan la puerta abierta.
- Se enfoquen en ayudar y aclarar dudas.

Para cada mensaje dame:
- Momento sugerido (después de cuántos días).
- Texto del mensaje.
- Objetivo principal del mensaje.`,
    thumbnail: "",
  },

  // 🧾 PLANTILLAS Y SISTEMAS DE PROMPTS
  {
    id: "prompt-arquetipo-universal",
    title: "Prompt arquetipo para cualquier tarea",
    category: "Sistemas",
    summary:
      "Crea un mega prompt base que puedas reutilizar en cualquier contexto.",
    prompt: `Quiero que actúes como creador de prompts universales.

Diseña un "prompt arquetipo" que pueda usar para cualquier tarea, donde yo solo tenga que rellenar huecos.

El prompt debe incluir:
- Rol que tomará la IA (experto en X).
- Contexto de la tarea.
- Objetivo específico.
- Formato de respuesta deseado.
- Tono de comunicación.
- Restricciones o cosas que NO quiero.
- Posibilidad de iterar al final (sugerir mejoras sobre su propia respuesta).

Entrégame:
1) El prompt completo en formato plantilla con corchetes [así] para rellenar.
2) 3 ejemplos de uso: uno para contenido, uno para negocio y uno para vida personal.`,
    thumbnail: "",
  },
  {
    id: "sistema-mejorar-respuestas-ia",
    title: "Sistema para mejorar respuestas de la IA",
    category: "Sistemas",
    summary:
      "Ten un proceso paso a paso para ir afinando la respuesta de la IA hasta que quede brutal.",
    prompt: `Actúa como entrenador de usuarios de IA.

Objetivo: crear un sistema paso a paso para mejorar cualquier respuesta de la IA.

Necesito:
- Una lista de pasos que pueda seguir siempre que reciba una respuesta mediocre.
- Para cada paso:
  • Qué revisar en la respuesta.
  • Qué preguntar o especificar mejor en el siguiente mensaje.
  • Ejemplos de cómo reformular el prompt para obtener un mejor resultado.

Al final, genera un mini-prompt que pueda enviar a la IA diciendo: 
"Analiza tu propia respuesta y dime cómo podrías mejorarla siguiendo este sistema".`,
    thumbnail: "",
  },

  // 🧲 LEAD MAGNETS Y RECURSOS GRATUITOS
  {
    id: "idea-lead-magnet",
    title: "Ideas de lead magnet atractivo",
    category: "Leads",
    summary:
      "Genera ideas de recursos gratuitos que de verdad tu audiencia quiera descargar.",
    prompt: `Actúa como estratega de generación de leads.

Tema/nicho: [describe tu temática].  
Tipo de público: [describe a tu audiencia].  
Producto principal que quiero vender: [producto].

Genera:
1) 10 ideas de lead magnet (checklist, guía, plantilla, reto, etc.).
2) Para cada idea:
   - Título llamativo.
   - Problema que resuelve.
   - Qué incluye.
   - Cómo lo conectaría con mi producto principal.`,
    thumbnail: "",
  },
  {
    id: "guion-pagina-captura",
    title: "Guion para página de captura",
    category: "Leads",
    summary: "Esquema para escribir una página de captura clara y persuasiva.",
    prompt: `Eres especialista en landing pages de captura.

Lead magnet: [describe qué recurso vas a regalar].  
Audiencia objetivo: [describe a quién va dirigido].

Crea el guion de una página de captura que incluya:
1) Título fuerte centrado en el beneficio.
2) Subtítulo clarificador.
3) Lista corta de beneficios (3–5 bullets).
4) Imagen o mockup sugerido.
5) Frase de llamada a la acción para el botón.
6) Nota de tranquilidad sobre spam/privacidad.

No escribas el diseño en código, solo el texto y la estructura.`,
    thumbnail: "",
  },

  // 👩‍💻 SERVICIOS Y FREELANCE
  {
    id: "propuesta-servicio-freelance",
    title: "Propuesta profesional para servicios freelance",
    category: "Servicios",
    summary:
      "Crea una propuesta bien presentada para enviar a potenciales clientes.",
    prompt: `Actúa como consultor para freelancers.

Tipo de servicio: [copywriting, gestión de redes, edición de vídeo, etc.].  
Tipo de cliente: [ecommerce, infoproductor, negocio local, etc.].

Necesito un modelo de propuesta que incluya:
1) Portada / introducción.
2) Resumen del cliente y su situación (plantilla).
3) Objetivos del proyecto.
4) Alcance del trabajo (qué sí incluye y qué no).
5) Entregables y tiempos estimados.
6) Inversión / honorarios (estructura, aunque no montos).
7) Condiciones de trabajo (pagos, revisiones, etc.).
8) Cierre con llamado a la acción.

Entrega la propuesta en texto que pueda copiar a un doc o email.`,
    thumbnail: "",
  },
  {
    id: "respuesta-objeciones-cliente",
    title: "Respuestas a objeciones de clientes",
    category: "Servicios",
    summary:
      "Prepara respuestas para las objeciones típicas sobre precio, tiempo y resultados.",
    prompt: `Eres un negociador empático experto en servicios digitales.

Servicio: [describe tu servicio].  
Precio aproximado: [precio].  

Enumera las objeciones más comunes que me pueden poner, como:
- “Está caro”.
- “Ahora no es buen momento”.
- “Lo voy a pensar”.
- “Ya trabajo con otra persona”.
- “¿Y si esto no funciona?”.

Para cada objeción:
- Da 2 o 3 posibles respuestas.
- Mantén un tono calmado, profesional y sin presión exagerada.
- Incluye, cuando tenga sentido, preguntas de vuelta para entender mejor al cliente.`,
    thumbnail: "",
  },

  // 🧡 VIDA PERSONAL / DESARROLLO
  {
    id: "redefinir-objetivos-personales",
    title: "Redefinir objetivos personales con IA",
    category: "Desarrollo personal",
    summary:
      "Usa IA como guía para aclarar tus objetivos y dividirlos en pasos concretos.",
    prompt: `Quiero que actúes como coach de claridad personal.

Contexto: te voy a contar mi situación actual y algunos objetivos que tengo: [escribe tus objetivos].  

Con base en eso:
1) Ayúdame a reformular esos objetivos en versiones más claras y medibles.
2) Divide cada objetivo en pasos trimestrales, mensuales y semanales.
3) Señala posibles obstáculos y cómo anticiparlos.
4) Sugiere pequeños hábitos diarios o semanales que me acerquen a esos objetivos.`,
    thumbnail: "",
  },
  {
    id: "plan-fiesta-del-logro",
    title: "Plan para celebrar y reforzar logros",
    category: "Desarrollo personal",
    summary:
      "Crea un sistema para no solo trabajar, sino también celebrar y anclar avances.",
    prompt: `Actúa como coach de productividad sostenible.

Quiero un "plan de fiesta del logro" que me ayude a:
- Celebrar mis avances.
- No minimizar mis resultados.
- Mantener la motivación a largo plazo.

Diseña:
1) Un ritual semanal de revisión y celebración.
2) Ideas de recompensas pequeñas y grandes, según el tipo de logro.
3) Preguntas de reflexión para anclar lo que voy consiguiendo.
4) Un mini-prompt que pueda usar con la IA cada semana para revisar mis avances y planear la siguiente.`,
    thumbnail: "",
  },

  // 🛠 SOPORTE, FAQ Y DOCUMENTACIÓN
  {
    id: "faq-producto-digital",
    title: "Preguntas frecuentes para producto digital",
    category: "Soporte",
    summary:
      "Genera una lista de FAQs bien redactadas para tu curso, membresía o infoproducto.",
    prompt: `Eres especialista en soporte y experiencia de usuario.

Producto digital: [describe brevemente el curso, programa o membresía].  
Tipo de público: [describe a tu audiencia].

Crea:
1) Una lista de 15–20 preguntas frecuentes que un potencial cliente podría tener.
2) Respuestas claras, breves y tranquilizadoras para cada pregunta.
3) Señala cuáles son críticas y deben ir sí o sí en la página de ventas, y cuáles son complementarias (para un centro de ayuda).`,
    thumbnail: "",
  },
  {
    id: "mensaje-soporte-empatico",
    title: "Mensajes de soporte empáticos",
    category: "Soporte",
    summary:
      "Ten plantillas para responder a clientes con problemas técnicos o frustración.",
    prompt: `Actúa como agente de soporte empático en un negocio digital.

Necesito plantillas para responder a:
1) Cliente que no encuentra su acceso.
2) Cliente que no puede entrar a la plataforma.
3) Cliente que está frustrado porque “no le funciona”.
4) Cliente que quiere reembolso (cuando aplica la garantía).
5) Cliente que escribe fuera de horario.

Para cada situación, dame:
- 1 versión de respuesta corta.
- 1 versión más detallada.
Tono amable, claro y profesional, sin culpar al usuario.`,
    thumbnail: "",
  },
  // ➕ Más prompts de texto (añade estos al final de textPrompts)

  // 📝 BLOG / ARTÍCULOS / SEO
  {
    id: "post-blog-epico",
    title: "Post de blog épico en profundidad",
    category: "Blog",
    summary:
      "Genera un artículo largo y profundo que posicione y eduque de verdad a tu audiencia.",
    prompt: `Actúa como redactor senior especializado en contenidos long-form.

Tema del artículo: [tema principal].  
Audiencia: [describe a tu lector ideal].  
Objetivo: [atraer tráfico, educar, vender algo al final, etc.].

Estructura el artículo así:
1) Título muy atractivo con beneficio claro.
2) Introducción que:
   - Conecte con el problema del lector.
   - Explique qué va a aprender.
   - Cree curiosidad para seguir leyendo.
3) Índice de secciones.
4) Desarrollo:
   - Entre 4 y 7 secciones grandes.
   - Ejemplos concretos y casos cuando tenga sentido.
   - Mini-resúmenes al final de cada sección.
5) Cierre:
   - Resumen rápido de ideas clave.
   - Llamado a la acción (ej. descargar algo, suscribirse, contratar).

Texto en tono cercano pero profesional, evitando paja innecesaria.`,
    thumbnail: "",
  },

  {
    id: "batch-posts-blog",
    title: "Lluvia de ideas para 20 posts de blog",
    category: "Blog",
    summary:
      "Crea un listado de ideas de artículos alineados a tu nicho y producto principal.",
    prompt: `Eres estratega de contenidos SEO.

Nicho: [describe tu nicho].  
Producto principal: [qué vendes / quieres vender].

Genera 20 ideas de post de blog:
- Título tentativo.
- Intención de búsqueda (informativa, transaccional, etc.).
- 2–3 bullets de lo que se abordaría en el artículo.
- Menciona si encaja mejor como contenido top, middle o bottom of funnel.`,
    thumbnail: "",
  },

  // 🎭 STORYTELLING / HISTORIAS
  {
    id: "storytelling-3-actos",
    title: "Storytelling en 3 actos para contenido",
    category: "Storytelling",
    summary:
      "Crea historias en formato 3 actos para usar en posts, vídeos o emails.",
    prompt: `Actúa como guionista y storyteller.

Tema o mensaje que quiero transmitir: [tema].  
Tipo de contenido: [post, reel, email, etc.].

Crea una historia en 3 actos:
1) Acto 1: Situación inicial + problema.
2) Acto 2: Conflicto, intentos fallidos, descubrimientos.
3) Acto 3: Resolución y aprendizaje.

Después:
- Dame una versión corta (para reel/post).
- Una versión media (para email).
- Una frase resumen que pueda usar como quote.`,
    thumbnail: "",
  },

  {
    id: "testimonios-historias-clientes",
    title: "Convertir resultados en historias de clientes",
    category: "Storytelling",
    summary:
      "Convierte datos y resultados en historias de transformación para usar como prueba social.",
    prompt: `Eres experto en convertir casos de éxito en historias atractivas.

Te daré información de uno o varios clientes:
- Punto de partida.
- Qué hicieron contigo / con tu producto.
- Resultados logrados.

Con eso:
1) Crea una historia corta tipo “antes y después” (2–3 párrafos).
2) Crea una versión en formato bullet points (ideal para página de ventas).
3) Crea una versión estilo testimonio en primera persona (como si el cliente lo dijera).`,
    thumbnail: "",
  },

  // 🎬 UGC / ANUNCIOS NATIVOS / TESTIMONIOS EN VÍDEO
  {
    id: "ugc-script-anuncio",
    title: "Guion UGC para anuncio en vídeo",
    category: "Anuncios",
    summary:
      "Crea un guion tipo UGC (contenido generado por el usuario) para anuncios nativos.",
    prompt: `Actúa como guionista especializado en UGC para TikTok/Instagram Ads.

Producto: [qué se vende].  
Audiencia: [a quién va dirigido].

Genera un guion que incluya:
1) Hook inicial (primeros 3 segundos).
2) Presentación sencilla del “personaje”.
3) Problema que tenía antes.
4) Cómo descubrió el producto.
5) Qué pasó después de usarlo (beneficios específicos).
6) Llamado a la acción.

Tono natural, como si fuera una persona real grabando con su móvil.`,
    thumbnail: "",
  },

  {
    id: "ugc-testimonial-script",
    title: "Guion para testimonio en vídeo",
    category: "Anuncios",
    summary:
      "Plantilla para que tus clientes graben testimonios claros y creíbles.",
    prompt: `Eres experto en testimonios que convierten.

Quiero una plantilla para enviar a mis clientes y que graben un testimonio en vídeo sobre [producto/servicio].

Incluye:
- Guía de duración (ej. 60–90 segundos).
- Preguntas o frases guía que puedan responder:
  • Quién eres y a qué te dedicas.
  • Cómo estabas antes de [producto/servicio].
  • Qué te hizo probarlo.
  • Qué ha cambiado desde entonces (resultados concretos).
  • A quién se lo recomendarías y por qué.
- Un ejemplo de testimonio completo siguiendo esa estructura.`,
    thumbnail: "",
  },

  // 🛍 ECOMMERCE / PRODUCTOS
  {
    id: "descripcion-ficha-producto",
    title: "Descripción de ficha de producto",
    category: "Ecommerce",
    summary:
      "Genera descripciones de producto orientadas a beneficios, no solo características.",
    prompt: `Actúa como copywriter para ecommerce.

Te daré datos de un producto: [inserta características, usos, materiales, etc.].

Necesito:
1) Título optimizado (claro y atractivo).
2) Párrafo corto de descripción principal (beneficio clave).
3) Lista de beneficios (no solo características).
4) Bullets técnicos (características concretas).
5) Una mini sección “ideal para ti si…”`,
    thumbnail: "",
  },

  {
    id: "bundle-ofertas-ecommerce",
    title: "Ideas de bundles y ofertas para ecommerce",
    category: "Ecommerce",
    summary:
      "Crea paquetes de productos y ofertas que aumenten el valor medio del carrito.",
    prompt: `Eres consultor para ecommerce.

Tengo estos productos: [lista de productos].

Quiero:
1) 5 ideas de bundles (paquetes).
2) Para cada bundle:
   - Qué productos incluye.
   - Propuesta de nombre.
   - Beneficio principal percibido por el cliente.
   - Justificación del precio (no hace falta monto exacto, solo lógica).
3) 3 ideas de “ofertas progresivas” (ej. 2x1, compra X y llévate Y, etc.).`,
    thumbnail: "",
  },

  // 🎯 COPYS CORTOS / HOOKS / TITULARES
  {
    id: "hooks-multi-formato",
    title: "Generador de hooks para múltiples formatos",
    category: "Copy corto",
    summary:
      "Genera ganchos potentes para empezar vídeos, posts, emails o anuncios.",
    prompt: `Actúa como especialista en ganchos (hooks).

Tema: [tema principal].  
Audiencia: [describe brevemente].  
Formato: [vídeo corto, post, email, anuncio, etc.].

Genera:
- 10 hooks tipo “problema”.
- 10 hooks tipo “promesa/resultados”.
- 10 hooks tipo “historia/pregunta intrigante”.

Cada hook debe ser una sola frase, directa y llamativa.`,
    thumbnail: "",
  },

  {
    id: "titulares-landing-variaciones",
    title: "Variaciones de titulares para landing",
    category: "Copy corto",
    summary:
      "Crea múltiples opciones de título para testear en página de ventas o captura.",
    prompt: `Eres copywriter CRO (optimización de conversión).

Producto o lead magnet: [descríbelo brevemente].  
Audiencia: [quién es el avatar].

Genera:
- 10 titulares con enfoque en beneficio.
- 5 titulares con enfoque en dolor/problema.
- 5 titulares con enfoque en curiosidad.
- 5 subtítulos que acompañen a los mejores titulares.

Mantén los titulares cortos y claros, sin tecnicismos.`,
    thumbnail: "",
  },

  // 🧪 TESTING / EXPERIMENTOS / OPTIMIZACIÓN
  {
    id: "plan-experimentos-contenido",
    title: "Plan de experimentos de contenido",
    category: "Optimización",
    summary:
      "Diseña un plan para probar diferentes tipos de contenido y analizar resultados.",
    prompt: `Actúa como estratega de growth.

Objetivo: mejorar resultados de contenido sobre [tema/nicho] en [plataforma].

Crea un plan de experimentos que incluya:
1) Hipótesis a probar (ej. “si cambio X entonces pasará Y”).
2) Tipos de contenido a testear (formato, tono, duración, etc.).
3) Métricas a observar.
4) Duración mínima de cada test.
5) Cómo interpretar los resultados y decidir qué duplicar o descartar.`,
    thumbnail: "",
  },

  {
    id: "test-a-b-copys",
    title: "Test A/B de copys",
    category: "Optimización",
    summary:
      "Genera variaciones de copy para testear en anuncios, landings o emails.",
    prompt: `Eres especialista en experimentación de copy.

Texto base: [pega aquí el copy actual].

Genera:
- 5 variaciones centradas en beneficio.
- 5 variaciones centradas en urgencia/escasez (sin ser agresivo).
- 5 variaciones más emocionales / aspiracionales.

Para cada variación, indica:
- En qué contexto crees que funcionaría mejor (anuncio, landing, email).`,
    thumbnail: "",
  },

  // 🧩 NICHOS / AUDIENCIA / INVESTIGACIÓN
  {
    id: "mapa-dolor-audiencia",
    title: "Mapa de dolores y deseos de tu audiencia",
    category: "Investigación",
    summary:
      "Saca un mapa claro de dolores, miedos, deseos y objeciones de tu cliente ideal.",
    prompt: `Actúa como investigador de mercado.

Nicho: [tu nicho].  
Tipo de cliente ideal: [descríbelo].

Genera un mapa que incluya:
1) Dolores principales (qué les frustra hoy).
2) Miedos (a qué le tienen miedo si no lo resuelven).
3) Deseos (qué resultados sueñan con conseguir).
4) Objeciones típicas a la hora de comprar.
5) Palabras y expresiones que suelen usar (lenguaje real del cliente).`,
    thumbnail: "",
  },

  {
    id: "subnicho-oportunidades",
    title: "Detectar subnichos y micro-oportunidades",
    category: "Investigación",
    summary:
      "Encuentra ángulos y subnichos dentro de tu mercado donde puedas posicionarte más fácil.",
    prompt: `Eres consultor de posicionamiento en mercados saturados.

Nicho general: [ej. fitness, marketing, productividad, etc.].

Quiero:
1) Lista de posibles subnichos o segmentos más específicos dentro de ese nicho.
2) Para cada uno:
   - Qué problema específico resuelve.
   - Qué tipo de cliente tendría.
   - Qué tipo de contenidos funcionarían mejor para atraerlo.
3) Recomendación final: 3 subnichos con mejor balance entre demanda y competencia (según tu criterio).`,
    thumbnail: "",
  },

  // 🧮 PRICING / MODELOS DE NEGOCIO
  {
    id: "estrategia-precios-ofertas",
    title: "Estrategia de precios y versiones de oferta",
    category: "Negocio",
    summary:
      "Diseña diferentes niveles de precio y versiones de una misma oferta.",
    prompt: `Actúa como consultor de pricing.

Producto/servicio principal: [descríbelo].  
Público objetivo: [descríbelo].

Genera:
1) Una versión “lite” (entrada).
2) Una versión estándar.
3) Una versión premium.

Para cada versión:
- Qué incluye.
- Qué NO incluye.
- Cómo justificarías la diferencia de precio.
- Qué tipo de comprador es ideal para esa versión.`,
    thumbnail: "",
  },

  // 📚 FORMATO GUÍAS, CHECKLIST Y PLANTILLAS
  {
    id: "checklist-entrega-proyecto",
    title: "Checklist para entregar un proyecto",
    category: "Productividad",
    summary:
      "Crea una checklist reutilizable para no olvidarte de nada antes de entregar un trabajo.",
    prompt: `Actúa como gestor de proyectos.

Tipo de proyecto: [ej. lanzamiento, campaña de ads, consultoría, diseño, etc.].

Crea una checklist dividida en:
1) Antes de empezar (preparación).
2) Durante la ejecución.
3) Antes de entregar.
4) Después de entregar (follow up).

Cada punto debe ser claro y accionable, para poder marcarlo como hecho.`,
    thumbnail: "",
  },

  {
    id: "plantilla-brief-cliente",
    title: "Plantilla de brief para clientes",
    category: "Servicios",
    summary:
      "Ten un brief completo para entender lo que el cliente quiere antes de empezar.",
    prompt: `Eres project manager para servicios creativos.

Servicio: [ej. publicidad, branding, webs, contenido, etc.].

Crea una plantilla de brief que pueda enviar al cliente, que incluya secciones como:
- Sobre tu negocio.
- Sobre tu cliente ideal.
- Objetivos del proyecto.
- Qué se ha hecho antes.
- Qué te gusta y qué no te gusta (referencias).
- Plazos y prioridades.
- Presupuesto aproximado (si aplica).

Hazlo en formato preguntas, claro y fácil de rellenar.`,
    thumbnail: "",
  },
  // ➕ Más prompts de texto (añade estos al final de textPrompts)

  // 🎯 LANZAMIENTOS AVANZADOS
  {
    id: "lanzamiento-semana-silenciosa",
    title: "Lanzamiento con semana silenciosa",
    category: "Lanzamientos",
    summary:
      "Diseña un lanzamiento donde primero educas y calientas sin vender, y luego activas la oferta.",
    prompt: `Actúa como estratega de lanzamientos avanzados.

Producto: [describe tu producto].  
Duración del lanzamiento: [ej. 10 o 14 días].  
Plataformas principales: [ej. Instagram + Email].

Diseña un lanzamiento dividido en:
1) Semana silenciosa (sin venta directa):
   - Tipo de contenidos.
   - Mensaje clave de cada día.
   - Objetivo de cada pieza (romper creencias, educar, conectar, etc.).
2) Semana de oferta:
   - Mensajes de anuncio de apertura de carrito.
   - Contenidos de mitad de lanzamiento (casos, objeciones, beneficios).
   - Mensajes de cierre de carrito.

Organiza todo cronológicamente, con resumen de qué se publica cada día.`,
    thumbnail: "",
  },

  {
    id: "relanzamiento-clientes-antiguos",
    title: "Relanzamiento para clientes antiguos",
    category: "Lanzamientos",
    summary:
      "Crea una campaña específica para personas que ya te compraron antes.",
    prompt: `Eres consultor de retención y reactivación de clientes.

Contexto:
- Ya tengo clientes de [producto/servicio anterior].
- Quiero ofrecerles [nuevo producto, actualización o upsell].

Crea una mini campaña para clientes antiguos que incluya:
1) Email o mensaje de “reencuentro”.
2) Mensaje presentando la nueva oportunidad.
3) Razones por las que este producto es ideal para ellos (no para extraños).
4) 3 ideas de bonus exclusivos solo para ex clientes.
5) Secuencia de 3–5 mensajes (emails o DMs) para cerrar la campaña.`,
    thumbnail: "",
  },

  // 📚 CURSOS Y PROGRAMAS
  {
    id: "disenar-modulo-curso",
    title: "Diseñar un módulo completo de curso",
    category: "Educación",
    summary: "Crea la estructura interna de un módulo dentro de tu curso.",
    prompt: `Actúa como diseñador instruccional.

Curso: [tema general del curso].  
Módulo que queremos diseñar: [nombre o foco del módulo].

Para este módulo, diseña:
1) Objetivo específico del módulo.
2) De 3 a 7 lecciones:
   - Título.
   - Objetivo de la lección.
   - Puntos clave a cubrir.
3) Actividades o ejercicios aplicados.
4) Recomendación de recursos adicionales (plantillas, checklists, etc.).`,
    thumbnail: "",
  },

  {
    id: "plan-programa-grupal",
    title: "Plan para programa grupal de acompañamiento",
    category: "Educación",
    summary:
      "Structura un programa grupal con sesiones en vivo, soporte y tareas.",
    prompt: `Eres experto en programas grupales transformacionales.

Tema del programa: [tema principal].  
Duración: [ej. 4, 8 o 12 semanas].

Diseña:
1) Objetivo general del programa.
2) Frecuencia de las sesiones en vivo y duración.
3) Temas de cada sesión.
4) Tipo de soporte entre sesiones (grupo, comunidad, office hours).
5) Sistema de tareas y seguimiento.
6) Cómo medir el progreso de los participantes.`,
    thumbnail: "",
  },

  // 💬 COPY PARA PÁGINAS INTERNAS / PLATAFORMA
  {
    id: "mensaje-bienvenida-plataforma",
    title: "Mensaje de bienvenida para área de miembros",
    category: "Plataforma",
    summary:
      "Escribe el texto de bienvenida que verán tus alumnos al entrar al curso.",
    prompt: `Actúa como copywriter para cursos online.

Curso/Programa: [nombre].  
Avatar del alumno: [descríbelo].

Escribe:
1) Un mensaje de bienvenida corto (2–3 frases) para la parte superior del área de miembros.
2) Una versión extendida (1–2 párrafos) para la sección “Inicio”.
3) Incluye:
   - Agradecimiento.
   - Recordatorio de la promesa del curso.
   - Qué hacer primero (primeros pasos).`,
    thumbnail: "",
  },

  {
    id: "copy-seccion-primeros-pasos",
    title: "Copy para sección “Primeros pasos”",
    category: "Plataforma",
    summary:
      "Guía a tus alumnos en sus primeros minutos dentro de la plataforma.",
    prompt: `Eres especialista en onboarding de alumnos.

Curso/plataforma: [nombre].  

Crea el texto para una sección “Primeros pasos” que incluya:
1) Un párrafo de introducción (qué va a pasar ahora).
2) Una lista ordenada de 3–5 pasos iniciales (ej. ver la clase de bienvenida, unirse a la comunidad, guardar el enlace de acceso, etc.).
3) Un pequeño mensaje para gestionar expectativas (no es magia, requiere acción).
4) Un cierre motivador corto.`,
    thumbnail: "",
  },

  // 🧱 SOP INTERNOS (PROCESOS)
  {
    id: "sop-crear-contenido-semanal",
    title: "SOP: proceso para crear contenido semanal",
    category: "Sistemas",
    summary:
      "Documenta un proceso interno para crear contenido todas las semanas.",
    prompt: `Actúa como consultor de operaciones para creadores.

Quiero documentar un SOP (procedimiento estándar) para crear contenido semanal sobre [tema/nicho].

Diseña el SOP con:
1) Objetivo del proceso.
2) Frecuencia (qué días se hace cada cosa).
3) Pasos detallados:
   - Brainstorming de ideas.
   - Selección.
   - Guion/esquema.
   - Producción (grabación/escritura).
   - Edición.
   - Publicación.
   - Análisis semanal.
4) Roles (quién hace qué), incluso si soy solo yo ahora.
5) Checklist rápida resumen al final.`,
    thumbnail: "",
  },

  {
    id: "sop-atencion-clientes",
    title: "SOP: atención básica a clientes",
    category: "Sistemas",
    summary:
      "Crea un procedimiento estándar para responder mensajes de clientes.",
    prompt: `Eres especialista en soporte y operaciones.

Negocio: [tipo de negocio digital].  

Diseña un SOP (procedimiento estándar) para:
- Responder consultas de clientes.
- Resolver problemas comunes.
- Escalar los casos más complejos.

Incluye:
1) Canales de atención (email, WhatsApp, IG, etc.).
2) Tiempo máximo de respuesta recomendado.
3) Plantillas cortas para:
   - Recibir el mensaje.
   - Pedir más información.
   - Confirmar solución.
4) Cuándo escalar un caso y a quién (aunque por ahora sea yo mismo).`,
    thumbnail: "",
  },

  // 🧠 PSICOLOGÍA DEL CLIENTE / OBJECIONES
  {
    id: "mapa-objeciones-respuestas",
    title: "Mapa de objeciones y respuestas",
    category: "Ventas",
    summary:
      "Crea un mapa con objeciones frecuentes y cómo abordarlas en contenido y ventas.",
    prompt: `Actúa como estratega de ventas empático.

Producto: [describe tu producto].  
Audiencia: [describe a tu avatar].

1) Enumera 15 objeciones posibles (precio, tiempo, desconfianza, etc.).
2) Agrúpalas en categorías (dinero, tiempo, creencias, experiencias pasadas, etc.).
3) Para cada categoría:
   - Cómo puedo abordarla con contenido (ej. posts, emails, historias).
   - 2–3 ejemplos de frases para responder en llamadas o DMs.`,
    thumbnail: "",
  },

  {
    id: "creencias-limitantes-cliente",
    title: "Detectar creencias limitantes del cliente",
    category: "Investigación",
    summary:
      "Identifica creencias que frenan a tu audiencia y cómo transformarlas en tu contenido.",
    prompt: `Eres experto en psicología del consumidor.

Nicho: [tu nicho].  
Cliente ideal: [descríbelo].

Genera:
1) 10 creencias limitantes que pueda tener tu cliente ideal.
2) Para cada creencia:
   - Cómo se expresa en una frase que el cliente diría.
   - Qué verdad útil hay detrás (desde su punto de vista).
   - Cómo podría reencuadrarse en tu contenido (nuevo punto de vista).`,
    thumbnail: "",
  },

  // 🎨 PROMPTS PARA CREAR PROMPTS (META)
  {
    id: "generador-variantes-prompt",
    title: "Generador de variantes de un mismo prompt",
    category: "Sistemas",
    summary:
      "Crea un sistema para generar múltiples versiones de un prompt original.",
    prompt: `Actúa como experto en ingeniería de prompts.

Te daré un prompt original: [pega aquí tu prompt].

Quiero que:
1) Analices su objetivo.
2) Generes 5 variantes:
   - Una más corta.
   - Una más detallada.
   - Una enfocada en un tono más formal.
   - Una más creativa/relajada.
   - Una optimizada para máxima claridad.
3) Expliques en una línea para qué contexto usarías cada versión.`,
    thumbnail: "",
  },

  {
    id: "prompt-audit",
    title: "Auditoría y mejora de prompts",
    category: "Sistemas",
    summary: "Usa IA para revisar tus prompts y sugerir cómo mejorarlos.",
    prompt: `Quiero que actúes como auditor de prompts.

Te voy a pegar un prompt que uso normalmente.  
Tu tarea es:
1) Explicar qué intenta conseguir el prompt.
2) Señalar posibles problemas: falta de contexto, poca claridad, objetivos confusos.
3) Proponer una versión mejorada del prompt.
4) Dar 3 consejos generales para seguir mejorándolo a futuro.

Al final, dime:
“Si quieres, ahora pégame otro prompt y repetimos el proceso”.`,
    thumbnail: "",
  },

  // 📈 ESCALAR / ESCENARIO FUTURO
  {
    id: "plan-escalar-contenido",
    title: "Plan para escalar el contenido que ya funciona",
    category: "Growth",
    summary:
      "Diseña una estrategia para duplicar lo que ya te trae resultados.",
    prompt: `Eres consultor de growth para creadores.

Contexto:
- Ya tengo algunas piezas de contenido que han funcionado muy bien.
- Tema general: [tema].
- Plataformas que uso: [lista].

Quiero un plan para escalar:
1) Cómo identificar el top 10% de contenidos (los mejores).
2) Ideas para reciclarlos en:
   - Nuevos formatos.
   - Nuevas plataformas.
   - Nuevos ángulos.
3) Frecuencia sugerida de republicación o re-edición.
4) Cómo medir si el escalado está funcionando.`,
    thumbnail: "",
  },

  {
    id: "vision-negocio-12-meses",
    title: "Visión de negocio a 12 meses",
    category: "Negocio",
    summary:
      "Construye una visión clara de dónde quieres estar en 1 año y cómo llegar.",
    prompt: `Actúa como mentor de negocio digital.

Te voy a describir dónde estoy ahora: [situación actual].  
Y qué me gustaría haber logrado en 12 meses: [meta deseada].

Con base en eso:
1) Escribe una visión narrativa de cómo sería mi vida/negocio dentro de 12 meses si todo va bien.
2) Divide esa visión en 3 grandes objetivos.
3) Para cada objetivo, define:
   - Metas trimestrales.
   - Métricas a seguir.
   - Acciones clave recurrentes (hábitos o sistemas).`,
    thumbnail: "",
  },

  // 🔁 RECICLAJE Y REUTILIZACIÓN DE CONTENIDO
  {
    id: "reciclar-contenido-multiplataforma",
    title: "Sistema para reciclar contenido en múltiples plataformas",
    category: "Productividad",
    summary:
      "Crea un sistema para aprovechar una misma idea en varios formatos y redes.",
    prompt: `Eres consultor de contenido multiplataforma.

Punto de partida:
- Tipo de contenido original: [ej. vídeo largo, newsletter, hilo, etc.].
- Plataformas secundarias: [ej. TikTok, Reels, LinkedIn, email].

Diseña un sistema donde:
1) Una pieza principal se convierte en varias piezas secundarias.
2) Para cada plataforma:
   - Tipo de contenido derivado.
   - Adaptación de mensaje y tono.
3) Orden sugerido de publicación.
4) Herramientas o automatizaciones de IA que me pueden ayudar en el proceso.`,
    thumbnail: "",
  },

  // ⚙️ AUTOMATIZACIÓN Y FLOWS
  {
    id: "flow-lead-a-cliente",
    title: "Flow completo: de lead frío a cliente",
    category: "Sistemas",
    summary:
      "Dibuja un flujo sencillo para llevar a un desconocido a convertirse en cliente.",
    prompt: `Actúa como arquitecto de funnels para negocios digitales.

Nicho: [tu nicho].  
Producto principal: [tu oferta principal].

Diseña un flujo que incluya:
1) Punto de entrada del lead (ej. reel, anuncio, lead magnet).
2) Nurturing (cómo lo alimento con contenido).
3) Momento de oferta (presentación del producto).
4) Seguimiento para indecisos.
5) Cómo reactivar a quien no compró.

Para cada etapa:
- Tipo de contenido o acción.
- Mensaje clave.
- Herramientas de IA que podrían ayudarme.`,
    thumbnail: "",
  },

  {
    id: "automatizar-tareas-repetitivas",
    title: "Detectar y automatizar tareas repetitivas",
    category: "Productividad",
    summary:
      "Usa IA para encontrar tareas repetitivas y diseñar una estrategia para automatizarlas.",
    prompt: `Eres consultor de productividad y automatización.

Te voy a describir mi semana típica de trabajo: [describe tus tareas].  

Con eso:
1) Identifica qué tareas son repetitivas y de bajo valor.
2) Sugiere cómo podría reducir, delegar o automatizar cada una.
3) Indica qué partes podrían hacerse con IA (y cómo).
4) Propón una versión más ligera de mi semana, con más foco en lo importante.`,
    thumbnail: "",
  },

  // 🧾 CONTRATOS / ACUERDOS (COPY, NO LEGAL)
  {
    id: "acuerdo-basico-colaboracion",
    title: "Acuerdo básico de colaboración (no legal)",
    category: "Servicios",
    summary:
      "Crea un texto base para alinear expectativas en colaboraciones simples.",
    prompt: `Actúa como consultor de negocios (no abogado).

Quiero un texto base de “acuerdo de colaboración” que sirva para:
- Colaboraciones entre creadores.
- Intercambio de servicios.
- Proyectos conjuntos simples.

Incluye:
1) Propósito de la colaboración.
2) Qué aporta cada parte.
3) Qué se espera de cada uno (entregables).
4) Fechas aproximadas.
5) Cómo se da por finalizada la colaboración.
6) Un párrafo aclarando que esto no es un contrato legal sino un acuerdo de buena fe.

Redáctalo de forma clara, sencilla y adaptable.`,
    thumbnail: "",
  },
  // ➕ Más prompts de texto (añade estos al final de textPrompts)

  // 🧠 IDEAS Y PLANIFICACIÓN DE CONTENIDO
  {
    id: "diario-ideas-contenido",
    title: "Diario infinito de ideas de contenido",
    category: "Redes sociales",
    summary:
      "Usa IA como generador diario de ideas de contenido según tu nicho y objetivos.",
    prompt: `Quiero que actúes como un “diario infinito de ideas de contenido”.

Nicho: [describe tu nicho].  
Formato principal: [reels, carruseles, hilos, newsletter, etc.].  
Objetivo principal: [conseguir clientes, crecer audiencia, posicionarme, etc.].

Cada vez que te escriba "IDEAS HOY", respóndeme con:
1) 10 ideas de contenido específicas (no genéricas).
2) Para cada idea:
   - Título/Hook.
   - Formato sugerido.
   - 2–3 bullets de lo que debería incluir.
3) Una sugerencia de CTA para ese contenido (guardar, comentar, compartir, etc.).

Cuando termines, pregúntame: 
“¿Quieres que desarrollemos alguna idea en un guion completo?”`,
    thumbnail: "",
  },

  {
    id: "prompts-multiplataforma-ia",
    title: "Adaptar un mismo mensaje a varias plataformas",
    category: "Redes sociales",
    summary:
      "Genera versiones de un mismo contenido para Instagram, TikTok, YouTube, email y LinkedIn.",
    prompt: `Actúa como estratega de comunicación multiplataforma.

Te daré un mensaje o idea central: [pega aquí la idea o párrafo].

Con esa idea:
1) Crea una versión para un reel de Instagram/TikTok.
2) Una versión para un hilo de Twitter/X.
3) Una versión para un post de LinkedIn.
4) Una versión para un email corto.
5) Una versión para un post de carrusel.

En cada caso, adapta:
- Tono.
- Formato.
- Llamado a la acción, según la plataforma.`,
    thumbnail: "",
  },

  // 🕵️‍♂️ ANÁLISIS DE COMPETENCIA E INSPIRACIÓN
  {
    id: "analisis-contenido-competencia",
    title: "Análisis de contenido de la competencia",
    category: "Investigación",
    summary:
      "Pídele a la IA que te ayude a analizar qué hace bien tu competencia y qué puedes mejorar.",
    prompt: `Eres analista de marketing digital.

Te voy a copiar ejemplos de contenido de [1 a 3] competidores de mi nicho.  
Quiero que:

1) Identifiques:
   - Temas que repiten mucho.
   - Formatos que más usan.
   - Estilo y tono de comunicación.
2) Detectes:
   - Qué están haciendo bien.
   - Qué oportunidades están dejando libres.
3) Me propongas:
   - 10 ideas de contenido para diferenciarme.
   - Ángulos de mensaje que ellos no estén usando.`,
    thumbnail: "",
  },

  // 🎯 AVATAR Y CLIENTE IDEAL
  {
    id: "perfil-cliente-ideal-profundo",
    title: "Perfil profundo de cliente ideal",
    category: "Negocio",
    summary:
      "Define un perfil psicológico y práctico de tu cliente ideal para comunicar mejor.",
    prompt: `Actúa como experto en buyer persona.

Nicho: [tu nicho].  
Producto principal: [qué vendes].

Quiero que definas a mi cliente ideal indicando:
1) Datos básicos (edad aproximada, situación laboral, etc.).
2) Día típico en su vida (a nivel práctico).
3) Qué le frustra, preocupa y da miedo relacionado con mi tema.
4) Qué desea profundamente conseguir.
5) Qué ha intentado antes y por qué no le funcionó.
6) Cómo suele hablar (expresiones y frases típicas).

Termina con:
- 5 frases exactas que esta persona podría decir y que yo podría usar en mi copy.`,
    thumbnail: "",
  },

  // 🎥 CIERRES Y VIDEOS DE VENTA
  {
    id: "guion-video-venta-corta",
    title: "Guion de vídeo corto de venta",
    category: "Ventas",
    summary:
      "Crea un guion de 60–90 segundos para invitar a la gente a comprar tu producto.",
    prompt: `Eres guionista de vídeos de venta cortos.

Producto: [qué es].  
Beneficio principal: [beneficio].  
Audiencia: [a quién va dirigido].

Crea un guion para un vídeo de 60–90 segundos con esta estructura:
1) Hook inicial fuerte.
2) Identificación con el problema.
3) Breve historia o ejemplo.
4) Presentación del producto como solución natural.
5) Beneficios concretos.
6) Llamado a la acción claro (qué hacer ahora).

Texto que pueda leerse tal cual frente a cámara.`,
    thumbnail: "",
  },

  // ✉️ SECUENCIAS Y POSTVENTA
  {
    id: "secuencia-carrito-abandonado",
    title: "Secuencia de carrito abandonado",
    category: "Email",
    summary:
      "Genera 3–5 emails o mensajes para recuperar ventas de personas que no terminaron de comprar.",
    prompt: `Actúa como copywriter de email marketing.

Producto: [describe el producto].  
Público: [describe brevemente].

Crea una secuencia de carrito abandonado de 3–5 mensajes (puede ser email o WhatsApp/DM):

Para cada mensaje:
- Momento de envío (ej. 1h después, 24h, 48h, etc.).
- Asunto o frase inicial.
- Cuerpo del mensaje (corto, claro).
- Enfoque del mensaje (recordatorio, prueba social, objeciones, urgencia ética).`,
    thumbnail: "",
  },

  {
    id: "mensaje-wow-postventa",
    title: "Mensaje WOW de postventa",
    category: "Soporte",
    summary:
      "Crea un mensaje de seguimiento después de la compra que sorprenda positivamente al cliente.",
    prompt: `Eres especialista en experiencia de cliente.

Producto/curso: [nombre].  

Crea:
1) Un mensaje de agradecimiento inicial (para enviar justo después de comprar).
2) Un mensaje de seguimiento a los 3–7 días:
   - Preguntando cómo va.
   - Recordando qué primer paso deben haber tomado.
   - Invitando a compartir dudas o avances.
3) Un mensaje extra para clientes que se destacan (logros, avances) para fidelizarlos aún más.`,
    thumbnail: "",
  },

  // 🧪 VALIDACIÓN DE NICHOS Y OFERTAS
  {
    id: "test-nicho-minimo-viable",
    title: "Test rápido de nicho mínimo viable",
    category: "Negocio",
    summary:
      "Usa IA para evaluar si un nicho o micro-nicho tiene sentido antes de invertir demasiado.",
    prompt: `Actúa como consultor de modelos de negocio.

Idea de nicho / micro-nicho: [describe el nicho].

Evalúa:
1) Problemas importantes que este nicho podría tener (lista de 10).
2) Qué soluciones ya existen en el mercado.
3) Qué tipo de productos/servicios digitales se podrían ofrecer.
4) Principales riesgos de entrar a este nicho.
5) Movimientos pequeños que podría hacer para validar interés (ej. encuesta, contenido, lead magnet).`,
    thumbnail: "",
  },

  {
    id: "relanzar-oferta-actual",
    title: "Relanzar y reposicionar una oferta actual",
    category: "Negocio",
    summary:
      "Rediseña el ángulo y comunicación de una oferta que ya existe pero no vende como quieres.",
    prompt: `Eres estratega de ofertas.

Oferta actual: [descríbela].  
Resultado actual: [pocas ventas, poco interés, etc.].

Quiero:
1) Un diagnóstico breve: qué podría estar fallando (promesa, público, precio, oferta, comunicación).
2) 3 nuevos ángulos de posicionamiento para la misma oferta.
3) Una nueva promesa principal para cada ángulo.
4) Ideas de cambios rápidos (no estructurales) para relanzarla.`,
    thumbnail: "",
  },

  // 🎁 RETOS Y ENGAGEMENT
  {
    id: "mini-reto-5-dias",
    title: "Diseñar un mini reto de 5 días",
    category: "Comunidad",
    summary:
      "Crea un reto corto que aporte valor y conecte a la audiencia con tu producto.",
    prompt: `Actúa como creador de retos online.

Tema del reto: [tema].  
Objetivo de negocio: [generar leads, vender al final, activar audiencia, etc.].

Diseña:
1) Nombre del reto.
2) Promesa clara (qué conseguirán en 5 días).
3) Estructura día a día:
   - Acción o mini tarea.
   - Material necesario (si aplica).
   - Mensaje principal.
4) Cómo conectar con tu producto principal al final, sin ser agresivo.`,
    thumbnail: "",
  },

  {
    id: "plan-contenido-historias",
    title: "Plan de contenido solo para historias",
    category: "Redes sociales",
    summary:
      "Ten un plan específico de ideas para stories que trabajen relación y venta.",
    prompt: `Eres estratega de contenido para stories (Instagram, WhatsApp, etc.).

Nicho: [tu nicho].  
Nivel de confianza actual con la audiencia: [bajo/medio/alto].

Genera:
1) 15 ideas de stories de conexión (día a día, detrás de escenas, etc.).
2) 10 ideas de stories educativas.
3) 5 ideas de stories con CTA directa a oferta.
4) Sugerencias de cómo combinar estos tipos de stories en una semana tipo.`,
    thumbnail: "",
  },

  // 🎤 LIVES, ENTREVISTAS Y EVENTOS
  {
    id: "script-live-preguntas",
    title: "Guion para live de preguntas y respuestas",
    category: "Webinar",
    summary:
      "Organiza un live Q&A que no se sienta desordenado y sí aporte valor.",
    prompt: `Actúa como host de directos en redes.

Tema del live: [tema].  
Duración aproximada: [ej. 45–60 minutos].

Crea un guion que incluya:
1) Introducción (quién eres y de qué va el live).
2) Bloque de contexto / mini enseñanza (5–10 minutos).
3) Cómo invitar a la gente a hacer preguntas.
4) Orden sugerido para responder (por tipo de pregunta).
5) Mini cierres parciales durante el live (resúmenes).
6) Cierre con llamada a la acción (lista, comunidad, producto, etc.).`,
    thumbnail: "",
  },

  {
    id: "entrevista-experto-guion",
    title: "Guion para entrevistar a un experto",
    category: "Contenido",
    summary:
      "Prepara una entrevista que sea interesante para tu audiencia y útil para el invitado.",
    prompt: `Eres productor de podcast/entrevistas.

Tema de la entrevista: [tema].  
Tipo de invitado: [experto, cliente, referente del nicho, etc.].  
Audiencia: [descríbela].

Diseña:
1) Estructura de la entrevista (inicio, medio, cierre).
2) 10–15 preguntas de alta calidad, organizadas por bloques:
   - Historia del invitado.
   - Problemas de la audiencia.
   - Soluciones, consejos y errores comunes.
3) Pregunta final potente que deje a la audiencia pensando.
4) Ideas de clips (momentos cortos virales) que se podrían sacar de la entrevista.`,
    thumbnail: "",
  },

  // 🤝 COLABORACIONES Y ALIANZAS
  {
    id: "plan-colaboraciones-creadores",
    title: "Plan para colaboraciones con otros creadores",
    category: "Growth",
    summary:
      "Diseña un plan de colaboración con otros creadores para crecer audiencia y autoridad.",
    prompt: `Actúa como estratega de colaboraciones.

Nicho: [tu nicho].  
Tamaño actual de audiencia: [indicativo].

Quiero:
1) Tipos de creadores con los que podría colaborar (tamaño, temática, perfil).
2) 10 ideas de colaboraciones posibles:
   - Lives conjuntos.
   - Entrevistas.
   - Intercambio de contenidos.
   - Clases invitadas.
3) Guion de mensaje para proponerles la colaboración (DM o email).`,
    thumbnail: "",
  },

  // 🧩 ESTRUCTURAR Y RECICLAR CONOCIMIENTO
  {
    id: "contenido-educativo-por-niveles",
    title: "Clasificar contenido educativo por niveles",
    category: "Educación",
    summary:
      "Organiza tus contenidos en básico, intermedio y avanzado para que la audiencia no se pierda.",
    prompt: `Eres diseñador de programas formativos.

Tema: [tu tema principal].

Quiero que:
1) Propongas contenidos/temas de nivel básico, intermedio y avanzado.
2) Para cada nivel:
   - Lista de 10 temas.
   - Qué debería saber o dominar la persona al terminar ese nivel.
3) Sugerencias de cómo indicar el nivel en mis piezas de contenido (para que la gente se ubique).`,
    thumbnail: "",
  },

  {
    id: "sistema-tags-contenido",
    title: "Sistema de tags para tu contenido",
    category: "Sistemas",
    summary:
      "Crea un sistema de etiquetas para organizar tu contenido en Notion, Google Docs, etc.",
    prompt: `Actúa como consultor de organización de conocimiento.

Nicho: [tu nicho].  
Tipos de contenido que creo: [vídeos, textos, podcasts, etc.].

Diseña un sistema de etiquetas que incluya:
1) Tags por tema.
2) Tags por objetivo (atraer, educar, vender, fidelizar).
3) Tags por formato (reel, carrusel, email, etc.).
4) Tags por nivel (básico, intermedio, avanzado).

Explica cómo usar este sistema en la práctica para encontrar ideas rápido.`,
    thumbnail: "",
  },

  // 📊 ESCUCHAR A LA AUDIENCIA
  {
    id: "plantilla-encuesta-audiencia",
    title: "Plantilla de encuesta a la audiencia",
    category: "Investigación",
    summary:
      "Crea una encuesta lista para enviar y entender mejor a tu audiencia.",
    prompt: `Eres experto en investigación de audiencia.

Nicho: [tu nicho].  
Tipo de audiencia: [descríbela].

Crea una encuesta con:
1) 3–5 preguntas cerradas (tipo múltiple elección).
2) 5–7 preguntas abiertas potentes (para entender dolores, deseos, obstáculos).
3) Una pregunta clave para detectar disposición a pagar y por qué tipo de solución.

Escribe las preguntas en un formato que pueda pegar directamente en un formulario (Google Forms, Typeform, etc.).`,
    thumbnail: "",
  },

  // 🧠 ORGANIZAR IDEAS Y PROCESOS MENTALES
  {
    id: "prompt-agrupador-ideas",
    title: "Agrupador y organizador de ideas",
    category: "Productividad",
    summary:
      "Pega un montón de ideas caóticas y deja que la IA te las organice por temas.",
    prompt: `Actúa como organizador de ideas.

Te voy a pegar un bloque de ideas, notas o frases sueltas.  
Tu trabajo es:

1) Agruparlas en categorías o temas.
2) Poner títulos a cada grupo.
3) Señalar ideas repetidas o muy parecidas.
4) Resumir cada grupo en 2–3 frases.

No inventes ideas nuevas, solo organiza y clarifica las que te envíe.`,
    thumbnail: "",
  },

  {
    id: "guardian-calidad-contenido",
    title: "Guardián de calidad de contenido",
    category: "Sistemas",
    summary:
      "Usa IA como filtro de calidad para revisar tus textos antes de publicarlos.",
    prompt: `Quiero que actúes como guardián de calidad de mi contenido.

Cuando te pegue un texto (post, email, guion, etc.), haz lo siguiente:
1) Evalúa claridad (¿se entiende?).
2) Evalúa relevancia para mi audiencia (te diré cuál es).
3) Señala partes confusas, repetitivas o débiles.
4) Propón mejoras específicas:
   - Frases que reescribirías.
   - Dónde añadir ejemplos.
   - Dónde hacer el texto más concreto.
5) Sugiere 3 títulos/hooks alternativos para ese contenido.

No cambies mi estilo por completo, solo ayúdame a pulirlo.`,
    thumbnail: "",
  },
  // ➕ Más prompts de texto (añade estos al final de textPrompts)

  // 📆 PLANES DE CONTENIDO A LARGO PLAZO
  {
    id: "plan-contenido-90-dias",
    title: "Plan de contenido para 90 días",
    category: "Redes sociales",
    summary:
      "Diseña un plan estratégico de contenidos para 3 meses alineado a tus objetivos de negocio.",
    prompt: `Actúa como estratega de contenido a largo plazo.

Nicho: [tu nicho].  
Plataforma principal: [Instagram, TikTok, YouTube, etc.].  
Objetivo prioritario: [captar leads, vender, crecer comunidad, posicionamiento, etc.].

Crea un plan de contenido para 90 días que incluya:
1) 3 grandes objetivos para los 3 meses.
2) Temas/columnas de contenido principales (4–6).
3) Propuesta de frecuencia de publicación.
4) Ejemplos de piezas por cada columna (10–15 ideas).
5) Sugerencia de revisión mensual (qué mirar, qué ajustar).`,
    thumbnail: "",
  },

  {
    id: "plan-show-semanal",
    title: "Diseñar tu show de contenido semanal",
    category: "Redes sociales",
    summary:
      "Crea un formato de sección fija que puedas repetir cada semana para tu audiencia.",
    prompt: `Eres productor de contenido recurrente.

Nicho: [tu nicho].  
Tipo de audiencia: [descríbela].  

Quiero crear un “show” o sección semanal reconocible (ej. “Lunes de ideas”, “Miércoles de errores”, etc.).

Diseña:
1) 5 conceptos de show semanal (nombre + concepto).
2) Para el mejor concepto:
   - Estructura del episodio (inicio, desarrollo, cierre).
   - Ideas de temas para los primeros 8 episodios.
   - Call to action sugerida para cada episodio (según mi objetivo).`,
    thumbnail: "",
  },

  // ♻️ RECICLAJE Y REPURPOSE AVANZADO
  {
    id: "transformar-live-en-piezas",
    title: "Transformar un live en múltiples piezas",
    category: "Productividad",
    summary:
      "Convierte una clase o live largo en varios contenidos listos para redes y email.",
    prompt: `Actúa como editor de contenidos.

Te voy a describir un live/clase que hice (o pegaré apuntes/resumen).  
Con eso, quiero que generes:

1) 5 ideas de reels/cortos con título y estructura.
2) 3 ideas de posts carrusel.
3) 2 ideas de emails.
4) 1 idea de lead magnet posible a partir del contenido.

Para cada pieza, indica:
- A qué parte del live hace referencia.
- El ángulo principal del mensaje.`,
    thumbnail: "",
  },

  {
    id: "resumen-notion-contenido",
    title: "Resumen estructurado para guardar en Notion",
    category: "Productividad",
    summary:
      "Convierte notas caóticas de una sesión en un resumen ordenado listo para guardar.",
    prompt: `Actúa como asistente de organización de conocimiento.

Te voy a pegar un montón de notas caóticas de una sesión de ideas o formación.  

Quiero que:
1) Las organices en secciones con títulos.
2) Uses bullets donde tenga sentido.
3) Destaques:
   - Ideas accionables.
   - Conceptos importantes.
   - Frases clave.
4) Al final, crea una sección “To-do” con acciones sugeridas que podría tomar tras esta sesión.`,
    thumbnail: "",
  },

  // 🎭 FORMATOS CREATIVOS Y NARRATIVOS
  {
    id: "pov-tiktok-guion",
    title: "Guion estilo POV para TikTok/Reels",
    category: "Storytelling",
    summary:
      "Crea guiones en primera persona con situaciones reconocibles para tu nicho.",
    prompt: `Eres guionista de vídeos estilo POV para TikTok/Reels.

Nicho: [tu nicho].  
Situación que quiero representar: [describe la situación].

Crea un guion POV que incluya:
1) Texto/diálogo que aparecería en pantalla.
2) Pensamientos internos del personaje (para subtítulos o voz en off).
3) Estructura:
   - Inicio: situación reconocible.
   - Desarrollo: conflicto o problema.
   - Cierre: mini solución o giro divertido/relatable.

Tono: cercano, real, como si fuera la vida diaria del avatar.`,
    thumbnail: "",
  },

  {
    id: "carrusel-historieta-guion",
    title: "Guion para carrusel tipo historieta",
    category: "Redes sociales",
    summary:
      "Diseña el contenido de un carrusel ilustrado que cuente una historia en varias láminas.",
    prompt: `Actúa como guionista de carruseles tipo comic/historieta para Instagram.

Tema central del carrusel: [tema].  
Objetivo: [educar, vender, romper creencia, etc.].

Crea la estructura para 8–10 láminas:
- Lámina 1: portada con título gancho.
- Lámina 2–7/9: desarrollo de la historia o explicación paso a paso.
- Última lámina: resumen y llamado a la acción.

En cada lámina indica:
- Texto principal corto.
- Idea visual sugerida (qué se podría ilustrar).`,
    thumbnail: "",
  },

  // 💌 EMAIL AVANZADO Y RELACIÓN
  {
    id: "secuencia-onboarding-curso",
    title: "Secuencia de onboarding para un curso",
    category: "Email",
    summary:
      "Crea una secuencia de emails para alumnos nuevos que acaban de entrar a tu curso.",
    prompt: `Eres experto en email onboarding.

Curso: [nombre del curso].  
Resultado principal que promete: [describe el resultado].  

Crea una secuencia de 5–7 emails de onboarding que:
- Acompañen al alumno los primeros días.
- Eviten que se pierda.
- Le recuerden qué hacer primero.

Para cada email indica:
- Momento de envío (día 0, día 1, día 3, etc.).
- Asunto (2–3 opciones).
- Objetivo.
- Esquema del contenido.`,
    thumbnail: "",
  },

  {
    id: "email-reconectar-lista-fria",
    title: "Reconectar con lista fría",
    category: "Email",
    summary:
      "Escribe una secuencia para volver a activar una lista de suscriptores inactivos.",
    prompt: `Actúa como copywriter de email para reactivación.

Contexto: tengo una lista de email que lleva mucho tiempo sin recibir nada.  
Tema de mi marca: [tema/nicho].

Crea una secuencia de 3 emails:
1) Email 1: “romper el hielo” (explicar por qué vuelvo, qué pueden esperar, opción de seguir o no).
2) Email 2: contenido de valor potente (para volver a ganarme la atención).
3) Email 3: invitación a dar un paso (encuesta, lead magnet nuevo, comunidad, etc.).

Estilo honesto, cercano y respetuoso.`,
    thumbnail: "",
  },

  // 💼 B2B, AGENCIAS Y SERVICIOS PREMIUM
  {
    id: "cold-email-b2b",
    title: "Cold email para clientes B2B",
    category: "Servicios",
    summary:
      "Genera emails en frío que no suenen spam pero abran puertas a conversaciones.",
    prompt: `Eres especialista en cold email B2B.

Servicio que ofrezco: [describe el servicio].  
Tipo de empresas objetivo: [sector, tamaño, etc.].

Genera:
1) 3 versiones de email frío corto (máx. 150 palabras).
2) En cada email:
   - Asunto atractivo, pero no sensacionalista.
   - Apertura personalizada (modelo).
   - 2–3 frases que conecten con un problema real.
   - Propuesta de próxima acción (ej. responder con sí/no, agendar llamada, etc.).`,
    thumbnail: "",
  },

  {
    id: "pitch-servicio-alta-gama",
    title: "Pitch de servicio de alta gama",
    category: "Servicios",
    summary:
      "Estructura cómo presentar un servicio premium de varios miles de dólares.",
    prompt: `Actúa como consultor de servicios premium.

Servicio: [describe el servicio de alta gama].  
Cliente objetivo: [tipo de cliente].

Crea un pitch que pueda usar en:
- Llamadas.
- Presentaciones.
- Mensajes de voz.

Incluye:
1) Frase corta para abrir la conversación (qué hago y para quién).
2) Explicación del problema que resuelvo en términos de negocio.
3) Qué incluye el servicio (sin entrar en tecnicismos).
4) Resultados posibles o escenarios deseables.
5) Invitación a agendar una llamada exploratoria.`,
    thumbnail: "",
  },

  // 🌐 PÁGINAS INTERNAS, SOBRE MÍ Y MANIFIESTO
  {
    id: "sobre-mi-pagina-web",
    title: "Sección “Sobre mí” para página web",
    category: "Marca personal",
    summary:
      "Escribe tu sección de Sobre mí en diferentes extensiones para web y redes.",
    prompt: `Eres copywriter de marca personal.

Voy a contarte quién soy, qué hago y a quién ayudo: [cuenta tu historia en bruto].

Con esto, genera:
1) Una bio corta (1–2 frases) para redes.
2) Una bio media (1 párrafo) para página de ventas.
3) Sección “Sobre mí” extendida para web (3–6 párrafos).
Estilo cercano, profesional y alineado con mi personalidad.`,
    thumbnail: "",
  },

  {
    id: "manifiesto-marca",
    title: "Manifiesto de tu marca",
    category: "Marca personal",
    summary:
      "Crea un manifiesto que explique en qué crees, qué defiendes y contra qué vas.",
    prompt: `Actúa como storyteller de marcas.

Nicho: [tu nicho].  
Tipo de persona que quiero atraer: [descríbela].  

Crea un manifiesto que incluya:
1) En qué creo (principios).
2) En qué no creo (lo que cuestiono del status quo).
3) Cómo veo el problema central de mi nicho.
4) Cómo propongo hacer las cosas diferente.
5) Un cierre inspirador que se pueda usar como post o texto fijo en la web.`,
    thumbnail: "",
  },

  // 💌 MENSAJES EMOCIONALES Y RELACIONALES
  {
    id: "carta-cliente-ideal",
    title: "Carta a tu cliente ideal",
    category: "Marca personal",
    summary:
      "Escribe una carta directa y honesta a tu cliente ideal, mostrando que lo entiendes.",
    prompt: `Eres un comunicador profundo y honesto.

Nicho: [tu nicho].  
Cliente ideal: [descríbelo].

Quiero una carta que:
1) Hable en segunda persona (“tú”).
2) Describa su situación actual y cómo se siente.
3) Valide sus esfuerzos y frustraciones.
4) Le muestre que hay otra forma de hacer las cosas.
5) Introduzca (sin vender duro) que yo puedo acompañarle en ese proceso.

Tono íntimo, cálido y real.`,
    thumbnail: "",
  },

  // 🧩 CLARIDAD DE OFERTA Y MENSAJE
  {
    id: "worksheet-claridad-oferta",
    title: "Worksheet de claridad de oferta",
    category: "Negocio",
    summary:
      "Crea un cuestionario para aclarar y pulir tu oferta antes de lanzarla.",
    prompt: `Actúa como mentor de negocios.

Quiero un “worksheet” en forma de preguntas que me ayude a clarificar mi oferta antes de lanzarla.

Divide las preguntas en secciones:
1) Cliente ideal.
2) Problema que resuelvo.
3) Transformación que prometo.
4) Contenido de la oferta (qué incluye).
5) Diferencial frente a otras opciones.
6) Riesgos, garantías, objeciones.

Dame solo las preguntas, para poder copiarlas en un documento o Notion.`,
    thumbnail: "",
  },

  // 🌍 IDIOMAS, ADAPTACIÓN Y SIMPLIFICACIÓN
  {
    id: "simplificar-lenguaje-tecnico",
    title: "Simplificar lenguaje técnico",
    category: "Contenido",
    summary:
      "Usa IA para traducir conceptos técnicos a lenguaje simple sin perder rigor.",
    prompt: `Actúa como traductor de lenguaje técnico a lenguaje humano.

Te pegaré textos o explicaciones técnicas sobre: [tema técnico].  

Tu tarea es:
1) Reescribirlo para alguien sin conocimientos técnicos.
2) Usar ejemplos cotidianos para explicarlo.
3) Mantener precisión, pero evitar jerga.
4) Ofrecer, al final, una analogía sencilla que lo resuma.`,
    thumbnail: "",
  },

  {
    id: "adaptar-contenido-otro-idioma",
    title: "Adaptar contenido a otro idioma sin perder estilo",
    category: "Contenido",
    summary:
      "Traduce y adapta contenido entre idiomas manteniendo tono, intención y ritmo.",
    prompt: `Actúa como traductor creativo.

Te pegaré un texto en [idioma original] y quiero que lo adaptes a [idioma destino].

No quiero una traducción literal, sino:
1) Mantener el tono (ej. cercano, profesional, divertido).
2) Mantener la intención (qué quiero provocar en el lector).
3) Ajustar expresiones culturales para que suenen naturales.

Al final, dame también 3 posibles títulos/hooks adaptados al nuevo idioma.`,
    thumbnail: "",
  },

  // 🧭 ROL PERSISTENTE / ASISTENTE PERSONAL
  {
    id: "modo-coach-negocio-semanal",
    title: "Modo coach de negocio semanal",
    category: "Negocio",
    summary:
      "Configura a la IA como tu coach semanal para revisar avances y planear acciones.",
    prompt: `Quiero que actúes como mi coach de negocio semanal.

Cada semana, cuando te escriba "REVISIÓN SEMANAL", haz esto:
1) Pídeme que te cuente:
   - Qué hice esta semana.
   - Qué salió bien.
   - Qué no salió como esperaba.
   - En qué estoy atascado.
2) Tras mis respuestas, devuélveme:
   - Un resumen de mi situación.
   - 3 aprendizajes clave de la semana.
   - 3 prioridades claras para la semana siguiente.
   - 3 acciones mínimas que, si las hago, ya es una buena semana.

Mantén un tono directo pero amable, como un mentor que quiere que avance.`,
    thumbnail: "",
  },

  {
    id: "modo-editor-copys",
    title: "Modo editor de copys exigente",
    category: "Sistemas",
    summary:
      "Pon a la IA en modo editor estricto, que critique y mejore tus copys sin piedad.",
    prompt: `Quiero que actúes como editor exigente de mis copys.

Reglas:
- No halagues mi texto.
- Señala sin rodeos lo que no funciona.
- Da ejemplos concretos de cómo mejorarlo.

Cada vez que te pegue un copy (post, email, anuncio, etc.):
1) Evalúa claridad, fuerza del mensaje y llamada a la acción.
2) Señala partes flojas, confusas o redundantes.
3) Reescribe el texto completo en una versión mejorada.
4) Explica brevemente qué has cambiado y por qué.`,
    thumbnail: "",
  },
  // ➕ Más prompts de texto (añade estos al final de textPrompts)

  // 🧑‍🏫 ESPECIALES PARA COACHES Y CONSULTORES
  {
    id: "sesion-coaching-estructura",
    title: "Estructura para una sesión de coaching 1:1",
    category: "Coaching",
    summary:
      "Diseña la estructura de una sesión de coaching clara, enfocada y con cierre sólido.",
    prompt: `Actúa como supervisor de coaches profesionales.

Tipo de cliente: [describe brevemente].  
Duración de la sesión: [ej. 45 o 60 minutos].

Crea una estructura para una sesión de coaching que incluya:
1) Apertura (5–10 minutos):
   - Cómo iniciar la sesión.
   - Preguntas para conocer el estado actual del cliente hoy.
2) Cuerpo central:
   - Preguntas para profundizar en el tema que trae.
   - Formas de retarlo sin juzgarlo.
3) Cierre:
   - Cómo definir 1–3 acciones concretas.
   - Cómo resumir insights clave.
   - Cómo verificar compromiso del cliente.

Incluye ejemplos de preguntas poderosas en cada fase.`,
    thumbnail: "",
  },

  {
    id: "plan-proceso-coaching-8-sesiones",
    title: "Plan de proceso de coaching de 8 sesiones",
    category: "Coaching",
    summary:
      "Crea una ruta de acompañamiento de 8 sesiones con foco y progresión clara.",
    prompt: `Eres un coach senior que diseña procesos de transformación.

Tema del proceso de coaching: [ej. claridad profesional, hábitos, negocio, etc.].  
Perfil del coachee ideal: [descríbelo].

Diseña un proceso de 8 sesiones:
1) Objetivo global del proceso.
2) Objetivo específico de cada sesión.
3) Tema central de cada encuentro.
4) Tipo de ejercicios o tareas entre sesiones.
5) Cómo medir el avance a mitad del proceso y al final.`,
    thumbnail: "",
  },

  {
    id: "mensaje-invitacion-sesiones-descubrimiento",
    title: "Invitación a sesiones de descubrimiento",
    category: "Coaching",
    summary:
      "Genera mensajes para invitar a potenciales clientes a una sesión exploratoria.",
    prompt: `Actúa como coach que vende desde el servicio y no desde la presión.

Servicio: [coaching/consultoría en X].  
Audiencia: [tipo de persona].

Genera:
1) 3 mensajes cortos para stories/inbox invitando a una sesión de descubrimiento.
2) 2 modelos de email invitando a sesión.
3) Puntos que debo dejar claros:
   - Qué es y qué no es la sesión.
   - Que no hay obligación de comprar.
   - Qué pueden llevarse incluso si no seguimos trabajando juntos.`,
    thumbnail: "",
  },

  {
    id: "preguntas-poderosas-coaching",
    title: "Banco de preguntas poderosas para coaches",
    category: "Coaching",
    summary:
      "Ten un banco de preguntas profundas para usar en sesiones de coaching.",
    prompt: `Eres formador de coaches.

Tema principal de mis procesos: [ej. negocio, claridad, hábitos, relaciones, etc.].

Genera:
1) 10 preguntas para explorar la situación actual del cliente.
2) 10 preguntas para explorar creencias y bloqueos.
3) 10 preguntas para abrir posibilidades y visión de futuro.
4) 10 preguntas para aterrizar acciones concretas.

Escríbelas en formato lista, claras y sin tecnicismos.`,
    thumbnail: "",
  },

  {
    id: "propuesta-paquete-coaching",
    title: "Propuesta de paquete de coaching",
    category: "Coaching",
    summary:
      "Escribe una propuesta clara para ofrecer un paquete de sesiones de coaching.",
    prompt: `Actúa como mentor de coaches.

Tipo de coaching: [ej. de vida, de negocio, de hábitos, etc.].  
Duración del paquete: [ej. 8, 12, 16 sesiones].

Crea una propuesta que pueda enviar por email/WhatsApp que incluya:
1) Breve descripción de a quién va dirigido.
2) Problemas típicos que aborda.
3) Qué incluye el paquete (sesiones, soporte entre sesiones, materiales, etc.).
4) Cómo es el proceso de trabajo.
5) Qué puede esperar la persona al terminar.
6) Llamado a la acción para agendar la primera sesión.`,
    thumbnail: "",
  },

  {
    id: "onboarding-nuevo-cliente-coaching",
    title: "Onboarding de nuevo cliente de coaching",
    category: "Coaching",
    summary:
      "Diseña un proceso de bienvenida para nuevos coachees para empezar con claridad.",
    prompt: `Eres especialista en experiencia de cliente para coaches.

Diseña un onboarding para un nuevo cliente de coaching que incluya:
1) Mensaje de bienvenida al confirmar el pago.
2) Mensaje con instrucciones prácticas (agenda, plataforma, horarios, etc.).
3) Un pequeño formulario/cuestionario previo a la primera sesión:
   - Preguntas clave sobre su situación actual.
   - Qué espera del proceso.
   - Qué ha intentado antes.
4) Un recordatorio amable 24 horas antes de la primera sesión.`,
    thumbnail: "",
  },

  // 🎓 ESPECIALES PARA CREADORES DE CURSOS / INFOPRODUCTORES
  {
    id: "definir-promesa-curso",
    title: "Definir la promesa central de tu curso",
    category: "Cursos",
    summary:
      "Aterriza una promesa clara, específica y creíble para tu curso online.",
    prompt: `Actúa como consultor para infoproductores.

Tema del curso: [tema].  
Público objetivo: [quién es el alumno ideal].

Ayúdame a:
1) Formular 5 posibles promesas principales del curso.
2) Mejorar cada promesa para que sea:
   - Concreta.
   - Alcanzable.
   - Atractiva.
3) Elegir una promesa principal y 2 promesas secundarias (sub-beneficios).

Explica por qué la promesa elegida es la más potente.`,
    thumbnail: "",
  },

  {
    id: "estructura-curso-flujo-logico",
    title: "Estructura de curso con flujo lógico",
    category: "Cursos",
    summary:
      "Organiza un curso en módulos y lecciones con un orden que tenga sentido para el alumno.",
    prompt: `Eres diseñador instruccional de cursos online.

Tema del curso: [tema].  
Nivel del alumno: [principiante / intermedio / avanzado].

Diseña:
1) De 4 a 8 módulos en orden lógico.
2) Para cada módulo:
   - Objetivo.
   - 3–7 lecciones con título.
3) Señala dónde tendría sentido:
   - Incluir ejercicios.
   - Incluir plantillas.
   - Añadir casos reales o ejemplos.`,
    thumbnail: "",
  },

  {
    id: "bonus-curso-ideas",
    title: "Ideas de bonus para tu curso",
    category: "Cursos",
    summary:
      "Genera ideas de bonus que aumenten el valor percibido sin complicarte la vida.",
    prompt: `Actúa como estratega de ofertas para infoproductores.

Curso principal: [descríbelo].  
Objetivo del alumno: [resultado que quiere conseguir].

Genera 10 ideas de bonus que:
- Sean relativamente rápidos de crear.
- Aumenten mucho el valor percibido.
- Acompañen la transformación del curso.

Para cada bonus:
- Nombre.
- Descripción corta.
- Tipo de formato (video, pdf, plantilla, sesión, etc.).`,
    thumbnail: "",
  },

  {
    id: "guion-video-bienvenida-curso",
    title: "Guion para vídeo de bienvenida del curso",
    category: "Cursos",
    summary:
      "Crea el guion para el primer vídeo que verá tu alumno al entrar al curso.",
    prompt: `Eres guionista de cursos online.

Curso: [nombre].  
Duración del video de bienvenida: [ej. 3–5 minutos].

Crea un guion que incluya:
1) Agradecimiento y celebración por haber entrado.
2) Recordatorio de la promesa del curso.
3) Cómo está estructurado el contenido.
4) Qué debe hacer el alumno primero.
5) Reglas de oro para aprovechar el curso.
6) Mensaje final de motivación.

Texto listo para leer frente a cámara.`,
    thumbnail: "",
  },

  {
    id: "mensaje-recordatorio-progreso-curso",
    title: "Recordatorios de progreso para alumnos",
    category: "Cursos",
    summary:
      "Mensajes listos para motivar a alumnos que se han quedado a medias.",
    prompt: `Actúa como tutor de curso online.

Curso: [nombre].  
Tiempo típico en el que los alumnos se estancan: [ej. módulo 2, semana 3, etc.].

Crea:
1) 3 mensajes cortos para email/WhatsApp tipo “te estoy viendo, no te rindas”.
2) 2 mensajes para alumnos que llevan mucho sin entrar, con tono cercano y cero culpa.
3) 2 mensajes para felicitar cuando terminan un módulo clave y animarlos a seguir.`,
    thumbnail: "",
  },

  {
    id: "encuesta-mejorar-curso",
    title: "Encuesta para mejorar tu curso",
    category: "Cursos",
    summary:
      "Crea una encuesta para recoger feedback útil de tus alumnos sin abrumarlos.",
    prompt: `Eres experto en mejora continua de cursos.

Curso: [nombre].  

Diseña una encuesta de feedback que incluya:
1) 3 preguntas de puntuación (1–10) sobre:
   - Claridad del contenido.
   - Aplicabilidad práctica.
   - Experiencia general.
2) 5–7 preguntas abiertas:
   - Qué fue más útil.
   - Qué mejorarían.
   - En qué parte se sintieron perdidos.
   - Qué les gustaría que se añadiera.
3) Una pregunta sobre resultados (qué cambio real han experimentado).`,
    thumbnail: "",
  },

  // 🏪 NEGOCIOS LOCALES / SERVICIOS PRESENCIALES
  {
    id: "campana-negocio-local-redes",
    title: "Campaña simple en redes para negocio local",
    category: "Negocio local",
    summary:
      "Diseña una campaña básica para restaurantes, gimnasios, salones, etc.",
    prompt: `Actúa como estratega de marketing para negocio local.

Tipo de negocio: [restaurante, gimnasio, salón de belleza, clínica, etc.].  
Zona/ciudad: [indica la ciudad o zona].

Crea una campaña de 30 días que incluya:
1) Objetivo principal (reservas, visitas, consultas, etc.).
2) Tipos de publicaciones (ej. menús, testimonios, antes/después, etc.).
3) Ejemplos de 10 posts concretos con:
   - Idea.
   - Texto sugerido.
   - CTA (reservar, escribir por WhatsApp, etc.).`,
    thumbnail: "",
  },

  {
    id: "reseñas-google-mensajes",
    title: "Mensajes para pedir reseñas en Google",
    category: "Negocio local",
    summary:
      "Genera mensajes educados y efectivos para pedir reseñas a tus clientes.",
    prompt: `Eres consultor de reputación online.

Tipo de negocio: [ej. clínica, salón, restaurante, etc.].

Genera:
1) 3 mensajes para pedir reseña justo después del servicio (en persona/WhatsApp).
2) 2 mensajes de recordatorio suave si aún no han dejado reseña.
3) Una mini guía que pueda enviar con:
   - Enlace directo.
   - 2–3 ideas de qué podrían mencionar en su reseña.`,
    thumbnail: "",
  },

  {
    id: "mensajes-promos-festivos",
    title: "Mensajes para promociones en fechas especiales",
    category: "Negocio local",
    summary:
      "Textos listos para campañas en fechas especiales: Navidad, San Valentín, etc.",
    prompt: `Actúa como copywriter para campañas puntuales de negocio local.

Tipo de negocio: [ej. spa, restaurante, tienda, etc.].  
Fecha especial: [Navidad, San Valentín, Día de la Madre, etc.].

Genera:
1) 3 mensajes para posts en redes.
2) 3 mensajes cortos para WhatsApp/DM.
3) 2 ideas de nombres para la promoción o paquete especial.`,
    thumbnail: "",
  },

  {
    id: "folleto-simple-negocio-local",
    title: "Texto para folleto simple de negocio local",
    category: "Negocio local",
    summary:
      "Escribe los textos de un folleto físico o digital para un negocio local.",
    prompt: `Eres copywriter para pymes.

Tipo de negocio: [ej. peluquería, clínica dental, restaurante, etc.].  

Crea los textos para un folleto simple que incluya:
1) Título fuerte en portada.
2) Subtítulo que explique qué haces.
3) 3–5 beneficios clave.
4) Servicios principales en lista.
5) Llamado a la acción (reservar, llamar, visitar).
6) Un pequeño texto de “por qué elegirnos”.`,
    thumbnail: "",
  },

  // 🌱 MINDSET, HÁBITOS Y VIDA PERSONAL (USO “OFF” DEL BANCO)
  {
    id: "sistema-manana-ganadora",
    title: "Sistema de mañana ganadora",
    category: "Desarrollo personal",
    summary:
      "Diseña una rutina de mañana realista que conecte con tus objetivos.",
    prompt: `Actúa como coach de hábitos.

Te voy a decir:
- A qué hora suelo despertarme.
- Qué responsabilidades tengo por la mañana.
- Qué objetivos tengo a nivel salud / negocio / mental.

Con eso:
1) Diseña una rutina de mañana sostenible (no fantasiosa).
2) Indica cuánto dura como mínimo.
3) Explica el porqué de cada bloque (movimiento, foco, planificación, etc.).
4) Sugiere un mini prompt que pueda usar cada mañana para planear el día con IA.`,
    thumbnail: "",
  },

  {
    id: "reset-mental-rapido",
    title: "Reset mental rápido cuando te sientes bloqueado",
    category: "Desarrollo personal",
    summary:
      "Usa este prompt para hacer un chequeo mental rápido y desbloquearte.",
    prompt: `Quiero que actúes como un amigo sabio cuando estoy bloqueado.

Cada vez que te escriba "ESTOY BLOQUEADO", respóndeme con:
1) 5 preguntas para entender cómo me siento y qué está pasando.
2) Un mini-resumen de lo que percibes que es el problema real.
3) 3 acciones pequeñas que pueda hacer en los próximos 20 minutos.
4) 3 frases recordatorio o afirmaciones realistas (no positivismo vacío).

Mantén el tono empático, directo y sin juicios.`,
    thumbnail: "",
  },

  // 📊 MEDIR RESULTADOS Y TOMAR DECISIONES
  {
    id: "review-mensual-negocio",
    title: "Revisión mensual de negocio",
    category: "Negocio",
    summary: "Usa IA como marco para revisar tu mes y decidir qué ajustar.",
    prompt: `Actúa como mentor de negocios en una reunión de revisión mensual.

Cada vez que te escriba "REVISIÓN MENSUAL", pídeme que te cuente:
- Ingresos aproximados.
- Principales acciones realizadas.
- Qué funcionó bien.
- Qué no funcionó.
- Cómo me sentí en general.

Con esos datos:
1) Resume el mes en 5–7 bullets.
2) Señala lo que sí se debe repetir/reforzar.
3) Señala lo que se debe ajustar/eliminar.
4) Propón 3 focos principales para el próximo mes.`,
    thumbnail: "",
  },

  {
    id: "kpis-minimos-negocio-digital",
    title: "KPIs mínimos para negocio digital",
    category: "Negocio",
    summary:
      "Define qué métricas mirar sí o sí en tu negocio digital para no perderte en números.",
    prompt: `Eres consultor de analítica simple para emprendedores no técnicos.

Modelo de negocio: [ej. servicios, cursos, membresía, ecommerce, etc.].

Define:
1) Las 5–10 métricas mínimas que debería mirar cada mes.
2) Qué significa cada métrica en palabras simples.
3) Qué me indican si suben o bajan.
4) Una pauta simple de revisión mensual:  
   - Qué preguntar.  
   - Qué decisiones podría tomar a partir de esos números.`,
    thumbnail: "",
  },
  // ➕ Más prompts de texto (añade estos al final de textPrompts)

  // 🎬 REELS / VIDEOS CORTOS PARA CREADORES
  {
    id: "reel-error-comun-nicho",
    title: "Reel sobre errores comunes en tu nicho",
    category: "Reels",
    summary:
      "Crea un guion corto para un reel que muestre errores típicos de tu audiencia.",
    prompt: `Actúa como guionista de vídeos cortos.

Nicho: [tu nicho].  
Audiencia: [describe a quién hablas].

Crea un guion de reel de 30–45 segundos con esta estructura:
1) Hook: error común que comete tu audiencia (“Si sigues haciendo X…”).
2) Escena 1: mostrar cómo suele hacerlo la mayoría (forma equivocada).
3) Escena 2: explicar por qué eso no funciona.
4) Escena 3: mostrar una alternativa mejor.
5) Cierre: llamado a la acción (seguir, guardar, compartir o mirar otro contenido).`,
    thumbnail: "",
  },

  {
    id: "reel-mitos-vs-realidad",
    title: "Reel mitos vs realidad",
    category: "Reels",
    summary:
      "Guion para un reel donde derribas mitos de tu temática de forma clara y visual.",
    prompt: `Eres creador de contenido educativo en formato rápido.

Tema: [tema principal].  

Crea un guion de reel “Mitos vs realidad” que incluya:
1) 3 mitos muy comunes.
2) Para cada mito:
   - Texto corto en pantalla: “MITO: …”
   - Texto corto en pantalla: “REALIDAD: …”
   - Una frase de explicación rápida que yo pueda decir en voz.
3) Un cierre que invite a cuestionar lo que la gente suele creer sobre el tema.`,
    thumbnail: "",
  },

  // 🧩 CAROUSELS / CARRUSELES EDUCATIVOS
  {
    id: "carrusel-pasos-claros",
    title: "Carrusel de pasos claros",
    category: "Redes sociales",
    summary:
      "Estructura un carrusel tipo “X pasos para conseguir Y” con mensajes claros.",
    prompt: `Actúa como creador de carruseles educativos.

Tema: [ej. “Cómo crear tu primer infoproducto”, “Cómo organizar tu semana”].  

Crea un carrusel de 8–10 láminas:
1) Portada con título fuerte (X pasos para lograr Y).
2) 5–7 láminas con un paso por lámina:
   - Título corto del paso.
   - Explicación en 2–3 frases.
3) Lámina de resumen.
4) Lámina final con llamada a la acción (guardar, compartir, seguir o ver oferta).`,
    thumbnail: "",
  },

  {
    id: "carrusel-mini-caso-estudio",
    title: "Carrusel con mini caso de estudio",
    category: "Redes sociales",
    summary:
      "Cuenta un caso real o ficticio de transformación usando un carrusel.",
    prompt: `Eres storyteller de resultados.

Caso: [describe brevemente un caso real o ficticio de cliente].

Crea un carrusel de 7–9 láminas:
1) Portada: resultado llamativo en forma de titular.
2) Láminas 2–3: contexto inicial (quién era, problema, situación).
3) Láminas 4–6: qué hizo (proceso, cambios, decisiones).
4) Lámina 7: resultado final.
5) Lámina final: moraleja + llamada a la acción (ej. “¿Quieres algo parecido? Haz X”).`,
    thumbnail: "",
  },

  // 📰 NEWSLETTER / CONTENIDO LARGO EN EMAIL
  {
    id: "newsletter-formato-fijo",
    title: "Formato fijo para tu newsletter",
    category: "Email",
    summary: "Diseña una estructura repetible para tu newsletter semanal.",
    prompt: `Actúa como editor de newsletter.

Tema central de la newsletter: [tema].  
Frecuencia: [semanal/quincenal].

Crea un formato fijo con secciones como:
1) Introducción personal (2–4 frases).
2) Idea principal de la edición (tema educativo central).
3) Mini sección de “herramienta / recurso de la semana”.
4) Mini sección de “pregunta para reflexionar”.
5) Llamado a la acción (responder, compartir, ver oferta, etc.).

Incluye un ejemplo completo de una edición usando esa estructura.`,
    thumbnail: "",
  },

  {
    id: "newsletter-story-venta-suave",
    title: "Newsletter con historia y venta suave",
    category: "Email",
    summary:
      "Crea un email en formato historia que termina con una invitación a comprar.",
    prompt: `Eres copywriter especializado en emails tipo storyselling.

Producto que quiero mencionar: [producto].  
Tema de la historia: [anécdota, error, aprendizaje, etc.].

Crea un email que:
1) Empiece con una historia personal o de un cliente.
2) Conecte la historia con un problema que vive el lector.
3) Introduzca tu producto como la forma práctica de avanzar.
4) Termine con una llamada a la acción suave (sin presión).

Estilo cercano, ligero y con toques de humor si encaja.`,
    thumbnail: "",
  },

  // 🧠 MARCA PERSONAL Y POSICIONAMIENTO
  {
    id: "posicionamiento-1-frase",
    title: "Definir tu posicionamiento en una frase",
    category: "Marca personal",
    summary:
      "Aterriza en una sola frase quién eres, a quién ayudas y cómo lo haces.",
    prompt: `Actúa como consultor de marca personal.

Contexto: te voy a decir a qué me dedico, a quién ayudo y cómo.  

Con esa información:
1) Crea 10 opciones de frase de posicionamiento en formato:
   - “Ayudo a [tipo de persona] a [lograr X] sin [dolor] usando [método]”.
   - O variantes similares claras.
2) Señala cuál crees que es la más potente y por qué.
3) Propón una versión aún más simple (tipo “yo me encargo de…”).`,
    thumbnail: "",
  },

  {
    id: "contenido-opinion-fuerte",
    title: "Contenido de opinión fuerte (sin ser hater)",
    category: "Marca personal",
    summary:
      "Crea un post donde des tu opinión sin miedo y a la vez aportes valor.",
    prompt: `Eres un creador con criterio que no tiene miedo de decir lo que piensa, pero con respeto.

Tema sobre el que quiero opinar: [tema].  
Postura que tengo: [resúmela].

Crea:
1) Un post donde:
   - Empieces mostrando el punto de vista común que no compartes.
   - Expliques por qué crees que está incompleto o es dañino.
   - Propongas una forma diferente de ver el tema.
   - Cierres con una invitación al debate en comentarios.

Tono firme, pero respetuoso, sin atacar a personas concretas.`,
    thumbnail: "",
  },

  // 🧮 PRODUCTIZAR SERVICIOS
  {
    id: "disenar-servicio-productizado",
    title: "Diseñar un servicio productizado",
    category: "Servicios",
    summary:
      "Convierte tu servicio personalizado en una oferta clara, con un sistema definido.",
    prompt: `Actúa como consultor de servicios productizados.

Servicio actual: [describe cómo trabajas ahora].  

Ayúdame a diseñar un servicio productizado que incluya:
1) Nombre del servicio.
2) Problema específico que resuelve.
3) Entregables claros (qué recibe el cliente).
4) Proceso paso a paso (cómo trabajamos juntos).
5) Plazos aproximados.
6) Qué sí incluye y qué no.
7) Idea de precio posicionado (no hace falta monto exacto, pero sí estrategia).`,
    thumbnail: "",
  },

  {
    id: "pagina-servicio-simple",
    title: "Guion para página de servicio simple",
    category: "Servicios",
    summary:
      "Esquema de copy para una página que explique tu servicio de forma clara.",
    prompt: `Eres copywriter para webs de servicios.

Servicio: [qué ofrece tu servicio].  
Cliente ideal: [quién es].

Crea el guion de una página de servicio con:
1) Sección hero (título + subtítulo + CTA).
2) Problema que resuelves explicado con ejemplos.
3) Qué incluye el servicio (bullets claros).
4) Beneficios (qué cambia en la vida/negocio del cliente).
5) Proceso de trabajo en 3–5 pasos.
6) Testimonios (estructura de ejemplo).
7) Cierre con llamada a la acción (agendar llamada, completar formulario, etc.).`,
    thumbnail: "",
  },

  // 🧠 THINKING PARTNER / ESTRATEGIA
  {
    id: "lluvia-ideas-modelos-negocio",
    title: "Lluvia de ideas de modelos de negocio",
    category: "Negocio",
    summary:
      "Explora posibles modelos de negocio digitales según tus habilidades y contexto.",
    prompt: `Actúa como generador de ideas de modelos de negocio.

Cuéntame:
- Qué sabes hacer (habilidades).
- Qué te gusta.
- Qué no quieres (cosas que quieres evitar).
- Cuánto tiempo tienes disponible.

Con eso genera:
1) 10 ideas de modelos de negocio que podría montar (servicios, cursos, membresías, productos, etc.).
2) Para cada idea:
   - Cómo funcionaría.
   - Ventajas.
   - Desventajas o retos.
3) Señala 3 ideas que parezcan más realistas para empezar en los próximos 3 meses.`,
    thumbnail: "",
  },

  {
    id: "priorizar-ideas-proyectos",
    title: "Sistema para priorizar ideas y proyectos",
    category: "Productividad",
    summary:
      "Crea un marco para decidir en qué enfocarte cuando tienes demasiadas ideas.",
    prompt: `Eres consultor de foco y priorización.

Te voy a listar varias ideas/proyectos que tengo en mente.  

Tu trabajo:
1) Clasificar las ideas en:
   - Alta oportunidad / alta energía.
   - Alta oportunidad / baja energía.
   - Media oportunidad / alta energía.
   - Baja prioridad.
2) Explicar en base a qué criterios las ordenas (impacto, esfuerzo, tiempo, alineación).
3) Proponer un plan para:
   - Qué hacer primero.
   - Qué posponer.
   - Qué descartar (o dejar en “parking lot”).`,
    thumbnail: "",
  },

  // 🧾 DOCUMENTOS INTERNOS / GUÍAS PARA EQUIPO
  {
    id: "guia-tono-marca",
    title: "Guía de tono de tu marca",
    category: "Marca personal",
    summary: "Documenta cómo debe sonar tu marca para ti o tu equipo.",
    prompt: `Actúa como brand strategist.

Describe brevemente tu marca y tu audiencia: [texto libre].  

Con eso, crea una guía de tono que incluya:
1) 3 palabras que definan el tono (ej. directo, cercano, divertido).
2) Cómo sí debemos sonar (ejemplos de frases).
3) Cómo NO debemos sonar (ejemplos).
4) Palabras que usamos mucho y palabras que evitamos.
5) Ejemplos de mensajes “antes” y “después” ajustados al tono correcto.`,
    thumbnail: "",
  },

  {
    id: "manual-respuestas-comentarios",
    title: "Manual para responder comentarios en redes",
    category: "Soporte",
    summary:
      "Crea una pequeña guía con ejemplos para responder comentarios positivos y negativos.",
    prompt: `Eres social media manager.

Nicho: [tu nicho].  

Crea un mini manual que incluya ejemplos de respuestas para:
1) Comentarios positivos (agradecimiento, compartir, invitación suave).
2) Comentarios con dudas reales (responder y reconducir a un recurso u oferta).
3) Comentarios negativos constructivos (agradecer, aclarar, corregir si aplica).
4) Comentarios hate/troll (cómo responder o cuándo no responder).

Hazlo en formato guía + ejemplos de respuestas textuales.`,
    thumbnail: "",
  },

  // 🌗 GESTIÓN EMOCIONAL DEL EMPRENDEDOR
  {
    id: "diario-emprendedor-ia",
    title: "Diario emocional del emprendedor con IA",
    category: "Desarrollo personal",
    summary:
      "Usa IA como espejo emocional para procesar tus días buenos y malos.",
    prompt: `Quiero que actúes como un “diario emocional” para emprendedores.

Cada vez que te escriba “DIARIO HOY” te voy a contar cómo fue mi día.

Tú:
1) Resume lo que percibes que estoy sintiendo.
2) Señala 2–3 cosas que hice bien y no estoy valorando.
3) Señala 1–2 cosas que podría mejorar mañana.
4) Propón una pequeña reflexión o pregunta poderosa para cerrar el día.`,
    thumbnail: "",
  },

  {
    id: "gestionar-fracaso-lanzamiento",
    title: "Gestionar emocionalmente un lanzamiento que salió mal",
    category: "Desarrollo personal",
    summary:
      "Prompt para procesar aprendizajes de un lanzamiento que no funcionó como esperabas.",
    prompt: `Actúa como mentor empático que ha pasado por muchos lanzamientos.

Voy a contarte lo que pasó en un lanzamiento que salió mal: [explica].  

Con eso:
1) Ayúdame a separar hechos de interpretaciones (qué ocurrió vs qué estoy pensando).
2) Señala aprendizajes concretos (cosas que controlaré mejor la próxima vez).
3) Señala cosas que NO dependen al 100% de mí.
4) Propón 3 acciones pequeñas para volver a tomar impulso sin quedarme paralizado.`,
    thumbnail: "",
  },

  // 🧱 SISTEMAS PARA USAR EL BANCO SECRETO DE PROMPTS
  {
    id: "rutina-uso-banco-prompts",
    title: "Rutina semanal de uso del Banco de Prompts",
    category: "Sistemas",
    summary:
      "Crea una rutina concreta para integrar el uso de IA en tu semana.",
    prompt: `Quiero que actúes como estratega de sistemas con IA.

Contexto:
- Tengo acceso a un gran banco de prompts.
- Mi problema es que no lo uso de forma consistente.

Diseña una rutina semanal que:
1) Tenga 2–3 bloques fijos donde SIEMPRE use IA (ej. planificación, creación, revisión).
2) Explique qué tipo de prompts usar en cada bloque.
3) Incluya una mini revisión semanal para:
   - Ver qué prompts me funcionaron mejor.
   - Guardarlos en favoritos.
   - Ajustarlos para la próxima semana.`,
    thumbnail: "",
  },

  {
    id: "prompt-refinar-mis-prompts-favoritos",
    title: "Refinar tus prompts favoritos con el tiempo",
    category: "Sistemas",
    summary:
      "Proceso para ir mejorando esos prompts que más usas hasta que queden perfectos.",
    prompt: `Eres especialista en iteración y mejora de prompts.

Cada vez que te pegue uno de mis prompts favoritos, haz esto:
1) Pregúntame en qué contexto lo uso y qué resultado espero.
2) Analiza el prompt y dime:
   - Qué partes están claras.
   - Qué partes podrían ser más específicas.
3) Propón una versión mejorada.
4) Sugiere una versión “pro” del mismo prompt, pensada para usuarios avanzados.

La idea es que, con el tiempo, vaya acumulando una colección de “prompts de oro” hiper refinados.`,
    thumbnail: "",
  },
];

// 🖼️ Prompts de IMAGEN
export const imagePrompts = [
  // 🧍‍♀️ RETRATOS / MARCA PERSONAL

  {
    id: "img-retrato-marca-personal-urbano",
    title: "Retrato de marca personal urbano",
    category: "Retratos",
    summary:
      "Foto tipo sesión profesional en ciudad para creadores de contenido / infoproductores.",
    prompt: `Retrato fotográfico de un creador de contenido de pie en una avenida urbana moderna, edificios de fondo, luces cálidas al atardecer, profundidad de campo marcada, enfoque en el rostro, expresión segura pero cercana, ropa casual elegante (camisa simple y jeans oscuros), estilo fotografía profesional, nitidez alta, bokeh suave, iluminación cinematográfica.`,
    thumbnail: "/images/retrato-urbano.png",
  },

  {
    id: "img-retrato-oficina-vidrio",
    title: "Retrato profesional en oficina de vidrio",
    category: "Retratos",
    summary:
      "Foto tipo LinkedIn en oficina moderna con cristales y luz natural.",
    prompt: `Retrato medio cuerpo de un profesional en una oficina moderna con ventanales de vidrio, luz natural difusa, reflejos suaves, fondo ligeramente desenfocado con computadoras y escritorios, expresión confiada y amable, postura relajada, estilo fotografía corporativa limpia, colores neutros con toques de azul y gris, alta resolución.`,
    thumbnail: "/images/retrato-profesional.png",
  },

  {
    id: "img-retrato-laptop-cafe",
    title: "Marca personal trabajando en cafetería",
    category: "Retratos",
    summary:
      "Escena de laptop y café estilo emprendedor digital / nómada digital.",
    prompt: `Fotografía estética de emprendedor digital trabajando con laptop en una cafetería moderna, mesa de madera, taza de café al lado, luz cálida entrando por la ventana, fondo con plantas y decoración minimalista, estilo lifestyle, tonos cálidos, sensación de productividad relajada.`,
    thumbnail: "/images/retrato-cafeteria.png",
  },

  {
    id: "img-retrato-neon-creador",
    title: "Retrato creativo con luces de neón",
    category: "Retratos",
    summary:
      "Retrato llamativo tipo gamer / streamer con luces fucsia y azul.",
    prompt: `Retrato frontal de un creador digital con luces de neón rosa y azul, fondo oscuro con formas geométricas brillantes, estilo futurista, contraste alto, reflejos de color en el rostro, expresión concentrada pero amigable, iluminación tipo estudio, estética cyber neon moderna.`,
    thumbnail: "/images/retrato-neon.png",
  },

  {
    id: "img-retrato-fondo-solido-branding",
    title: "Retrato sobre fondo sólido para branding",
    category: "Retratos",
    summary:
      "Foto limpia con fondo de color plano para usar en portadas y miniaturas.",
    prompt: `Retrato fotográfico de medio cuerpo sobre fondo sólido liso (color a elección, por ejemplo azul oscuro), iluminación suave de estudio, sombras ligeras, expresión confiada y sonriente, ropa sencilla y neutra, composición centrada, espacio negativo alrededor para añadir texto, estilo fotografía publicitaria minimalista.`,
    thumbnail: "/images/retrato-solido.png",
  },

  {
    id: "img-retrato-tipo-podcast",
    title: "Retrato tipo podcast con micrófono",
    category: "Retratos",
    summary:
      "Escena tipo podcast con micrófono y fondo suave, ideal para marca educativa.",
    prompt: `Fotografía de un creador grabando podcast, sentado frente a un micrófono profesional, fondo difuminado con estantería y luces cálidas, mesa de madera, laptop a un lado, expresión natural mientras habla, estilo cozy pero profesional, colores cálidos, iluminación suave.`,
    thumbnail: "/images/retrato-podcast.png",
  },

  {
    id: "img-retrato-exterior-naturaleza",
    title: "Retrato natural en exterior",
    category: "Retratos",
    summary:
      "Sesión al aire libre con árboles desenfocados y luz suave.",
    prompt: `Retrato en exteriores de una persona caminando por un parque con árboles de fondo, luz suave tipo golden hour, fondo verde desenfocado, expresión tranquila, estilo fotografía lifestyle natural, tonos cálidos y verdes, sensación de calma y libertad.`,
    thumbnail: "/images/retrato-naturaleza.png",
  },

  {
    id: "img-retrato-escritorio-ia",
    title: "Retrato con ambiente de IA y pantallas",
    category: "Retratos",
    summary:
      "Creador de IA rodeado de pantallas con gráficos futuristas.",
    prompt: `Fotografía de un profesional sentado frente a varias pantallas con interfaces futuristas, gráficos de datos y elementos de inteligencia artificial, luces azules y cian, ambiente tecnológico, silla ergonómica, iluminación tenue tipo sci-fi, estilo high-tech pero realista.`,
    thumbnail: "/images/retrato-ia.png",
  },

  {
    id: "img-retrato-blanco-negro-dramatico",
    title: "Retrato en blanco y negro dramático",
    category: "Retratos",
    summary:
      "Foto artística en blanco y negro para transmitir profundidad y seriedad.",
    prompt: `Retrato en blanco y negro de alto contraste, luz lateral que remarca facciones, fondo oscuro, expresión seria e introspectiva, textura visible en piel y cabello, estilo fotográfico clásico, composición sencilla y elegante.`,
    thumbnail: "/images/retrato-bw.png",
  },

  {
    id: "img-retrato-tipo-thumbnail-youtube",
    title: "Retrato para thumbnail de YouTube",
    category: "Retratos",
    summary:
      "Imagen pensada para miniatura con espacio para texto y gesto expresivo.",
    prompt: `Retrato de medio cuerpo con fondo degradado oscuro, gesto expresivo (sorpresa, duda o emoción), luz frontal suave, espacio a un lado con fondo limpio para añadir texto, estilo miniatura de YouTube moderna, colores vibrantes pero elegantes, alta resolución.`,
    thumbnail: "/images/retrato-youtube.png",
  },

  // 🛍 PRODUCTOS / E-COMMERCE / MOCKUPS

  {
    id: "img-mockup-ebook-tablet",
    title: "Mockup de e-book en tablet",
    category: "Productos",
    summary:
      "Mockup limpio de e-book mostrado en una tablet sobre mesa.",
    prompt: `Mockup realista de una tablet en una mesa de madera clara, mostrando la portada de un e-book de marketing digital, fondo minimalista con pocos objetos (lentes, bolígrafo, taza de café), iluminación suave, estilo clean, ideal para landing page.`,
    thumbnail: "/images/mockup-ebook-tablet.png",
  },

  {
    id: "img-mockup-curso-online-laptop",
    title: "Mockup de curso online en laptop",
    category: "Productos",
    summary:
      "Imagen para mostrar tu curso en una pantalla de laptop.",
    prompt: `Laptop moderna sobre escritorio elegante, pantalla mostrando la interfaz de un curso online (panel de lecciones, video player), fondo desenfocado con decoración minimalista, luz natural lateral, estilo profesional, sensación de producto premium.`,
    thumbnail: "/images/mockup-curso-laptop.png",
  },

  {
    id: "img-mockup-membresia-multipantalla",
    title: "Mockup de membresía multipantalla",
    category: "Productos",
    summary:
      "Curso/membresía visible en laptop, tablet y móvil a la vez.",
    prompt: `Composición con tres dispositivos: laptop, tablet y smartphone, todos mostrando partes de una misma plataforma de cursos o membresía, fondo degradado oscuro con luz suave, estilo tech premium, reflejos suaves, composición simétrica.`,
    thumbnail: "/images/mockup-membresia-multipantalla.png",
  },

  {
    id: "img-producto-caja-digital",
    title: "Caja digital de infoproducto",
    category: "Productos",
    summary:
      "Caja 3D de infoproducto tipo software / curso.",
    prompt: `Caja 3D de producto digital con diseño moderno, combinación de colores azul, violeta y cian, tipografía clara, fondo ligeramente desenfocado con textura abstracta, luz suave que resalta los bordes, estilo presentación de software.`,
    thumbnail: "/images/mockup-caja-digital.png",
  },

  {
    id: "img-producto-pack-recursos",
    title: "Pack de recursos digitales",
    category: "Productos",
    summary:
      "Varias cajas, hojas y mockups simulando un gran pack.",
    prompt: `Composición de varios elementos: cajas 3D, hojas impresas, tablet y laptop, todos representando un “pack de recursos digitales”, fondo neutro con luz suave, estilo limpio, sensación de abundancia y valor, colores armoniosos en tonos azules y morados.`,
    thumbnail: "/images/mockup-pack-recursos.png",
  },

  {
    id: "img-producto-plantillas-social-media",
    title: "Plantillas de redes sociales en pantalla",
    category: "Productos",
    summary:
      "Mockup mostrando templates de Instagram en la pantalla.",
    prompt: `Pantalla de computador o laptop con varias miniaturas de plantillas de Instagram, grid organizado, colores vivos pero elegantes, fondo de escritorio minimalista, luz suave, estilo portfolio de diseñador.`,
    thumbnail: "/images/mockup-plantillas-social.png",
  },

  {
    id: "img-producto-app-movil",
    title: "Preview de app móvil de productividad",
    category: "Productos",
    summary:
      "Teléfono mostrando una app de notas / tareas organizada.",
    prompt: `Teléfono inteligente moderno en primer plano, pantalla mostrando una app de productividad con lista de tareas y calendario, fondo difuminado con escritorio y planta, iluminación suave, estilo UI limpia y moderna.`,
    thumbnail: "/images/mockup-app-movil.png",
  },

  {
    id: "img-producto-webinar-en-vivo",
    title: "Anuncio visual de webinar en vivo",
    category: "Productos",
    summary:
      "Imagen conceptual de un webinar con pantalla grande y público borroso.",
    prompt: `Escena con una gran pantalla proyectando diapositivas, siluetas de personas escuchando desenfocadas, luces suaves azules y violetas, texto en la pantalla tipo “webinar en vivo”, ambiente profesional, estilo conferencia moderna.`,
    thumbnail: "/images/mockup-webinar.png",
  },

  {
    id: "img-producto-membership-ia",
    title: "Membresía de IA tipo hub",
    category: "Productos",
    summary:
      "Centro de mando de IA con tarjetas y paneles flotando.",
    prompt: `Ilustración semi-realista de un hub digital de inteligencia artificial, paneles flotando con iconos de prompts, vídeos, comunidad, gráficos de crecimiento, fondo oscuro con luces cian y púrpura, estilo futurista pero limpio, sensación de ecosistema organizado.`,
    thumbnail: "/images/mockup-membership-ia.png",
  },

  {
    id: "img-producto-biblioteca-prompts",
    title: "Biblioteca de prompts visual",
    category: "Productos",
    summary:
      "Concepto de biblioteca digital llena de tarjetas de prompts.",
    prompt: `Ilustración de una biblioteca digital donde en lugar de libros hay tarjetas flotantes con líneas de texto y iconos de IA, fondo oscuro con un ligero degradado azul, luz brillante en el centro, sensación de abundancia y organización, estilo moderno futurista.`,
    thumbnail: "/images/mockup-biblioteca-prompts.png",
  },

  // 🎨 CONTENIDO PARA REDES / CREATIVOS

  {
    id: "img-fondo-cita-inspiracional",
    title: "Fondo para frase inspiracional",
    category: "Social media",
    summary:
      "Fondo suave minimalista para colocar una frase encima.",
    prompt: `Fondo abstracto minimalista con degradado suave en tonos morado oscuro y cian, textura ligera, sin elementos distractores, centro más claro para colocar texto, estilo elegante para quotes motivacionales.`,
    thumbnail: "/images/fondo-cita-inspiracional.png",
  },

  {
    id: "img-fondo-historias-vertical",
    title: "Fondo vertical para historias",
    category: "Social media",
    summary:
      "Fondo 9:16 con textura sutil y espacio para texto.",
    prompt: `Fondo vertical estilo historia, degradado en tonos azul oscuro y violeta, textura sutil en diagonal, marco suave o viñeta ligera en los bordes, centro limpio para colocar texto o stickers, estilo moderno y elegante.`,
    thumbnail: "/images/fondo-historias-vertical.png",
  },

  {
    id: "img-portada-reel-educativo",
    title: "Portada para reel educativo",
    category: "Social media",
    summary:
      "Fondo con elementos de educación/crecimiento y espacio para título.",
    prompt: `Imagen vertical con fondo oscuro, íconos planos de gráficos, libros, bombillas de idea y pantallas flotando en tonos cian y magenta, centro despejado para poner un título, estilo flat + glow ligero, sensación de contenido educativo y moderno.`,
    thumbnail: "/images/portada-reel-educativo.png",
  },

  {
    id: "img-portada-video-ia",
    title: "Portada para vídeo sobre IA",
    category: "Social media",
    summary:
      "Visual llamativo con cerebro digital y circuitos.",
    prompt: `Ilustración de un cerebro hecho de circuitos y luz, mitad orgánico mitad digital, fondo oscuro con líneas de código y partículas brillantes azul cian, estilo moderno de tecnología, alto contraste, ideal para portada de vídeo sobre IA.`,
    thumbnail: "/images/portada-video-ia.png",
  },

  {
    id: "img-infografia-simple-3-pasos",
    title: "Infografía simple de 3 pasos",
    category: "Social media",
    summary:
      "Gráfico limpio de 3 bloques con números grandes.",
    prompt: `Infografía minimalista con 3 bloques horizontales numerados 1, 2 y 3, fondo claro o muy oscuro, cada bloque con un recuadro de color y espacio para texto, estética flat, iconos sencillos, estilo profesional y fácil de leer.`,
    thumbnail: "/images/infografia-3-pasos.png",
  },

  {
    id: "img-tablero-vision-digital",
    title: "Tablero de visión digital",
    category: "Social media",
    summary:
      "Collage estético de metas: dinero, libertad, creatividad, IA.",
    prompt: `Collage digital estético que represente un “vision board”: imágenes de laptop, avión, naturaleza, gráfico de crecimiento, iconos de IA, colores cálidos con toques de cian, estilo moderno y aspiracional, composición equilibrada.`,
    thumbnail: "/images/tablero-vision-digital.png",
  },

  {
    id: "img-checklist-digital",
    title: "Checklist digital minimalista",
    category: "Social media",
    summary:
      "Ilustración de lista con íconos de check en pantalla.",
    prompt: `Ilustración de una pantalla o tarjeta con lista de tareas y varios checkmarks verdes, fondo limpio, estilo flat minimalista, colores suaves, perfecta para representar checklist o pasos a seguir.`,
    thumbnail: "/images/checklist-digital.png",
  },

  {
    id: "img-feed-grid-estetico",
    title: "Grid de feed estético",
    category: "Social media",
    summary:
      "Vista conceptual de un feed de Instagram limpio y cuidado.",
    prompt: `Vista isométrica de un teléfono mostrando un feed de Instagram con publicaciones armoniosas, colores coherentes, diseño estético, iconos y fotos pequeñas bien alineadas, fondo simple, estilo moderno, luz suave.`,
    thumbnail: "/images/feed-grid-estetico.png",
  },

  {
    id: "img-community-whatsapp",
    title: "Grupo/comunidad en WhatsApp",
    category: "Social media",
    summary:
      "Visual para representar comunidad en WhatsApp (sin logos registrados).",
    prompt: `Ilustración conceptual de una comunidad en chat: burbujas de chat verdes y blancas genéricas, iconos de personas conectadas, fondo sencillo oscuro, elementos de conexión (líneas, nodos), estilo limpio, sin usar logotipos reales.`,
    thumbnail: "/images/community-whatsapp.png",
  },

  {
    id: "img-comunidad-creadores",
    title: "Comunidad de creadores conectados",
    category: "Social media",
    summary:
      "Red de personas conectadas con laptops y luces.",
    prompt: `Ilustración de varias siluetas de personas sentadas con laptops, conectadas entre sí por líneas de luz, fondo oscuro con puntos brillantes como si fuera una red, colores cian y violeta, sensación de comunidad digital y colaboración.`,
    thumbnail: "/images/comunidad-creadores.png",
  },

  // 🤖 IA / FUTURISTA / TECNOLÓGICO

  {
    id: "img-panel-control-ia",
    title: "Panel de control de IA",
    category: "Tecnología",
    summary:
      "Pantalla futurista con gráficos, prompts y resultados.",
    prompt: `Ilustración de un panel de control futurista de inteligencia artificial, tarjetas con prompts, gráficos de crecimiento, ventanas de chat estilo IA, fondo oscuro con detalles azul neón, estilo HUD (heads-up display) moderno.`,
    thumbnail: "/images/panel-control-ia.png",
  },

  {
    id: "img-robot-amigable-escritorio",
    title: "Robot amigable en escritorio",
    category: "Tecnología",
    summary:
      "Pequeño asistente robótico junto a laptop y café.",
    prompt: `Ilustración de un pequeño robot amigable sentado sobre un escritorio junto a una laptop y una taza de café, expresión simpática, luces azules en sus ojos, ambiente cálido de oficina, estilo semirealista, sensación de asistente digital personal.`,
    thumbnail: "/images/robot-amigable.png",
  },

  {
    id: "img-flujo-trabajo-automatizado",
    title: "Flujo de trabajo automatizado",
    category: "Tecnología",
    summary:
      "Ilustración de tareas conectadas con líneas y engranajes digitales.",
    prompt: `Diagrama visual estilizado representando flujo de trabajo automatizado: iconos de tareas, flechas conectándolas, engranajes digitales, elementos de IA, fondo oscuro, líneas de luz en cian, estilo futurista pero claro.`,
    thumbnail: "/images/flujo-trabajo-automatizado.png",
  },

  {
    id: "img-red-neuronal-creativa",
    title: "Red neuronal creativa",
    category: "Tecnología",
    summary:
      "Cerebro conectado a nodos de color, aludiendo a creatividad e IA.",
    prompt: `Ilustración de una red neuronal con forma de cerebro hecha de nodos y líneas luminosas, colores cian, violeta y magenta, fondo oscuro, partículas flotando, estilo artístico tecnológico, sensación de creatividad y procesamiento intenso.`,
    thumbnail: "/images/red-neuronal-creativa.png",
  },

  {
    id: "img-avatar-ia-hablante",
    title: "Avatar IA tipo presentador",
    category: "Tecnología",
    summary:
      "Figura tipo presentador/host digital en un entorno 3D.",
    prompt: `Avatar digital humanoide hablando frente a un fondo de estudio virtual, pantallas con gráficos detrás, iluminación suave, rasgos amables y neutrales, estilo semi-realista 3D, ambiente de presentación profesional impulsada por IA.`,
    thumbnail: "/images/avatar-ia-hablante.png",
  },

  {
    id: "img-dashboard-analytics",
    title: "Dashboard de métricas y analíticas",
    category: "Tecnología",
    summary:
      "Pantalla con gráficos, barras y KPIs resaltados.",
    prompt: `Pantalla estilo dashboard con gráficos de barras, líneas de crecimiento, tarjetas de métricas, fondo oscuro, acentos en cian y verde, estilo UI moderna, reflejos suaves, sensación de control y datos en tiempo real.`,
    thumbnail: "/images/dashboard-analytics.png",
  },

  {
    id: "img-holograma-prompts",
    title: "Holograma de prompts flotando",
    category: "Tecnología",
    summary:
      "Tarjetas de texto flotando alrededor de un usuario.",
    prompt: `Persona de espaldas mirando hologramas de tarjetas de texto flotando en el aire, cada tarjeta con líneas de texto simuladas, fondo oscuro, luces azules y moradas, estilo futurista cinemático, sensación de estar rodeado de posibilidades de prompts.`,
    thumbnail: "/images/holograma-prompts.png",
  },

  {
    id: "img-tunel-datos-luz",
    title: "Túnel de datos luminosos",
    category: "Tecnología",
    summary:
      "Visual abstracto de datos fluyendo como túnel de luz.",
    prompt: `Túnel abstracto de luz formado por líneas de datos y bits en movimiento, colores azul y cian, sensación de velocidad y flujo, estilo futurista, perfecto como fondo tecnológico dinámico.`,
    thumbnail: "/images/tunel-datos-luz.png",
  },

  {
    id: "img-mano-humana-robot",
    title: "Mano humana y mano robótica",
    category: "Tecnología",
    summary:
      "Referencia visual a colaboración humano–IA.",
    prompt: `Ilustración de una mano humana y una mano robótica acercándose para tocarse (como una versión moderna de la creación de Adán), fondo oscuro con luz suave en el punto de contacto, chispas de luz cian, estilo elegante y simbólico.`,
    thumbnail: "/images/mano-humana-robot.png",
  },

  {
    id: "img-ia-escribiendo-pantalla",
    title: "IA escribiendo texto en pantalla",
    category: "Tecnología",
    summary:
      "Pantalla de chat con IA generando ideas.",
    prompt: `Ilustración de una interfaz de chat con IA escribiendo automáticamente en cuadros de texto, mensajes apareciendo, icono de IA brillando, fondo limpio, estilo moderno, ideal para representar generación de contenido con IA.`,
    thumbnail: "/images/ia-escribiendo-pantalla.png",
  },

  // 🌆 ESCENAS / FONDOS / AMBIENTES ESTÉTICOS

  {
    id: "img-escritorio-setup-creador",
    title: "Escritorio estético de creador",
    category: "Fondos",
    summary:
      "Setup de escritorio con luz suave, laptop y elementos minimal.",
    prompt: `Escritorio minimalista con laptop abierta, planta pequeña, libreta y bolígrafo, luz cálida entrando por la ventana, fondo limpio, estilo fotografía lifestyle productiva, colores suaves, sensación de orden y enfoque.`,
    thumbnail: "/images/fondo-escritorio-setup.png",
  },

  {
    id: "img-oficina-home-studio",
    title: "Home office / estudio de creador",
    category: "Fondos",
    summary:
      "Habitación adaptada como estudio con luces, micrófono y estantería.",
    prompt: `Habitación tipo home office con escritorio, micrófono, aro de luz, estantería con libros, luces LED suaves en colores violeta y azul, silla cómoda, ambiente acogedor, estilo setup de creador de contenido profesional.`,
    thumbnail: "/images/fondo-home-studio.png",
  },

  {
    id: "img-ciudad-futurista-nocturna",
    title: "Ciudad futurista nocturna",
    category: "Fondos",
    summary:
      "Skyline futurista iluminado en tonos cian y fucsia.",
    prompt: `Vista de ciudad futurista de noche, rascacielos con luces de neón cian y magenta, reflejos en edificios de vidrio, cielo oscuro con ligera neblina luminosa, estilo sci-fi cinematográfico.`,
    thumbnail: "/images/fondo-ciudad-futurista.png",
  },

  {
    id: "img-parque-minimal-limpio",
    title: "Parque minimalista para fondos",
    category: "Fondos",
    summary:
      "Escena de parque limpia con espacio para texto.",
    prompt: `Parque minimalista con camino amplio, árboles bien espaciados, cielo claro, profundidad de campo suave, estilo fotografía limpia, sin demasiados detalles distractores, ideal para usar de fondo y superponer texto.`,
    thumbnail: "/images/fondo-parque-minimal.png",
  },

  {
    id: "img-fondo-abstracto-neon",
    title: "Abstracto con neón y humo suave",
    category: "Fondos",
    summary:
      "Fondo abstracto con luces degradadas y humo.",
    prompt: `Fondo abstracto oscuro con luces de neón rosa, morado y cian, humo suave difuminado, textura sutil, sensación de profundidad y glow, perfecto para usar detrás de retratos o texto.`,
    thumbnail: "/images/fondo-abstracto-neon.png",
  },

  {
    id: "img-fondo-minimal-blanco-sombra",
    title: "Fondo minimal blanco con sombra suave",
    category: "Fondos",
    summary:
      "Fondo ultra minimal para maquetas y screenshots.",
    prompt: `Fondo claro casi blanco, ligera sombra en diagonal, textura muy sutil, estilo ultraminimalista, pensado para colocar mockups encima, atmósfera limpia y moderna.`,
    thumbnail: "/images/fondo-minimal-blanco.png",
  },

  {
    id: "img-espacio-trabajo-equipo",
    title: "Espacio de trabajo en equipo",
    category: "Fondos",
    summary:
      "Mesa grande con varias personas colaborando.",
    prompt: `Oficina creativa con mesa grande compartida, personas trabajando con laptops, post-its en la pared, ambiente luminoso, plantas decorativas, estilo fotografía moderna de equipo colaborando.`,
    thumbnail: "/images/fondo-espacio-trabajo-equipo.png",
  },

  {
    id: "img-calle-estilo-foto-moda",
    title: "Calle estilo sesión de moda urbana",
    category: "Fondos",
    summary:
      "Calle limpia con edificios y luz bonita para fotomontajes.",
    prompt: `Calle urbana elegante con edificios modernos, luz de atardecer, sombras largas, ambiente limpio, gran profundidad de campo, estilo fotografía de moda urbana, ideal como fondo para recortar sujetos encima.`,
    thumbnail: "/images/fondo-calle-moda.png",
  },

  {
    id: "img-fondo-pizarra-estrategia",
    title: "Pizarra de estrategia",
    category: "Fondos",
    summary:
      "Pizarra llena de esquemas, flechas y notas.",
    prompt: `Pizarra grande con diagramas de flechas, palabras clave de estrategia (sin texto real legible), dibujos simples, colores de marcadores, ambiente de sala de reuniones creativa, estilo realista.`,
    thumbnail: "/images/fondo-pizarra-estrategia.png",
  },

  {
    id: "img-fondo-graficos-marketing",
    title: "Gráficos de marketing en pantalla",
    category: "Fondos",
    summary:
      "Pantalla grande con gráficas y KPIs para usar como fondo.",
    prompt: `Pantalla grande mostrando varios gráficos de marketing: barras, líneas, pastel, indicadores, colores vibrantes pero equilibrados, fondo de oficina moderno, estilo fotografía corporativa tecnológica.`,
    thumbnail: "/images/fondo-graficos-marketing.png",
  },
];


// 🎬 Prompts de VÍDEO
// 🎬 Prompts de VÍDEO (sin texto en pantalla)
// 🎬 Prompts de VÍDEO (sin mencionar formato)
export const videoPrompts = [
  // 1) EDUCATIVOS / REELS RÁPIDOS

  {
    id: "vid-tip-ia-3-bullets",
    title: "Tip de IA con 3 bullets en pantalla",
    category: "Educativo",
    summary:
      "Vídeo corto con creador mirando a cámara y espacio libre para 3 bullets que tú añadirás en edición.",
    prompt: `Duración 6–8 segundos.

Un solo plano: plano medio del creador sentado frente a un escritorio con laptop, fondo oscuro con luces LED violeta y cian suaves.
Cámara fija, ligera profundidad de campo.

El creador mira a cámara con gesto seguro y hace pequeños gestos con la mano hacia el lado izquierdo del encuadre, como si estuviera presentando tres ideas o puntos clave.
En la parte izquierda del vídeo se mantiene un área visualmente limpia, con fondo suave y poco detalle, pensada para añadir bullets de texto en postproducción.

Iluminación frontal suave, estilo vídeo de consejos en redes.
No generes texto legible en el vídeo, solo la escena y la composición.`,
    thumbnail: "",
    // ⬇️ Si quieres, aquí vas a poner tu videoUrl después (te explico debajo)
    videoUrl: "/videos/vid-tip-ia-3-bullets.mp4",
  },

  {
    id: "vid-error-comun-titulo-arriba",
    title: "Error común con texto arriba",
    category: "Educativo",
    summary:
      "Creador señalando una zona libre en la parte superior, pensada para añadir un título luego.",
    prompt: `Duración 6–8 segundos.

Un solo plano: plano medio del creador frente a un fondo neutro oscuro.
El creador está ligeramente a la derecha del cuadro, dejando espacio en la parte superior izquierda.

El creador levanta la mano y señala hacia la zona libre de arriba, mientras mueve la cabeza en gesto de negación o advertencia, como si estuviera hablando de un error típico.

La composición deja un espacio claro y despejado en la parte superior para que luego se añada un título en edición.
Movimientos suaves, cámara fija, luz de softbox frontal con contraste moderado.
No generes texto legible en el vídeo, solo la escena y el gesto.`,
    thumbnail: "",
    videoUrl: "/videos/vid-error-comun-titulo-arriba.mp4",
  },

  {
    id: "vid-mini-before-after-pantalla",
    title: "Mini antes / después en pantalla",
    category: "Educativo",
    summary:
      "Comparación rápida visual: lado izquierdo caótico vs lado derecho organizado, para que tú añadas ANTES / DESPUÉS.",
    prompt: `Duración 6–8 segundos.

Composición tipo pantalla dividida:
Mitad izquierda: documento o interfaz caótica, con bloques y líneas grises desordenadas, muchos elementos, sensación de saturación visual.
Mitad derecha: documento o interfaz organizada, con bloques bien alineados, espacios claros y estructura limpia.

Durante todo el clip hay un zoom lento hacia adelante.
Pequeñas partículas de luz se desplazan suavemente desde el lado izquierdo hacia el derecho, simbolizando la mejora del sistema.

La parte superior de ambos lados se mantiene relativamente limpia para poder añadir rótulos en edición.
No generes texto legible en el vídeo, solo la diferencia visual entre caos y orden.`,
    thumbnail: "",
    videoUrl: "/videos/vid-mini-before-after-pantalla.mp4",
  },

  {
    id: "vid-tip-1-linea-subrayada",
    title: "Un solo tip subrayado en pantalla",
    category: "Educativo",
    summary:
      "Vídeo minimalista con un área central limpia pensada para un tip en edición y animación de subrayado abstracto.",
    prompt: `Duración 6–8 segundos.

Fondo liso oscuro con textura suave en tonos azul marino y violeta.
En el centro del encuadre hay un área limpia, sin elementos, pensada para que luego se añada un tip de texto en edición.

Una línea de luz en color cian aparece desde la izquierda y recorre la zona central, como si subrayara una frase imaginaria, dejando un trazo suave y brillante que se va desvaneciendo.

Ligero movimiento de cámara simulando handheld muy suave.
Glow sutil alrededor de la zona central.
No generes texto legible en el vídeo, solo el fondo, la línea de luz y el movimiento.`,
    thumbnail: "",
  },

  {
    id: "vid-lista-3-pasos-vertical",
    title: "Lista de 3 pasos apilados",
    category: "Educativo",
    summary:
      "Tres tarjetas genéricas apiladas, sin texto, listas para que tú escribas los pasos encima.",
    prompt: `Duración 6–8 segundos.

Fondo degradado oscuro en tonos azul marino y violeta.
Desde la parte inferior del encuadre van entrando, una tras otra, tres tarjetas rectangulares claras que se apilan de abajo hacia arriba.

Cada tarjeta tiene un diseño minimalista: rectángulo con contorno suave, una pequeña barra o ícono abstracto a la izquierda y espacio vacío en el resto del rectángulo.

Las tarjetas entran con animación de deslizamiento y un pequeño rebote, quedándose fijas al final, como una lista de pasos.
No hay texto en las tarjetas, solo diseño y espacio limpio para escribir encima en edición.

No generes texto legible en el vídeo, solo las tarjetas y sus animaciones.`,
    thumbnail: "",
  },

  // 2) STORYTELLING EXPRESS

  {
    id: "vid-bloqueo-antes-despues-gesto",
    title: "Bloqueo vs claridad con gesto",
    category: "Storytelling",
    summary:
      "Creador cambia de gesto frustrado a gesto de claridad con un corte rápido.",
    prompt: `Duración 6–8 segundos.

Escena 1 (aprox. primera mitad): plano medio del creador con la mano en la frente, expresión de frustración, fondo oscuro ligeramente desenfocado. El cuerpo está ligeramente inclinado hacia delante, transmitiendo cansancio o bloqueo.

Corte rápido tipo flash o simple jump cut.

Escena 2 (segunda mitad): mismo encuadre y fondo, pero el creador ahora está erguido, con gesto de comprensión y ligera sonrisa, levantando una mano como si acabara de encontrar una solución.

La iluminación en la segunda escena puede ser un poco más brillante para reforzar el cambio de ánimo.
No generes texto legible en el vídeo, solo gestos y cambios de expresión.`,
    thumbnail: "",
  },

  {
    id: "vid-mini-historia-chat-notificacion",
    title: "Mini historia con notificación de cliente",
    category: "Storytelling",
    summary:
      "Plano detalle del móvil recibiendo una notificación importante (chat borroso), sin texto legible.",
    prompt: `Duración 6–8 segundos.

Plano cerrado del teléfono móvil sobre una mesa de madera en un ambiente tipo cafetería.
Fondo ligeramente desenfocado con tonos cálidos, quizá se intuye una taza de café.

Durante el clip, en la pantalla del móvil aparece una notificación de chat: debe verse claramente que es un mensaje entrante, pero el contenido del texto es borroso o abstracto, sin letras legibles.

La cámara hace un pequeño cambio de enfoque (rack focus) pasando del fondo al teléfono.
No generes texto legible en la pantalla del móvil, solo la forma general de la notificación.`,
    thumbnail: "",
  },

  {
    id: "vid-stories-3-imagenes-rapidas",
    title: "Secuencia de 3 momentos en 1 clip",
    category: "Storytelling",
    summary:
      "Tres micro-escenas encadenadas como flashbacks rápidos, sin texto.",
    prompt: `Duración 6–8 segundos.

Tres micro planos encadenados con cortes rápidos de unos 2 segundos cada uno:

1) Escritorio desordenado con muchos papeles, cuadernos abiertos y objetos regados, sensación de caos.
2) Pantalla de ordenador con una interfaz de IA generando contenido, barras de progreso o elementos dinámicos (sin texto legible).
3) Escritorio ordenado, con laptop, una libreta cerrada y una taza de café; la escena transmite calma y control.

Color grading consistente, estilo productivo y limpio, con tonos ligeramente fríos en la transición de caos a orden.
No generes texto legible en ninguna de las escenas.`,
    thumbnail: "",
  },

  {
    id: "vid-cambio-estado-animo-escritorio",
    title: "Cambio de ánimo en el escritorio",
    category: "Storytelling",
    summary:
      "Mismo escritorio, cambia la luz y el ambiente de caos a enfoque en un solo plano.",
    prompt: `Duración 6–8 segundos.

Plano fijo cenital (vista desde arriba) de un escritorio.
Al inicio, el escritorio está desordenado: papeles arrugados, bolígrafos regados, cuaderno abierto sin orden, luz más fría y apagada.

A mitad del clip, se produce una transición suave: los objetos se reacomodan rápidamente (tipo timelapse o animación), quedando el escritorio ordenado, con laptop centrada, libreta bien colocada y uno o dos objetos simples.

La luz se vuelve algo más cálida y definida, transmitiendo enfoque y claridad.
No generes texto legible sobre la mesa ni en la pantalla, solo formas abstractas si se ve contenido.`,
    thumbnail: "",
  },

  {
    id: "vid-oh-moment-mirada-camara",
    title: "Momento '¡ahora lo entiendo!'",
    category: "Storytelling",
    summary:
      "Primer plano de reacción de comprensión con zoom-in, sin textos.",
    prompt: `Duración 6–8 segundos.

Primer plano del rostro del creador.
Al inicio mira hacia abajo o hacia un lado con expresión pensativa o confusa.
En el transcurso del clip levanta la mirada hacia la cámara, las cejas se alzan ligeramente y aparece una pequeña sonrisa, como si hubiera tenido una revelación.

Zoom in suave durante todo el clip, para reforzar la emoción.
Fondo neutro, iluminación suave y envolvente, estilo emocional y simple.
No generes texto legible en el vídeo.`,
    thumbnail: "",
  },

  // 3) ANUNCIOS / VENTA (CORTOS)

  {
    id: "vid-anuncio-beneficios-3-palabras",
    title: "Anuncio con 3 palabras clave",
    category: "Anuncios",
    summary:
      "Clip con creador desenfocado detrás y espacio libre delante para colocar 3 palabras en edición.",
    prompt: `Duración 6–8 segundos.

Plano medio del creador en segundo plano, ligeramente desenfocado, caminando o moviéndose muy suavemente, fondo oscuro con luces cian desenfocadas.

En el centro del encuadre, delante del creador, se mantiene una zona limpia, sin elementos, pensada para añadir tres palabras clave mediante texto en edición.

Movimiento de cámara muy leve para dar sensación de profundidad.
Estética limpia y moderna.
No generes texto legible en el vídeo, solo la escena con el creador de fondo y espacio vacío delante.`,
    thumbnail: "",
  },

  {
    id: "vid-anuncio-hero-mockup",
    title: "Mockup del producto con glow",
    category: "Anuncios",
    summary:
      "Producto digital flotando con partículas y luz, sin texto.",
    prompt: `Duración 6–8 segundos.

Escena única: una caja 3D o panel digital que representa un producto online flota en el centro del encuadre sobre un fondo oscuro.
Alrededor hay partículas de luz suaves, en colores cian, violeta y magenta.

El producto gira muy lentamente o hace un ligero movimiento en perspectiva.
Detrás, el fondo mantiene un degradado oscuro con un halo de luz suave alrededor del producto.

No generes texto legible en el vídeo, solo la caja/panel del producto y el efecto de glow.`,
    thumbnail: "",
  },

  {
    id: "vid-anuncio-cta-unica",
    title: "Anuncio con CTA única y directa",
    category: "Anuncios",
    summary:
      "Fondo animado minimalista para colocar una CTA encima en edición.",
    prompt: `Duración 6–8 segundos.

Fondo degradado oscuro en tonos azul marino y violeta, con ligera textura.
La cámara realiza un zoom in muy lento hacia el centro del encuadre.

En el centro se mantiene un área limpia, sin objetos ni elementos, ideal para colocar una frase de llamada a la acción en posproducción.
Por todo el fondo se mueven pequeñas partículas cian de forma sutil, como polvo de luz en movimiento.

No generes texto legible en el vídeo, sólo el fondo animado y el movimiento suave.`,
    thumbnail: "",
  },

  {
    id: "vid-anuncio-testimonios-flash",
    title: "Anuncio con flashes de testimonios",
    category: "Anuncios",
    summary:
      "Capturas borrosas de chats o comentarios pasando rápido, sin texto legible.",
    prompt: `Duración 6–8 segundos.

Fondo gris oscuro suave.
Durante el clip, aparecen sucesivamente tres recuadros o pantallas que parecen capturas de chats o comentarios: se ven formas de burbujas, avatares y líneas, pero todo está borroso o pixelado para que no se lea nada.

Cada recuadro entra con un pequeño destello y se desplaza ligeramente antes de desvanecerse y dar paso al siguiente.
La composición general deja algo de espacio limpio arriba o abajo para añadir rótulos en edición.

No generes texto legible en los recuadros, sólo la sensación visual de testimonios borrosos.`,
    thumbnail: "",
  },

  // 4) B-ROLL / ESCENAS PARA PONER VOZ ENCIMA

  {
    id: "vid-broll-escritorio-ia",
    title: "B-roll escritorio con IA trabajando",
    category: "B-roll",
    summary:
      "Plano detalle de manos y pantalla con IA generando contenido, sin texto legible.",
    prompt: `Duración 6–8 segundos.

Plano medio-cerrado de manos escribiendo en teclado, laptop en el centro del cuadro.
En la pantalla se ve una interfaz de IA generando contenido, barras de progreso o bloques de texto abstracto; los elementos se mueven, pero sin que haya letras legibles.

Luz de escritorio cálida, fondo suave desenfocado, quizás se intuye una planta u objeto decorativo.
La cámara realiza un leve movimiento lateral o diagonal suave.

No generes texto legible en la pantalla, solo formas y bloques que sugieran contenido.`,
    thumbnail: "",
  },

  {
    id: "vid-broll-laptop-notas-cuaderno",
    title: "B-roll laptop + cuaderno",
    category: "B-roll",
    summary:
      "Mesa con laptop, cuaderno y mano tomando notas, perfecto para overlays.",
    prompt: `Duración 6–8 segundos.

Plano cenital (desde arriba) de una mesa de madera clara.
Se ve una laptop abierta (pantalla con contenido desenfocado o abstracto), un cuaderno abierto al lado y una mano escribiendo algo corto en el cuaderno.

Luz natural lateral, sombras suaves y ambiente calmado.
La cámara se desplaza muy ligeramente, como si flotara sobre la mesa.

No generes texto legible ni en la pantalla ni en el cuaderno, solo trazos y formas.`,
    thumbnail: "",
  },

  {
    id: "vid-broll-pantalla-multiples-ventanas",
    title: "B-roll pantalla con múltiples ventanas",
    category: "B-roll",
    summary:
      "Pantalla con pequeños paneles de IA, tareas y calendario, sin texto reconocible.",
    prompt: `Duración 6–8 segundos.

Plano cercano a una pantalla grande donde se ven varias ventanas organizadas: una interfaz que sugiere IA, una lista de tareas y un calendario semanal, todo con bloques, iconos y líneas abstractas.

La cámara hace un paneo horizontal lento de izquierda a derecha a través de las ventanas.
Los colores predominantes son fríos, con detalles en cian.

No generes texto legible en ninguna de las ventanas, sólo formas geométricas y patrones que recuerden a interfaces.`,
    thumbnail: "",
  },

  {
    id: "vid-broll-cafe-teclado",
    title: "B-roll taza de café y teclado",
    category: "B-roll",
    summary:
      "Plano estético con taza y teclado, ideal para intros/outs, sin textos.",
    prompt: `Duración 6–8 segundos.

Plano detalle lateral de una taza de café humeante al lado de un teclado iluminado sobre un escritorio limpio.
Fondo desenfocado con luces cálidas o pequeña lámpara.

La cámara se desplaza lentamente hacia delante, acercándose al café y al teclado, creando sensación acogedora.
No generes texto legible en ningún objeto, es solo un plano estético.`,
    thumbnail: "",
  },

  {
    id: "vid-broll-ciudad-time-lapse-suave",
    title: "B-roll ciudad urbana suave",
    category: "B-roll",
    summary:
      "Plano de ciudad moderna con tráfico ligero y luces, sin rótulos.",
    prompt: `Duración 6–8 segundos.

Plano general de una ciudad moderna al atardecer.
Se ven edificios altos, algunas luces encendidas y tráfico ligero moviéndose por las calles, tipo timelapse suave.

Las nubes también se desplazan ligeramente en el cielo.
Color grading con tonos azulados y naranjas, creando una atmósfera equilibrada.

No generes texto legible en carteles ni edificios, solo formas generales.`,
    thumbnail: "",
  },

  // 5) CONTENIDO PARA MARCA PERSONAL / AUTORIDAD

  {
    id: "vid-marca-personal-escribiendo-pizarra",
    title: "Escribiendo en pizarra con esquema simple",
    category: "Autoridad",
    summary:
      "Creador dibuja un esquema sencillo en una pizarra blanca, sin palabras legibles.",
    prompt: `Duración 6–8 segundos.

Plano medio desde atrás y ligeramente lateral: el creador está de pie frente a una pizarra blanca.
Con un rotulador, traza un esquema simple formado por círculos, flechas y líneas, sin incluir palabras legibles, sólo formas.

La cámara se mantiene casi fija, con una ligera respiración de movimiento natural.
Luz de oficina limpia, sensación de mentor o profesor explicando un concepto.

No generes texto legible en la pizarra, solo símbolos y figuras.`,
    thumbnail: "",
  },

  {
    id: "vid-marca-personal-caminando-pasillo",
    title: "Creador caminando por pasillo",
    category: "Autoridad",
    summary:
      "Plano siguiendo al creador caminando con decisión en un pasillo moderno.",
    prompt: `Duración 6–8 segundos.

Plano desde atrás siguiendo al creador caminando por un pasillo moderno de oficina o edificio creativo.
El pasillo tiene paredes claras, algunas puertas y luz natural entrando por ventanas laterales.

La cámara lo sigue con un movimiento fluido tipo gimbal, dando sensación de avance y propósito.
No hay texto en paredes ni letreros legibles, todo se mantiene genérico.

No generes texto legible en el entorno, solo arquitectura y luz.`,
    thumbnail: "",
  },

  {
    id: "vid-marca-personal-silla-mirada-lateral",
    title: "Entrevista lateral estilo documental",
    category: "Autoridad",
    summary:
      "Creador sentado tipo entrevista, mirando ligeramente fuera de cámara, sin subtítulos incrustados.",
    prompt: `Duración 6–8 segundos.

Plano medio del creador sentado en una silla, ligeramente girado hacia un lado, mirando fuera de cámara como si hablara con un entrevistador.

Fondo: estantería con algunos libros y elementos decorativos, desenfocados.
Luz suave lateral que genera sombras agradables en el rostro.
La cámara permanece fija, sin texto ni gráficos en pantalla.

No generes texto legible en el vídeo, sólo la escena de entrevista limpia.`,
    thumbnail: "",
  },
];
