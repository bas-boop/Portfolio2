// Use existing constants if available, otherwise define them
if (typeof languageTags === 'undefined') {
    window.languageTags = ["csharp", "cpp", "gdscript", "htmlcssjs"];
}
if (typeof engineTags === 'undefined') {
    window.engineTags = ["unity", "unity6", "unreal", "godot"];
}
if (typeof hiddenTags === 'undefined') {
    window.hiddenTags = ["engine", "lang", "nah"];
}
if (typeof tagDisplayNames === 'undefined') {
    window.tagDisplayNames = {
        "play": "Play now",
        "unity6": "Unity 6",
        "unity": "Unity",
        "3d": "3D",
        "25d": "2.5D",
        "2d": "2D",
        "csharp": "C#",
        "cpp": "C++",
        "htmlcssjs": "HTML/CSS/JS",
        "gdscript": "GDScript"
    };
}

const features = [
    // {
    //     title: "",
    //     description: "",
    //     descriptionShort: "",
    //     image: "",
    //     link: "",
    //     showOnIndex: false,
    //     external: false,
    //     tags: []
    // },
    {
        title: "Photobook Custom Window",
        description: "This is my first custom Unity window, designed to simplify the process of creating new photobook pages. It provides an intuitive interface for developers, making the process faster and more efficient.",
        descriptionShort: "This is my first custom Unity window, designed to simplify the process of creating new photobook pages.",
        image: "/Projects/CapturegraafsmeerMedia/PhotobookWindow.png",
        link: "Projects/CaptureGraafsmeer#Photobook-Custom-Window",
        showOnIndex: true,
        external: false,
        tags: ["unity", "csharp", "Tooling", "Editor"]
    },
    {
        title: "Unity as a framework",
        description: "Using Unity as a framework, only for grahphics & physics. I explored how to make my own game systems, without relying on Unity's built-in game architecture, a pure code approach.",
        descriptionShort: "Using Unity as a framework, only for grahphics & physics.",
        image: "/Covers/UnityAsFramework.png",
        link: "https://github.com/bas-boop/IntegratedGameplaySystem/tree/main/Assets/Scripts/GameSystem",
        showOnIndex: true,
        external: false,
        tags: ["unity", "csharp", "Design patterns"]
    },
    {
        title: "Performance",
        description: "Optimized the maze generation process by utilizing advanced data types available in C#. These improvements significantly boost performance, making the system more efficient, responsive, and larger.",
        descriptionShort: "Optimized the maze generation process with advanced C# data types, making the system faster and larger.",
        image: "/Projects/MazeGenMedia/StackOverflow.png",
        link: "/Projects/MazeGenerator#Performance",
        showOnIndex: true,
        external: false,
        tags: ["unity", "csharp", "Algorithm"]
    },
    {
        title: "Force System",
        description: "A custom collision detection system, which also could place gameobjects to a pervert direction. This system enhances the existing force framework within the project, improving the handling of object interactions and physical responses.",
        descriptionShort: "A custom collision detection system, enhancing object interactions and physical responses.",
        image: "/Projects/OperationStarfallMedia/VisualSheet-Forcesystem-Postion-small.png",
        link: "/Projects/OperationStarfall#Force-System",
        showOnIndex: true,
        external: false,
        tags: ["unity", "csharp", "Physics"]
    },
    {
        title: "AR Shader",
        description: "A custom shader created for augmented reality applications. It ensures that any black pixels in the engine are rendered as transparent on the AR device, improving the visual experience.",
        descriptionShort: "A custom shader that renders black pixels as transparent in AR, improving visuals.",
        image: "/Projects/GPalMedia/ShaderGraph.jpg",
        link: "/Projects/AR-Gpal#AR-Shader",
        showOnIndex: false,
        external: false,
        tags: ["unity", "Shader", "XR"]
    },
    {
        title: "Screen HZ Adjustment",
        description: "A method for adjusting the refresh rate of screens, which enhances power efficiency when using multiple displays. This solution helps reduce energy consumption without compromising performance.",
        descriptionShort: "Adjusting refresh rates across multiple displays for better energy efficiency.",
        image: "/Covers/FPS.png",
        link: "https://github.com/bas-boop/FpsManager/blob/main/FpsManager/Screen.cs",
        showOnIndex: false,
        external: true,
        tags: ["csharp", "Hardware"]
    },
    {
        title: "Abstract Statemachine",
        description: "To provide precise control and depth for both the player and enemies, I developed a state machine. By making it abstract, I ensured the base state machine and core state logic could be reused across multiple entities.",
        descriptionShort: "A reusable state machine architecture for player and enemy AI.",
        image: "/Projects/PlatypusMedia/Platypus_Player_Concept.png",
        link: "/Projects/Platypus#Abstract-StateMachine",
        showOnIndex: false,
        external: false,
        tags: ["unity", "csharp", "Design patterns"]
    },
    {
        title: "Monster States",
        description: "A complex state machine for a horror game monster, which can be in one of five states: idle, wandering, detecting, chasing, or killing the player. This system provides dynamic behavior, enhancing gameplay and immersion.",
        descriptionShort: "A dynamic 5-state monster AI system for immersive gameplay.",
        image: "https://img.itch.zone/aW1hZ2UvMjIxNTg3Mi8xMzE1MjYwMy5qcGc=/original/TvJcmp.jpg",
        link: "https://github.com/Team-Swamp/The-Lost-Reel/tree/Develop/Assets/Scripts/NPC/MonsterStates",
        showOnIndex: false,
        external: true,
        tags: ["unity", "csharp", "Design patterns"]
    },
    {
        title: "Quick Time Events",
        description: "A straightforward system for detecting specific key presses during gameplay. It uses custom enum extensions to improve flexibility and streamline the event detection process.",
        descriptionShort: "A flexible input detection system using custom enum extensions.",
        image: "/Covers/SKPH.jpg",
        link: "https://github.com/bas-boop/Smoll_Knight_plus_Horse/tree/Develop/Assets/Scripts/Framework/QuickTimeEvents",
        showOnIndex: false,
        external: true,
        tags: ["unity", "csharp", "Input"]
    },
];

function generateFeatureList() {
    const featureListContainer = document.getElementById('feature-list');
    if (!featureListContainer) {
        console.error('Could not find feature-list element');
        return;
    }
    console.log('Found feature list container:', featureListContainer);
    
    const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    console.log('Features array:', features);

    // Filter features based on showOnIndex property when on index page
    const featuresToShow = isIndexPage ? features.filter(feature => feature.showOnIndex) : features;
    
    featuresToShow.forEach(feature => {
        const featureItem = document.createElement('li');
        const targetAttribute = feature.external ? 'target="_blank"' : '';
        const descriptionToUse = isIndexPage ? feature.descriptionShort : feature.description;

        console.log('Creating feature:', feature.title);
        featureItem.innerHTML = `
            <img src="${feature.image}" alt="${feature.title}">
            <div>
                <h3>${feature.title}</h3>
                <p>${descriptionToUse}</p>
                <a href="${feature.link}" ${targetAttribute} class="feature-btn">View Feature
                    <span class="copy-icon" title="Copy link to this section">
                        <i class="fas fa-link"></i>
                    </span>
                </a>
            </div>
        `;
        console.log('Created feature element:', featureItem);

        // Append feature tags using project-style function
        const featureDiv = featureItem.querySelector("div");
        if (feature.tags && feature.tags.length > 0) {
            const tagsDiv = renderFeatureTags(feature.tags);
            featureDiv.insertBefore(tagsDiv, featureDiv.querySelector(".feature-btn"));
        }

        featureListContainer.appendChild(featureItem);
    });
}

function getTagClass(tag) {
    if (languageTags.includes(tag)) return "tag-lang";
    if (engineTags.includes(tag)) return "tag-engine";
    return "";
}

function getTagDisplayName(tag) {
    return tagDisplayNames[tag] || tag;
}

function renderFeatureTags(tags) {
    const tagsDiv = document.createElement("div");
    tagsDiv.classList.add("tags"); // ensures CSS styling

    tags
        .filter(tag => !hiddenTags.includes(tag))
        .forEach(tag => {
            const span = document.createElement("span");
            span.classList.add("tag");
            const tagClass = getTagClass(tag);
            if(tagClass) span.classList.add(tagClass);
            span.textContent = getTagDisplayName(tag);
            tagsDiv.appendChild(span);
        });

    return tagsDiv;
}



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, generating feature list');
    generateFeatureList();
});
