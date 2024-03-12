function insertarCartasEnTablero() {
  // Get all card elements
  const cartas = document.querySelectorAll('.carta');

  // Initially reveal all card faces
  cartas.forEach(carta => {
    carta.classList.remove('reverso'); // Remove the class that hides the card face
  });

  // Flip cards back after 5 seconds
  setTimeout(() => {
    cartas.forEach(carta => {
      carta.classList.add('reverso'); // Re-apply the class to hide card faces
    });

    // Start card shuffling animation
    cartas.forEach((carta, index) => {
      carta.style.animation = 'cascada 0.5s ease-in-out forwards';
      carta.style.animationDelay = `${index * 0.1}s`; // Stagger animation for shuffling effect
    });

    // Optional: remove shuffle class after animation
    setTimeout(() => {
      document.getElementById('tablero').classList.remove('shuffle');
    }, 550); // Adjusted for animation duration
  }, 5000); // Delay for card reveal increased to 5 seconds
}

// Call the function to start the process
insertarCartasEnTablero();

  