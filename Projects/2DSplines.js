const project = {
    name: "2D Splines",
    description: "Line with curves",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2025" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "1 week" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity 6" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" }
    ],
    links: [
        { icon: "fas fa-gamepad", name: "Download package", url: "https://github.com/bas-boop/ModuleGitgud/releases" },
    ],
    features: [
        {
            title: "Title",
            description: "Feature is <highlight-text>cool</highlight-text>.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "../Covers/XImage.png", 
                    size: "100", 
                    alt: "Something", 
                    caption: "Figure 1: what",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `var code = false;`,
                    breakRow: false
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "Yapping",
            wide: true,
            elements: [
                {
                    type: "text", 
                    content: "me better then Unity",
                    breakRow: false
                },
            ]
        }
    ]
};
