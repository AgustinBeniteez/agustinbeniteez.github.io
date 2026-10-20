# 👑 Portfolio Cuaderno de Campo • Agustín Benítez (Agus The King)

Bienvenido al repositorio del nuevo portfolio interactivo de **Agustín Benítez**. 
Diseñado con una estética artesanal de **cuaderno de campo / scrapbook y mesa de trabajo interactiva**, combinando la faceta de **Desarrollador Web** con la de **Creador Indie de Videojuegos**.

---

## 🎨 Concepto Visual & Características

- **Mesa de Trabajo & Cuaderno de Campo (Scrapbook)**:
  - Textura de escritorio con materiales de diseño: café humeante interactivo, brújula que sigue el cursor, lápiz 2B de boceto, borrador "Shiro" y sellos postales.
  - Páginas de cuaderno con costura central, líneas de mapa topográfico y cinta adhesiva washi tape.
- **Protagonista Standee Recortable**:
  - Figura troquelada en relieve con peana y líneas de corte del protagonista de tu videojuego: **"Arch Origins Of A King"**.
- **Pantalla de Detalle de Proyectos (Estilo Anime / Img 4)**:
  - Al interactuar con el videojuego o cualquiera de los folios web (*Valorantdle*, *Custom Browser Extension*, *Enma Manualidades*, *Melody*, *Wiki Mods ATK*), se abre una ventana modal cinematográfica:
    - **Izquierda**: Año, Título en tipografía de impacto, botones de acción (Jugar / Demo / GitHub).
    - **Centro**: Ilustración / recorte del personaje destacando sobre el marco superior.
    - **Derecha**: Sinopsis, características clave, chips de stack tecnológico y firma de Director / Creador.
- **Sistema de Presets de Boceto**:
  - Ilustraciones vectoriales en SVG con estilo de trazo a lápiz desenfadado (stick / draft) para saber exactamente qué elemento va en cada posición antes de que coloques tus artes y sprites finales.

---

## 🛠️ Stack Tecnológico

- **Framework**: [Angular 21](https://angular.dev/) (Standalone Components, Signals & Control Flow `@if` / `@for`)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) + CSS Modules artesanales
- **Tipografías**: Google Fonts (*Patrick Hand*, *Space Grotesk*, *JetBrains Mono*)
- **Efectos de Sonido**: Web Audio API nativo (efectos de paso de página de papel y chimes sin archivos pesados)
- **Iconos**: FontAwesome 6

---

## 🚀 Comandos de Desarrollo

### 1. Iniciar servidor local de desarrollo:
```bash
npm start
```
Abre tu navegador en `http://localhost:4200` para ver la web con recarga en vivo en tiempo real.

### 2. Compilar para producción:
```bash
npm run build
```
Genera la versión optimizada en la carpeta `dist/portfolio/browser/`.

### 3. Despliegue automático en GitHub Pages:
Se incluye un workflow configurado en `.github/workflows/deploy.yml`. Al hacer push a las ramas `main` o `NuevoPorfolio`, GitHub Actions compilará y publicará la web automáticamente.

---

## 🖼️ Cómo Sustituir los Presets por tus Imágenes Finales

1. Guarda tus sprites o ilustraciones en `public/assets/` (por ejemplo: `public/assets/arch-origins-hero.png`).
2. Abre el archivo de datos: [`src/app/data/portfolio.data.ts`](src/app/data/portfolio.data.ts).
3. Añade la ruta de tu imagen en el proyecto deseado:
   ```typescript
   image: 'assets/arch-origins-hero.png'
   ```
4. ¡El componente mostrará automáticamente tu arte con el mismo efecto de recorte flotante!

---

## 📦 Historial & Versión Anterior
La versión anterior del portfolio (con estilo de escritorio de sistema operativo Windows) se encuentra respaldada de forma segura en la carpeta `/legacy-os`.
