// src/lib/course-intro.js

export const courseIntro = {
  id: "inicio",
  title: "Bienvenida al Banco Secreto de Prompts",
  subtitle: "Antes de empezar, mira cómo está organizado todo para sacarle el máximo partido.",
  heroText: `Gracias por confiar en Banco Secreto de Prompts. 
Aquí tienes el centro de mando de todo tu arsenal de IA: prompts, asistentes, herramientas y entrenamientos.

En esta sección te explico cómo funciona la plataforma, qué vas a encontrar en cada módulo y cómo usar cada parte paso a paso.`,

  // Secciones principales de explicación
  sections: [
    {
      id: "acceso-y-codigo",
      title: "1. Acceso y código de compra",
      body: [
        `Tu acceso a esta plataforma está vinculado al curso que compraste en Hotmart.`,
        `Dentro del producto que recibiste en tu correo (en Hotmart) tienes tu **código de acceso**. Ese mismo código es el que usas para entrar a esta área de miembros.`,
        `Mientras mantengas este código, podrás volver a entrar siempre que quieras desde la página de login. Si pierdes el correo, revisa spam/promociones o contacta al soporte.`
      ]
    },
    {
      id: "ruta-principal",
      title: "2. Cómo está organizada la plataforma",
      body: [
        `Cuando entras al área de miembros, verás una pantalla principal con un **hero** y dos filas de tarjetas tipo “Netflix”.`,
        `La primera fila se llama **“Ruta principal — Banco Secreto de Prompts”**. 
Aquí es donde está lo que usarás en el día a día:`,
      ],
      bullets: [
        {
          label: "Inicio",
          description:
            "Esta sección (donde estás ahora): una guía rápida de cómo funciona todo el curso y la plataforma."
        },
        {
          label: "Prompts de texto",
          description:
            "Biblioteca de prompts para copies, guiones, posts, e-mails, ads, scripts de venta y mucho más."
        },
        {
          label: "Prompts de imagen",
          description:
            "Prompts listos para generar imágenes, portadas, anuncios y fotos profesionales con IA."
        },
        {
          label: "Prompts de vídeo",
          description:
            "Prompts diseñados para crear vídeos virales, anuncios y contenido corto usando IA."
        },
        {
          label: "Herramientas de IA",
          description:
            "Recomendaciones y guías de herramientas que te ayudan a crear sitios, editar vídeos y automatizar tareas."
        },
        {
          label: "Asistentes GPTs",
          description:
            "Acceso a más de 30 asistentes especializados (copywriter, social media, programador, consultor y más)."
        },
        {
          label: "Entrenamientos",
          description:
            "Clases y contenidos adicionales para profundizar en IA, ChatGPT y estrategias de negocio."
        }
      ],
      image: "/intro/ecosistema-ia.png",   // 👈 pon aquí la imagen que generaste
    },
    {
      id: "bonos",
      title: "3. Bonos y extras",
      body: [
        `La segunda fila está dedicada a los **bonos exclusivos** que vienen con tu acceso.`,
        `Por ahora verás las tarjetas de bonus más oscuras y con un mensaje de “Disponible en 48 horas”. Esto es intencional: los bonos se desbloquean automáticamente un poco después de tu compra.`,
        `En esta sección tendrás acceso a:`
      ],
      bullets: [
        {
          label: "Bono #01 — Comunidad VIP en WhatsApp",
          description:
            "Grupo privado con miembros activos, networking y soporte diario para acelerar tus resultados."
        },
        {
          label: "+30 asistentes virtuales de IA",
          description:
            "Asistentes ya entrenados para ayudarte como copywriter, social media, programador, consultor y más."
        },
        {
          label: "Manual de carruseles virales",
          description:
            "Guía práctica tipo historieta para crear carruseles que generan muchísimo engagement."
        },
        {
          label: "Generador de e-books y presentaciones",
          description:
            "Sistema para crear e-books, presentaciones y materiales ricos en minutos."
        },
        {
          label: "Entrenamiento ChatGPT: de cero a avanzado",
          description:
            "Un entrenamiento completo para dominar ChatGPT desde cero hasta un nivel avanzado."
        },
        {
          label: "Arsenal con +600 herramientas de IA",
          description:
            "Listado curado de herramientas (muchas gratuitas) para crear, automatizar y escalar tu negocio."
        },
        {
          label: "Crea tu avatar hablante de IA",
          description:
            "Método para crear un avatar que graba vídeos por ti, con voz y rostro generados por IA."
        },
        {
          label: "El Mega Prompt Millonario",
          description:
            "El prompt estratégico que resume un ecosistema de negocios con múltiples fuentes de ingreso."
        }
      ],
      highlight: `Cuando los bonos se activen, simplemente volverás al inicio del curso y podrás hacer clic en cada tarjeta como en la ruta principal.`
    },
    {
      id: "biblioteca-prompts",
      title: "4. Cómo usar la biblioteca de prompts",
      body: [
        `Los módulos de **Prompts de texto**, **Prompts de imagen** y **Prompts de vídeo** comparten una misma lógica de uso.`,
        `Cuando entres a cualquiera de estas secciones, verás una **biblioteca de tarjetas** con:`,
      ],
      bullets: [
        {
          label: "Título del prompt",
          description:
            "Te indica rápidamente para qué sirve ese prompt (ejemplo: “Programa de aprendizaje personalizado”)."
        },
        {
          label: "Categoría",
          description:
            "Agrupa prompts por tipo de uso: educación, marketing, anuncios, productos, etc."
        },
        {
          label: "Resumen",
          description:
            "Una descripción corta de lo que hace ese prompt y de cuándo deberías usarlo."
        }
      ],
      image: "/intro/panel-control-creador.png",
      extra: [
        `Encima de la biblioteca tendrás:`,
        `• **Filtro por categoría:** puedes activar una categoría para ver solo prompts de ese tipo.`,
        `• **Buscador por título:** escribe una palabra clave del título para filtrar la lista (ideal cuando ya sabes lo que buscas).`
      ]
    },
    {
      id: "ver-y-copiar-prompts",
      title: "5. Ver y copiar un prompt",
      body: [
        `Al hacer clic en el botón **“Ver prompt”** dentro de una tarjeta, se despliega el contenido completo del prompt.`,
        `Desde ahí puedes:`,
      ],
      bullets: [
        {
          label: "Leer el prompt completo",
          description:
            "Lo verás formateado en una caja de texto, listo para seleccionar o adaptar."
        },
        {
          label: "Copiar con un solo clic",
          description:
            "Pulsa el botón **“Copiar”** y el prompt se enviará automáticamente a tu portapapeles para pegarlo en ChatGPT u otra IA."
        }
      ],
      image: "/intro/flujo-trabajo-automatizado.png",
      highlight:
        "Tu flujo ideal es: filtrar / buscar → abrir uno o varios prompts → copiar → pegar en tu IA favorita → adaptar a tu contexto."
    },
    {
      id: "herramientas-y-asistentes",
      title: "6. Herramientas de IA y asistentes GPTs",
      body: [
        `En estos módulos no solo tendrás prompts, sino también **explicaciones y recomendaciones prácticas**.`,
        `• En **Herramientas de IA** verás explicaciones de herramientas recomendadas, posibles usos y sugerencias para integrarlas en tu negocio o proyecto.`,
        `• En **Asistentes GPTs** encontrarás la lógica de uso de los asistentes: cómo acceder, qué hace cada uno y ejemplos de comandos para empezar rápido.`,
        `Todo seguirá la misma filosofía del curso: explicaciones claras, enfoque práctico y siempre con prompts listos para usar.`
      ]
    },
    {
      id: "entrenamientos",
      title: "7. Entrenamientos sin complicarte",
      body: [
        `En el módulo de **Entrenamientos** tendrás contenidos en formato texto (y, cuando aplique, enlaces a vídeos) donde profundizamos en temas clave como:`,
      ],
      bullets: [
        {
          label: "Uso estratégico de ChatGPT",
          description:
            "Cómo pasar de pedir cosas sueltas a montar sistemas completos con IA."
        },
        {
          label: "Aplicación a negocio y marca personal",
          description:
            "Ideas concretas para usar tus prompts en tu nicho y no dejarlos solo en teoría."
        },
        {
          label: "Casos prácticos",
          description:
            "Ejemplos reales y plantillas que puedes copiar/adaptar a tu contexto."
        }
      ],
      highlight:
        "No necesitas verlo todo de golpe. Puedes usar los entrenamientos como apoyo cuando sientas que quieres subir de nivel."
    },
    {
      id: "consejos-uso",
      title: "8. Consejos para sacarle el máximo provecho",
      body: [
        `Para que este arsenal no se quede “muerto” en tu cuenta, te recomiendo:`
      ],
      bullets: [
        {
          label: "Empieza por un objetivo concreto",
          description:
            "Por ejemplo: “planear mi contenido del próximo mes” o “sacar 3 ideas de anuncios para este producto”."
        },
        {
          label: "Marca tus prompts favoritos",
          description:
            "Ten un documento o nota donde guardes los prompts que más usas para volver a ellos rápido."
        },
        {
          label: "Adapta el lenguaje a tu estilo",
          description:
            "Los prompts son plantillas. Personaliza tono, ejemplos y contexto para que suenen a ti."
        },
        {
          label: "No tengas miedo de iterar",
          description:
            "Si un resultado no te convence, ajusta el prompt, añade más contexto o combina dos prompts en uno."
        }
      ]
    },
    {
      id: "soporte",
      title: "9. Soporte y ayuda",
      body: [
        `Si en algún momento tienes dudas sobre el acceso, el código, el uso de la plataforma o algún módulo en concreto:`,
        `• Revisa primero esta sección de **Inicio** para ver si la respuesta ya está aquí.  
• Si sigues con dudas, utiliza el canal de soporte indicado en el curso o dentro de tu acceso (por ejemplo, la Comunidad VIP en WhatsApp cuando esté activa).`,
        `Recuerda: la idea es que este Banco Secreto de Prompts sea una herramienta que uses constantemente, no un curso más que se queda acumulando polvo en tu bandeja de entrada.`
      ]
    }
  ]
};
