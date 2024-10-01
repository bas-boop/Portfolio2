const project = {
    name: "Smoll knight + horse",
    description: "This project is a dynamiclly added html page. Used as a template for all other projects. Made for speeding up the creating process of project pages. As a developer I should make everything as lazy as possible.",
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2020" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "1 month" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/repository-link" },
        { icon: "fas fa-tasks", name: "Tasks Board", url: "https://trello.com/board-link" },
        { icon: "fas fa-gamepad", name: "Play on Itch.io", url: "https://itch.io/game-link" },
        { icon: "fab fa-artstation", name: "Artstation", url: "https://artstation.com/portfolio-link" }
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
