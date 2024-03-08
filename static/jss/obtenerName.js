// Obtiene el Nickname almacenado en localStorage
var nickname = localStorage.getItem('nickname');

// Muestra el Nickname en el elemento con id 'nickname-display'
document.getElementById('nickname-display').textContent = 'Nickname: ' + nickname;

// Obtiene los intentos y el tiempo del localStorage
var intentos = localStorage.getItem('intentos');
var tiempo = localStorage.getItem('tiempo');

// Muestra los intentos y el tiempo en la página
document.getElementById('intentos-display').textContent = intentos;
document.getElementById('tiempo-display').textContent = tiempo;
