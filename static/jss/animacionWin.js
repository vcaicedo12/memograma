const confetiContainer = document.querySelector('.confeti-container');

function createConfeti() {
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');
    confeti.style.left = `${Math.random() * window.innerWidth}px`;
    confetiContainer.appendChild(confeti);
}

setInterval(createConfeti, 500); // Crea un nuevo confeti cada 500 milisegundos
