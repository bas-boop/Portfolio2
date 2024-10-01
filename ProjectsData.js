const filterOptions = [
    { value: "new", label: "New" },
    { value: "3d", label: "3D" },
    { value: "2d", label: "2D" },
    // { value: "engine", label: "Engine" },
    { value: "lang", label: "Pure code (with framework)" },
    { value: "unity", label: "Unity" },
    // { value: "unreal", label: "Unreal" },
    // { value: "godot", label: "Godot" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
    // { value: "htmlcssjs", label: "HTML/CSS/JS" },
    { value: "xr", label: "XR" },
    // { value: "mobile", label: "Mobile" },
    { value: "console", label: "Console" },
    { value: "algorithm", label: "Algorithm" },
    { value: "internship", label: "Internship" },
    { value: "gamejam", label: "Game Jam" }
];
  
const projects = [
    // {
    //     title: "Maze Generator",
    //     image: "Covers/CaptureGraafsmeer.png",
    //     description: "Unity GPS mobile game made during MBO exam. Made for the Amsterdam goverment, explore the city with a photobook.",
    //     tags: ["3d", "new", "engine", "unity", "csharp", "mobile"],
    //     href: "/Projects/CaptureGraafsmeer"
    // },
    {
        title: "Maze Generator",
        image: "Covers/MazeGen.png",
        description: "Unity project perfect maze generator with customizable algorithms.",
        tags: ["2d", "engine", "unity", "csharp", "algorithm", "nah"],
        href: "underconstruction"
    },
    {
        title: "Platypus",
        image: "Covers/Platypus.png",
        description: "This is a passion project of mine. A platformer with interesting movement options.",
        tags: ["2d", "engine", "unity", "csharp", "nah"],
        href: "underconstruction"
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
        title: "Smoll Knight + Horse",
        image: "Covers/SKPH.jpg",
        description: "A bachelor admission game. With a medieval setting to play Jousting.",
        tags: ["2d", "engine", "unity", "csharp", "nah"],
        href: "underconstruction"
    },
    {
        title: "FPS Manager",
        image: "Covers/FPS.png",
        description: "Console app that adjusts your screen's refresh rate based on connected displays.",
        tags: ["new", "2d", "lang", "csharp", "console", "nah"],
        href: "underconstruction"     
    },
    {
        title: "The Lost Reel",
        image: "Covers/TheLostReel.png",
        description: "This is a horro game made for the gamejam 'Wanna Jam? 2023'. Monster AI with a statemachine.",
        tags: ["3d", "engine", "unity", "csharp", "gamejam", "nah"],
        href: "underconstruction"
    },
    {
        title: "AR Gpal",
        image: "Covers/Gpal.png",
        description: "We were commissioned to translate GPal's existing app/webapp into an AR environment.",
        tags: ["3d", "engine", "unity", "csharp", "xr", "internship", "nah"],
        href: "underconstruction"
    },
    {
        title: "InControl",
        image: "Covers/InControl.png",
        description: "InControl is a simulation company that makes and provide simulation in logistics and pedstrain.",
        tags: ["3d", "2d", "lang", "cpp", "internship", "nah"],
        href: "underconstruction"
    }
];
