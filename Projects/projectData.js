const project = {
    name: "Dynamic Project",
    description: "This project is a dynamiclly added html page. Used as a template for all other projects. Made for speeding up the creating process of project pages. As a developer I should make everything as lazy as possible.",
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2020" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "4 years" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-cogs", label: "Framework", value: "SFML" },
        { icon: "fas fa-code", label: "Language", value: "C++" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" },
        { icon: "fas fa-users", label: "Team Size", value: "2 devs, 4 artists, 1 design" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/repository-link" },
        { icon: "fas fa-tasks", name: "Tasks Board", url: "https://trello.com/board-link" },
        { icon: "fas fa-gamepad", name: "Play on Itch.io", url: "https://itch.io/game-link" },
        { icon: "fab fa-steam", name: "Steam", url: "https://steamcommunity.com/app/game-id" },
        { icon: "fab fa-youtube", name: "Watch Trailer", url: "https://youtube.com/trailer-video" }
    ],
    features: [
        {
            title: "Getting Component",
            description: "In this section, we delve into the process of retrieving components in Unity...",
            image: "maybe",
            alt: "Stand alone image showcasing component retrieval",
            caption: "Figure 1: A visual representation of how component retrieval is implemented in Unity.",
            codeSnippets: [
                {
                    language: "cs",
            code: `private MonoBehaviour something;
            
private void Update() {
    something = GetComponent<MonoBehaviour>();
}

private void LateUpdate() {
    if (something == null)
        something = GetComponent<MonoBehaviour>();
}`
                },
                {
                    language: "json",
                    code: `{
  "openWeatherMapApiKey": "Your_API_key"
}`
                }
            ],
            images: [
                { src: "Platypus/UML_Pick-up_System.jpeg", size: "100", alt: "UML Diagram", caption: "Figure 1: UML Diagram" },
                { src: "Platypus/PlayerStateManager-Inspector.jpg", size: "100", alt: "Dash Ability Diagram", caption: "Figure 2: Dash Ability" }
            ]
        }
    ]
};
