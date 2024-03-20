<?php
// Arreglo de publicaciones
$publicaciones = array();

// Publicación 1
$publicacion1 = array(
    'titulo' => 'Boton de Twich',
    'tags' => 'boton,social,css,html',
    'estilos' => '                                                .elemento1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 35%;
        margin-bottom: 49%
    }
    
    /* Colors */

    :root {
            --bttwitch-bg-primary: rgb(184.24, 23.67, 210.37);
            --bttwitch-bg-secondary: rgb(98.82, 58.13, 214.62);
            --bttwitch-bg-tertiary: rgb(149.07, 72.39, 209.31);
            --bttwitch-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        }

        /* Botton styles */

        .button9 {
            width: 170px;
            height: 60px;
            border-radius: 10px;
            border: none;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--bttwitch-box-shadow);
            cursor: pointer;
            transition-duration: .3s;
            overflow: hidden;
            position: relative;
        }

        .button9 svg {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
            transition: transform 0.3s;
        }

        .button9:hover svg {
            transform: translateX(-40px) scale(0.9);
        }

        /* Button colors */

        .button9 {
            background: linear-gradient(140deg, var(--bttwitch-bg-primary) 0%, var(--bttwitch-bg-secondary) 53.5%, var(--bttwitch-bg-tertiary) 100%);
        }

        /* Nametag */

        .button9::before {
            position: absolute;
            top: -20px;
            /* ------NAME or Nametag | Twitch ----------*/
            content: "@Namehere";
            /* -End-----NAME or Nametag | Twitch ----------*/
            color: white;
            transition-duration: .3s;
            font-size: 12px;
            /* Reduce the size of the text Depending on the size of the name */
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
        }

        .button9:hover::before {
            white-space: pre-wrap;
            opacity: 1;
            transform: translateY(30px);
        }',
    'contenido' => "<div class='elemento1'> <a href='https://agustheking.github.io/elements/elemento1.html' target="_blank" class="button9">
    <svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px" width="60" height="60" viewBox="0,0,255.99609,255.99609">
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M41.754,27.958l-8.455,9.699c-0.19,0.218 -0.465,0.343 -0.754,0.343h-6.175c-0.239,0 -0.47,0.085 -0.651,0.241l-6.438,5.519c-0.181,0.155 -0.412,0.24 -0.651,0.24h-1.63c-0.552,0 -1,-0.448 -1,-1v-4c0,-0.552 -0.448,-1 -1,-1h-8c-0.552,0 -1,-0.448 -1,-1v-21.057c0,-0.156 0.036,-0.309 0.106,-0.448l3.981,-7.943c0.17,-0.338 0.516,-0.552 0.894,-0.552h30.019c0.552,0 1,0.448 1,1v19.301c0,0.242 -0.087,0.475 -0.246,0.657z" fill="#000000"></path><path d="M39,26.369c-1.667,1.877 -3.333,3.754 -5,5.631c-2.333,0 -4.667,0 -7,0c-2.333,2 -4.667,4 -7,6c0,-2 0,-4 0,-6c-2.667,-0.008 -5.333,-0.016 -8,-0.024c0,-7.326 0,-14.651 0,-21.976c9,0 18,0 27,0c0,5.456 0,10.912 0,16.369z" fill="#fafafa"></path><rect x="21" y="16" width="3" height="10" fill="#000000"></rect><rect x="30" y="16" width="3" height="10" fill="#000000"></rect></g></g>
    </svg>
    </a></div>",
    'enlace' => "/elements/elemento1.html"
);
$publicaciones[] = $publicacion1;

// Publicación 2
$publicacion2 = array(
    'titulo' => 'Boton Discord Server',
    'tags' => 'boton,chat,css,html',
    'estilos' => '
    .elemento2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 35%;
        margin-bottom: 53%;
    }
    
    .Btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 160px; /* Ancho ajustado para acomodar el texto y la imagen */
    height: 40px;
    border: none;
    padding: 0px 20px;
    background: linear-gradient(to right, #8be3fc, #576bff);
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 20px 30px -7px rgba(97, 118, 238, 0.5);
    transition-duration: 0.6s;
    overflow: hidden;
    }

    .Btn .svg-icon {
    position: absolute;
    width: 32px; /* Ancho del icono SVG */
    height: 32px; /* Alto del icono SVG */
    right: 10px; /* Ajusta la posición del icono SVG según necesites */
    fill: white; /* Color del icono SVG */
    transition: right 0.7s ease-in-out; /* Transición suave del icono */
    }

    .Btn .server-name {
    position: absolute;
    left: -160px; /* Inicialmente fuera del botón */
    transition: left 0.7s ease-in-out; /* Transición para cuando aparece */
    }

    .Btn:hover .server-name {
    left: 10px; /* Aparece moviéndose de izquierda a derecha */
    }

    .Btn:not(.clicked):hover .initial-text {
    opacity: 0; /* Desaparece cuando se pasa el cursor */
    transition: opacity 0.7s ease-in-out; /* Añadido para la transición */
    }

    .Btn.clicked .initial-text {
    opacity: 1; /* Asegura que el texto inicial aparezca cuando se hace clic */
    }

    .Btn:not(.clicked):hover .svg-icon {
    right: 5px; /* Ajusta la posición del icono SVG al hacer hover */
    }

    .Btn:active {
    transform: translate(3px, 3px);
    transition-duration: 0.5s;
    }

    .Btn.clicked .server-name {
    left: -160px; /* Desaparece moviéndose hacia la izquierda */
    transition: left 0.7s ease-in-out; /* Transición para cuando desaparece */
    }',
    'contenido' => '<div class="elemento2"> 
    <button class="Btn" onclick="this.classList.toggle('clicked')">
    <span class="initial-text">Discord</span>
    <span class="server-name">NombreServer</span>
    <svg class="svg-icon" xmlns='http://www.w3.org/2000/svg' x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"/>
    </svg>
  </button></div>',
    'enlace' => "/elements/elemento2.html"
);
$publicaciones[] = $publicacion2;

// Publicación 3
$publicacion3 = array(
    'titulo' => 'Publicación 3',
    'tags' => 'prueba',
    'estilos' => '
    .elemento3 {
        /* Estilos específicos para la publicación 3 */
    }',
    'contenido' => '<div class="elemento3">Contenido específico para la publicación 3</div>',
    'enlace' => "/elements/elemento3.html"
);
$publicaciones[] = $publicacion3;

// Publicación 4
$publicacion4 = array(
    'titulo' => 'Publicación 4',
    'tags' => 'prueba',
    'estilos' => '
    .elemento2 {
        /* Estilos específicos para la publicación 4 */
    }',
    'contenido' => '<div class="elemento4">Contenido específico para la publicación 4</div>',
    'enlace' => "/elements/elemento4.html"
);
$publicaciones[] = $publicacion4;

// Devuelve el arreglo de publicaciones
return $publicaciones;
?>
