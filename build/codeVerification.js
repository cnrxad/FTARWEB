document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener el valor del campo de texto
    var codigo = document.querySelector('#codigo').value;
  
    // Validar el código
    if (codigo === '152521512512521521521521') {
      // Redirigir a la página de descarga
      window.location.href = 'ruta-al-archivo.zip';
    } else {
      // Redirigir a otra página
      window.location.href = 'videoplayback.html';
    }
  });