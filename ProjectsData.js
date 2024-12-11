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

const highlightIndices = [0, 2, 4];

const projects = [
// // jaar 1 blok 2 HKU
//     {
//         title: "Project Inside-out",
//         image: "https://images.pathe-thuis.nl/35961_1920x1080.jpg",
//         description: "A solo project",
//         tags: ["new", "unity6", "nah"],
//         href: "underconstruction"
//     },
    // {
    //     title: "SFML game",
    //     image: "https://miro.medium.com/v2/resize:fit:1400/1*g1ervSjZsKF070oCIpx6Vw.png",
    //     description: "C++ game made with SFML framework",
    //     tags: ["new", "2d", "lang", "cpp", "nah"],
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
        title: "Catch Space Trash",
        image: "Covers/CatchSpaceTrash.png",
        description: "Save the mother ship by shooting space trash or crashing into it with your small spacecraft.",
        tags: ["new", "play", "2d", "engine", "unity", "csharp", "nah"],
        href: "underconstruction"
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
        title: "Kat-astrofe",
        image: "Covers/Kat-astrofe.png",
        description: "Make a protest safer and friendlier by disarming and destroying weapons that other cats have brought.",
        tags: ["new", "play", "2d", "engine", "unity", "csharp", "nah"],
        href: "underconstruction"
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
