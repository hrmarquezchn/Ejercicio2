function calcularNota() {
    // Obtener los valores de los parciales
    var parcial1 = parseFloat(document.getElementById('parcial1').value);
    var parcial2 = parseFloat(document.getElementById('parcial2').value);
    var parcial3 = parseFloat(document.getElementById('parcial3').value);
  
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3)) {
      mostrarMensaje('Por favor ingresa todas las notas.');
      return;


    }
  
    var notaFinal = (parcial1 + parcial2 + parcial3) / 100 * 100;
  
    var mensaje;
    if (notaFinal >= 90) {
      mensaje = 'Sobresaliente';
    } else if (notaFinal >= 80) {
      mensaje = 'Muy Bueno';
    } else if (notaFinal >= 60) {
      mensaje = 'Bueno';
    } else {
      mensaje = 'Reprobado';
    }
  
    mostrarMensaje('Tu nota final es: ' + notaFinal.toFixed(2) + '% - ' + mensaje);
  }
  
  function mostrarMensaje(mensaje) {
    document.getElementById('resultado').innerHTML = '<div class="alert alert-info">' + mensaje + '</div>';
  }
  
  function limpiarFormulario() {
    document.getElementById('notaForm').reset();
    document.getElementById('resultado').innerHTML = '';
  }
 
  document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    calcularNota();
  });
  

  