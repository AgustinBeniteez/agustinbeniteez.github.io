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
    title: 'Proyecto Arch Origins of Kings',
    subtitle: 'Arch Origins Of A King • Videojuego de Acción & RPG 3D',
    year: '2026',
    category: 'game',
    featured: true,
    badge: '★ PROYECTO PRINCIPAL • INDIE GAME',
    stampText: 'INDIE LAB 2026',
    tagline: 'Despierta el linaje real. Reclama el reino. Un viaje de acción táctica y secretos ancestrales.',
    description: 'Videojuego indie de acción y rol en 3D actualmente en desarrollo activo. El jugador encarna a un joven aspirante en un mundo fracturado lleno de ruinas vivientes, combates dinámicos contra bestias colosales y una historia impulsada por artefactos reales perdidos.',
    loreOrDetails: 'Las antiguas leyendas hablan de una corona tallada en mineral estelar que concedía el don del mando sobre los vientos del reino. Cuando la dinastía colapsó, los fragmentos quedaron dispersos entre templos olvidados. En "Arch Origins of Kings", deberás recorrer bosques densos, fortalezas en ruinas y criptas arcanas desentrañando la verdad tras el linaje prohibido mientras perfeccionas tus técnicas de esgrima y artes elementales.',
    features: [
      'Sistema de combate en tiempo real con parry, rodaduras, golpes pesados y combos de espada.',
      'Árbol de talentos dinámico: desbloquea sellos de la realeza para imbuir tus ataques con fuego, rayo o éter.',
      'Mundo tridimensional inmersivo con diseño de niveles atmosférico y estética medieval cuidada.',
      'Diseño de niveles no lineal con secretos, atajos, jefes desafiantes y lore fragmentado por el entorno.',
      'Banda sonora original atmosférica adaptativa al ritmo del combate y la exploración.'
    ],
    technologies: [
      'TypeScript / C#',
      'Motores 3D / WebGL',
      'Game Design',
      'Modelado 3D & Concept Art',
      'Web Audio Synthesis',
      'Angular Integration'
    ],
    role: 'Creador, Diseñador de Niveles & Programador Principal',
    status: 'En Desarrollo Activo (Alpha Prototype V0.8.2)',
    projectUrl: 'https://github.com/AgustinBeniteez',
    githubUrl: 'https://github.com/AgustinBeniteez',
    demoUrl: '#',
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
    category: 'game',
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
    sketchType: 'wikimods',
    color: {
      accent: '#10b981',
      bgBadge: '#d1fae5',
      textBadge: '#065f46',
      border: '#059669'
    },
    rotationDeg: 1.8
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
