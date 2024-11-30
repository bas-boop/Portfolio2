const project = {
    name: "InControl",
    description: "InControl is a simulation company that specializes in <highlight-text>logistics and pedestrian simulations</highlight-text>. During my time there, I contributed to both simulation software by fixing bugs and developing new features. This experience allowed me to learn three new programming languages: C++, Delphi (Pascal), and their custom language: <highlight-text>4DScript</highlight-text>.<br><br>4DScript is a mathematical language integrated into the simulation software. I dedicated significant effort to working with 4DScript, focusing on both technical and visual aspects to enhance the overall functionality and user experience of the simulations.<br><br>All code is private to the company, so there are only diagrams and picturtes to show.",
    hasQuickMenu: true,
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
            title: "Agent predict route",
            description: "A coworker using the pedestrian simulation software asked for <highlight-text>functionality to check if an agent’s planned path crosses a specific action area or vertex ID</highlight-text>. In response, I created a feature to handle this. Now, you can trigger different events based on the agent’s route.<br><br>This works similarly to a standard delegate event. Simply attach your function to this event, and it will be called if the agent’s path crosses the specified area or vertex ID. Vertex ID is a point of crossing where the lines of the model are the the furthest away form the wall.",
            wide: true,
            elements: [
                
                { 
                    type: "image", 
                    src: "InControlMedia/PredictRoute1.png", 
                    size: "100", 
                    alt: "UML Diagram", 
                    caption: "Figure 1: Agent before predicting path.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "InControlMedia/PredictRoute2.png", 
                    size: "100", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 2: Agent after predicting path, with succes (turns green).",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cpp", 
                    code: `bool Simulator::IsActionAreaOnAgentRoute(const uintptr_t agentID, const uintptr_t actionareaID)
{
    const Character* currentCharacter = getCharacter(agentID);

    if (!currentCharacter)
    {
        std::basic_stringstream<TCHAR> errorMessage;
        erroMessage << "Agent ID '" << agentID << "' is not valid. - IsActionAreaOnAgentRoute";
        PD_ErroHandler::addError(ErrorMessage(PD_ERROR_INVALID_INPUT, errorMessage.str()))
        return false;
    }

    const auto foundActionAreaPair = std::ranges::find(actionAreas, actionareaID, &std::pair<const uintptr_t, ActoinArea>::first);

    if (foundActionAreaPair == actionAreas.end())
    {
        std::basic_stringstream<TCHAR> errorMessage;
        erroMessage << "Action Area ID '" << actionareaID << "' is not valid. - IsActionAreaOnAgentRoute";
        PD_ErroHandler::addError(ErrorMessage(PD_ERROR_INVALID_INPUT, errorMessage.str()))
        return false;
    }

    // Find the intersection of the action area and the sections between agent's medial axis nodes.
    const auto& actionAreaSegmentPoints = (*(foundActionAreaPair->second).getPts());
    // This function is validonly for the action areas that are line segments.
    if (auto actionAreaSize = actionAreaSegmentPoints.size(); actionAreaSize != 2)
    {
        std::basic_stringstream<TCHAR> errorMessage;
        erroMessage << "Action Area '" << actionAreaSize << "' points instead of expected 2"
                        "(to form a line segment) - IsActionAreaOnAgentRoute";
        PD_ErroHandler::addError(ErrorMessage(PD_ERROR_INVALID_INPUT, errorMessage.str()))
        return false;
    }

    const auto& agentCorridorrNodes = getCMResults()[currentCharacter->idInVector]->corridor.nodes;

    // Iterate over the nodes of the agent's medial axis to check for intersections.
    for (size_t i = 0; i < agentCorridorrNodes.size() - 1; i++;)
    {
        // Current and next nodes of the medial axis' segment.
        const auto& currentMedialAxisNode = agentCorridorNodes[i];
        const auto& nextMedialAxisNode = agentCorridorNodes[i + 1];

        // Calculate the intersection point between the action area and the medial axis segment.
        Point intersection;

        // End of the code I'm allowed to show
    }
}`,
                    breakRow: false
                }
            ]
        },
        {
            title: "Channel box size",
            description: "Many customers found the channel box size too small, so we received numerous requests to make it larger. I took it a step further by making it a customizable option in the settings. There are now five size options to choose from, allowing everyone to select the size that works best for them.<br><br><highlight-text>Why make it bigger?</highlight-text> The green circles are used to connect to other boxes and provide information about the objects they are coming from or going to via 4DScript.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "InControlMedia/Channelboxes.png", 
                    size: "100", 
                    alt: "channel boxes", 
                    caption: "Figure 3: The yellow squares are the channel boxes.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "InControlMedia/SizeOption.png", 
                    size: "100", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 4: Size setting for the channel boxes.",
                    breakRow: false
                }
            ]
        },
        {
            title: "Simulation cycle upgrade",
            description: "I've implemented a modification to enhance error handling. Now, error clearing is seamlessly integrated just before initiating the new simulation cycle. This adjustment allows for the seamless addition of errors from action areas. Her below a image of what I have changed.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "InControlMedia/PED-921.png", 
                    size: "90", 
                    alt: "engine flow diagram", 
                    caption: "Figure 5: New and old engine flow diagram.",
                    breakRow: true
                }
            ]
        },
        {
            title: "Internet safety",
            description: "In the simulation softwares, you can add your internet settings, which are saved on the computer. However, using the <highlight-text>Registry Editor</highlight-text>, these settings can be found and viewed. If someone has access to your PC, they could easily locate this information and potentially misuse it. That’s why I needed to ensure it’s stored in a way that is not human-readable.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "InControlMedia/InternetSetting.jpg", 
                    size: "100", 
                    alt: "Internet settings", 
                    caption: "Figure 6: Internet settings.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "InControlMedia/Regerstriy.jpg", 
                    size: "100", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 7: Internet password in Registry Editor example.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "In Figure 7, we see the Registry Editor and an example password, `save?`. The answer to storing it securely is no—it’s not safe as-is. I searched for a solution and discovered a method called <highlight-text>obfuscation</highlight-text>, which shifts letters around in a string. This approach seemed perfect for my needs.<br><br>However, I added my own twist, as a simple shift, like adding +1 to each letter, would be too easy to decode. While I can’t share the exact method for security reasons, I can say it involves a lot of math to ensure the result is highly secure.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "InControlMedia/Obfuscate.png", 
                    size: "100", 
                    alt: "Dash Ability Diagram", 
                    caption: "Figure 8: Example password in Registry Edito with my obfuscation.",
                    breakRow: false
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "My internship at InControl, a simulation company specializing in logistics and pedestrian simulations, was an invaluable learning experience. Over the course of my time there, I worked on two major projects within their simulation software. My tasks included fixing bugs, developing new features, and exploring the technical depths of both logistics and pedestrian simulation.",
            wide: true,
            elements: [
                {
                    type: "text", 
                    content: "Working on these simulations changed my perspective on development; though I entered the internship focused exclusively on game development, this experience opened my mind to other fields. Simulation work, with its reliance on mathematical precision and real-time data, required an approach distinct from games and broadened my view of how my skills could apply across different industries.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "Additionally, working with languages outside my comfort zone—particularly languages with different syntax and structures than C#—was a valuable challenge. Each language required adapting to different paradigms, which taught me to approach programming from new angles and gave me a deeper understanding of how languages function beneath the surface.",
                    breakRow: false
                },
            ]
        }
    ]
};
