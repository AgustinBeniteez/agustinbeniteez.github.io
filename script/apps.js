class Application {
    constructor(name, icon, url = '') {
        this.name = name;
        this.icon = icon;
        this.url = url;
        this.isMinimized = false;
        this.windowId = null;
    }

    createWindow() {
        if (this.windowId) {
            // If window exists but is minimized, restore it
            if (this.isMinimized) {
                this.restoreWindow();
                return;
            }
            // Focus existing window
            document.getElementById(this.windowId).focus();
            return;
        }

        this.windowId = 'window-' + Date.now();
        const browserWindow = document.createElement('div');
        browserWindow.id = this.windowId;
        browserWindow.className = 'browser-window';
        // Create window header
        const header = document.createElement('div');
        header.className = 'window-header';
        header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 8px;  background:linear-gradient(302deg, rgba(170,119,186,1) 0%, rgba(194,109,80,1) 100%);';
        // Add title with icon
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.gap = '8px';
        const icon = document.createElement('img');
        icon.src = this.icon;
        icon.style.width = '20px';
        icon.style.height = '20px';
        const title = document.createElement('div');
        title.textContent = this.name;
        title.style.color = 'white';
        title.style.fontFamily = 'Arial';
        titleContainer.append(icon, title);
        title.style.marginLeft = '8px';
        title.style.color = 'white';
        title.style.fontFamily = 'Arial';
        // Add control buttons
        const controls = document.createElement('div');
        controls.style.display = 'flex';
        controls.style.gap = '8px';
        
        const minimizeBtn = document.createElement('button');
        minimizeBtn.innerHTML = '&#8722;';
        minimizeBtn.onclick = () => this.minimizeWindow();
        minimizeBtn.className = 'window-control';
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&#10005;';
        closeBtn.onclick = () => this.closeWindow();
        closeBtn.className = 'window-control close-btn';
        
        controls.append(minimizeBtn, closeBtn);
        header.append(title, controls);
        
        // Add content
        const content = document.createElement('div');
        content.className = 'window-content';
        
        if (this.url) {
            const iframe = document.createElement('iframe');
            iframe.src = this.url;
            content.appendChild(iframe);
        } else {
            content.innerHTML = `<div style="padding: 20px;">Content for ${this.name}</div>`;
        }
        
        browserWindow.append(header, content);
        document.body.appendChild(browserWindow);
        
        // Make window draggable
        this.makeDraggable(browserWindow, header);
        
        // Add to taskbar immediately when window is created
        this.addToTaskbar();
    }

    minimizeWindow() {
        const window = document.getElementById(this.windowId);
        window.style.display = 'none';
        this.isMinimized = true;
        
        // Window is already in taskbar from creation, no need to add again
    }

    restoreWindow() {
        const window = document.getElementById(this.windowId);
        window.style.display = 'flex';
        this.isMinimized = false;
        
        // Don't remove from taskbar, keep it there until closed
    }

    maximizeWindow() {
        const window = document.getElementById(this.windowId);
        window.classList.toggle('maximized');
    }

    closeWindow() {
        const window = document.getElementById(this.windowId);
        window.remove();
        this.windowId = null;
        this.isMinimized = false;
        
        // Remove from taskbar when closed
        const minimizedTab = Array.from(document.querySelectorAll('.nav-title-minimized'))
            .find(tab => tab.textContent === this.name);
        if (minimizedTab) {
            minimizedTab.remove();
        }
    }

    // Add application to taskbar
    addToTaskbar() {
        const minimizedContainer = document.querySelector('.minimized-browsers');
        const minimizedTab = document.createElement('div');
        minimizedTab.className = 'nav-title-minimized';
        minimizedTab.textContent = this.name;
        minimizedTab.onclick = () => {
            if (this.isMinimized) {
                this.restoreWindow();
            } else {
                // If window is already open, just focus it
                document.getElementById(this.windowId).focus();
                // Bring window to front
                document.getElementById(this.windowId).style.zIndex = Date.now();
            }
        };
        minimizedContainer.appendChild(minimizedTab);
    }
    
    makeDraggable(element, handle) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        handle.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            
            // Bring window to front
            element.style.zIndex = Date.now();
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}

// Create application instances
const apps = {
    github: new Application('GitHub', '/src/github.webp', 'apps/github.html'),
    spotify: new Application('Spotify', '/src/spotify.webp', 'apps/spotify.html'),
    figma: new Application('Figma', '/src/figma.webp', 'apps/figma.html'),
    estudios: new Application('Estudios', '/src/folder-estudios.webp', 'apps/estudios.html'),
    projects: new Application('Projects', '/src/folder-projects.webp ', 'apps/projects.html'),
    mods: new Application('Mods', '/src/folder-mods.webp', 'apps/mods.html')
};

// Function to open browser window
function openBrowserWindow(appName) {
    if (apps[appName.toLowerCase()]) {
        apps[appName.toLowerCase()].createWindow();
        
        // Close the start menu when an app is opened
        const startMenu = document.getElementById('startMenu');
        if (startMenu && startMenu.classList.contains('active')) {
            startMenu.classList.remove('active');
        }
    }
}