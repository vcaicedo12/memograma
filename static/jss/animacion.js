// Supongamos que tienes una función para insertar cartas en el tablero
function insertarCartasEnTablero() {
    // Lógica para insertar las cartas en el tablero

    // Agrega la clase shuffle para activar el efecto de barajado
    document.getElementById('tablero').classList.add('shuffle');

    // Después de un breve momento, quita la clase shuffle para detener el efecto de barajado
    setTimeout(function() {
        document.getElementById('tablero').classList.remove('shuffle');
    }, 500); // Ajusta el tiempo según la duración de la transición en tu CSS
}

// Llama a la función cuando quieras insertar las cartas en el tablero
insertarCartasEnTablero();
