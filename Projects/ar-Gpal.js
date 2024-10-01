const project = {
    name: "AR Gpal",
    description: "An educational AR project for the Hololens 2, this was made during my internship at XR-Lab! We were commissioned to translate GPal's existing app/webapp into an AR environment. We have this for GPal's customer, the Amsterdam Ambulance Service.<br><br>We took the idea from their instruction videos and changed the interaction to digital buttons that hang around the incubator. You can also control everything via voice commands so that you can use the application hands-free.<br><br>There is no git repository available as it is in a private mode due to the companies.",
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2023" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "2 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum" },
        { icon: "fas fa-users", label: "Team Size", value: "2 devs, 1 artist" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Developer & Scurm master" }
    ],
    links: [
        { icon: "fab fa-youtube", name: "Watch Trailer", url: "https://www.youtube.com/watch?v=9oh3qHHUoJQ" },
        { icon: "fas fa-globe", name: "Customer Website", url: "https://gpal.nl/" },
        { icon: "fas fa-briefcase", name: "Internship at XR-Lab", url: "https://www.xr-lab.nl/portfolio/items/gpal-2023" }
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
