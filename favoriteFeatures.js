const features = [
    {
        title: "Photobook Custom Window",
        description: "This is my first custom Unity window, designed to simplify the process of creating new photobook pages. It provides an intuitive interface for developers, making the process faster and more efficient.",
        image: "/Projects/CapturegraafsmeerMedia/PhotobookWindow.png",
        link: "Projects/CaptureGraafsmeer#Photobook-Custom-Window",
        external: false
    },
    {
        title: "Force System",
        description: "A custom collision detection system, which also could place gameobjects to a pervert direction. This system enhances the existing force framework within the project, improving the handling of object interactions and physical responses.",
        image: "/Projects/OperationStarfallMedia/VisualSheet-Forcesystem-Postion-small.png",
        link: "/Projects/OperationStarfall#Force-System",
        external: false
    },
    {
        title: "Performance",
        description: "Optimized the maze generation process by utilizing advanced data types available in C#. These improvements significantly boost performance, making the system more efficient, responsive, and larger.",
        image: "/Projects/MazeGenMedia/StackOverflow.png",
        link: "/Projects/MazeGenerator#Performance",
        external: false
    },
    {
        title: "AR Shader",
        description: "A custom shader created for augmented reality applications. It ensures that any black pixels in the engine are rendered as transparent on the AR device, improving the visual experience.",
        image: "/Projects/GPalMedia/ShaderGraph.jpg",
        link: "/Projects/AR-Gpal#AR-Shader",
        external: false
    },
    {
        title: "Screen HZ Adjustment",
        description: "A method for adjusting the refresh rate of screens, which enhances power efficiency when using multiple displays. This solution helps reduce energy consumption without compromising performance.",
        image: "/Covers/FPS.png",
        link: "https://github.com/bas-boop/FpsManager/blob/main/FpsManager/Screen.cs",
        external: true
    },
    {
        title: "Monster States",
        description: "A complex state machine for a horror game monster, which can be in one of five states: idle, wandering, detecting, chasing, or killing the player. This system provides dynamic behavior, enhancing gameplay and immersion.",
        image: "https://img.itch.zone/aW1hZ2UvMjIxNTg3Mi8xMzE1MjYwMy5qcGc=/original/TvJcmp.jpg",
        link: "https://github.com/Team-Swamp/The-Lost-Reel/tree/Develop/Assets/Scripts/NPC/MonsterStates",
        external: true
    },
    {
        title: "Quick Time Events",
        description: "A straightforward system for detecting specific key presses during gameplay. It uses custom enum extensions to improve flexibility and streamline the event detection process.",
        image: "/Covers/SKPH.jpg",
        link: "https://github.com/bas-boop/Smoll_Knight_plus_Horse/tree/Develop/Assets/Scripts/Framework/QuickTimeEvents",
        external: true
    },
];

function generateFeatureList() {
    const featureListContainer = document.getElementById('feature-list');
    features.forEach(feature => {
        const featureItem = document.createElement('li');
        const targetAttribute = feature.external ? 'target="_blank"' : '';

        featureItem.innerHTML = `
            <img src="${feature.image}" alt="${feature.title}">
            <div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
                <a href="${feature.link}" ${targetAttribute} class="feature-btn">View Feature
                    <span class="copy-icon" title="Copy link to this section">
                        <i class="fas fa-link"></i>
                    </span>
                </a>
            </div>
        `;
        featureListContainer.appendChild(featureItem);
    });
}

generateFeatureList();