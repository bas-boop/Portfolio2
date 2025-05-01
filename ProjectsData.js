const filterOptions = [
    { value: "new", label: "New" },
    { value: "play", label: "Play now" },
    { value: "3d", label: "3D" },
    { value: "2d", label: "2D" },
    // { value: "lang", label: "Pure code (with framework)" },
    // { value: "unity", label: "Unity" },
    // { value: "unreal", label: "Unreal" },
    // { value: "godot", label: "Godot" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
    // { value: "gdscript", label: "GDscript" },
    // { value: "htmlcssjs", label: "HTML/CSS/JS" }
];

const highlightIndices = [0, 2, 3];

const projects = [
    // project template
    // {
    //     title: "Project",
    //     image: "Covers/Ximage.png",
    //     description: "Game",
    //     tags: ["unity6", "nah"],
    //     href: "underconstruction"
    // },

    // project to add:
    // {
    //     title: "2D Splines",
    //     image: "Covers/Ximage.png",
    //     description: "Game",
    //     tags: ["2d", "engine", "unity6", "csharp", "nah"],
    //     href: "underconstruction"
    // },
    // {
    //     title: "Project Imagine",
    //     image: "Covers/MeineLiebeGestalt.png",
    //     description: "Berlin",
    //     tags: ["new", "play", "3d", "engine", "unity6", "csharp", "nah"],
    //     href: "underconstruction"
    // },

    {
        title: "Capture Graafsmaar",
        image: "Covers/CaptureGraafsmeer.png",
        description: "Unity GPS mobile game made during MBO exam. Made for the City of Amsterdam, explore the city with a photobook.",
        tags: ["play", "3d", "engine", "unity", "csharp", "mobile"],
        href: "/Projects/CaptureGraafsmeer"
    },
    {
        title: "Maze Generator",
        image: "Covers/MazeGen.png",
        description: "Unity project perfect maze generator with customizable algorithms.",
        tags: ["play", "2d", "engine", "unity", "csharp", "algorithm"],
        href: "/Projects/MazeGenerator"
    },
    {
        title: "Platypus",
        image: "Covers/Platypus.png",
        description: "This is a passion project of mine. A platformer with interesting movement options.",
        tags: ["2d", "engine", "unity", "csharp"],
        href: "/Projects/Platypus"
    },
    {
        title: "Kara-oké",
        image: "Covers/Kara-oke.png",
        description: "A VR karaoke game commissioned for AVROTROS, this was made during my internship at XR-Lab!",
        tags: ["3d", "engine", "unity", "csharp", "xr", "internship"],
        href: "/Projects/Kara-oke"
    },
    {
        title: "Operation Starfall",
        image: "Covers/Starfall.jpg",
        description: "2.5D Metroidvania Couch Co-op based on the cartoons of 80's Sci-Fi.",
        tags: ["3d", "2d", "engine", "unity", "csharp"],
        href: "/Projects/OperationStarfall"
    },
    {
        title: "AR Gpal",
        image: "Covers/Gpal.png",
        description: "We were commissioned to translate GPal's existing app/webapp into an AR environment.",
        tags: ["3d", "engine", "unity", "csharp", "xr", "internship"],
        href: "/Projects/AR-Gpal"
    },
    {
        title: "InControl",
        image: "Covers/InControl.png",
        description: "InControl is a simulation company that makes and provide simulation in logistics and pedstrain.",
        tags: ["3d", "2d", "lang", "cpp", "internship"],
        href: "/Projects/InControl"
    }
];

