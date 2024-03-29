        // Función para cambiar la imagen activa al hacer clic en una imagen
        function changeActive(event) {
            const clickedSlide = event.target.closest('.slide');

            if (clickedSlide && !clickedSlide.classList.contains('active')) {
                const slides = document.querySelectorAll('.slide');
                const activeSlide = document.querySelector('.slide.active');
                const slideTrack = document.querySelector('.slide-track');

                slides.forEach(slide => slide.classList.remove('active'));
                clickedSlide.classList.add('active');

                // Desplazar la imagen activa al centro del contenedor
                const activeIndex = Array.from(slides).indexOf(clickedSlide);
                const offsetLeft = clickedSlide.offsetLeft;
                const centerOffset = (slideTrack.offsetWidth - clickedSlide.offsetWidth) / 2;
                const scrollDistance = offsetLeft - centerOffset - slideTrack.scrollLeft;

                slideTrack.scrollBy({
                    left: scrollDistance,
                    behavior: 'smooth'
                });
            }
        }

        function showButton(element) {
            const button = element.nextElementSibling;
            button.style.display = "block";
        }

        function hideButton(element) {
            const button = element.nextElementSibling;
            button.style.display = "none";
        }

        