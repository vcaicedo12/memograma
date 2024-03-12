var tiempoRestante = 90;
var elementoTemporizador = document.getElementById('temporizador');
var estaParpadeando = false; // Variable para controlar el parpadeo

function actualizarTemporizador() {
  tiempoRestante--;
  elementoTemporizador.textContent = tiempoRestante;

  if (tiempoRestante <= 10 && !estaParpadeando) {
    estaParpadeando = true;
    elementoTemporizador.classList.add('parpadeante'); // Añade la clase para el parpadeo
  }

  if (tiempoRestante <= 0) {
    clearInterval(intervalo);
    window.location.href = '/lost';
  }
}

// Función para iniciar el temporizador después de 5 segundos
function iniciarTemporizador() {
  intervalo = setInterval(actualizarTemporizador, 1000);
}

// Mostrar las cartas por 5 segundos antes de iniciar el temporizador
setTimeout(function() {
  iniciarTemporizador();
}, 5000);



