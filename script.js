document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = ["Agustín Benítez"];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(".typing-effect").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }

    function startTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                startTextAnimation(0);
            }, 20000);
        }
        if (i < dataText.length) {
            typeWriter(dataText[i], 0, function() {
                startTextAnimation(i + 1);
            });
        }
    }

    startTextAnimation(0);
});


// Para el primer botón "bajar"
document.querySelector('.bajar').addEventListener('click', function() {
    document.getElementById('knowledge').scrollIntoView({
        behavior: 'smooth'
    });
});

// Para el segundo botón "bajar1"
document.querySelector('.bajar1').addEventListener('click', function() {
    // Obtén el elemento siguiente al conocimiento para desplazarte a él
    var nextSection = document.querySelector('.knowledge2');
    nextSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Para el segundo botón "bajar1"
document.querySelector('.bajar2').addEventListener('click', function() {
    // Obtén el elemento siguiente al conocimiento para desplazarte a él
    var nextSection = document.querySelector('.projects');
    nextSection.scrollIntoView({
        behavior: 'smooth'
    });
});


// scroll jumps nav
        // Selecciona todos los enlaces del menú
        const links = document.querySelectorAll('nav ul li a');
        // Itera sobre cada enlace
        links.forEach(link => {
            // Añade un evento de clic a cada enlace
            link.addEventListener('click', e => {
                // Previene el comportamiento predeterminado de los enlaces
                e.preventDefault();
                // Obtiene el href del enlace
                const href = link.getAttribute('href');
                // Obtiene el elemento asociado al href
                const targetElement = document.querySelector(href);
                // Hace scroll suavemente al elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

// Cards

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.5s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateY(0deg)';
  });
});


const button = document.querySelector('.allp');

// Añade un event listener para el evento 'click'
button.addEventListener('click', function() {
  // Abre una nueva pestaña con la URL especificada
  window.open('https://github.com/AgustinBeniteez?tab=repositories', '_blank');
});


    // Redireccionar a la sección de IMG LOGO

document.getElementById("logo").addEventListener("click", function() {

    // Redireccionar a la sección correspondiente
    var hash = "#presentation"; // Cambiar al hash de la sección deseada
    var targetElement = document.querySelector(hash);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
});