const project = {
    name: "Weather Visualizer",
    description: "A weather visualizer with some game elements...",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2024" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "4 weeks" },
        { icon: "fas fa-cogs", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-tasks", label: "Workflow", value: "Waterfall" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/repository-link" },
        { icon: "fas fa-gamepad", name: "Play on Itch.io", url: "https://itch.io/game-link" }
    ],
    features: [
        {
            title: "Set Data to UI",
            description: "This code snippet demonstrates how to update various UI elements in your app using data from a weather API. It shows how to bind data like temperature, weather conditions, and more to UI components.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void UpdateUiWithData(WeatherResponse weatherData)
{
    if (weatherData.weather is { Length: > 0 }) {
        main.text = weatherData.name + ": " + weatherData.weather[0].main;
        description.text = weatherData.weather[0].description;
    }

    temp.text = weatherData.main.temp + C;
    cloud.text = CC + weatherData.clouds.all + P;
    speed.text = WS + weatherData.wind.speed + METERS_PER_SECONDS;
    degree.text = D + weatherData.wind.deg + DEGREE_SYMBOL;
    humidity.text = HD + weatherData.main.humidity + P;
    pressure.text = PR + weatherData.main.pressure + H;
    visibility.text = V + weatherData.visibility + M;
}`
                },
                { 
                    type: "image", 
                    src: "Platypus/UML_Pick-up_System.jpeg", 
                    size: "100", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: UML Diagram for Pick-up System"
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "100", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 2: Dash Ability"
                },
                { 
                    type: "code", 
                    language: "json", 
                    code: `{
      "openWeatherMapApiKey": "Your_API_key"
    }`
                }
            ]
        },
        {
            title: "Other Feature",
            description: "This feature showcases the implementation of a similar data binding process, with a variety of UML diagrams to visually represent system logic.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void UpdateUiWithData(WeatherResponse weatherData)
{
    if (weatherData.weather is { Length: > 0 }) {
        main.text = weatherData.name + ": " + weatherData.weather[0].main;
        description.text = weatherData.weather[0].description;
    }

    temp.text = weatherData.main.temp + C;
    cloud.text = CC + weatherData.clouds.all + P;
    speed.text = WS + weatherData.wind.speed + METERS_PER_SECONDS;
    degree.text = D + weatherData.wind.deg + DEGREE_SYMBOL;
    humidity.text = HD + weatherData.main.humidity + P;
    pressure.text = PR + weatherData.main.pressure + H;
    visibility.text = V + weatherData.visibility + M;
}`
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "40", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: UML Diagram"
                },
                { 
                    type: "code", 
                    language: "json", 
                    code: `{
    "openWeatherMapApiKey": "Your_API_key"
}`
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "40", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: UML Diagram"
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "40", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: UML Diagram"
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "75", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: UML Diagram"
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void UpdateUiWithData(WeatherResponse weatherData)
{
    if (weatherData.weather is { Length: > 0 }) {
        main.text = weatherData.name + ": " + weatherData.weather[0].main;
        description.text = weatherData.weather[0].description;
    }

    temp.text = weatherData.main.temp + C;
    cloud.text = CC + weatherData.clouds.all + P;
    speed.text = WS + weatherData.wind.speed + METERS_PER_SECONDS;
    degree.text = D + weatherData.wind.deg + DEGREE_SYMBOL;
    humidity.text = HD + weatherData.main.humidity + P;
    pressure.text = PR + weatherData.main.pressure + H;
    visibility.text = V + weatherData.visibility + M;
}`
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "100", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: UML Diagram"
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "140", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 2: Dash Ability"
                },
                { 
                    type: "text", 
                    content: "This feature showcases the implementation of a similar data binding process, with a variety of UML diagrams to visually represent system logic.This feature showcases the implementation of a similar data binding process, with a variety of UML diagrams to visually represent system logic.This feature showcases the implementation of a similar data binding process, with a variety of UML diagrams to visually represent system logic.This feature showcases the implementation of a similar data binding process, with a variety of UML diagrams to visually represent system logic.", 
                },
                { 
                    type: "image", 
                    src: "Platypus/PlayerStateManager-Inspector.jpg", 
                    size: "140", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 2: Dash Ability"
                }
            ]
        }
    ]
};
