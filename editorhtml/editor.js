require.config({
    paths: {
        'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.47.0/min/vs'
    }
});

var htmlEditor, cssEditor, jsEditor; // Define editors globally
var currentTheme = 'vs-dark'; // Default theme

require(['vs/editor/editor.main'], function () {
    // Function to get editor content from local storage
    function getEditorContent(editorId) {
        return localStorage.getItem(editorId) || '';
    }

    // Create editors
    htmlEditor = monaco.editor.create(document.getElementById('top-left'), {
        value: getEditorContent('htmlContent'),
        language: 'html',
        theme: currentTheme,
        minimap: { enabled: false }
    });

    cssEditor = monaco.editor.create(document.getElementById('top-right'), {
        value: getEditorContent('cssContent'),
        language: 'css',
        theme: currentTheme,
        minimap: { enabled: false }
    });

    jsEditor = monaco.editor.create(document.getElementById('bottom-left'), {
        value: getEditorContent('jsContent'),
        language: 'javascript',
        theme: currentTheme,
        minimap: { enabled: false }
    });

    // Function to update editor content and save to local storage
    function updateEditorContent(editor, editorId) {
        return function () {
            localStorage.setItem(editorId, editor.getValue());
        };
    }

    // Add input events to editors
    htmlEditor.onDidChangeModelContent(updateEditorContent(htmlEditor, 'htmlContent'));
    cssEditor.onDidChangeModelContent(updateEditorContent(cssEditor, 'cssContent'));
    jsEditor.onDidChangeModelContent(updateEditorContent(jsEditor, 'jsContent'));

    // Function to update iframe render
    function updateRender() {
        var htmlCode = htmlEditor.getValue();
        var cssCode = '<style>' + cssEditor.getValue() + '</style>';
        var jsCode = '<script>' + jsEditor.getValue() + '</scr' + 'ipt>';
        var renderCode = htmlCode + cssCode + jsCode;
        var iframe = document.getElementById('renderFrame');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        iframeDocument.body.innerHTML = renderCode;
    }

    // Add input events to update iframe render
    htmlEditor.onDidChangeModelContent(updateRender);
    cssEditor.onDidChangeModelContent(updateRender);
    jsEditor.onDidChangeModelContent(updateRender);

    // Initialize the render
    updateRender();
});

// Window resize event handler
window.addEventListener('resize', function () {
    setTimeout(function () {
        window.location.reload();
    }, 50);
});

// Confirm and clear editor content
function confirmClear(editorType) {
    if (editorType === '') return;

    var confirmationMessage = "Are you sure you want to do this? This cannot be undone.";
    switch (editorType) {
        case 'html':
            confirmationMessage = "Are you sure you want to clear the HTML content? This cannot be undone.";
            break;
        case 'css':
            confirmationMessage = "Are you sure you want to clear the CSS content? This cannot be undone.";
            break;
        case 'js':
            confirmationMessage = "Are you sure you want to clear the JavaScript content? This cannot be undone.";
            break;
        case 'all':
            confirmationMessage = "Are you sure you want to clear all content from HTML, CSS, and JavaScript editors? This cannot be undone.";
            break;
        default:
            break;
    }

    var confirmDelete = window.confirm(confirmationMessage);

    if (confirmDelete) {
        switch (editorType) {
            case 'html':
                htmlEditor.setValue('');
                break;
            case 'css':
                cssEditor.setValue('');
                break;
            case 'js':
                jsEditor.setValue('');
                break;
            case 'all':
                htmlEditor.setValue('');
                cssEditor.setValue('');
                jsEditor.setValue('');
                break;
            default:
                break;
        }
    }
}

// Update iframe zoom level
function updateZoom() {
    var slider = document.getElementById('zoomSlider');
    var sliderValue = parseFloat(slider.value);
    var zoomValue = document.getElementById('zoomValue');
    var zoomPercentage = Math.round(sliderValue * 100);
    zoomValue.textContent = zoomPercentage + '%';
    zoomValue.style.fontWeight = 'bold';

    var iframe = document.getElementById('renderFrame');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.body.style.zoom = sliderValue;
}

// Theme switching
var darkModeCheckbox = document.getElementById('preference1');
darkModeCheckbox.addEventListener('change', function () {
    currentTheme = darkModeCheckbox.checked ? 'vs-dark' : 'vs';
    htmlEditor.updateOptions({ theme: currentTheme });
    cssEditor.updateOptions({ theme: currentTheme });
    jsEditor.updateOptions({ theme: currentTheme });
});

htmlEditor.updateOptions({ theme: currentTheme });
cssEditor.updateOptions({ theme: currentTheme });
jsEditor.updateOptions({ theme: currentTheme });

// Load JSON content
var jsonFileUrl = '/elements/estilos/conf/postcss.json';
function cargarContenidoJSON() {
    fetch(jsonFileUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            manejarContenidoJSON(data);
        })
        .catch(function (error) {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

function manejarContenidoJSON(jsonData) {
    htmlEditor.setValue(jsonData.html || '');
    cssEditor.setValue(jsonData.css || '');
    jsEditor.setValue(jsonData.js || '');
    updateRender();
}

document.addEventListener('DOMContentLoaded', function () {
    cargarContenidoJSON();
});

// Open iframe content in new tab
function openIframeContentInNewTab() {
    var iframeContent = document.getElementById('renderFrame').contentWindow.document.documentElement.outerHTML;
    var newWindow = window.open();
    newWindow.document.write(iframeContent);
    window.onunload = function () {
        newWindow.close();
    };
}

// Export HTML, CSS, and JS to ZIP
function exportHTML() {
    var fileName = prompt("Enter the file name:", "project");

    if (fileName !== null) {
        var htmlContent = htmlEditor.getValue();
        var cssContent = cssEditor.getValue();
        var jsContent = jsEditor.getValue();

        var zip = new JSZip();
        zip.file('index.html', htmlContent);
        zip.file('styles.css', cssContent);
        zip.file('script.js', jsContent);

        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, fileName + '.zip');
        });
    }
}
 // POPUP ajustes
function togglePopup() {
    var popup = document.getElementById("popup-overlay");
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "flex"; // Cambiamos a "flex" para centrarlo
    } else {
        popup.style.display = "none";
    }
}

document.getElementById("conf").addEventListener("click", function(event) {
    event.preventDefault();
    togglePopup();
});

document.getElementById("closePopup").addEventListener("click", function() {
    togglePopup();
});

// Cambiar el idioma cuando se seleccione desde el menú
document.getElementById('language').addEventListener('change', function() {
    selectedLanguage = this.value;
    translatePage(selectedLanguage);
});

        // Función para traducir la página
        function translatePage(selectedLanguage) {
            fetch('translations.json')
            .then(response => response.json())
            .then(languageJSON => {
                // Obtener los elementos de la página que deben ser traducidos
                var elementsToTranslate = document.querySelectorAll('[data-i18n]');
                
                // Iterar sobre los elementos y traducirlos
                elementsToTranslate.forEach(function(element) {
                    var key = element.dataset.i18n;
                    element.textContent = languageJSON[selectedLanguage][key];
                });
            });
        }

        // Llamar a la función de traducción al cargar la página
        var selectedLanguage = 'en'; // Por defecto, el idioma es inglés
        translatePage(selectedLanguage);

        // Cambiar el idioma cuando se seleccione desde el menú
        document.getElementById('language').addEventListener('change', function() {
            selectedLanguage = this.value;
            translatePage(selectedLanguage);
        });