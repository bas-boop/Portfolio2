const filterOptions = [
    // { value: "new", label: "New" },
    { value: "3d", label: "3D" },
    { value: "2d", label: "2D" },
    // { value: "engine", label: "Engine" },
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
    // { value: "algorithm", label: "Algorithm" },
    // { value: "internship", label: "Internship" },
    { value: "gamejam", label: "Game Jam" }
];
  
const projects = [
    {
        title: "This website you are on now.",
        image: "Covers/Portifolo.png",
        description: "My portifolo website, second version.",
        tags: ["2d", "lang", "htmlcssjs"],
        blankTarget: true,
        href: "https://github.com/bas-boop/Portfolio2"
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
        image: "https://media.licdn.com/dms/image/v2/D4E22AQG4Mb1P4MvmEQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1710542400717?e=1730332800&v=beta&t=nonoucmuwMz1YrtiFzq6yk-a1y9ZUYNOuUGAOPk1m3E",
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
    }
];
