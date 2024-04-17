    // NAV menu movil
    document.addEventListener('DOMContentLoaded', function () {
        // Obtener referencias al botón de menú y al menú
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.querySelector('nav ul');

        // Agregar un event listener para el clic en el botón de menú
        menuToggle.addEventListener('click', function () {
            // Alternar la clase 'active' en el menú para mostrarlo u ocultarlo
            navMenu.classList.toggle('active');
        });

    });