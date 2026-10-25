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
    // Game Engines
    { name: "Unity", icon: "unity", category: "Engine", experience: "6 years", useGh: true },
    { name: "Unreal", icon: "unrealengine", category: "Engine", experience: "0.5 year", useGh: false },
    //{ name: "Godot", icon: "godotengine", category: "Engine", experience: "0.5 year", useGh: true },
    
    // Programming Languages
    { name: "C#", icon: "csharp", category: "Language", experience: "6 years", useGh: false },
    { name: "C++", icon: "cplusplus", category: "Language", experience: "2 years", useGh: true },
    { name: "JavaScript", icon: "javascript", category: "Language", experience: "2 years", useGh: false },
    
    // Development Tools
    { name: "Git", icon: "git", category: "Tools", experience: "6 years", useGh: true },
    { name: "VS Code", icon: "visualstudiocode", category: "Tools", experience: "3 years", useGh: false },
    { name: "Visual Studio", icon: "visualstudio", category: "Tools", experience: "4 years", useGh: false },
    { name: "Rider", icon: "rider", category: "Tools", experience: "5 years", useGh: true },
    
    // Productivity & Collaboration
    { name: "Trello", icon: "trello", category: "Productivity", experience: "5 years", useGh: true },
    { name: "Notion", icon: "notion", category: "Productivity", experience: "2 years", useGh: true },
    { name: "Miro", icon: "miro", category: "Productivity", experience: "2 years", useGh: true },
    
    // Creative Tools
    { name: "Blender", icon: "blender", category: "Creative", experience: "0.5 year", useGh: true },
    { name: "Krita", icon: "krita", category: "Creative", experience: "0.5 year", useGh: true },
  ];
  
  const container = document.getElementById("toolList");
  
  // Group tools by category
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {});
  
  // Define category order
  const categoryOrder = ["Engine", "Language", "Tools", "Productivity", "Creative"];
  
  // Render tools grouped by category
  categoryOrder.forEach(category => {
    if (toolsByCategory[category]) {
      // Create category header
      const categorySection = document.createElement("div");
      categorySection.className = "tool-category";
      
      const categoryHeader = document.createElement("h3");
      categoryHeader.className = "tool-category-header";
      categoryHeader.textContent = category;
      categorySection.appendChild(categoryHeader);
      
      // Create category tools container
      const categoryToolsContainer = document.createElement("div");
      categoryToolsContainer.className = "tool-category-container";
      
      // Add tools to category
      toolsByCategory[category].forEach(tool => {
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
        
        categoryToolsContainer.appendChild(div);
      });
      
      categorySection.appendChild(categoryToolsContainer);
      container.appendChild(categorySection);
    }
  });
  
  