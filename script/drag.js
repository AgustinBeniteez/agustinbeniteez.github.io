document.addEventListener('DOMContentLoaded', function() {
    const navegador = document.getElementById('navegador');
    const navTitleMinimized = document.querySelector('.nav-title-minimized');
    let isDragging = false;
    let startX, startY;
    let initialX, initialY;

    // Window control buttons
    document.querySelector('.nav-close').addEventListener('click', () => {
        navegador.style.display = 'none';
    });

    document.querySelector('.nav-minimize').addEventListener('click', () => {
        navegador.classList.add('minimized');
        navTitleMinimized.classList.add('show');
    });

    document.querySelector('.nav-maximize').addEventListener('click', () => {
        navegador.classList.toggle('fullscreen');
    });

    navTitleMinimized.addEventListener('click', () => {
        navegador.classList.remove('minimized');
        navTitleMinimized.classList.remove('show');
    });

    navegador.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    function startDragging(e) {
        isDragging = true;
        
        // Get the current position of the element
        const rect = navegador.getBoundingClientRect();
        
        // Calculate the offset from the mouse position to the element's top-left corner
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
        
        navegador.style.cursor = 'move';
    }

    function drag(e) {
        if (!isDragging) return;

        e.preventDefault();

        // Calculate new position
        let newX = e.clientX - startX;
        let newY = e.clientY - startY;

        // Get window boundaries
        const maxX = window.innerWidth - navegador.offsetWidth;
        const maxY = window.innerHeight - navegador.offsetHeight;

        // Constrain to window boundaries
        newX = Math.min(Math.max(0, newX), maxX);
        newY = Math.min(Math.max(0, newY), maxY);

        // Apply new position
        navegador.style.left = newX + 'px';
        navegador.style.top = newY + 'px';
        navegador.style.transform = 'none';
    }

    function stopDragging() {
        isDragging = false;
        navegador.style.cursor = 'move';
    }
});