const project = {
    name: "Kara-oké",
    description: "A VR karaoke game commissioned for <highlight-text>AVROTROS</highlight-text>, this was made during my internship at XR-Lab! During this project I took on the roles of game developer and scrum master.<br><br>The intention is to translate the TV show <highlight-text>Beste Zangers</highlight-text> into a VR mulitplayer game. A big learning moment with this project was, create features with mulitplayer in mind AND take a week to discuss everything for the game with the team.<br><br>There is no git repository available as it is in a private mode due to the companies.",
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2023" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "2 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum" },
        { icon: "fas fa-users", label: "Team Size", value: "5 devs, 4 artists" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Main developer & Scurm master" }
    ],
    links: [
        { icon: "fas fa-briefcase", name: "Internship at XR-Lab", url: "https://www.xr-lab.nl/portfolio/items/kara-oke-avrotros-2023" },
        // wait until video upload
        // { icon: "fab fa-youtube", name: "Watch Trailer", url: "https://company-website.com" },
        { icon: "fas fa-globe", name: "Customer Website", url: "https://www.avrotros.nl" },
        { icon: "fas fa-globe", name: "Lead developer: Daniel Nijkamp", url: "https://danielnijkamp.xyz/Info/Kara-Oke.html" }
    ],
    features: [
        {
            title: "VR input",
            description: "I was responsible for developing the input system, ensuring it is easy for other developers to implement. Via the Unity's Awake and Start functions, the system automates its processes effectively. Additionally, to enhance performance, I removed input listeners in the OnDestroy method. Each function associated with different classes has been organized into contextual regions, utilizing Unity's new input system. For development we also added some test input via the keyboard.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Start()
{
    if (!RandomEffectsSystem.Instance) return;
    
    _playerControlsActions["Lamp"].performed += Lamp;
    _playerControlsActions["Smoke"].performed += Smoke;
    _playerControlsActions["Firework"].performed += Firework;
    _playerControlsActions["Confettie"].performed += Confettie;
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Awake()
{
    _playerInput = GetComponent<PlayerInput>();
    _playerControlsActions = _playerInput.actions;

    if (_vruiInteractor) _playerControlsActions["IndexFinger"].performed += Index;

    if (_objectInteraction)
    {
        _playerControlsActions["Grab Left"].performed += ActionGrabLeft;
        _playerControlsActions["Grab Left"].canceled += ActionReleaseLeft;

        _playerControlsActions["Grab Right"].performed += ActionGrabRight;
        _playerControlsActions["Grab Right"].canceled += ActionReleaseRight;
    }

    if(_mainMenuUI)
    {
        _playerControlsActions["UI Scroll"].performed += ScrollUI;
        _playerControlsActions["UI Select"].performed += SelectUI;
    }
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void OnDestroy() => RemoveListeners();

/// summary
/// Remove every listeners, for performance.
public void RemoveListeners()
{
    _playerControlsActions["IndexFinger"].performed -= Index;
    
    _playerControlsActions["Lamp"].performed -= Lamp;
    _playerControlsActions["Smoke"].performed -= Smoke;
    _playerControlsActions["Firework"].performed -= Firework;
    _playerControlsActions["Confettie"].performed -= Confettie;

    _playerControlsActions["Grab Left"].performed -= ActionGrabLeft;
    _playerControlsActions["Grab Left"].performed -= ActionReleaseLeft;

    _playerControlsActions["Grab Right"].performed -= ActionGrabRight;
    _playerControlsActions["Grab Right"].performed -= ActionReleaseRight;

    _playerControlsActions["UI Scroll"].performed -= ScrollUI;
    _playerControlsActions["UI Select"].performed -= SelectUI;
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `#region Context

private void Index(InputAction.CallbackContext context) => _vruiInteractor.Interact();
private void Lamp(InputAction.CallbackContext context) => RandomEffectsSystem.Instance.StartEventLamp();
private void Smoke(InputAction.CallbackContext context) => RandomEffectsSystem.Instance.StartEventSmoke();
private void Firework(InputAction.CallbackContext context) => RandomEffectsSystem.Instance.StartEventFirework();
private void Confettie(InputAction.CallbackContext context) => RandomEffectsSystem.Instance.StartEventConfettie();

#region Object Interaction
private void ActionGrabRight(InputAction.CallbackContext context) => _objectInteraction.ActionGrabRight();
private void ActionReleaseRight(InputAction.CallbackContext context) => _objectInteraction.ActionReleaseRight();
private void ActionGrabLeft(InputAction.CallbackContext context) => _objectInteraction.ActionGrabLeft();
private void ActionReleaseLeft(InputAction.CallbackContext context) => _objectInteraction.ActionReleaseLeft();
#endregion

#region UI

private void ScrollUI(InputAction.CallbackContext context) => _mainMenuUI.ScrollThroughButtons(context.ReadValue<Vector2>());
private void SelectUI(InputAction.CallbackContext context) => _mainMenuUI.SolveButtonSelected();

#endregion`
                },
                { 
                    type: "image", 
                    src: "Kara-oké/InputWindow.png",
                    size: "100", 
                    alt: "Input map",
                    caption: "Figure 9: Input map of the VR inputs."
                }
            ]
        },
        {
            title: "Volumetric Lighting",
            description: "In this project, we are utilizing the <highlight-text>Universal Render Pipeline (URP)</highlight-text> instead of HDRP. This choice poses challenges for achieving volumetric lighting, so we experimented with various techniques within URP to simulate it effectively.<br><br>We have created a lamp model with three variations: big, small, and candle. Additionally, we designed a transparent cone model and a light source, assembling them into a cohesive unit.<br><br>We also experimented with using decals to project a light spot on the ground or wall. However, this did not yield the desired results. The reason for this testing is that there is a limit to how many lights can illuminate a single object—standard is set to 4. While this limit can be increased to 8, it is performance-heavy, which is a significant consideration for our VR game.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "Kara-oké/GreenLamp.png",
                    size: "75", 
                    alt: "Green lamp",
                    caption: "Figure 6: Focus on 1 lamp, green variation."
                },
                { 
                    type: "image", 
                    src: "Kara-oké/Lamps.png",
                    size: "100", 
                    alt: "Lamps",
                    caption: "Figure 7: Testing out the lamps."
                },                
                { 
                    type: "image", 
                    src: "Kara-oké/StageLamps.png",
                    size: "90", 
                    alt: "Stage lamps",
                    caption: "Figure 8: Showing lamps on the stage, during the night."
                }
            ]
        },
        {
            title: "Special Effects System",
            description: "During karaoke, it's important to keep the performance exciting. That's why we added special effects like confetti, smoke machines, fireworks, and rotating lamps.<br><br>The original plan was for other players to trigger these effects via buttons, but due to time constraints, multiplayer functionality didn't make it in. As a result, the effects are now triggered randomly during the performance.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "Kara-oké/RandomEvents.gif",
                    size: "100", 
                    alt: "Random events",
                    caption: "Figure 1: Showcase of the random evetns system turning on and off diffrent effects."
                },
                { 
                    type: "image", 
                    src: "Kara-oké/UmlSpecialEffects.jpeg",
                    size: "75", 
                    alt: "UML special effects",
                    caption: "Figure 2: UML of the random evetns system."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// summary
/// Start one of the events at random.
public void StartAnyEvent()
{
    var randomNumber = Random.Range(0, 6);

    switch (randomNumber)
    {
        case 0:
            StartEventLamp();
            break;
        case 1:
            StartEventSmoke();
            break;
        case 2:
            StartEventFirework();
            break;
        case 3:
            StartEventConfettie();
            break;
        case 4:
            ActivateRandomLamp();
            break;
        case 5:
            var randomList = Random.Range(0, 3);

            switch (randomList)
            {
                case 0:
                    ActivateRandomParticle(_fireworks);
                    break;
                case 2:
                    ActivateRandomParticle(_smokeMachines);
                    break;
                case 3:
                    ActivateRandomParticle(_confettis);
                    break;
            }
            
            break;
    }
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void ActivateRandomParticle(ParticleActivator[] targetActivator)
{
    var randomNumber = Random.Range(0, targetActivator.Length);

    targetActivator[randomNumber].ToggleParticles();
}

private void ActivateRandomLamp()
{
    var randomNumber = Random.Range(0, _lamps.Length);
    
    _lamps[randomNumber].StartTurning();
}`
                },
                {
                    type: "text", 
                    content: "To simulate the AI randomly pressing buttons, we trigger random effects. The system can activate or deactivate all lamps, smoke machines, fireworks, or confetti cannons, or target a single effect."
                },
                        { 
                    type: "code", 
                    language: "cs", 
                    code: `/// summary
/// Toggle every smokemachine.
public void StartEventSmoke()
{
    foreach (var smokeMachine in _smokeMachines)
    {
        smokeMachine.ToggleParticles();
    }
}

/// summary
/// Toggle every firework.
public void StartEventFirework()
{
    foreach (var firework in _fireworks)
    {
        firework.ToggleParticles();
    }
}

/// summary
/// Toggle every confettie.
public void StartEventConfettie()
{
    foreach (var confettie in _confettis)
    {
        confettie.ToggleParticles();
    }
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void ExecuteTimer()
{
    _timer -= Time.deltaTime;

    if (_timer > 0) return;
    
    _randomEvent?.Invoke();
    SetNewTimer();
}

private void SetNewTimer()
{
    _timer = Random.Range(_timerMinValue, _timerMaxValue);
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// summary
/// This turns the particles off when they are on and vice versa.
public void ToggleParticles()
{
    if(_isPlayingParticles) StopParticles();
    else ActivateParticles();
}

private void ActivateParticles()
{
    foreach (var particle in _particles)
    {
        particle.Play();
    }
    
    _isPlayingParticles = true;
}

private void StopParticles()
{
    foreach (var particle in _particles)
    {
        particle.Stop();
    }
    
    _isPlayingParticles = false;
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// summary
/// Stats turning of the lamp. If lamp is turnded then it goes back to starting point.
public void StartTurning()
{
    if (_isTurning) return;
    StartCoroutine(Turning());
} 

private IEnumerator Turning()
{
    _isTurning = true;
    
    var timer = _turnTime;
    var endR = _isTurned ? _startingRotation : _turnedRotation;
    var startR = _isTurned ? _turnedRotation : _startingRotation;

    while (true)
    {
        _turningPoint.rotation = Quaternion.Euler(Vector3.Lerp(startR, endR,timer / _turnTime));
        timer -= Time.deltaTime;

        if (_turningPoint.rotation.eulerAngles == startR)
        {
            _isTurned = !_isTurned;
            _isTurning = false;
            break;
        }
        
        yield return null;
    }
}`
                },
                {
                    type: "text", 
                    content: "For particle effects, we simply loop through all the particle systems, starting or stopping them. For the lamps, we rotate them in the correct direction or back to their original position."
                }
            ]
        },
        {
            title: "Character Selection",
            description: "In multiplayer games, players typically want an avatar to represent them. That's why I developed the character selection system. Additionally, I integrated the VR rig with the selected character models, allowing players to control their chosen avatar in VR. Unfortunately, this feature was not utilized in the final game due to the absence of multiplayer functionality.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "Kara-oké/CharacterSelection.gif",
                    size: "100", 
                    alt: "Character selection",
                    caption: "Figure 3: The player selecting a character model to represent themselves."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// summary
/// Go to the next character in the list.
public void NextPlayer()
{
    _currentIndex = (_currentIndex + 1) % _characters.Length;

    ApplyPlayer(_currentIndex);
}
/// summary
/// Go to the Previous character in the list.
public void PreviousPlayer()
{
    _currentIndex--;
    if (_currentIndex <= 0)
    {
        _currentIndex += _characters.Length;
    }

    ApplyPlayer(_currentIndex);
}

/// summary
/// Set a specfic character in the list.
/// param name="characterIndex" Number of specfic character /param
public void SetPlayer(int characterIndex)
{
    if (characterIndex > _characters.Length || characterIndex < 0)
    {
        Debug.LogWarning("This number is invalid.");
        return;
    }

    _currentIndex = characterIndex;
    ApplyPlayer(characterIndex);
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Update()
{
    var trackerRotation = _tracker.rotation;

    _body.rotation = new Quaternion(_body.rotation.x, trackerRotation.y, _body.rotation.z, trackerRotation.w);
    _head.rotation = new Quaternion(trackerRotation.x, trackerRotation.y, _head.rotation.z, trackerRotation.w);

    var trackerPosition = _tracker.position;

    _body.position = new Vector3(trackerPosition.x, _body.position.y, trackerPosition.z);
    _head.position = new Vector3(trackerPosition.x, _head.position.y, trackerPosition.z);
}`
                },
                {
                    type: "text", 
                    content: "The character selection system also included functionality to link the selected character model to the player's VR rig. Although multiplayer wasn't implemented in the final game, this feature can still be found in the source code."
                },
                { 
                    type: "image", 
                    src: "Kara-oké/VR-rig-with-character.gif",
                    size: "100", 
                    alt: "VR rig",
                    caption: "Figure 4: A demonstration of the player moving with the selected character model in VR."
                }
            ]
        },
        {
            title: "Music Selector",
            description: "A feature that I stared, gave to someone else and got it back right before the deadline. The music system, the core of a karaoke game. The reason way I gave it to another develerop, he was making a live lyrics board for the player on stage.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[CreateAssetMenu(fileName = "ScriptableObject / Song info")]
public class SongInfo : ScriptableObject
{
    [field: SerializeField] public AudioClip song { get; private set; }
    [field: SerializeField] public float scrollSpeed { get; private set; }
    [field: SerializeField] public string artist { get; private set; }
    [field: SerializeField] public string lyrics { get; private set; }
} `
                },
                { 
                    type: "image", 
                    src: "Kara-oké/SongInfo.png",
                    size: "80", 
                    alt: "SongInfo example",
                    caption: "Figure 5: A SongInfo ScriptableObject instance."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[CreateAssetMenu(fileName = "ScriptableObject / Song info")]
public sealed class SongInfo : ScriptableObject
{
    [field: SerializeField, Tooltip("This is the MP3 file that should play")] public AudioClip Song { get; private set; }
    [field: SerializeField, Tooltip("The person who made the song")] public string Artist { get; private set; }

    [Serializable] public struct LyricNode
    {
        [field: SerializeField, TextArea(5, 50)]  public string TextPart { get; private set; }
        [field: SerializeField, Tooltip("The delay till the next lyric node")] public float TimeStamp { get; private set; }
        [field: SerializeField, Range(0.05f, 1f)] public float Speed { get; private set; }
    }
    [field: SerializeField] public LyricNode[] Nodes { get; private set; }
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `// What I made

private void Awake()
{
    CurrentSong.clip = Songs[_index].song;
}

public void StartSong() => CurrentSong.Play();

public void SetSongToPlay(bool increaseSongCount)
{
    if (increaseSongCount) SelectNextSong();
    else SelectPreviousSong();
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `// What it turned into
                    
/// summary
/// Starts the current song and starts all the lyricboards in the scene
public void StartSong()
{
    var length = _lyricBoards.Length;
    Source.Stop();
    for (int i = 0; i < length; i++)
    {
        _lyricBoards[i].ResetScroll();
    }
    if (WinSystem.Instance.NpcHasSung)
    {
        CurrentSong = SceneObject.Instance.SavedSceneData.SongChoice;
    }
    for (int i = 0; i < length; i++)
    {
        _lyricBoards[i].ScrollLyricNodes();
    }
    
    
    Source.clip = CurrentSong.Song;
    
    SongTime = Source.clip.length;
    WinSystem.Instance.SetTimer();
    
    Source.Play();
    _SongStarted?.Invoke();
}`
                },
            ]
        },
        {
            title: "Win System",
            description: "A game loop is essential for any game, but with the final sprint approaching and no loop in place, Daniel and I, the lead developer and main developer, quickly implemented a basic game loop to fit our time constraints.<br><br>The game loop includes a moment for both the AI and player to sing, which is necessary for determining a winner. Although we initially planned to implement a voting system, we opted for a simpler approach due to time limitations: randomly selecting a winner between the two participants. Below is the code for the win screen transition.",
            wide: true,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Update()
{
    if(!MusicSelector.Instance.Source.isPlaying) return;
    
    _timer -= Time.deltaTime;
    

    if (!_playerHasSang && _playerIsSinging && NpcHasSung && _timer < _timerThreshold)
    {
        print("Player has sung");
        _playerHasSang = true;
        StartCoroutine(Player());
    }
    if (!NpcHasSung && _npcIsSinging && _timer < _timerThreshold)
    {
        print("NPC done");
        NpcHasSung = true;
        StartCoroutine(NPC());
    }
    
    CheckSungPlayers();
    
    if (_everyoneHasSang) PickWinner();
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private IEnumerator NPC()
{
    yield return new WaitForSeconds(7f);
    _npcDone?.Invoke();
}

private IEnumerator Player()
{
    yield return new WaitForSeconds(20f);
    _playerDone?.Invoke();
}
private IEnumerator OnWin()
{
    yield return new WaitForSeconds(18.5f);
    _onWin?.Invoke();
    
    var randomNumber = Random.Range(0, 2);
    
    if(randomNumber == 0) _characters[_data.CharacterChoice].gameObject.SetActive(true);
    else if(randomNumber == 1) _characters[4].gameObject.SetActive(true);

    _winscreen.EnableWinScreen(true);
}`
                },
                {
                    type: "text", 
                    content: "Once both the player and AI have sung, the winner will be selected and displayed via a UI screen that shows the player's chosen character. This UI screen will later rotate for a bigger effect."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Update()
{
    if (!_spinnable) return;

    transform.Rotate(0, _turnSpeed * Time.deltaTime, 0);
}

/// summary
/// Sets to allows to turn this UI element. And turns it on.
/// param name="value" Whether to spin or not. /param
public void EnableWinScreen(bool value)
{
    gameObject.SetActive(value);
    StartCoroutine(DelaySpin(value));
}

private IEnumerator DelaySpin(bool value)
{
    yield return new WaitForSeconds(_timeUntilSpin);
    _spinnable = value;
}`
                }
            ]
        },
        {
            title: "Post Mortem",
            description: "This project was a great first experience in VR game development. Working with a fun and talented team at XR-Lab, I had the opportunity to learn a lot while also serving as both a game developer and scrum master.<br><br>The goal was to create a VR multiplayer karaoke game based on the TV show Beste Zangers. Though multiplayer features didn’t make it to the final release due to time constraints, I learned valuable lessons in multiplayer design and development. This experience highlighted the importance of planning with multiplayer in mind, even if it's not the immediate focus.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "Kara-oké/AVROTROS certificate.jpeg", 
                    size: "100", 
                    alt: "Certificate", 
                    caption: "Figure 10: Certificate form AVROTROS" 
                },
                { 
                    type: "image", 
                    src: "Kara-oké/KrabHasTheMoon.jpeg", 
                    size: "100", 
                    alt: "Moon crab", 
                    caption: "Figure 11: Crab that holds the moon." 
                },
                {
                    type: "text", 
                    content: "One standout aspect was the special effects system, which added a lot of excitement to the karaoke performances, even though we had to automate effects instead of letting players trigger them. Another interesting challenge was building the character selection system, designed for multiplayer but left unused in the final product.<br><br>Despite the issues, such as an unfinished win system and the game's overall instability, the project was a fantastic learning experience. I improved my skills in VR input systems, volumetric lighting with URP, and collaborating with a great customer, AVROTROS. I’m proud of what the team achieved, given the time we had, and the lessons learned will definitely help me in future projects."
                }
            ]
        }
    ]
};
