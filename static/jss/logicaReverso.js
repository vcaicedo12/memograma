document.querySelectorAll('.carta').forEach(carta => {
    carta.addEventListener('click', () => {
        carta.classList.remove('reverso');
    });
});
