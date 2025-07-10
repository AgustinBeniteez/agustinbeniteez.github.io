async function loadProjects() {
    try {
        const response = await fetch('/data/slider-data.json');
        const data = await response.json();
        return data.slides;
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
}

function getAllUniqueTechnologies(projects) {
    const technologies = new Set();
    projects.forEach(project => {
        project.technologies.forEach(tech => technologies.add(tech));
    });
    return Array.from(technologies).sort();
}

function createFilterOption(tech, container, activeFilters) {
    const option = document.createElement('div');
    option.className = 'filter-option';
    
    // Usar iconos SVG para node y sql, Font Awesome para el resto
    if (tech === 'node' || tech === 'SQL') {
        const icon = document.createElement('img');
        icon.src = `/assets/icons/${tech.toLowerCase()}.svg`;
        icon.alt = tech;
        icon.className = 'tech-filter-icon';
        option.appendChild(icon);
    } else {
        const icon = document.createElement('i');
        icon.className = `fa-brands fa-${tech}`;
        option.appendChild(icon);
    }
    
    const text = document.createElement('span');
    text.textContent = tech;
    option.appendChild(text);
    
    option.addEventListener('click', () => {
        option.classList.toggle('active');
        if (option.classList.contains('active')) {
            activeFilters.add(tech);
        } else {
            activeFilters.delete(tech);
        }
        filterProjects();
    });
    container.appendChild(option);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => 
                    `<img src="/assets/icons/${tech}.svg" alt="${tech}" class="tech-icon">`
                ).join('')}
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        window.open(project.projectUrl, '_blank');
    });

    return card;
}

let projects = [];
const activeTechFilters = new Set();

function filterProjects() {
    const filteredProjects = projects.filter(project => {
        return activeTechFilters.size === 0 || 
            project.technologies.some(tech => activeTechFilters.has(tech));
    });

    const container = document.getElementById('project-container');
    container.innerHTML = '';
    filteredProjects.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

async function initializePortfolio() {
    projects = await loadProjects();
    
    const techFilters = document.getElementById('tech-filters');

    getAllUniqueTechnologies(projects).forEach(tech => {
        createFilterOption(tech, techFilters, activeTechFilters);
    });

    filterProjects();
}

document.addEventListener('DOMContentLoaded', initializePortfolio);