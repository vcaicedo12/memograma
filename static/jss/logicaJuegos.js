var cartas = Array.from(document.querySelectorAll('.carta'));
var cartaAbierta = null;
var paresEncontrados = 0;
var intentos = 0; // Añade una variable para los intentos
var intervalo = null; // Inicializa la variable intervalo

// Obtiene los intentos almacenados en el localStorage (si existen)
var intentosGuardados = localStorage.getItem('intentos');

// Obtiene el tiempo almacenado en el localStorage (si existe)
var tiempoGuardado = localStorage.getItem('tiempo');

// Si hay valores guardados, los inicializa; de lo contrario, utiliza los valores predeterminados
intentos = intentosGuardados ? parseInt(intentosGuardados) : 0;
var tiempoRestante = tiempoGuardado ? parseInt(tiempoGuardado) : 60;

// Añade un elemento para mostrar los intentos
var intentosElement = document.getElementById('intentos');
intentosElement.textContent = 'Intentos: ' + intentos;

cartas.forEach(function(carta) {
    carta.addEventListener('click', function() {
        if (cartaAbierta) {
            carta.classList.remove('reverso');
            if (cartaAbierta.className === carta.className) {
                // Las cartas coinciden, así que las dejamos boca arriba.
                cartaAbierta = null;
                paresEncontrados++;

                // Verificar si se han encontrado todos los pares
                if (paresEncontrados === cartas.length / 2) {
                    // Almacena los intentos y el tiempo en el localStorage
                    localStorage.setItem('intentos', intentos);
                    localStorage.setItem('tiempo', tiempoRestante);

                    // Redirige al usuario a la ruta '/win'
                    window.location.href = '/win';
                }
            } else {
                // Las cartas no coinciden, así que las volvemos a poner boca abajo después de un segundo.
                setTimeout(function() {
                    carta.classList.add('reverso');
                    cartaAbierta.classList.add('reverso');
                    cartaAbierta = null;
                }, 1000);
            }
            intentos++; // Incrementa los intentos cada vez que el usuario selecciona dos cartas
            // Actualiza visualmente el número de intentos
            intentosElement.textContent = 'Intentos: ' + intentos;
        } else {
            // Esta es la primera carta que el jugador ha abierto.
            carta.classList.remove('reverso');
            cartaAbierta = carta;
        }
    });
});