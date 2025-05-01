const filterOptions2 = [
    { value: "new", label: "New" },
    { value: "3d", label: "3D" },
    { value: "2d", label: "2D" },
    { value: "lang", label: "Pure code (with framework)" },
    { value: "unity", label: "Unity" },
    // { value: "unreal", label: "Unreal" },
    // { value: "godot", label: "Godot" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
    { value: "htmlcssjs", label: "HTML/CSS/JS" },
    // { value: "xr", label: "XR" },
    { value: "console", label: "Console" },
    { value: "mobile", label: "Mobile" },
    { value: "gamejam", label: "Game Jam" }
];
  
const smallProjects = [
    {
        title: "This website you are on now.",
        image: "Covers/Portifolo.png",
        description: "My portifolo website, second version.",
        tags: ["new", "2d", "lang", "htmlcssjs"],
        blankTarget: true,
        href: "https://github.com/bas-boop/Portfolio2"
    },
    {
        title: "Catch Space Trash",
        image: "Covers/CatchSpaceTrash.png",
        description: "Save the mother ship by shooting space trash or crashing into it with your small spacecraft.",
        tags: ["new", "2d", "engine", "unity", "csharp"],
        blankTarget: true,
        href: "https://github.com/bas-boop/CathSpaceTrash"
    },
    {
        title: "Smoll Knight + Horse",
        image: "Covers/SKPH.jpg",
        description: "A bachelor admission game. With a medieval setting to play Jousting.",
        tags: ["2d", "engine", "unity", "csharp"],
        blankTarget: true,
        href: "https://github.com/bas-boop/Smoll_Knight_plus_Horse"
    },
    {
        title: "FPS Manager",
        image: "Covers/FPS.png",
        description: "Console app that adjusts your screen's refresh rate based on connected displays.",
        tags: ["2d", "lang", "csharp", "console"],
        blankTarget: true,
        href: "https://github.com/bas-boop/FpsManager"     
    },
    {
        title: "Kat-astrofe",
        image: "Covers/Kat-astrofe.png",
        description: "Make a protest safer and friendlier by disarming and destroying weapons that other cats have brought.",
        tags: ["new", "2d", "engine", "unity", "csharp"],
        blankTarget: true,
        href: "https://github.com/bas-boop/ProjectIgnite"
    },
    {
        title: "Macroplastics",
        image: "Covers/Schilpad.png",
        description: "This was a 6 hour game jam at HKU made with 4 people, a developer, designer and 2 artists and a small group of musicians. Move turtle and kill brain via shooting the canon.",
        tags: ["2d", "engine", "unity", "csharp", "gamejam"],
        blankTarget: true,
        href: "https://baz-geluk9.itch.io/schildpad"
    },
    {
        title: "Ice Bites",
        image: "https://raw.githubusercontent.com/Team-Swamp/IceBites/refs/heads/develop/Assets/Sprites/T_GameIcon.png",
        description: "A game about a point and click penguin restaurant. Cook dishes and serve them to the customers. Cook dishes by combining 2 ingredients on the cutting table.",
        tags: ["3d", "engine", "unity", "csharp", "mobile"],
        blankTarget: true,
        href: "https://github.com/Team-Swamp/IceBites"
    },
    {
        title: "Tic tac toe",
        image: "Covers/Tictactoe.png",
        description: "A console app where you can play tic-tac-toe with somelse or with the computer.",
        tags: ["2d", "lang", "cpp", "console"],
        blankTarget: true,
        href: "https://github.com/bas-boop/tictactoe"
    },
    {
        title: "The Lost Reel",
        image: "Covers/TheLostReel.png",
        description: "This is a horro game made for the gamejam 'Wanna Jam? 2023'. Monster AI with a statemachine.",
        tags: ["3d", "engine", "unity", "csharp", "gamejam"],
        blankTarget: true,
        href: "https://github.com/Team-Swamp/The-Lost-Reel"
    },
    {
        title: "Mecco the Chameleon",
        image: "Covers/Mecco.png",
        description: "Mecco is learning how colors work, so Mecco covers herself in baths with paint to combine the colors.",
        tags: ["2d", "engine", "unity", "csharp", "gamejam"],
        blankTarget: true,
        href: "https://github.com/bas-boop/Mecco-the-Chameleon"
    },
    {
        title: "Coffe maker",
        image: "https://img.itch.zone/aW1nLzE0MDc1MDEyLnBuZw==/315x250%23c/sjeXEj.png",
        description: "Made for the Hyper Unicorn Gamejam: Untitled (Part 4). You make coffees for the different kind of customers. Combine liquids and decorations to do so.",
        tags: ["2d", "engine", "unity", "csharp", "gamejam"],
        blankTarget: true,
        href: "https://github.com/bas-boop/Coffee-maker"
    },
    {
        title: "Inner thoughts",
        image: "Covers/Inner_thoughts.png",
        description: "It is a 2D pixel rogue-like, destroying all the eyes that have infiltrated your mind.",
        tags: ["2d", "engine", "unity", "csharp", "gamejam"],
        blankTarget: true,
        href: "https://github.com/Team-Swamp/Inner-Thoughts"
    },
    {
        title: "Voedelstjes",
        image: "https://img.itch.zone/aW1nLzE0MjE4Nzc5LmpwZw==/315x250%23c/XNLv88.jpg",
        description: "I was craving food when designing the game, so I'm going to make a game about food. You walk around to gather some tools, avoid the cutlery.",
        tags: ["2d", "engine", "unity", "csharp", "gamejam"],
        blankTarget: true,
        href: "https://github.com/bas-boop/HUGJ2022P1-Voedelstjes"
    },
    {
        title: "Blacksmith simulator",
        image: "https://img.itch.zone/aW1nLzEzMjU0MTUxLnBuZw==/315x250%23c/p1ypUL.png",
        description: "Made for the GMTK gamejam 2023, with the theme roles reversed. In this game you are in a RPG world, where you are the blacksmith for the heroes that pass by.",
        tags: ["3d", "engine", "unity", "csharp", "gamejam"],
        blankTarget: true,
        href: "https://github.com/Team-Swamp/BlacksmithSimulator"
    },
    {
        title: "Vormen vs Formen",
        image: "https://m.gjcdn.net/game-screenshot/1200/12724325-euc6ynez-v4.webp",
        description: "My first working solo project. Made in 10 weeks of time, with a relection at the end. A simple tower defence game.",
        tags: ["2d", "engine", "unity", "csharp"],
        blankTarget: true,
        href: "https://github.com/bas-boop/VormenVsFormen"
    }
];
