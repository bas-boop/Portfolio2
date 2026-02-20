// Use existing constants if available, otherwise define them
if (typeof languageTags === 'undefined') {
    window.languageTags = ["csharp", "cpp", "gdscript", "htmlcssjs", "blueprints"];
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
        "unreal": "Unreal",
        "3d": "3D",
        "25d": "2.5D",
        "2d": "2D",
        "csharp": "C#",
        "cpp": "C++",
        "blueprints": "Blueprints",
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
        title: "Gyro Camera Controls",
        description: "Third-person gyro camera controls for mobile. Made a prototype to test the controls and get a feel for how they work. Main mechanic of the game. The half-physical part of the game.",
        descriptionShort: "Third-person gyro camera controls for mobile. Main mechanic of the game.",
        image: "Projects/ShuttleFrogMedia/GyroInGame.gif",
        link: "Projects/ShuttleFrog#Gyro-Controls",
        showOnIndex: true,
        external: false,
        tags: ["unity6", "csharp", "Mobile"]
    },
    {
        title: "Photobook QoL Tool",
        description: "This is my first QoL tool, designed to simplify the process of creating new photobook pages. It provides an intuitive interface for developers, making the process faster and more efficient.",
        descriptionShort: "This is my first QoL tool, designed to simplify the process of creating new photobook pages.",
        image: "/Projects/CapturegraafsmeerMedia/PhotobookWindow.png",
        link: "Projects/CaptureGraafsmeer#Photobook-QoL-Tool",
        showOnIndex: true,
        external: false,
        tags: ["unity", "csharp", "Tooling", "Editor"]
    },
    {
        title: "Performance",
        description: "Optimized the maze generation process by utilizing advanced data types available in C#. These improvements significantly boost performance, making the system more efficient, responsive, and larger.",
        descriptionShort: "Optimized the maze generation process with advanced C# data types, making the system faster and larger.",
        image: "/Projects/MazeGenMedia/Profiler.png",
        link: "/Projects/MazeGenerator#Performace",
        showOnIndex: true,
        external: false,
        tags: ["unity", "csharp", "Algorithm"]
    },
    {
        title: "Chomper",
        description: "A melee enemy from Sparkleblast. It drives around and bites the player when they are close. This enemy was designed to provide a close-range threat to the player, adding variety and challenge to the gameplay. It uses simple AI to navigate the environment and engage the player effectively.",
        descriptionShort: "A melee enemy from Sparkleblast. It drives around and bites the player when they are close.",
        image: "/Projects/SparkleblastMedia/Chomper.png",
        link: "Projects/Sparkleblast#Chomper-(Melee-Enemy)",
        showOnIndex: true,
        external: false,
        tags: ["unreal", "blueprints", "AI"]
    },
    {
        title: "SpiderShooter",
        description: "A ranged enemy from Sparkleblast. It shoots projectiles at the player from a distance, with burst shots. This enemy was designed to provide a distant threat to the player, adding variety and challenge to the gameplay.",
        descriptionShort: "A ranged enemy from Sparkleblast. It shoots projectiles at the player from a distance.",
        image: "/Projects/SparkleblastMedia/SpiderShooter.png",
        link: "Projects/Sparkleblast#SpiderShooter-(Ranged-Enemy)",
        showOnIndex: false,
        external: false,
        tags: ["unreal", "blueprints", "AI"]
    },
    {
        title: "Force System",
        description: "A custom collision detection system, which also could place gameobjects to a pervert direction. This system enhances the existing force framework within the project, improving the handling of object interactions and physical responses.",
        descriptionShort: "A custom collision detection system, enhancing object interactions and physical responses.",
        image: "/Projects/OperationStarfallMedia/VisualSheet-Forcesystem-Postion-small.png",
        link: "/Projects/OperationStarfall#Force-System",
        showOnIndex: false,
        external: false,
        tags: ["unity", "csharp", "Physics"]
    },
    {
        title: "Volumetric Lighting",
        description: "A simple volumetric lighting that could be supported in VR. Made with models and decals.",
        descriptionShort: "A simple volumetric lighting that could be supported in VR. Made with models and decals.",
        image: "/Projects/Kara-okéMedia/Lamps.png",
        link: "/Projects/Kara-oke#Volumetric-Lighting",
        showOnIndex: false,
        external: false,
        tags: ["unity", "XR"]
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
];

function generateFeatureList() {
    const featureListContainer = document.getElementById('feature-list');
    if (!featureListContainer) {
        console.error('Could not find feature-list element');
        return;
    }
    
    const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

    // Filter features based on showOnIndex property when on index page
    const featuresToShow = isIndexPage ? features.filter(feature => feature.showOnIndex) : features;
    
    featuresToShow.forEach(feature => {
        const featureItem = document.createElement('li');
        const targetAttribute = feature.external ? 'target="_blank"' : '';
        const descriptionToUse = isIndexPage ? feature.descriptionShort : feature.description;

        if (isIndexPage) {
            featureItem.innerHTML = `
                <a href="${feature.link}" ${targetAttribute}>
                    <img src="${feature.image}" alt="${feature.title}">
                    <div>
                        <h3>${feature.title}</h3>
                        <p>${descriptionToUse}</p>
                    </div>
                </a>
            `;
        } else {
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
        }

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
    generateFeatureList();
});
