const project = {
    name: "InControl",
    description: "InControl is a simulation company that specializes in logistics and pedestrian simulations. During my time there, I contributed to both simulation software by fixing bugs and developing new features. This experience allowed me to learn three new programming languages: C++, Delphi (Pascal), and their custom language, 4DScript.<br><br>4DScript is a mathematical language integrated into the simulation software. I dedicated significant effort to working with 4DScript, focusing on both technical and visual aspects to enhance the overall functionality and user experience of the simulations.",
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2023-2024" },
        { icon: "fas fa-calendar-week", label: "Internship Duration", value: "<br>6 months" },
        { icon: "fas fa-cogs", label: "Framework", value: "VCL" },
        { icon: "fas fa-code", label: "Language", value: "C++" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Engine programmer, focus pedstrain" }
    ],
    links: [
        { icon: "fas fa-briefcase", name: "Internship at InControl", url: "https://www.incontrolsim.com/" }
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
