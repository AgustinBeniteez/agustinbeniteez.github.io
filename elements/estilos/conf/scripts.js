document.addEventListener('DOMContentLoaded', function() {
    // Generar un timestamp actual
    const timestamp = new Date().getTime();
       // Construir la URL del archivo JSON con el timestamp como parámetro de consulta
       const jsonUrl = `/elements/estilos/conf/postcss.json?timestamp=${timestamp}`;
   
       // Fetch data from JSON file
       fetch(jsonUrl)
           .then(response => response.json())
           .then(data => {
               const postsContainer = document.getElementById('posts-container');
   
               // Iterate over each post data and create HTML for each post
               data.forEach(post => {
                   const postHTML = `
                       <div class="post" data-tags="${post.tags}">
                           <input type="checkbox" class="theme-checkbox">
                           <h3 class="post-title">${post.titulo}</h3>
                           <style>${post.estilos}</style>
                           ${post.contenido}
                           <a href="${post.enlace}" target="_blank"><button class="show-code-btn">Show Code { }</button></a>
                           <div class="tags-container">
                               ${post.tags.split(',').map(tag => `<div class="tag">${tag.trim()}</div>`).join('')}
                           </div>
                       </div>
                   `;
                   postsContainer.innerHTML += postHTML;
               });
   
               // Call the function to initialize the checkbox event listener after posts are loaded
               initializeCheckBoxes();
           })
           .catch(error => console.error('Error fetching data:', error));
   
   
       // Function to initialize checkbox event listener
       function initializeCheckBoxes() {
           var checkboxes = document.querySelectorAll('.theme-checkbox');
           var postContainers = document.querySelectorAll('.post');
   
           checkboxes.forEach(function(checkbox, index) {
               checkbox.addEventListener('change', function() {
                   if (checkbox.checked) {
                       postContainers[index].style.background = 'rgba(23, 23, 23, 0.90)';
                       postContainers[index].style.color = '#fff';
                       postContainers[index].style.border = '3px solid rgba(45, 45, 45, 0.76)';
                       postContainers[index].style.boxShadow = '0px 0px 11.3px 4px rgba(0, 0, 0, 0.25) inset';
   
                       var postTitle = postContainers[index].querySelector('.post-title');
                       if (postTitle) {
                           postTitle.style.color = '#fff';
                       }
                   } else {
                       postContainers[index].style.background = 'rgba(217, 217, 217, 0.90)';
                       postContainers[index].style.color = 'white';
                       postContainers[index].style.border = '3px solid rgba(255, 255, 255, 0.80)';
                       postContainers[index].style.boxShadow = '0px 0px 11.3px 2px rgba(0, 0, 0, 0.25) inset';
   
                       var postTitle = postContainers[index].querySelector('.post-title');
                       if (postTitle) {
                           postTitle.style.color = 'black';
                       }
                   }
               });
           });
       }
   });
   
$(document).ready(function() {
    var $searchInput = $('#search-box');
    var $tagButtons = $('.tag-button');
    var $posts = $('.post');
    var $noResultsMessage = $('#no-results-message');

    $searchInput.on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        var matchingPosts = $posts.filter(function() {
            var postTitle = $(this).find('.post-title').text().toLowerCase();
            return postTitle.includes(searchTerm);
        });
    
        if (matchingPosts.length > 0) {
            $noResultsMessage.hide();
            $posts.hide();
            matchingPosts.show();
        } else {
            $posts.hide();
            // Ocultar el mensaje solo si hay al menos 1 post visible
            if ($('.post:visible').length > 0) {
                $noResultsMessage.hide();
            } else {
                $noResultsMessage.show();
            }
        }
    });
    
    

    $tagButtons.on('click', function() {
        var tag = $(this).data('tag').toLowerCase();
        var matchingPosts = $posts.filter(function() {
            var postTags = $(this).data('tags') || '';
            return postTags.split(',').map(function(t) {
                return t.trim();
            }).includes(tag);
        });

        if (matchingPosts.length > 0) {
            $noResultsMessage.hide();
            $posts.hide();
            matchingPosts.show();
        } else {
            $posts.hide();
            $noResultsMessage.show();
        }
    });

    // Agrega esta función para mostrar el mensaje cuando se elimine el texto de búsqueda y se muestren todos los posts nuevamente
    $searchInput.on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        if (searchTerm === '') {
            $noResultsMessage.hide();
        }
    });
});


   
   
// BORRADOR
function limpiarBusqueda() {
    // Limpiar el contenido del input de búsqueda
    document.getElementById('search-box').value = '';
    
    // Mostrar todos los posts ocultos
    $('.post').show();
    
    // Ocultar el mensaje "No se encontraron resultados"
    $('#no-results-message').hide();

    // Recargar los posts en la página actual
    loadPosts(currentPage);
}


   
   // Variable to store the current page number
   let currentPage = 1;
   
   document.addEventListener('DOMContentLoaded', function() {
   // Function to load posts for the given page
   function loadPosts(page) {
       // Hide all posts
       $('.post').hide();
       // Calculate the starting index of the posts for the current page
       const startIndex = (page - 1) * 8;
       // Calculate the ending index of the posts for the current page
       const endIndex = startIndex + 8;
       // Show only the posts corresponding to the current page within the range of startIndex and endIndex
       $('.post').slice(startIndex, endIndex).show();
       // Display the current page number
       $('#current-page').text(page);
   }
   
   
       // Call the function to load posts when the page loads
       loadPosts(currentPage);
   
       // Event handler for the previous page button
       $('#prev-page').on('click', function() {
           if (currentPage > 1) {
               currentPage--;
               loadPosts(currentPage);
           }
       });
   
       // Event handler for the next page button
       $('#next-page').on('click', function() {
           // Calculate the total number of pages
           const totalPages = Math.ceil($('.post:visible').length / 8);
           if (currentPage < totalPages) {
               currentPage++;
               loadPosts(currentPage);
           }
       });
   
       // Search functionality
       $('#search-box').on('keyup', function() {
           const searchTerm = $(this).val().toLowerCase().trim();
           if (searchTerm === '') {
               $('.post').show();
           } else {
               $('.post').hide().filter(function() {
                   const postTitle = $(this).find('.post-title').text().toLowerCase();
                   return postTitle.includes(searchTerm);
               }).show();
           }
       });
   });


     // NAV menu movil
   document.addEventListener('DOMContentLoaded', function () {
// Obtener referencias al botón de menú y al menú
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

// Agregar un event listener para el clic en el botón de menú
menuToggle.addEventListener('click', function() {
    // Alternar la clase 'active' en el menú para mostrarlo u ocultarlo
    navMenu.classList.toggle('active');
});

});
