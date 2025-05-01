const now = new Date();
const hours = now.getHours();
const greeting = document.querySelector('header h1');

if (hours < 6) {
    greeting.textContent = 'Good Night! You should probably be sleeping... welcome to the portfolio of Bas de Reus.';
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

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('.highlight-slides');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let slideContainers = document.querySelectorAll('.highlight-container'); // Select containers dynamically
    let currentSlide = 0;
    let autoCycle;

    const updateSlideContainers = () => {
        slideContainers = document.querySelectorAll('.highlight-container'); // Refresh the list dynamically
    };

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    const nextSlide = () => {
        if (slideContainers.length > 0) {
            currentSlide = (currentSlide + 1) % slideContainers.length;
            updateSlidePosition();
        }
    };

    const prevSlide = () => {
        if (slideContainers.length > 0) {
            currentSlide = (currentSlide - 1 + slideContainers.length) % slideContainers.length;
            updateSlidePosition();
        }
    };

    const startAutoCycle = () => {
        stopAutoCycle(); // Prevent multiple intervals
        autoCycle = setInterval(nextSlide, 3500); // Change every 3.5 seconds
    };

    const stopAutoCycle = () => {
        clearInterval(autoCycle);
    };

    // Arrow button event listeners
    rightArrow.addEventListener('click', () => {
        stopAutoCycle();
        updateSlideContainers(); // Refresh slideContainers in case of dynamic changes
        nextSlide();
        startAutoCycle();
    });

    leftArrow.addEventListener('click', () => {
        stopAutoCycle();
        updateSlideContainers(); // Refresh slideContainers in case of dynamic changes
        prevSlide();
        startAutoCycle();
    });

    // Pause cycling on hover
    slides.addEventListener('mouseenter', stopAutoCycle);
    slides.addEventListener('mouseleave', startAutoCycle);

    // Start the automatic cycling
    updateSlideContainers(); // Initialize the slideContainers properly
    startAutoCycle();
});

const tools = [
    { name: "Unity", icon: "unity", experience: "5+ years", useGh: true },
    { name: "C#", icon: "csharp", experience: "5+ years", useGh: false },
    // { name: "Unreal", icon: "unrealengine", experience: "0.5 years", useGh: true },
    { name: "C++", icon: "cplusplus", experience: "2+ years", useGh: true },
    // { name: "Godot", icon: "godotengine", experience: "0.5 years", useGh: true },
    { name: "Git", icon: "git", experience: "5+ years", useGh: true },
    { name: "VS Code", icon: "visualstudiocode", experience: "3+ years", useGh: false },
    { name: "Visual Studio", icon: "visualstudio", experience: "4 years", useGh: false },
    { name: "Rider", icon: "rider", experience: "4+ years", useGh: true },
    { name: "Trello", icon: "trello", experience: "5+ years", useGh: true },
    { name: "Miro", icon: "miro", experience: "2 years", useGh: true },
    { name: "Notion", icon: "notion", experience: "1+ year", useGh: true },
    { name: "Blender", icon: "blender", experience: "0.5 years", useGh: true },
    { name: "Krita", icon: "krita", experience: "0.5 years", useGh: true },
  ];
  
  const container = document.getElementById("toolList");
  
  tools.forEach(tool => {
    const div = document.createElement("div");
    div.className = "tool";
  
    const iconURL = tool.useGh
      ? `https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${tool.icon}.svg`
      : `https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${tool.icon}.svg`;
  
    div.innerHTML = `
      <img src="${iconURL}" alt="${tool.name}" />
      <h2>${tool.name}</h2>
      <p>${tool.experience}</p>
    `;
  
    container.appendChild(div);
  });
  
  