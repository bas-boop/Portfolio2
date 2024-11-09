const project = {
    name: "The Lost Reel",
    description: "The lost reel is a 3D horror game, where you are being hunted by an un-human like creature. Even though you are being hunted, you try to find and collect the lost film reel.<br><br>This was made for the 'Do you WANNA Jam?! 2023' game jam. With the theme 'FREEZE'. There are 80 submisson in this jam. We enden above average of all submissons, and top 26 with the music.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2023" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "9 days" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-users", label: "Team Size", value: "<br>3 devs,<br>1.5 artists,<br>1.5 musician" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Project lead & game developer" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/Team-Swamp/The-Lost-Reel" },
        { icon: "fas fa-tasks", name: "Tasks Board", url: "https://trello.com/b/j48dopXq/wanna-jam-2023" },
        { icon: "fas fa-gamepad", name: "Play on Itch.io", url: "https://baz-geluk9.itch.io/the-lost-reel" },
        { icon: "fab fa-youtube", name: "Watch Gameplay", url: "https://www.youtube.com/watch?v=IlcJqZII0XE&ab_channel=Fumiko" }
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
