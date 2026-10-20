import { DeveloperProfile, EducationItem, Project, SkillCategory } from '../models/project.model';

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: 'Agustín Benítez',
  alias: 'Agus The King',
  title: 'Web Developer & Indie Game Creator',
  subtitle: 'Desarrollador Frontend • Creador de Experiencias Interactivas',
  bio: 'Desarrollador web con pasión por el diseño interactivo y la creación de videojuegos. Me gusta transformar ideas en código limpio y mundos visuales con identidad propia, desde aplicaciones web funcionales hasta mi propio videojuego "Arch Origins Of A King".',
  location: 'España (Andalucía / Cádiz)',
  experienceYears: '3+ años creando proyectos web',
  quote: '"El código es la estructura, el diseño es el alma y el videojuego es el viaje."',
  socials: [
    {
      name: 'github',
      label: 'GitHub',
      url: 'https://github.com/AgustinBeniteez',
      icon: 'fa-brands fa-github'
    },
    {
      name: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/agustin-benitez-lopez/',
      icon: 'fa-brands fa-linkedin'
    },
    {
      name: 'email',
      label: 'Contacto Directo',
      url: 'mailto:adivinanzas1991@gmail.com',
      icon: 'fa-solid fa-envelope'
    }
  ],
  education: [
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
      center: 'IES Fernando Aguilar Quignón',
      period: 'Actualidad'
    },
    {
      title: 'Técnico en Sistemas Microinformáticos y Redes (SMR)',
      center: 'IES Pablo Ruiz Picasso',
      period: '2021 - 2023'
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend & Web',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'Angular', level: 'Framework principal' },
      { name: 'Tailwind CSS', level: 'Estilos modernos' },
      { name: 'TypeScript / JS', level: 'Lógica avanzada' },
      { name: 'HTML5 & Semántica', level: 'Estructura web' },
      { name: 'CSS3 / Animaciones', level: 'UI / UX fluida' }
    ]
  },
  {
    name: 'Game Dev & Lógica',
    icon: 'fa-solid fa-gamepad',
    skills: [
      { name: 'Game Design & 3D', level: 'Mecánicas y bucle' },
      { name: 'Modelado 3D & Concept', level: 'Assets y diseño' },
      { name: 'Motores 3D / WebGL', level: 'Renderizado interactivo' },
      { name: 'WebAudio API', level: 'SFX & Música' },
      { name: 'State Management', level: 'Física y entidades' }
    ]
  },
  {
    name: 'Backend & Herramientas',
    icon: 'fa-solid fa-toolbox',
    skills: [
      { name: 'Node.js', level: 'Servicios backend' },
      { name: 'SQL & Bases de datos', level: 'Consultas y esquemas' },
      { name: 'Python & Java', level: 'POO y utilidades' },
      { name: 'Git & GitHub', level: 'Control de versiones' },
      { name: 'Figma', level: 'Prototipado visual' }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'arch-origins-of-a-king',
    title: 'Arch: Origins of a king',
    subtitle: 'Roguelite Survivor de Acción 3D Isométrico',
    year: '2024 - Actualidad',
    category: 'game',
    featured: true,
    badge: '★ PROYECTO PRINCIPAL • INDIE GAME',
    stampText: 'STEAM 202?',
    tagline: 'Supervivencia roguelite 3D isométrica ambientada en magia artúrica con Arturo y Morgana.',
    description: 'Videojuego roguelite de supervivencia y acción 3D con cámara isométrica desarrollado en Java 17 y libGDX. El jugador se enfrenta a oleadas masivas de enemigos, monstruos de élite y jefes colosales, mejorando su arsenal, amuletos y personajes (como Arturo y Morgana) en partidas individuales offline o en multijugador cooperativo con Steamworks P2P.',
    loreOrDetails: 'Ambientado en un rico universo de fantasía y magia artúrica. El combate combina la fuerza física con la magia arcana: Arturo empuña espadas y mandobles imbuidos de antimagia, cortes de choque y auras de espada definitiva; mientras que Morgana canaliza magia oscura, rayos arcanos, prisiones de sombra y orbes oscuros mediante su grimorio y báculo mágico. El juego incluye un sistema profundo de progresión con árbol de talentos (Bloodweb), arsenal de armas mágicas, amuletos con sinergias y soporte completo para multijugador cooperativo con chat de voz e invitaciones en Steam.',
    features: [
      'Roguelite Survivor 3D Isométrico: combate táctico contra hordas masivas de enemigos, criaturas de élite y jefes de fase con cámara isométrica.',
      'Personajes con Magia Artúrica Única: Arturo (antimagia, mandoble y cortes de choque) y Morgana (magia oscura, rayos arcanos, orbes y grimorio).',
      'Multijugador Cooperativo Steamworks: P2P funcional con creación/búsqueda de lobbies, sincronización en tiempo real y chat de voz.',
      'Progresión y Árbol de Talentos (Bloodweb): desbloqueo de perks, arsenal mágico, amuletos coleccionables y sinergias de combate.',
      'Herramientas Propias de Autoría (ARCH Studio): suite interna independiente para crear y validar mapas en formato binario ARCHMAP, partículas VFX y arsenal.',
      'Multiplataforma y Steam Deck: optimizado para Windows y Linux con JRE portable, soporte de mando completo (Steam Input) y localización en Español, Inglés y Japonés.'
    ],
    technologies: [
      'Java 17 (Gradle Toolchain)',
      'libGDX (3D) & LWJGL3',
      'OpenGL & Shaders VFX',
      'Steamworks API (P2P & Lobbies)',
      'Formato Binario ARCHMAP',
      'ARCH Studio (Map & VFX Editor)',
      'JSON Game Data Architecture',
      'Launch4j & JPackage'
    ],
    role: 'Game Director, Diseñador de Sistemas & Programador Principal',
    status: 'En Desarrollo Activo (Versión 0.2.1 • Camino a Steam)',
    projectUrl: 'https://github.com/AgustinBeniteez',
    githubUrl: 'https://github.com/AgustinBeniteez',
    demoUrl: '#',
    image: 'assets/images/portadavideo.png',
    sketchType: 'king-game',
    color: {
      accent: '#f59e0b',
      bgBadge: '#fef3c7',
      textBadge: '#92400e',
      border: '#d97706'
    },
    rotationDeg: -1.8
  },
  {
    id: 'valorantdle',
    title: 'Valorantdle',
    subtitle: 'Web Game de Adivinanzas para la Comunidad',
    year: '2024 - 2025',
    category: 'web',
    featured: false,
    badge: 'WEB GAME INTERACTIVO',
    stampText: 'VCT LIVE 2024',
    tagline: 'Pon a prueba tus conocimientos tácticos: skins, agentes, audios y habilidades.',
    description: 'Juego web interactivo basado en el universo de Valorant. Ofrece múltiples modos diarios como adivinar skins con zoom progresivo, agentes por pistas estadísticas, habilidades por iconos, reconocimiento de disparos a ciegas y ahorcado.',
    loreOrDetails: 'Diseñado para ofrecer una experiencia rápida, adictiva y competitiva a la comunidad gamer. Maneja estado reactivo, almacenamiento local de rachas, carga eficiente de multimedia y diseño adaptado a móviles y escritorio.',
    features: [
      '5 modos de juego: Clásico, Habilidades, Siluetas, Audio de Skins y Modo Ahorcado.',
      'Sistema de pistas inteligente con retroalimentación cromática en tiempo real.',
      'Sincronización de estadísticas diarias y rachas sin necesidad de registro obligatorio.',
      'Optimización de imágenes y audio para tiempos de carga inferiores a 1 segundo.'
    ],
    technologies: ['HTML5', 'CSS3 Moderno', 'JavaScript Vanilla', 'Node.js', 'Vercel CDN'],
    role: 'Desarrollador Fullstack & Diseñador UI/UX',
    status: 'Publicado y Jugable',
    projectUrl: 'https://valorantdle-game.vercel.app',
    githubUrl: 'https://github.com/AgustinBeniteez/valorantdle',
    image: 'assets/images/projects/valorantdle-banner.png',
    gallery: [
      'assets/images/projects/valorantdle-banner.png'
    ],
    sketchType: 'valorantdle',
    color: {
      accent: '#ef4444',
      bgBadge: '#fee2e2',
      textBadge: '#991b1b',
      border: '#dc2626'
    },
    rotationDeg: 1.5
  },
  {
    id: 'custom-browser-main-page',
    title: 'Custom Browser Main Page',
    subtitle: 'Extensión de Productividad para Chrome & Firefox',
    year: '2024 - 2025',
    category: 'extension',
    featured: false,
    badge: 'CHROME EXTENSION',
    stampText: 'BROWSER API',
    tagline: 'Transforma tu nueva pestaña en una estación de trabajo limpia, rápida y configurable.',
    description: 'Extensión open-source que sustituye la página en blanco del navegador por un panel personalizable con widgets de reloj, tiempo meteorológico, gestor de accesos directos, notas rápidas y buscador universal.',
    loreOrDetails: 'Construida aprovechando la Chrome Extensions API v3 y WebExtensions standard. Diseñada con enfoque en rendimiento de 60fps al abrir pestañas, consumo mínimo de memoria y estética minimalista.',
    features: [
      'Widgets modulares arrastrables: notas, buscador, accesos rápidos y clima.',
      'Personalización de fondos y temas oscuros/claros automáticos.',
      'Almacenamiento persistente mediante Storage API sincronizado con el navegador.',
      'Soporte multi-navegador (Chromium, Firefox, Brave, Edge).'
    ],
    technologies: ['Browser Extensions API', 'JavaScript', 'HTML5', 'CSS3', 'Open Source'],
    role: 'Autor y Desarrollador',
    status: 'Publicado en Vercel & Repositorio Abierto',
    projectUrl: 'https://custom-browser-main-page.vercel.app',
    githubUrl: 'https://github.com/AgustinBeniteez/Custom-Browser-Main-Page',
    image: 'assets/images/projects/image-project-extension.webp',
    sketchType: 'extension',
    color: {
      accent: '#3b82f6',
      bgBadge: '#dbeafe',
      textBadge: '#1e40af',
      border: '#2563eb'
    },
    rotationDeg: -2.2
  },
  {
    id: 'enma-manualidades',
    title: 'Enma Manualidades',
    subtitle: 'Tienda Online & Gestión de Artesanías',
    year: '2024',
    category: 'web',
    featured: false,
    badge: 'E-COMMERCE PLATFORM',
    stampText: 'SHOP VERIFIED',
    tagline: 'Comercio electrónico para artesanías hechas a mano con panel de administración.',
    description: 'Plataforma web completa para la venta de manualidades y creaciones artesanales personalizadas. Integra catálogo de productos clasificado por categorías, carrito dinámico y panel de control para gestión de inventario.',
    loreOrDetails: 'Desarrollada para cubrir las necesidades reales de una pequeña tienda de artesanía: carga fácil de fotografías, control de stock, gestión de estados de pedidos y experiencia de compra clara y accesible.',
    features: [
      'Catálogo interactivo con filtros por material, precio y categoría.',
      'Panel de administración protegido para añadir, editar o pausar artículos.',
      'Carrito de compras dinámico con cálculo automático de envíos.',
      'Diseño responsive adaptado a cualquier dispositivo táctil.'
    ],
    technologies: ['Node.js', 'SQL / Bases Relacionales', 'HTML5', 'CSS3', 'JavaScript'],
    role: 'Desarrollador Web Fullstack',
    status: 'Proyecto Desplegado',
    projectUrl: 'https://enmamanualidades.vercel.app',
    githubUrl: 'https://github.com/AgustinBeniteez/enma-manualidades-public-repository',
    image: 'assets/images/projects/webEnmaManualidades.png',
    sketchType: 'enma-shop',
    color: {
      accent: '#ec4899',
      bgBadge: '#fce7f3',
      textBadge: '#9d174d',
      border: '#db2777'
    },
    rotationDeg: 2.1
  },
  {
    id: 'melody-player',
    title: 'Melody Reproductor',
    subtitle: 'Reproductor de Audio Web con Temas Visuales',
    year: '2024',
    category: 'web',
    featured: false,
    badge: 'AUDIO APP',
    stampText: 'AUDIO HI-FI',
    tagline: 'Música sin distracciones: interfaz fluida, temas dinámicos y ecualización visual.',
    description: 'Reproductor de música moderno construido para el navegador. Permite reproducir pistas de audio locales y remotas, controlar volumen con faders analógicos virtuales, navegar por carátulas y cambiar paletas de colores en caliente.',
    loreOrDetails: 'Inspirado en los reproductores analógicos combinados con diseño moderno. Utiliza la Web Audio API para ofrecer transiciones suaves de volumen y barras de progreso fluidas sin saltos.',
    features: [
      'Control de reproducción continuo, repetición, aleatorio y cola de canciones.',
      'Selector de temas visuales que adapta la interfaz al estilo del álbum.',
      'Barra de progreso arrastrable e interactiva en tiempo real.',
      'Atajos de teclado para pausar, saltar y ajustar el volumen.'
    ],
    technologies: ['HTML5 Audio API', 'CSS3 Animations', 'JavaScript', 'UI Design'],
    role: 'Desarrollador Frontend & Diseñador de Interfaz',
    status: 'Completado & Demo en Línea',
    projectUrl: 'https://melody-topaz.vercel.app',
    githubUrl: 'https://github.com/AgustinBeniteez/melody',
    image: 'assets/images/projects/previewMelody.png',
    gallery: [
      'assets/images/projects/previewMelodyAlbum.png',
      'assets/images/projects/previewMelodyThemes.png'
    ],
    sketchType: 'melody',
    color: {
      accent: '#8b5cf6',
      bgBadge: '#ede9fe',
      textBadge: '#5b21b6',
      border: '#7c3aed'
    },
    rotationDeg: -1.1
  },
  {
    id: 'wiki-mods-atk',
    title: 'Wiki Mods ATK',
    subtitle: 'Centro de Documentación de Mods para Minecraft & Sims 4',
    year: '2023 - 2025',
    category: 'tool',
    featured: false,
    badge: 'GAMING HUB & MODS',
    stampText: 'FORGE / FABRIC',
    tagline: 'Guías de crafteo, catálogo de ítems y descargas oficiales para creaciones en juegos.',
    description: 'Portal web de referencia para las modificaciones desarrolladas por Agustín Benítez. Proporciona tablas de recetas de crafteo, galerías de bloques, guías de instalación y enlaces de descarga verificados para Minecraft y Los Sims 4.',
    loreOrDetails: 'Nacido como respuesta a la necesidad de la comunidad de tener un sitio ordenado donde consultar los atributos de los ítems de los mods, versiones de compatibilidad y changelogs de parches.',
    features: [
      'Buscador instantáneo de recetas y bloques con filtrado por versión.',
      'Galería interactiva con previsualización de texturas en 3D/2D.',
      'Enlaces directos a repositorios y plataformas oficiales (CurseForge).',
      'Estructura modular ligera que carga al instante.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CurseForge API', 'GitHub Pages'],
    role: 'Creador de Mods & Desarrollador Web',
    status: 'Activo con Actualizaciones Periódicas',
    projectUrl: 'https://agustinbeniteez.github.io/Wikimods/',
    githubUrl: 'https://github.com/AgustinBeniteez',
    image: 'assets/images/projects/wikimodATK.png',
    sketchType: 'wikimods',
    color: {
      accent: '#10b981',
      bgBadge: '#d1fae5',
      textBadge: '#065f46',
      border: '#059669'
    },
    rotationDeg: 1.8
  },
  {
    id: 'elements-css-daj',
    title: 'CSS Elements Library',
    subtitle: 'Biblioteca de Componentes UI en CSS Puro',
    year: '2024 - 2025',
    category: 'web',
    featured: false,
    badge: 'CSS LIBRARY & UI',
    stampText: 'UI SYSTEM',
    tagline: 'Librería modular de componentes y elementos CSS modernos, accesibles y listos para usar.',
    description: 'Colección completa de componentes y estilos reutilizables desarrollados en CSS puro. Incluye botones reactivos, tarjetas interactivas, barras de navegación, formularios y animaciones fluidas con diseño contemporáneo y soporte cross-browser.',
    loreOrDetails: 'Desarrollada con la visión de agilizar la construcción de interfaces limpias sin sobrecargar dependencias de frameworks pesados. Cada elemento sigue principios estrictos de accesibilidad, modularidad y semántica HTML5.',
    features: [
      'Catálogo modular de más de 30 componentes listos para producción.',
      'Sin dependencias externas: 100% CSS puro optimizado.',
      'Paleta de diseño coherente con variables CSS customizables.',
      'Documentación en vivo y playground interactivo integrado.'
    ],
    technologies: ['CSS3 Moderno', 'HTML5 Semántico', 'Diseño UI/UX', 'Animaciones CSS', 'Open Source'],
    role: 'Diseñador UI & Desarrollador CSS',
    status: 'Publicado & Repositorio Abierto',
    projectUrl: 'https://elementscssdaj.github.io/',
    githubUrl: 'https://github.com/ElementsCssDAJ/ElementsCssDaj.github.io',
    image: 'assets/images/projects/elementscssdaj.png',
    sketchType: 'elements',
    color: {
      accent: '#0ea5e9',
      bgBadge: '#e0f2fe',
      textBadge: '#0369a1',
      border: '#0284c7'
    },
    rotationDeg: -1.4
  },
  {
    id: 'editor-css-daj',
    title: 'Editor Web DAJ',
    subtitle: 'Entorno de Código Web en Vivo (HTML, CSS, JS)',
    year: '2024 - 2025',
    category: 'tool',
    featured: false,
    badge: 'HERRAMIENTA DEV',
    stampText: 'LIVE COMPILER',
    tagline: 'Escribe, depura y visualiza código HTML, CSS y JavaScript directamente en tu navegador.',
    description: 'Editor web interactivo que permite escribir código frontend y previsualizar los resultados en tiempo real sin recargar la página. Diseñado para prototipado rápido de componentes, pruebas de snippets y experimentación con estilos.',
    loreOrDetails: 'Construido con manipulación dinámica del DOM mediante iframe aislado (sandbox) para una ejecución segura del código del usuario. Incluye atajos de teclado, formateo básico y temas de contraste adaptables.',
    features: [
      'Compilación y renderizado reactivo instantáneo mientras escribes.',
      'Panel dividido redimensionable para HTML, CSS, JS y vista previa.',
      'Ejecución en sandbox seguro para aislar scripts.',
      'Exportación y guardado local de snippets de trabajo.'
    ],
    technologies: ['JavaScript Vanilla', 'HTML5', 'CSS3 Moderno', 'Sandbox Iframe', 'DOM API'],
    role: 'Desarrollador Frontend & Autor',
    status: 'En Línea & Funcional',
    projectUrl: 'https://elementscssdaj.github.io/editor/editor.html',
    githubUrl: 'https://github.com/ElementsCssDAJ/ElementsCssDaj.github.io/tree/main/editor',
    image: 'assets/images/projects/EditorDAJsocial.png',
    sketchType: 'editor',
    color: {
      accent: '#6366f1',
      bgBadge: '#e0e7ff',
      textBadge: '#3730a3',
      border: '#4f46e5'
    },
    rotationDeg: 1.6
  },
  {
    id: 'laura-portfolio',
    title: 'Portfolio Laura Castro',
    subtitle: 'Sitio Web para Makeup & Nails Artist',
    year: '2024',
    category: 'web',
    featured: false,
    badge: 'WEB DESIGN & CLIENT',
    stampText: 'CLIENT VERIFIED',
    tagline: 'Portfolio profesional moderno, visual y responsivo para artista de belleza y uñas.',
    description: 'Diseño y desarrollo frontend para el portfolio profesional de Laura Castro. Enfocado en una estética limpia, elegante y visual que destaca galerías de trabajos, catálogo de servicios ofrecidos y enlaces directos de reserva.',
    loreOrDetails: 'Diseñado bajo una dirección de arte minimalista con tipografías serif elegantes y tonos neutros, permitiendo que la fotografía de los trabajos de maquillaje y uñas sea la protagonista absoluta.',
    features: [
      'Galería fotográfica interactiva de alta resolución con vista ampliada.',
      'Diseño completamente responsive optimizado para dispositivos móviles.',
      'Microinteracciones suaves y transiciones de página fluidas.',
      'Integración de enlaces de contacto directo a redes y mensajería.'
    ],
    technologies: ['HTML5', 'CSS3 Moderno', 'JavaScript', 'Diseño Responsive', 'GitHub Pages'],
    role: 'Diseñador Web & Desarrollador Frontend',
    status: 'Desplegado en Producción',
    projectUrl: 'https://lauraacastro.github.io/',
    githubUrl: 'https://github.com/LauraaCastro/LauraaCastro.github.io',
    image: 'assets/images/projects/laura-profolio-min.png',
    sketchType: 'laura',
    color: {
      accent: '#f43f5e',
      bgBadge: '#ffe4e6',
      textBadge: '#9f1239',
      border: '#e11d48'
    },
    rotationDeg: -1.2
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'eso',
    title: 'ESO',
    degreeType: 'Educación Secundaria Obligatoria',
    center: 'IES Huerta del Rosario',
    periodOrStatus: 'Graduado',
    image: 'assets/images/IESHuertaRosario.webp',
    centerUrl: 'https://www.ieshuertadelrosario.com',
    badge: 'EDUCACIÓN SECUNDARIA'
  },
  {
    id: 'smir',
    title: 'GRADO MEDIO SMIR',
    degreeType: 'Sistemas Microinformáticos y Redes',
    center: 'IES PABLO RUIZ PICASSO',
    periodOrStatus: '2021 - 2023',
    image: 'assets/images/IESPRpicasso.webp',
    centerUrl: 'https://www.iespicasso.com',
    badge: 'CICLO FORMATIVO MEDIO'
  },
  {
    id: 'daw',
    title: 'GRADO SUPERIOR DAW',
    degreeType: 'Desarrollo de Aplicaciones Web',
    center: 'IES FERNANDO AGUILAR QUIGNON',
    periodOrStatus: 'Actualidad',
    image: 'assets/images/IESFernandoAguilarQuignon.webp',
    centerUrl: 'https://iesfernandoaguilar.es/',
    badge: 'CICLO FORMATIVO SUPERIOR'
  }
];
