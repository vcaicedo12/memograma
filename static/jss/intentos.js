// Supongamos que tienes una variable 'intentos' que lleva la cuenta de los intentos
var intentos = 0;

// Cada vez que el usuario hace un intento, incrementa la variable 'intentos' y actualiza el elemento 'intentos' en tu HTML
function hacerIntento() {
    intentos++;
    document.getElementById('intentos').textContent = 'Intentos: ' + intentos;
}
