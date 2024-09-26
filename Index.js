const now = new Date();
const hours = now.getHours();
const greeting = document.querySelector('header h1');

if (hours < 6) {
    greeting.textContent = 'Good Night! You should probably be sleeping... welcom to the portfolio of Bas de Reus.';
} else if (hours < 12) {
    greeting.textContent = 'Good Morning! Welcome to the portfolio of Bas de Reus.';
} else if (hours < 18) {
    greeting.textContent = 'Good Afternoon! Explore Bas de Reus\' projects.';
} else {
    greeting.textContent = 'Good Evening! Discover some amazing work by Bas de Reus.';
}

// Simple Konami Code implementation for fun hidden effect
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
let konamiIndex = 0;
document.addEventListener('keydown', function(event) {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert('Achievement True Gamer Unlocked!');
            konamiIndex = 0;

            // would be fun
            // document.body.classList.toggle('retro-theme');
        }
    } else {
        konamiIndex = 0;
    }
});