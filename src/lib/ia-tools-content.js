// src/lib/ia-tools-content.js

export const iaToolsContent = {
  id: "ia-tools",
  title: "Herramientas de IA recomendadas",
  heroText:
    "En esta sección encontrarás una guía práctica de herramientas de inteligencia artificial para escribir, diseñar, crear vídeos y automatizar procesos. La idea no es que uses todas, sino que identifiques cuáles encajan con tu momento y tu tipo de proyecto.",

  // 🧠 Secciones explicativas generales (texto que ya tienes en la página)
  sections: [
    {
      id: "mentalidad",
      title: "1. Antes de elegir una herramienta",
      body: [
        "La herramienta es secundaria. Lo que realmente importa es el sistema que construyes alrededor: tener claro tu objetivo, el tipo de contenido que quieres crear y el flujo de trabajo que vas a repetir cada semana.",
        "Piensa en las herramientas de IA como colaboradores: cada una hace muy bien una parte específica del proceso (ideas, escritura, diseño, edición, automatización…). Tu trabajo es orquestarlas.",
      ],
      bullets: [
        {
          label: "Empieza simple",
          description:
            "No intentes dominar 20 apps a la vez. Elige 1 para texto, 1 para imagen y, si es necesario, 1 para vídeo.",
        },
        {
          label: "Flujo primero, herramienta después",
          description:
            "Define qué quieres lograr (ejemplo: planear contenido del mes) y luego eliges qué herramienta encaja mejor en cada paso.",
        },
        {
          label: "Evita la parálisis por análisis",
          description:
            "Hay cientos de herramientas nuevas cada semana. Tu ventaja no es conocer todas, sino usar bien unas pocas.",
        },
      ],
    },

    {
      id: "texto",
      title: "2. Herramientas para texto y escritura",
      body: [
        "Tu base para todo el contenido de texto será un modelo de lenguaje (como ChatGPT u otras IAs similares). Los prompts de este curso están pensados justamente para sacarle el máximo partido.",
        "Puedes usar estas herramientas para escribir guiones, posts, newsletters, páginas de venta, e-mails de seguimiento, ideas de contenido y mucho más.",
      ],
      bullets: [
        {
          label: "ChatGPT o modelos similares",
          description:
            "Tu centro principal para aplicar los +13.500 prompts. Aquí escribes, corriges, resumes, reescribes y generas nuevas ideas.",
        },
        {
          label: "Editores de texto con IA integrada",
          description:
            "Plataformas como Notion, Google Docs o editores con IA integrada te ayudan a pulir estilo y gramática sin salir de tu espacio de trabajo.",
        },
        {
          label: "Extensiones de navegador",
          description:
            "Te permiten usar IA directamente en formularios, redes sociales o gestores de correo para responder rápido y con mejor calidad.",
        },
      ],
      highlight:
        "Recomendación: centraliza tus mejores outputs en un solo documento maestro. Ahí mismo puedes pegar los prompts que más uses y las respuestas que hayan funcionado mejor.",
    },

    {
      id: "imagen",
      title: "3. Herramientas para imágenes y creatividades",
      body: [
        "Con los prompts de imagen del Banco Secreto puedes generar fotos, ilustraciones, portadas, miniaturas y creatividades para anuncios.",
        "Aunque cada plataforma de imagen tenga nombres y botones distintos, la lógica es siempre la misma: prompt claro + estilo visual definido + pequeños ajustes.",
      ],
      bullets: [
        {
          label: "Generadores de imagen con IA",
          description:
            "Usa tus prompts para crear fotos de producto, retratos profesionales, escenas cinematográficas, fondos para carruseles y más.",
        },
        {
          label: "Edición y retoque ligero",
          description:
            "Una vez generada la imagen, puedes retocarla en editores básicos (brillo, contraste, recorte) para adaptarla a cada red social.",
        },
        {
          label: "Bancos personales de assets",
          description:
            "Guarda en carpetas tus imágenes más sólidas (portadas, fondos, texturas) para reutilizarlas en futuros contenidos.",
        },
      ],
    },

    {
      id: "video",
      title: "4. Herramientas para vídeo corto con IA",
      body: [
        "Los prompts de vídeo están pensados para que puedas generar clips breves que luego uses en anuncios, reels, shorts o como B-roll con tu voz encima.",
        "La clave está en combinar tres cosas: una buena idea (prompt), un estilo visual coherente con tu marca y un montaje rápido para adaptarlo a cada plataforma.",
      ],
      bullets: [
        {
          label: "Generadores de vídeo con IA",
          description:
            "Ideales para clips cortos: B-roll de trabajo, escenas tecnológicas, fondos dinámicos o visuales conceptuales.",
        },
        {
          label: "Editores de vídeo sencillos",
          description:
            "Herramientas de edición básica te permiten recortar, añadir subtítulos, música y llamadas a la acción sobre el material generado con IA.",
        },
        {
          label: "Plantillas reutilizables",
          description:
            "Crea 2–3 plantillas de vídeo base (intro, consejo rápido, anuncio) y reutilízalas cambiando sólo texto y clips generados.",
        },
      ],
    },

    {
      id: "automatizacion",
      title: "5. Automatización y productividad con IA",
      body: [
        "Además de ayudarte a crear contenido, la IA también puede reducir la carga operativa de tu día a día.",
        "Desde responder correos frecuentes hasta preparar borradores de informes, muchos procesos repetitivos pueden automatizarse o, al menos, simplificarse.",
      ],
      bullets: [
        {
          label: "Flujos semi-automatizados",
          description:
            "Por ejemplo: usas un formulario para recopilar información y luego un prompt específico genera el guion, el copy y el e-mail de entrega.",
        },
        {
          label: "Integraciones con otras apps",
          description:
            "Herramientas de automatización pueden conectar tu IA con hojas de cálculo, CRMs, gestores de tareas o formularios.",
        },
        {
          label: "Plantillas de procesos",
          description:
            "Documenta los pasos de los flujos que más repitas (ejemplo: lanzamiento de un nuevo post) para poder delegarlos o automatizarlos más adelante.",
        },
      ],
      highlight:
        "Empieza automatizando micro-tareas: respuestas frecuentes, resúmenes de reuniones, limpieza de información… y luego escala a flujos más complejos.",
    },

    {
      id: "no-code",
      title: "6. Herramientas no-code y espacios de trabajo",
      body: [
        "Tu Banco Secreto de Prompts funciona aún mejor cuando lo combinas con un buen espacio de organización.",
        "Las herramientas no-code y los sistemas de notas te permiten construir tu propia 'central de mando' sin saber programar.",
      ],
      bullets: [
        {
          label: "Sistemas de notas y organización",
          description:
            "Usa docs, bases de datos o wikis para guardar tus prompts favoritos, resultados que funcionaron y ejemplos de uso reales.",
        },
        {
          label: "Dashboards personales",
          description:
            "Puedes crear paneles simples para ver tu calendario de contenido, campañas activas y métricas clave en un solo lugar.",
        },
        {
          label: "Formularios internos",
          description:
            "Un simple formulario interno puede alimentar a tus prompts: el usuario responde 3–5 preguntas y la IA genera el resultado final.",
        },
      ],
    },

    {
      id: "como-elegir",
      title: "7. Cómo elegir la herramienta correcta para ti",
      body: [
        "No existe la herramienta perfecta, existe la que mejor encaja con tu contexto actual. Para decidir por dónde empezar, puedes usar este pequeño filtro mental:",
      ],
      bullets: [
        {
          label: "Presupuesto y tiempo",
          description:
            "Si tu presupuesto es bajo, prioriza herramientas gratuitas o con planes básicos. Si tu tiempo es limitado, busca lo que simplifique más pasos, aunque sea de pago.",
        },
        {
          label: "Tipo de contenido principal",
          description:
            "Si vives de escribir, prioriza IA de texto. Si vendes productos visuales, prioriza imagen y vídeo. Si gestionas muchos clientes, prioriza automatización.",
        },
        {
          label: "Curva de aprendizaje",
          description:
            "Es mejor dominar algo simple en 7 días que intentar usar algo complejo durante meses sin integrarlo realmente a tu rutina.",
        },
      ],
      highlight:
        "Regla práctica: si una herramienta no te está ahorrando tiempo ni mejorando resultados en 2–3 semanas de uso consistente, probablemente no es la adecuada para ti en este momento.",
    },

    {
      id: "siguientes-pasos",
      title: "8. Siguientes pasos dentro del curso",
      body: [
        "Ahora que tienes una visión clara de las herramientas de IA y de cómo encajan en tu sistema, el siguiente paso es pasar a la acción.",
        "Te recomiendo este orden:",
      ],
      bullets: [
        {
          label: "1) Define tu flujo principal",
          description:
            "Por ejemplo: plan de contenido semanal, lanzamiento de un producto, creación de un lead magnet, etc.",
        },
        {
          label: "2) Elige 1–3 herramientas",
          description:
            "Una para texto, una para imagen y, si aplica, una para vídeo. Nada más.",
        },
        {
          label: "3) Usa los prompts del Banco Secreto",
          description:
            "Ve al módulo correspondiente (texto, imagen o vídeo) y elige los prompts que mejor encajan con tu objetivo.",
        },
      ],
      highlight:
        "Cuanto más uses este arsenal en situaciones reales (clientes, proyectos propios, lanzamientos), más valor le vas a sacar. Vuelve a esta sección siempre que quieras revisar o renovar tu stack de herramientas.",
    },
  ],

  // 🔹 Lista de herramientas concretas para mostrar en cards
  tools: [
    // --- TEXTO / ESCRITURA ---
    {
      id: "chatgpt",
      name: "ChatGPT",
      category: "Texto y escritura",
      description:
        "Tu base principal para aplicar los +13.500 prompts. Ideal para escribir, reescribir, resumir y generar ideas de contenido.",
      howToUseWithBank:
        "Copia un prompt del módulo de texto, pégalo en ChatGPT, añade el contexto de tu negocio y guarda las respuestas que mejor funcionen.",
      thumbnail: "/ia/Chat-GPT-logo.webp", // ej. "/ia-tools/chatgpt.png"
    },
    {
      id: "claude",
      name: "Claude",
      category: "Texto y escritura",
      description:
        "Modelo muy bueno para textos largos, documentación y trabajo con archivos extensos.",
      howToUseWithBank:
        "Usa los prompts de investigación, estructuración de contenido y creación de manuales para generar documentación clara y fácil de entender.",
      thumbnail: "/ia/Claude.webp", // "/ia-tools/claude.png"
    },
    {
      id: "gemini",
      name: "Gemini",
      category: "Texto y escritura",
      description:
        "IA de Google útil para tareas conectadas al ecosistema Google (Docs, Sheets, Slides).",
      howToUseWithBank:
        "Combina prompts de planificación con hojas de cálculo, dashboards y reportes creados directamente en el ecosistema de Google.",
      thumbnail: "/ia/Gemini.jpeg", // "/ia-tools/gemini.png"
    },
    {
      id: "notion-ai",
      name: "Notion AI",
      category: "Texto y escritura",
      description:
        "Ideal para escribir y organizar contenido dentro de tu espacio de trabajo: wikis, bases de datos y documentos.",
      howToUseWithBank:
        "Crea una base de datos con tus prompts favoritos y usa Notion AI para pulir textos, resúmenes y documentación interna.",
      thumbnail: "/ia/Notion.png", // "/ia-tools/notion-ai.png"
    },
    {
      id: "perplexity",
      name: "Perplexity",
      category: "Investigación",
      description:
        "Asistente de investigación con IA y búsqueda web, perfecto para obtener contexto y referencias rápidas.",
      howToUseWithBank:
        "Primero investiga un tema con Perplexity y luego usa los prompts de guiones, posts y newsletters para transformar la info en contenido.",
      thumbnail: "/ia/Perplexity.png", // "/ia-tools/perplexity.png"
    },

    // --- IMAGEN / DISEÑO ---
    {
      id: "dalle",
      name: "DALL·E",
      category: "Imagen y diseño",
      description:
        "Generador de imágenes integrado con el mismo entorno de ChatGPT. Ideal para portadas, miniaturas y creatividades rápidas.",
      howToUseWithBank:
        "Copia un prompt del módulo de imagen, pégalo en DALL·E y ajusta pequeñas cosas (ángulo, luz, colores) según tus necesidades.",
      thumbnail: "/ia/Dalle.jpeg", // "/ia-tools/dalle.png"
    },
    {
      id: "midjourney",
      name: "Midjourney",
      category: "Imagen y diseño",
      description:
        "Excelente para estilos artísticos, escenas cinematográficas y visuales muy detallados.",
      howToUseWithBank:
        "Adapta los prompts de imagen del curso al formato de Midjourney (comandos, parámetros) para crear packs visuales coherentes.",
      thumbnail: "/ia/Midjourney.jpg", // "/ia-tools/midjourney.png"
    },
    {
      id: "leonardo",
      name: "Leonardo AI",
      category: "Imagen y diseño",
      description:
        "Buen equilibrio entre calidad y facilidad de uso para creatividades de anuncios y recursos visuales.",
      howToUseWithBank:
        "Usa los prompts de anuncios, mockups de productos y fondos para redes sociales, generando lotes de imágenes en una sola sesión.",
      thumbnail: "/ia/Leonardo.jpeg", // "/ia-tools/leonardo.png"
    },
    {
      id: "canva",
      name: "Canva con IA",
      category: "Imagen y diseño",
      description:
        "Perfecto para montar piezas finales: carruseles, miniaturas, presentaciones y anuncios.",
      howToUseWithBank:
        "Genera las imágenes base con tus prompts y luego combínalas en Canva con textos, logos y elementos de marca.",
      thumbnail: "/ia/Canva.jpeg", // "/ia-tools/canva.png"
    },

    // --- VÍDEO ---
    {
      id: "runway",
      name: "Runway",
      category: "Vídeo",
      description:
        "Generador de vídeo con IA excelente para B-roll, escenas abstractas y fondos dinámicos.",
      howToUseWithBank:
        "Toma los prompts del módulo de vídeo (B-roll, escenas tecnológicas, fondos) y adáptalos a los campos de Runway.",
      thumbnail: "/ia/runway.png", // "/ia-tools/runway.png"
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Vídeo",
      description:
        "Editor de vídeo sencillo con plantillas, subtítulos automáticos y herramientas rápidas para redes sociales.",
      howToUseWithBank:
        "Combina clips generados con IA y tus grabaciones, añadiendo subtítulos, música y CTAs usando la estructura de guiones del Banco.",
      thumbnail: "/ia/capcut.jpg", // "/ia-tools/capcut.png"
    },
    {
      id: "descript",
      name: "Descript",
      category: "Vídeo",
      description:
        "Ideal para editar vídeo y audio a partir del texto transcrito, muy útil para podcasters y creadores educativos.",
      howToUseWithBank:
        "Usa los prompts de guiones y estructura de clases, graba el contenido y edítalo en Descript corrigiendo directamente desde el texto.",
      thumbnail: "/ia/descript.jpg", // "/ia-tools/descript.png"
    },

    // --- AUTOMATIZACIÓN / SISTEMAS ---
    {
      id: "zapier",
      name: "Zapier",
      category: "Automatización",
      description:
        "Conecta tus apps favoritas y dispara acciones automáticas sin programar.",
      howToUseWithBank:
        "Combina formularios + prompts: cuando alguien envía datos, Zapier los pasa a tu IA con un prompt específico y genera el resultado final.",
      thumbnail: "/ia/zapier.png", // "/ia-tools/zapier.png"
    },
    {
      id: "make",
      name: "Make (Integromat)",
      category: "Automatización",
      description:
        "Plataforma visual para crear flujos complejos que mezclan IA, bases de datos y múltiples apps.",
      howToUseWithBank:
        "Usa los prompts de workflows y sistemas para diseñar escenarios que automaticen partes de tu servicio o negocio.",
      thumbnail: "/ia/make.png", // "/ia-tools/make.png"
    },

    // --- ORGANIZACIÓN / PRESENTACIONES ---
    {
      id: "notion",
      name: "Notion",
      category: "Organización",
      description:
        "Tu ‘central de mando’ para guardar prompts, resultados, ideas y documentación de proyectos.",
      howToUseWithBank:
        "Crea una base de datos con columnas para: categoría, objetivo, prompt, resultados top y notas. Así tu Banco se vuelve 100% personalizable.",
      thumbnail: "/ia/notion.webp", // "/ia-tools/notion.png"
    },
    {
      id: "gamma",
      name: "Gamma",
      category: "Presentaciones",
      description:
        "Herramienta para crear presentaciones y documentos visuales generados con IA.",
      howToUseWithBank:
        "Toma los prompts de guiones, clases y contenido educativo, y conviértelos en slides y presentaciones listas para entregar.",
      thumbnail: "/ia/gamma.png", // "/ia-tools/gamma.png"
    },
  ],
};
