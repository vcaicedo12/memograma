var tiempoRestante = 60;
var elementoTemporizador = document.getElementById('temporizador');

function actualizarTemporizador() {
    tiempoRestante--;
    elementoTemporizador.textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        // Recarga la página cuando el tiempo se haya agotado
        location.reload();
    }
}

var intervalo = setInterval(actualizarTemporizador, 1000);


