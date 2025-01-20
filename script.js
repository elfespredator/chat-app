document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.querySelector('.bubble');
    const instruction = document.querySelector('.instruction');
    const buttons = document.querySelectorAll('.bubble-button');

    let tempo = 4; // Default tempo (in seconds)

    // Update bubble animation and instruction text
    function updateAnimation() {
        const breathingKeyframes = `
            @keyframes breathing {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(2);
                }
            }
        `;
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(breathingKeyframes, styleSheet.cssRules.length);

        bubble.style.animation = `breathing ${tempo}s infinite ease-in-out`;
    }

    // Update instruction based on animation state
    bubble.addEventListener('animationiteration', () => {
        instruction.textContent = 'Inspirez...';
    });

    bubble.addEventListener('animationstart', () => {
        instruction.textContent = 'Inspirez...';
    });

    bubble.addEventListener('animationend', () => {
        instruction.textContent = 'Expirez...';
    });

    // Handle tempo button clicks
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tempo = button.dataset.tempo;
            updateAnimation();
        });
    });

    // Initial animation update
    updateAnimation();
});
