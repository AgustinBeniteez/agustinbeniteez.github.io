require.config({
    paths: {
        'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.47.0/min/vs'
    }
});

require(['vs/editor/editor.main'], function () {
    // Función para obtener el contenido de un editor desde el almacenamiento local
    function getEditorContent(editorId) {
        return localStorage.getItem(editorId) || '';
    }

    var htmlEditor = monaco.editor.create(document.getElementById('top-left'), {
        value: getEditorContent('htmlContent'),
        language: 'html',
        theme: currentTheme, // Usar la variable currentTheme
        minimap: { enabled: false }
    });

    var cssEditor = monaco.editor.create(document.getElementById('top-right'), {
        value: getEditorContent('cssContent'),
        language: 'css',
        theme: currentTheme, // Usar la variable currentTheme
        minimap: { enabled: false }
    });

    var jsEditor = monaco.editor.create(document.getElementById('bottom-left'), {
        value: getEditorContent('jsContent'),
        language: 'javascript',
        theme: currentTheme, // Usar la variable currentTheme
        minimap: { enabled: false }
    });

    // Función para actualizar el contenido del editor y guardarlo en el almacenamiento local
    function updateEditorContent(editor, editorId) {
        return function () {
            localStorage.setItem(editorId, editor.getValue());
        };
    }

    // Agregar eventos input a los editores
    htmlEditor.onDidChangeModelContent(updateEditorContent(htmlEditor, 'htmlContent'));
    cssEditor.onDidChangeModelContent(updateEditorContent(cssEditor, 'cssContent'));
    jsEditor.onDidChangeModelContent(updateEditorContent(jsEditor, 'jsContent'));

    // Función para actualizar el render en el iframe
    function updateRender() {
        var htmlCode = htmlEditor.getValue();
        var cssCode = '<style>' + cssEditor.getValue() + '</style>';
        var jsCode = '<script>' + jsEditor.getValue() + '</scr' + 'ipt>'; // Evitar error de "Unterminated string literal"
        var renderCode = htmlCode + cssCode + jsCode;
        var iframe = document.getElementById('renderFrame');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        iframeDocument.body.innerHTML = renderCode;
    }

    // Agregar eventos input a los editores
    htmlEditor.onDidChangeModelContent(updateRender);
    cssEditor.onDidChangeModelContent(updateRender);
    jsEditor.onDidChangeModelContent(updateRender);

    // Inicializar el render
    updateRender();
});

// Controlador de evento de redimensionamiento de ventana
window.addEventListener('resize', function () {
    // Forzar una nueva renderización de la página
    setTimeout(function () {
        window.location.reload();
    }, 50);
});

function toggleFullScreen(section) {
    var popupOverlay = document.getElementById('popup-overlay');
    var popupContent = document.getElementById('popup-content');
    var fullButton = section.querySelector('.full-button');

    if (!popupOverlay.style.display || popupOverlay.style.display === 'none') {
        // Entrar en modo fullscreen
        section.classList.add('fullscreen');
        popupContent.innerHTML = ''; // Limpiar el contenido del popup
        popupOverlay.style.display = 'flex';
        fullButton.innerText = 'Close'; // Cambiar el texto del botón a "Close"
        fullButton.classList.add('popup-close'); // Agrega la clase de estilo para el botón de cerrar
        section.style.zIndex = '1001'; // por encima del popup

        // Colocar los editores dentro del popup
        popupContent.appendChild(htmlEditor.getDomNode());
        popupContent.appendChild(cssEditor.getDomNode());
        popupContent.appendChild(jsEditor.getDomNode());

        // Ajustar el tamaño del editor al tamaño del popup
        setTimeout(function () {
            htmlEditor.layout();
            cssEditor.layout();
            jsEditor.layout();

            // Ajustar el tamaño del contenedor del popup según el tamaño del editor más grande
            var maxWidth = Math.max(htmlEditor.getDomNode().offsetWidth, cssEditor.getDomNode().offsetWidth, jsEditor.getDomNode().offsetWidth);
            var maxHeight = Math.max(htmlEditor.getDomNode().offsetHeight, cssEditor.getDomNode().offsetHeight, jsEditor.getDomNode().offsetHeight);
            popupContent.style.width = maxWidth + 'px';
            popupContent.style.height = maxHeight + 'px';
        }, 100); // Ajusta el tiempo de espera según sea necesario
    } else {
        // Salir del modo fullscreen
        section.classList.remove('fullscreen');
        popupOverlay.style.display = 'none';
        fullButton.innerText = 'Full'; // Cambiar el texto del botón a "Full"
        fullButton.classList.remove('popup-close'); // Eliminar la clase de estilo para el botón de cerrar

        // Restaurar la estructura de grid
        document.getElementById('container').style.display = 'grid';

        // Quitar los editores del popup y volver a colocarlos en su lugar original
        document.getElementById('top-left').appendChild(htmlEditor.getDomNode());
        document.getElementById('top-right').appendChild(cssEditor.getDomNode());
        document.getElementById('bottom-left').appendChild(jsEditor.getDomNode());
    }
}

function confirmClear(editorType) {
    if (editorType === '') return; // Si no se selecciona ninguna opción, no hacer nada

    // Mensaje de confirmación predeterminado
    var confirmationMessage = "Are you sure you want to do this? This cannot be undone.";

    // Determinar el mensaje de confirmación específico según el tipo de editor
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

    // Se muestra un cuadro de confirmación con el mensaje correspondiente
    var confirmDelete = window.confirm(confirmationMessage);

    // Si el usuario confirma la acción, se borra el contenido del editor o de todos los editores
    if (confirmDelete) {
        // Se obtiene el editor o los editores y se limpia su contenido según el tipo seleccionado
        switch (editorType) {
            case 'html':
                var htmlEditor = monaco.editor.getEditors()[0];
                if (htmlEditor) {
                    htmlEditor.setValue('');
                }
                break;
            case 'css':
                var cssEditor = monaco.editor.getEditors()[1];
                if (cssEditor) {
                    cssEditor.setValue('');
                }
                break;
            case 'js':
                var jsEditor = monaco.editor.getEditors()[2];
                if (jsEditor) {
                    jsEditor.setValue('');
                }
                break;
            case 'all':
                monaco.editor.getModels().forEach(function (model) {
                    model.setValue('');
                });
                break;
            default:
                break;
        }
    }
}

// SAVE AUTOMATICO almacenamiento local
// Zoom de IFRAME
function updateZoom() {
    var slider = document.getElementById('zoomSlider');
    var sliderValue = parseFloat(slider.value);
    var zoomValue = document.getElementById('zoomValue');
    var zoomPercentage = Math.round(sliderValue * 100); // Redondear a tres dígitos enteros
    zoomValue.textContent = zoomPercentage + '%';
    zoomValue.style.fontWeight = 'bold'; // Aplicar negrita al texto

    var iframe = document.getElementById('renderFrame');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.body.style.zoom = sliderValue;
}


// THEME
// Definir una variable para almacenar el tema actual
var currentTheme = 'vs-dark';

// Obtener referencia al checkbox
var darkModeCheckbox = document.getElementById('preference1');

// Agregar un listener para detectar cambios en el estado del checkbox de modo oscuro
darkModeCheckbox.addEventListener('change', function () {
    // Obtener el estado actual del checkbox de modo oscuro
    var isDarkModeChecked = darkModeCheckbox.checked;

    // Cambiar el tema del editor según el estado del checkbox de modo oscuro
    if (isDarkModeChecked) {
        // Cambiar a tema oscuro
        currentTheme = 'vs-dark';
    } else {
        // Cambiar a tema claro
        currentTheme = 'vs';
    }

    // Aplicar el tema actual a los editores de Monaco
    htmlEditor.updateOptions({ theme: currentTheme });
    cssEditor.updateOptions({ theme: currentTheme });
    jsEditor.updateOptions({ theme: currentTheme });
});

// Inicialmente, aplicar el tema oscuro por defecto al cargar la página
htmlEditor.updateOptions({ theme: currentTheme });
cssEditor.updateOptions({ theme: currentTheme });
jsEditor.updateOptions({ theme: currentTheme });




// URL del archivo JSON
var jsonFileUrl = '/elements/estilos/conf/postcss.json';

// Función para cargar el contenido JSON desde el archivo
function cargarContenidoJSON() {
    fetch(jsonFileUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            // El contenido del JSON se guarda en la variable `data`
            // Aquí puedes realizar las operaciones necesarias con el JSON cargado
            // Por ejemplo, puedes guardar `data` en una variable global para acceder a él posteriormente
            // O puedes ejecutar una función específica para manejar el JSON cargado
            manejarContenidoJSON(data);
        })
        .catch(function (error) {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

// Función para manejar el contenido JSON una vez cargado
function manejarContenidoJSON(jsonData) {
    // Supongamos que `jsonData` tiene propiedades para HTML, CSS y JavaScript
    // Puedes asignar el contenido de cada propiedad a los editores correspondientes

    // Por ejemplo, si tienes propiedades 'html', 'css' y 'js' en el JSON
    // Asignar contenido HTML al editor de HTML
    htmlEditor.setValue(jsonData.html || '');

    // Asignar contenido CSS al editor de CSS
    cssEditor.setValue(jsonData.css || '');

    // Asignar contenido JavaScript al editor de JavaScript
    jsEditor.setValue(jsonData.js || '');

    // Actualizar el renderizado después de cargar el contenido del JSON
    updateRender();
}

// Llamar a la función para cargar el contenido JSON cuando la página esté lista
document.addEventListener('DOMContentLoaded', function () {
    cargarContenidoJSON();
});

    // Función para abrir el contenido del iframe en una nueva ventana
    function openIframeContentInNewTab() {
        // Obtener el contenido del iframe
        var iframeContent = document.getElementById('renderFrame').contentWindow.document.documentElement.outerHTML;

        // Crear un objeto de ventana nueva
        var newWindow = window.open();

        // Escribir el contenido del iframe en la nueva ventana
        newWindow.document.write(iframeContent);

        // Cerrar la nueva ventana si el usuario cierra la ventana padre
        window.onunload = function () {
            newWindow.close();
        };
    }



    function exportHTML() {
        // Obtener el contenido HTML del editor
        var htmlContent = document.getElementById('container').innerHTML;
    
        // Crear un Blob con el contenido HTML
        var blob = new Blob([htmlContent], { type: 'text/html' });
    
        // Crear un enlace para descargar el archivo
        var link = document.createElement('a');
        link.download = 'index.html';
        link.href = window.URL.createObjectURL(blob);
        link.click();
    }
    
    