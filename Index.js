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
            konamiIndex = 0;
            
            alert('Achievement True Gamer Unlocked!');
            return;

            alert('Look out for your eyes!');
            document.body.classList.toggle('retro-theme');
        }
    } else {
        konamiIndex = 0;
    }
});

const slides = document.querySelector('.highlight-slides');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slideContainers = document.querySelectorAll('.highlight-container');
let currentSlide = 0;
let autoCycle;

const updateSlidePosition = () => {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slideContainers.length;
    updateSlidePosition();
};

const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slideContainers.length) % slideContainers.length;
    updateSlidePosition();
};

const startAutoCycle = () => {
    autoCycle = setInterval(nextSlide, 3500); // Change every 3.5 seconds
};

const stopAutoCycle = () => {
    clearInterval(autoCycle);
};

// Arrow button event listeners
rightArrow.addEventListener('click', () => {
    stopAutoCycle();
    nextSlide();
    startAutoCycle();
});

leftArrow.addEventListener('click', () => {
    stopAutoCycle();
    prevSlide();
    startAutoCycle();
});

// Pause cycling on hover
slides.addEventListener('mouseenter', stopAutoCycle);
slides.addEventListener('mouseleave', startAutoCycle);

// Start the automatic cycling
startAutoCycle();
