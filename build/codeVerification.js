document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener el valor del campo de texto
    var codigo = document.querySelector('#codigo').value;
  
    // Validar el código
    if (codigo === 'codigo-correcto') {
      // Redirigir a la página de descarga
      window.location.href = 'ruta-al-archivo.zip';
    } else {
      // Redirigir a otra página
      window.location.href = 'otra-pagina.html';
    }
  });