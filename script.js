// Récupérer les éléments de la page
const bubble = document.querySelector('.bubble');
const instruction = document.querySelector('.instruction');
const tempoButtons = document.querySelectorAll('.bubble-button');
let tempo = 4; // Tempo par défaut

// Fonction pour changer le tempo
function changeTempo(newTempo) {
    tempo = newTempo;
    // Mettre à jour la classe active du bouton
    tempoButtons.forEach(button => {
        button.classList.remove('active');
        if (parseInt(button.getAttribute('data-tempo')) === newTempo) {
            button.classList.add('active');
        }
    });
    // Mettre à jour l'animation de la bulle
    bubble.style.animationDuration = `${newTempo}s`;
}

// Gérer les clics sur les boutons de tempo
tempoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const newTempo = parseInt(button.getAttribute('data-tempo'));
        changeTempo(newTempo);
    });
});

// Fonction pour changer l'instruction
function updateInstruction(isInhaling) {
    if (isInhaling) {
        instruction.textContent = 'Inspirez...';
    } else {
        instruction.textContent = 'Expirez...';
    }
}

// Animation de la bulle avec changement d'état
let isInhaling = true;
setInterval(() => {
    updateInstruction(isInhaling);
    isInhaling = !isInhaling;
}, tempo * 1000); // Change l'instruction au rythme du tempo

// Initialiser l'animation avec le tempo par défaut
changeTempo(4);
