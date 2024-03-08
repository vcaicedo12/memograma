document.getElementById('audioControl').addEventListener('click', function () {
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById('audioIcon').src = '/static/img/iconos/bocina.png'; // Icono de bocina encendida
    } else {
        audioPlayer.pause();
        document.getElementById('audioIcon').src = '/static/img/iconos/bocina_apagada.png'; // Icono de bocina apagada
    }
});
