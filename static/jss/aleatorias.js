window.onload = function() {
    var tablero = document.getElementById('tablero');
    var cartas = Array.from(tablero.children);
    var cartasMezcladas = cartas.sort(function() {
        return 0.5 - Math.random();
    });
    cartasMezcladas.forEach(function(carta) {
        tablero.appendChild(carta);
    });
};
