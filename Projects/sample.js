const project = {
    name: "Dynamic Project",
    description: "This project is a dynamiclly added html page. Used as a template for all other projects. Made for speeding up the creating process of project pages. As a developer I should make everything as lazy as possible.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2020" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "4 years" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-cogs", label: "Framework", value: "SFML" },
        { icon: "fas fa-code", label: "Language", value: "C++" },
        { icon: "fas fa-tools", label: "Creative Tools", value: "Blender" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" },
        { icon: "fas fa-users", label: "Team Size", value: "2 devs, 4 artists, 1 design" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Lead developer & Scurm master" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/repository-link" },
        { icon: "fas fa-tasks", name: "Tasks Board", url: "https://trello.com/board-link" },
        { icon: "fas fa-gamepad", name: "Play on Itch.io", url: "https://itch.io/game-link" },
        { icon: "fab fa-steam", name: "Steam", url: "https://steamcommunity.com/app/game-id" },
        { icon: "fab fa-artstation", name: "Artstation", url: "https://artstation.com/portfolio-link" },
        { icon: "fas fa-globe", name: "Customer Website", url: "https://portfolio-website.com" },
        { icon: "fas fa-briefcase", name: "Internship at XYZ", url: "https://steamcommunity.com/app/game-id" },
        { icon: "fab fa-youtube", name: "Watch Trailer", url: "https://company-website.com" }
    ],
    features: [
        {
            title: "Getting Component",
            description: "In this section, we delve into the process of retrieving components in Unity...",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private MonoBehaviour something;
                
private void Update() {
    something = GetComponent<MonoBehaviour>();
}

private void LateUpdate() {
    if (something == null)
        something = GetComponent<MonoBehaviour>();
}`,
                    breakRow: false
                },
                {
                    type: "imageSlider",
                    leftImage: "CapturegraafsmeerMedia/PhotobookWindow.png",
                    rightImage: "CapturegraafsmeerMedia/PhotobookWindowInactive.png",
                    caption: "Figure X: How Unity looks before creating a new page.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "Platypus/UML_Pick-up_System.jpeg", 
                    size: "100", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: UML Diagram",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "100", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 2: Dash Ability",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "json", 
                    code: `{
    "openWeatherMapApiKey": "Your_API_key"
}`,
                    breakRow: false
                }
            ]
        }
    ]
};
