document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener el valor del campo de texto
    var codigo = document.querySelector('#codigo').value;
  
    // Validar el código
    if (codigo === 'ri69cky33') {
      // Redirigir a la página de descarga
      window.location.href = 'https://www.mediafire.com/file/l6mwwcgdpygc8lc/FTAR.rar/file';
    } else {
      // Redirigir a otra página
      window.location.href = 'videoplayback.html';
    }
  });