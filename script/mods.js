document.addEventListener('DOMContentLoaded', () => {
    let currentGame = 'minecraft';
    let modsData = null;

    // Fetch mods data
    fetch('../data/mods-data.json')
        .then(response => response.json())
        .then(data => {
            modsData = data;
            renderMods(currentGame);
        })
        .catch(error => console.error('Error loading mods:', error));

    // Add event listeners to game filter buttons
    document.querySelectorAll('.game-filter').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.game-filter').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            button.classList.add('active');
            
            currentGame = button.dataset.game;
            renderMods(currentGame);
        });
    });

    function renderMods(game) {
        const modsGrid = document.querySelector('.mods-grid');
        const mods = modsData[game];
        
        modsGrid.innerHTML = '';
        
        mods.forEach(mod => {
            const modCard = document.createElement('div');
            modCard.className = 'mod-card';
            
            modCard.innerHTML = `
                <img src="${mod.image}" alt="${mod.title}" class="mod-image">
                <div class="mod-content">
                    <h3 class="mod-title">${mod.title}</h3>
                    <p class="mod-description">${mod.description}</p>
                    <a href="${mod.url}" target="_blank" class="curseforge-button">Ver en CurseForge</a>
                </div>
            `;
            
            modsGrid.appendChild(modCard);
        });
    }
});