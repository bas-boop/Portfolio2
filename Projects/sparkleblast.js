const project = {
    name: "Sparkleblast",
    description: "",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2025-2026" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "4 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unreal" },
        { icon: "fas fa-code", label: "Language", value: "Blueprint & C++" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum" },
        { icon: "fas fa-users", label: "Team Size", value: "16 (dev 3, art 6, des 7)" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Gameplay developer" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/bas-boop/ShuttleFrog" },
        { icon: "fas fa-file", name: "Final report", url: "SparkleblastMedia/EindVerslagVerdienen.pdf" },
    ],
    features: [
        {
            title: "Test enemy",
            description: "Text",
            wide: true,
            elements: [
                {
                    type: "empty",
                },
            ]
        },
        {
            title: "Chomper (Melee Enemy)",
            description: "Text",
            wide: true,
            elements: [
                {
                    type: "empty",
                },
            ]
        },
        {
            title: "SpiderShooter (Ranged Enemy)",
            description: "Text",
            wide: true,
            elements: [
                {
                    type: "empty",
                },
            ]
        },
        {
            title: "Health",
            description: "Blueprint system for managing player health mechanics in Sparkleblast",
            wide: true,
            elements: [
                {
                    type: "text",
                    content: "Some text just for testing some stuff out.",
                    breakRow: false
                },
                {
                    type: "blueprint",
                    name: "BPC_Health",
                    preview: "SparkleblastMedia/BPC_Health.png",
                    breakRow: false
                },
            ],
        },
        {
            title: "Pause Menu",
            description: "Text",
            wide: true,
            elements: [
                {
                    type: "empty",
                },
            ]
        },
        {
            title: "Learing Unreal",
            description: "Text",
            wide: true,
            elements: [
                {
                    type: "empty",
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "Text",
            wide: true,
            elements: [
                {
                    type: "empty",
                },
            ]
        },
    ]
};
