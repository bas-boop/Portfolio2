const project = {
    name: "AR Gpal",
    description: "An educational AR project for the <highlight-text>Hololens 2</highlight-text>, this was made during my internship at XR-Lab! We were commissioned to translate <highlight-text>GPal's existing app/webapp</highlight-text> into an AR environment. We have this for GPal's customer, the Amsterdam Ambulance Service.<br><br>We took the idea from their instruction videos and changed the interaction to digital buttons that hang around the incubator. You can also control everything via voice commands so that you can use the <highlight-text>application hands-free</highlight-text>.<br><br>There is no git repository available as it is in a private mode due to the companies.",
    hasQuickMenu: false,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2023" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "2 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum" },
        { icon: "fas fa-users", label: "Team Size", value: "2 devs, 1 artist" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Developer, VFX & Scurm master" }
    ],
    links: [
        { icon: "fab fa-youtube", name: "Watch Trailer", url: "https://www.youtube.com/watch?v=9oh3qHHUoJQ" },
        { icon: "fas fa-globe", name: "Customer Website", url: "https://gpal.nl/" },
        { icon: "fas fa-briefcase", name: "Internship at XR-Lab", url: "https://www.xr-lab.nl/portfolio/items/gpal-2023" }
    ],
    features: [
        {
            title: "Video Interactable",
            description: "This interactable gives the user the possibility to <highlight-text>start, pause and stop a video by touch</highlight-text>. During the start, the customer's logo is subtly displayed, which reinforces the brand identity. With this intuitive and interactive element, users have complete control over their viewing experience.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "GPalMedia/FinalInteractable.gif", 
                    size: "100", 
                    alt: "Interactable in Unity", 
                    caption: "Figure 1: Video interactable in Unity testing it.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "GPalMedia/FinalInteractableAR.gif", 
                    size: "100", 
                    alt: "Interactable in AR", 
                    caption: "Figure 2: Video interactable in AR showcasing it.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// When touching the interactable it changes the state of it and calls animations.
/// </summary>
public void TogglePlayingState()
{
    if (GetCurrentState == SphereState.NotInRange) return;

    switch (GetCurrentState)
    {
        case SphereState.InRange:
            GetCurrentState = SphereState.IsTouched;
            StartCoroutine(AnimationSequence());
            break;
        case SphereState.IsWatching or SphereState.IsPaused:
            StartCoroutine(SwitchToInRange());
            break;
    }
}

/// <summary>
/// Toggles the interactable state to the pause state. The OnPause UnityEvent gets invoked.
/// </summary>
public void TogglePauseState()
{
    GetCurrentState = GetCurrentState switch
    {
        SphereState.IsWatching => SphereState.IsPaused,
        SphereState.IsPaused => SphereState.IsWatching,
        _ => GetCurrentState
    };

    OnPause?.Invoke();
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private IEnumerator SetCamera(bool value)
{
    _couveuse.OpenCloseBag();
    if(value) yield return new WaitForSeconds(0.5f);
    _visuals.gameObject.SetActive(value);
    _animator.SetBool("IsClose", true);
}

private IEnumerator SwitchToInRange()
{
    GetCurrentState = SphereState.InRange;
    _animator.SetTrigger("IsQuiting");
    _animator.SetBool("IsTouched", false);
    yield return new WaitForSeconds(_colliderTurnOnTime);
    _isMainColliderEnabled = true;
}

private IEnumerator AnimationSequence()
{
    yield return new WaitUntil(() => _video.IsVideoPrepared);

    _isMainColliderEnabled = false;
    yield return new WaitForSeconds(_antiBugTime);
    _animator.SetBool("IsTouched", true);
    yield return new WaitForSeconds(_animationDelay);
    GetCurrentState = SphereState.IsWatching;
}`,
                    breakRow: false
                },
            ]
        },
        {
            title: "AR Shader",
            description: "The sphere that controls the incubator's on/off function felt somewhat arbitrary for the target audience, the <highlight-text>blue-collar workers</highlight-text>. It needed more visual engagement. To address this, I created a simple shader to enhance it visually. Now, when touched, the color alternates between red and green.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "GPalMedia/Shader.gif", 
                    size: "100", 
                    alt: "Shader", 
                    caption: "Figure 3: The shader in Unity.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "GPalMedia/ShaderAR.gif", 
                    size: "100", 
                    alt: "Shader in AR", 
                    caption: "Figure 4: The shader in AR, with a touch.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "GPalMedia/ShaderGraph.jpg",
                    size: "90", 
                    alt: "Shadergraph", 
                    caption: "Figure 5: Shader graph of this.",
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[SerializeField] private Renderer _renderer;

private MaterialPropertyBlock _propertyBlock;

/// <summary>
/// Changes the shader to begin or end colors
/// </summary>
/// <param name="value">Give 0 or 1 to change the bool.</param>
public void ChangeIsWatched(int value)
{
    _propertyBlock.SetFloat("_IsWachted", value);
    _renderer.SetPropertyBlock(_propertyBlock);
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "To change the shader's color, we use this function. By using the <highlight-text>MaterialPropertyBlock</highlight-text>, we can access the shader properties and modify them.<br><br>You might be wondering why I use the 'SetFloat' function instead of 'SetBool'. This is because 'SetBool' doesn’t exist, so the parameter is set as an integer instead.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[SerializeField] private ShaderProperties _shaderProperties;
    
private bool _isActive = true;

public void ToggleVisibility()
{
    _isActive = !_isActive;
    gameObject.SetActive(_isActive);

    _shaderProperties.ChangeIsWatched(_isActive ? 0 : 1);
}`,
                    breakRow: false
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "This was my first Augmented Reality application project, following a previous VR game project (Kara-oké) at the same internship with XR-Lab. The experience from that VR project proved invaluable for understanding spatial interactions and user experience in mixed-reality environments. This AR project, developed for the Hololens 2, aimed to translate GPal's existing app and web application into an immersive AR environment. The end-user, the Amsterdam Ambulance Service, uses this application for training their paramedic team in a hands-free, interactive way.",
            wide: true,
            elements: [
                {
                    type: "text", 
                    content: "I had the chance to create a custom shader to enhance user engagement with the incubator control feature. This shader was designed to visually indicate the incubator's status by alternating colors when touched, adding a new layer of interaction to the training experience.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "This project provided an excellent opportunity to contribute to a practical training solution for blue-collar workers, specifically the Amsterdam paramedics. Designing an educational tool that meets their needs was both rewarding and impactful.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "GPal, our client, was exceptionally enthusiastic and supportive throughout the project. Their positive engagement made them perhaps the best client I’ve had the chance to work with, bringing an exciting energy to the development process. We also had the opportunity to present our progress during the final sprint review at their office in <highlight-text>Groningen</highlight-text>, which was a great way to connect directly and ensure the project aligned perfectly with their vision.",
                    breakRow: false
                }
            ]
        }
    ]
};
