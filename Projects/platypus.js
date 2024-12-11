const project = {
    name: "Platypus",
    description: "Platypus is a passion project of mine—a <highlight-text>platformer featuring innovative movement options</highlight-text>. At my own pace, I developed several in-depth features, including a state machine, a pickup system with delivery functionality, a ground checker, and various smaller components for the game loop. Originally created for my portfolio in 2022, this project showcases my skills and ambitions.<br><br>Throughout the development process, I engaged heavily in programming as well as art creation. I have a particular fondness for pixel art, and I’m pleased with how the player character turned out, complete with amusing animations. Additionally, I experimented with integrating shaders using the <highlight-text>Universal Render Pipeline</highlight-text> (URP), such as an outline shader for the entities.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2022-2023" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "8 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-tools", label: "Creative Tool", value: "Photoshop" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/bas-boop/Platypus-game" },
        { icon: "fab fa-artstation", name: "Artstation", url: "https://www.artstation.com/artwork/qeNXXL" },
        { icon: "fas fa-tasks", name: "Tasks Board", url: "https://trello.com/b/hPXQKk13/platypus-game" }
    ],
    features: [
        {
            title: "Abstract StateMachine",
            description: "I needed more control over the player's state, so I developed a State Machine to improve it. While I was at it, I decided to <highlight-text>make it abstract</highlight-text>, allowing it to be reused for other entities, such as enemies, to speed up development. This approach emphasizes the <highlight-text>Single Responsibility Principle</highlight-text> (S.R.P.); otherwise, I could have implemented the entire player in a single class. Through this feature, I gained a better understanding of abstract classes and developed a <highlight-text>strong passion for exploring code in depth</highlight-text>.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "PlatypusMedia/StateMachine, Player & Enemy UML.jpeg", 
                    size: "100", 
                    alt: "Statemachine UML",
                    caption: "Figure 1: UML of all statemachine, see it in <a href=\"PlatypusMedia/Abstract StateMachine, Player & Enemy UML.pdf\" target=\"_blank\" class=\"link\">PDF</a> form.",
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Switch the current targetState to a different one.
/// Is it valid to switch targetState?
/// </summary>
/// <param name="targetState">Give target state to switch into.</param>
/// <param name="isCalledFromExitState">If the SwitchState is called form a ExitState function, this needs to be true!</param>
public void SwitchState(BaseState targetState, bool isCalledFromExitState = false)
{
    if (!currentState.IsValidToSwitch)
    {
        StartCoroutine(AddStateInQueue(targetState));
        
        if(!_switchStateQueue.Contains(targetState)) return;
        
        Debug.LogWarning("Switching targetState was not valid!!!\\n" + currentState);
        return;
    }
    
    if (!isCalledFromExitState) currentState.ExitState(this);
    currentState = targetState;
    targetState.EnterState(this);
}`,
                    breakRow: true
                },
                {
                    type: "text", 
                    content: "Here’s where the magic happens: the <highlight-text>SwitchState</highlight-text> function. It takes a target state as a parameter to switch into, along with a boolean to check if we’re switching from an exit state.<br><br>Switch state queue?<br><br>I integrated an <highlight-text>input buffer</highlight-text> into the state machine, creating a queue to handle state transitions. For instance, if the player wants to jump immediately after landing while still in the air, this queue makes it possible. Without the queue, the state switch wouldn’t register as valid if the player wasn’t fully grounded. With the queue, we add the jump state to it. If the player lands within a set number of seconds, we execute the jump. If not, we remove the queued state after the time limit expires.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "PlatypusMedia/StateQueue.gif", 
                    size: "100", 
                    alt: "State queue gif",
                    caption: "Figure 2: Input buffer with the state queue.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "PlatypusMedia/PlayerStateManager-Inspector.jpg", 
                    size: "100", 
                    alt: "Inspector",
                    caption: "Figure 3: Inspector",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Switch the current targetState to a different one.
/// Is it valid to switch targetState?
/// </summary>
/// <param name="targetState">Give target state to switch into.</param>
public void SwitchState(PlayerState targetState)
{
    var state = targetState switch
    {
        PlayerState.Idle => _idleState,
        PlayerState.Walking => _walkingState,
        PlayerState.Dashing => _dashState,
        PlayerState.Rolling => _rollState,
        PlayerState.Smacking => _smackState,
        PlayerState.Falling => _fallingState,
        _ => startingState
    };
    
    base.SwitchState(state);
    if (currentState != state) return;
    
    PreviousPlayState = _currentPlayerState;
    _currentPlayerState = targetState;
}

/// <summary>
/// This function is used for Unity Events, because they can not have an Enum as parameter.
/// </summary>
/// <param name="enumValue">The PlayerState in int variable.</param>
public void SwitchStateEvent(int enumValue) => SwitchState((PlayerState)enumValue);`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public abstract class BaseState : MonoBehaviour
{
    protected StateMachineManager Parent;
    public bool IsValidToSwitch { get; protected set; }

    public void SetParent(StateMachineManager targetMachine) => Parent = targetMachine;

    public virtual void EnterState(StateMachineManager stateMachine) => IsValidToSwitch = false;
    public abstract void UpdateState(StateMachineManager stateMachine);
    public abstract void FixedUpdateState(StateMachineManager stateMachine);
    public abstract void ExitState(StateMachineManager stateMachine);
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "A state machine needs states to switch between. I want each state to have four common features: <highlight-text>Enter, Exit, Update, and FixedUpdate</highlight-text>. This setup gives me full control over each entity’s state.<br><br>Since it’s an abstract state machine, I applied the same principle to the states themselves. The <highlight-text>BaseState</highlight-text> class serves as the foundation, from which we can create specific state classes, like <highlight-text>PlayerBaseState</highlight-text>. This class uses a <highlight-text>RequireComponent</highlight-text> attribute to ensure it only works with the player’s state machine, enforcing that only the correct state machine type is applied.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[RequireComponent(typeof(PlayerStateManager))]
public abstract class PlayerBaseState : BaseState
{
    #region BaseState to PlayerState

    public override void EnterState(StateMachineManager entity)
    {
        base.EnterState(Parent);
        EnterState((PlayerStateManager) Parent);
    }

    public override void UpdateState(StateMachineManager entity) => UpdateState((PlayerStateManager)Parent);
    public override void FixedUpdateState(StateMachineManager entity) => FixedUpdateState((PlayerStateManager)Parent);
    public override void ExitState(StateMachineManager entity) => ExitState((PlayerStateManager)Parent);

    #endregion

    
    #region Functions called by state's

    protected abstract void EnterState(PlayerStateManager player);
    protected abstract void UpdateState(PlayerStateManager player);
    protected abstract void FixedUpdateState(PlayerStateManager player);
    protected abstract void ExitState(PlayerStateManager player);

    #endregion
}`,
                    breakRow: false
                },
            ]
        },
        {
            title: "Player Dash State",
            description: "This feature was the spark that started the entire project, adding a unique movement mechanic to the game. While developing <a href=\"https://www.bas-de-reus.nl/Projects/OperationStarfall#Force-System\" target=\"_blank\" class=\"link\">Operation Strafall</a>, I created a developer tool to test the force system. Initially, this tool allowed the player to teleport to any position clicked on the screen. Then I thought, “Why not turn this into a jump?” And so, the dash was born: by clicking anywhere on the screen, the player dashes to that location with added physics for a dynamic effect.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "PlatypusMedia/Platypus_Player_Concept.png", 
                    size: "80", 
                    alt: "Player concept",
                    caption: "Figure 4: The player concept design, focused on movement options.",
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void ActivateDash(PlayerStateManager player)
{
    if (!player.moveData.CanMove || player.moveData.IsDashing || !player.moveData.GroundChecker.IsGrounded)
    {
        IsValidToSwitch = true;
        player.SwitchState(PlayerState.Idle);
        return;
    }
    
    StartCoroutine(StartDash(player));
}
                    
private void Dash(PlayerStateManager player)
{
    var dashDirection = DashDirection(player.moveData.MouseWorldPosition);

    if (dashDirection.magnitude < maxDashBound) player.moveData.Rigidbody.AddForce(dashDirection * dashForcePower, ForceMode2D.Impulse);
    else player.moveData.Rigidbody.AddForce(dashDirection.normalized * fullDashForcePower, ForceMode2D.Impulse);

    player.moveData.SetMoveDirection(dashDirection);
    player.moveData.WasDashing = true;
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private IEnumerator StartDash(PlayerStateManager player)
{
    if (DashDirection(player.moveData.MouseWorldPosition).y < 0)
    {
        player.moveData.WasDashing = false;
        IsValidToSwitch = true;
        player.SwitchState(PlayerState.Idle);
        yield break;
    }

    player.moveData.IsDashing = true;
    player.moveData.Animator.SetBool("IsDashing", true);
    
    yield return new WaitForSeconds(PreDashAnimationTime);
    
    Dash(player);
    
    yield return new WaitForSeconds(dashTime);

    IsValidToSwitch = true;
    player.moveData.IsDashing = false;
    player.moveData.Animator.SetBool("IsDashing", false);
    
    player.SwitchState(PlayerState.Falling);
    
    yield return null;
}`,
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "PlatypusMedia/Dash.gif", 
                    size: "100", 
                    alt: "Dash gif",
                    caption: "Figure 5: Player dash showcase.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "When making a platformer, movement is key. To manage this, I created a <highlight-text>MovementData</highlight-text> class to handle and process relevant data, functioning somewhat like a mediator.<br><br>For instance, the player’s mouse position on the screen follows this path: <highlight-text>InputParser -> PlayerMoveData -> DashState</highlight-text>. This flow is also demonstrated in the code below.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `// Inputparser
public Vector2 SetMousePos()
{
    var mousePos = _playerControlsActions["MousePosition"].ReadValue<Vector2>();
    return Camera.main.ScreenToWorldPoint(new Vector2(mousePos.x, mousePos.y));
}

// Move data
public Vector2 MouseWorldPosition { get; set; }
public Vector2 MoveDirection { get; private set; }
public Vector2 LastMoveDirection => _lastMoveDirection;
private Vector2 _lastMoveDirection;

// Dash state
private void Dash(PlayerStateManager player)
{
    var dashDirection = DashDirection(player.moveData.MouseWorldPosition);

    if (dashDirection.magnitude < maxDashBound) player.moveData.Rigidbody.AddForce(dashDirection * dashForcePower, ForceMode2D.Impulse);
    else player.moveData.Rigidbody.AddForce(dashDirection.normalized * fullDashForcePower, ForceMode2D.Impulse);

    player.moveData.SetMoveDirection(dashDirection);
    player.moveData.WasDashing = true;
}

private Vector2 DashDirection(Vector2 mouseWorldPos)
{
    var currentPos = (Vector2)transform.position;
    return mouseWorldPos - currentPos;
}`,
                    breakRow: false
                },
            ]
        },
        {
            title: "Ground Checker",
            description: "A reliable ground checker is essential, as both the dash and roll mechanics depend heavily on it. A single line cast downwards isn’t sufficient, and two lines on each side still leave gaps. Instead, using a <highlight-text>circle cast</highlight-text> provides better coverage, offering both thickness and variable height detection.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "PlatypusMedia/GroundChecker.gif", 
                    size: "100", 
                    alt: "Groundchecker gif",
                    caption: "Figure 6: Groundchecker in action, with gizmos enabled.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private bool _isOnGround;
private bool _leavesGround;

[Header("Debug")]
[SerializeField] private bool gizmos;
[SerializeField] private Color gizmosColor = Color.cyan;

[Header("Settings")]
[SerializeField] private float rayRadius = 1f;
[SerializeField] private LayerMask thisIsGround;
[SerializeField] private Vector2 offSet;
[field: SerializeField] public bool IsGrounded { get; private set; }

private enum GroundState
{
    Grounded,
    Aired
}

private GroundState _currentState;

[SerializeField] private UnityEvent onGroundEnter = new UnityEvent();
[SerializeField] private UnityEvent onGroundLeave = new UnityEvent();`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void FixedUpdate()
{
    var origin = transform.position + new Vector3(offSet.x, offSet.y, 0);
    IsGrounded = Physics2D.OverlapCircle(origin, rayRadius, thisIsGround);

    _currentState = IsGrounded ? GroundState.Grounded : GroundState.Aired;

    switch (_currentState)
    {
        case GroundState.Grounded when !_isOnGround:
            onGroundEnter?.Invoke();
            _isOnGround = true;
            break;
        case GroundState.Grounded when !_leavesGround:
            onGroundLeave?.Invoke();
            _leavesGround = true;
            break;
    }
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void OnDrawGizmos()
{
    if (!gizmos) return;
    
    var origin = transform.position + new Vector3(offSet.x, offSet.y, 0);
    Gizmos.color = gizmosColor;
    Gizmos.DrawWireSphere(origin, rayRadius);
}`,
                    breakRow: false
                },
                
            ]
        },
        {
            title: "Outline shader",
            description: "To help entities like the player, enemies, and pickups stand out from the background, I wanted an <highlight-text>outline effect</highlight-text> for each. Redrawing every sprite with an outline isn’t efficient, so a shader is the perfect solution. By simply applying a material with this shader and selecting an outline color, the effect is ready to go.<br><br>Since the game has a pixel art style, the shader only needs to expand the outline in four directions. It also includes an <highlight-text>option to fill in the corners</highlight-text>, allowing for an outline in all eight directions if needed.<br><br>However, there’s one limitation: if the outline thickness is too large, it can overflow beyond the sprite bounds, as shown by the orange shape in Figure 7. When this happens, the outline is clipped at the edges, which breaks the intended effect of a clean outline.",
            wide: false,
            elements: [
                {
                    type: "imageSlider",
                    leftImage: "PlatypusMedia/ShaderShowCase1.png",
                    rightImage: "PlatypusMedia/ShaderShowCase2.png",
                    caption: "Figure 7: Outline shader on the player, with 2 configurations.",
                    size: "",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "PlatypusMedia/OutlineShader.png",
                    size: "90", 
                    alt: "Shadergraph", 
                    caption: "Figure 8: Main shader graph of this outline.",
                    breakRow: true
                },
                { 
                    type: "image", 
                    src: "PlatypusMedia/SubShader.png", 
                    size: "100", 
                    alt: "Sub shadergraph", 
                    caption: "Figure 9: Sub shader graph of this outline.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "The shader uses sub-shaders, which function like reusable code blocks with parameters—an approach known as DRY (Don’t Repeat Yourself). Instead of writing the same code four/eight times, each sub-shader handles a specific direction for the outline. Simply specify the direction the sub-shader should apply, and it’s ready to go.",
                    breakRow: false
                },
            ]
        },
        {
            title: "Why development stopped",
            description: "During development, I encountered a bug that proved challenging to resolve at the time. When the player was falling or airborne and pressed against a wall, they would get stuck. Even after releasing the movement controls, the player would remain stuck to the wall. Fixing this issue was difficult for a few reasons.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "PlatypusMedia/Wall.png", 
                    size: "60", 
                    alt: "Player stuck",
                    caption: "Figure 10: Player stuck on wall.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "PlatypusMedia/WallBugFind.png", 
                    size: "100", 
                    alt: "Bug screach",
                    caption: "Figure 11: Finding out why the player is stuck?",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "I eventually found a solution: adding a thin, frictionless collider to walls, which would allow the player to slide off as expected. However, I didn’t want to manually apply this collider to every wall, so I aimed to automate it across each tilemap. Unfortunately, this task was more complex than I anticipated, and I paused development as a result. The solution was solid and should have worked, but automating the collider placement for each wall was beyond my skill level at the time.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "PlatypusMedia/FrictionWall.png", 
                    size: "100", 
                    alt: "Frictionless wall",
                    caption: "Figure 12: The simple soluction with frictionless wall.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

/// <summary>
/// This is not a finished class, stopped with it during development.
/// </summary>
public class NoSlideWallsGenerator : MonoBehaviour
{
    [SerializeField] private GameObject noSlideWall;
    [SerializeField] private Tilemap groundTilemap;
    [SerializeField] private TileBase[] groundTiles;

    private List<TileBase> _tiles = new List<TileBase>();

    private void Start()
    {
        FindGroundTiles();
    }

    private void FindGroundTiles()
    {
        // Get the bounds of the tilemap
        var bounds = groundTilemap.cellBounds;

        // Iterate through all positions in the bounds
        for (int x = bounds.x; x < bounds.x + bounds.size.x; x++)
        {
            for (int y = bounds.y; y < bounds.y + bounds.size.y; y++)
            {
                // Get the tile at the current position
                var tile = groundTilemap.GetTile(new Vector3Int(x, y, 0));

                // Check if the tile is not null (i.e., it's a TileBase)
                if (tile != null)
                {
                    // Do something with the TileBase
                    // Debug.Log("Found a TileBase at position: " + new Vector3Int(x, y, 0));
                    _tiles.Add(tile);
                }
            }
        }

        for (int index = 0; index < _tiles.Count; index++)
        {
            var tile = _tiles[index];
            var yes = tile == groundTiles[0] && tile == groundTiles[1] && tile == groundTiles[2];
            if (!yes)
            {
                _tiles.Remove(tile);
            }
            
            Debug.Log(_tiles[index]);
        }
    }
}`,
                    breakRow: false
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "As I mentioned earlier, Platypus was developed in 2022 for my portfolio. At that time, I successfully showcased my skills, which have since evolved and improved. I had ambitious plans for the game, including level designs focused on time-based or collection-based gameplay, as well as a small narrative featuring a parent platypus gathering food and defending its eggs from predators.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "PlatypusMedia/StateQueue.gif", 
                    size: "100", 
                    alt: "State queue gif",
                    caption: "Figure 2 again: Input buffer with the state queue.",
                    breakRow: false
                },
                {
                    type: "imageSlider",
                    leftImage: "PlatypusMedia/ShaderShowCase1.png",
                    rightImage: "PlatypusMedia/ShaderShowCase2.png",
                    caption: "Figure 7 again: Outline shader on the player, with 2 configurations.",
                    size: "",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "I would love to revisit this project, but I recognize that I would need to start from scratch, as the fundamentals are flawed in many ways. I created a mock-up for the level featuring the platypus, which I now use as my Discord profile picture. It serves as a constant reminder of my aspirations for the future. Perhaps one day, I’ll create my own company and bring this game to life.",
                    breakRow: false
                },
                {
                    type: "image", 
                    src: "PlatypusMedia/Enviorment mock-up.png", 
                    size: "100", 
                    alt: "Enviorment mock-up",
                    caption: "Figure 13: Enviorment mock-up.",
                    breakRow: true
                },
            ]
        }
    ]
};
