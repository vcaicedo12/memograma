document.getElementById('boton-jugar').addEventListener('click', function() {
    // Obtiene el valor del Nickname
    var nickname = document.getElementById('nickname').value;
    var errorMessage = document.getElementById('error-message');

    // Verifica si el nickname está vacío
    if (nickname === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, ingresa tu nickname antes de jugar.';
    } else {
        // Almacena el Nickname en localStorage
        localStorage.setItem('nickname', nickname);

        // Obtiene la temática seleccionada
        var tematica = document.querySelector('input[name="tematica"]:checked').value;

        // Redirige al usuario a la ruta basada en la temática seleccionada
        if (tematica === 'stranger-things') {
            window.location.href = '/juego/st'; 
        } else if (tematica === 'dragon-ball') {
            window.location.href = '/juego/dbz'; 
        }
    }
});


