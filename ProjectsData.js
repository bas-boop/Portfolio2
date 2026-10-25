const filterOptions = [
    { value: "new", label: "New" },
    { value: "play", label: "Play now" },
    { value: "3d", label: "3D" },
    { value: "25d", label: "2.5D" },
    { value: "2d", label: "2D" },
    // { value: "lang", label: "Pure code (with framework)" },
    { value: "unity", label: "Unity" },
    { value: "unreal", label: "Unreal" },
    // { value: "godot", label: "Godot" },
    { value: "csharp", label: "C#" },
    { value: "hlsl", label: "HLSL" },
    { value: "cpp", label: "C++" },
    { value: "blueprint", label: "Blueprint" },
    { value: "gdscript", label: "GDscript" },
    // { value: "htmlcssjs", label: "HTML/CSS/JS" }
];

const highlightIndices = [1, 0, 2];
// make sure they are: CaptureGraafsmeer, Codename-C & Kara-oké
// const highlightIndices = [2, 0, 5];

const projects = [
    // project template
    // {
    //     title: "Project",
    //     image: "Covers/Ximage.png",
    //     description: "Game",
    //     tags: ["unity6", "nah"],
    //     blankTarget: false,
    //     href: "underconstruction"
    // },

    {
        title: "Mars Rover Opportunity:<br>The Arcade Game",
        image: "Covers/Rover.png",
        description: "A fast-paced arcade style game about the Mars Rover Opportunity.",
        tags: ["new", "play", "2d", "engine", "unity6", "csharp", "hlsl"],
        blankTarget: false,
        href: "/Projects/Rover"
    },
    {
        title: "ShuttleFrog",
        image: "Covers/ShuttleFrog.png",
        description: "A chaotic fun arcade style game. Co-op gyro mobile arcade stick item delivery game.",
        tags: ["play", "3d", "engine", "unity6", "csharp", "mobile"],
        blankTarget: false,
        highlight: false,
        href: "/Projects/ShuttleFrog"
    },
    {
        title: "Capture Graafsmaar",
        image: "Covers/CaptureGraafsmeer.png",
        description: "Unity GPS mobile game made during MBO exam. Made for the City of Amsterdam, explore the city with a photobook.",
        tags: ["play", "3d", "engine", "unity", "csharp", "tooling", "mobile"],
        blankTarget: false,
        href: "/Projects/CaptureGraafsmeer"
    },
    {
        title: "Unity as a framework",
        image: "Covers/UnityAsFramework.png",
        description: "I explored how to make my own game systems, without relying on Unity's built-in game architecture.",
        tags: ["play", "2d", "engine", "csharp", "desgin patterns"],
        blankTarget: false,
        href: "/Projects/UnityAsFramework",
    },
    {
        title: "SparkleBlast",
        image: "Covers/Sparkeblast.png",
        description: "A 3D magical girl boomer shooter made game in<br>Unreal Engine 5.",
        tags: ["new", "3d", "engine", "unreal", "cpp", "blueprints", "nah"],
        blankTarget: false,
        href: "/Projects/Sparkleblast",
    },
    {
        title: "Codename-C",
        image: "Covers/Codename-C.png",
        description: "A released narritive OS & platformer game about overthrowing a corrupt regime.",
        tags: ["play", "2d", "engine", "unity6", "csharp"],
        blankTarget: false,
        href: "/Projects/Codename-C"
    },
    {
        title: "Kara-oké",
        image: "Covers/Kara-oke.png",
        description: "A VR karaoke game commissioned for AVROTROS, this was made during my internship at XR-Lab!",
        tags: ["3d", "engine", "unity", "csharp", "xr", "internship"],
        blankTarget: false,
        href: "/Projects/Kara-oke"
    },
    {
        title: "Maze Generator",
        image: "Covers/MazeGen.png",
        description: "Unity project perfect maze generator with customizable algorithms.",
        tags: ["play", "2d", "engine", "unity", "csharp", "algorithm"],
        blankTarget: false,
        href: "/Projects/MazeGenerator"
    },
    {
        title: "Platypus",
        image: "Covers/Platypus.png",
        description: "This is a passion project of mine. A platformer with interesting movement options.",
        tags: ["2d", "engine", "unity", "csharp", "desgin patterns"],
        blankTarget: false,
        href: "/Projects/Platypus"
    },
    {
        title: "Operation Starfall",
        image: "Covers/Starfall.jpg",
        description: "2.5D Metroidvania Couch Co-op based on the cartoons of 80's Sci-Fi.",
        tags: ["25d", "engine", "unity", "csharp", "desgin patterns"],
        blankTarget: false,
        href: "/Projects/OperationStarfall"
    },
    {
        title: "AR Gpal",
        image: "Covers/Gpal.png",
        description: "We were commissioned to translate GPal's existing app/webapp into an AR environment.",
        tags: ["3d", "engine", "unity", "csharp", "xr", "internship"],
        blankTarget: false,
        href: "/Projects/AR-Gpal"
    },
    {
        title: "InControl",
        image: "Covers/InControl.png",
        description: "InControl is a simulation company that makes and provide simulation in logistics and pedstrain.",
        tags: ["25d", "lang", "cpp", "internship"],
        blankTarget: false,
        href: "/Projects/InControl"
    },
];

