const project = {
    name: "Operation Starfall",
    description: "A 2.5D Metroidvania Couch Co-op based on 80's Sci-Fi cartoons. The game is built by students in a rotating team, under the guidance of 2 leads and teachers. The game revolves around momentum and features a unique Force System for movement.<br><br>Each quater year you as a student can be slected for this project, up to 4 quaters. This makes it posible to be here for 1 year or 10 weeks. At the time I was here the group of people working on this changed alot, so it would be around 30. But looking at the whole team would be 125+ people.<br><br>There are no github repository or trello link because it is a commercial game.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2022-2023" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "10 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum" },
        { icon: "fas fa-users", label: "Team Size", value: "2 leads, 30+ developers / artist" },
        { icon: "fa-solid fa-user-plus", label: "My Role", value: "Developer & Scrum Master" }
    ],
    links: [
        { icon: "fas fa-globe", name: "Neon Origins website", url: "https://www.neonorigins.com" }
    ],
    features: [
        {
            title: "Scrum Master Experience",
            description: "Served as Scrum Master for multiple sprints, including sprint retrospectives and managing tasks on Trello. I was responsible for facilitating sprint planning, poker, retrospectives, and ensuring tasks were properly organized on Trello. Working in this role taught me a lot about agile project management in a team environment.",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Force System",
            description: "This game features its own Force System, similar to Unity's Rigidbody but customized for enhanced momentum-based mechanics. I expanded this Force System to handle better <highlight-text>collision detection</highlight-text>, preventing players and drones from getting stuck in walls by ensuring they are placed next to or on top of obstacles. You could add a pervert direction the gameobject should be placed to.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/VisualSheet-Forcesystem-Postion-small.png",
                    size: "60", 
                    alt: "Visual sheet",
                    caption: "Figure 1: SetPosition function visual.",
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private ForceSystem _forceSystem;

public float radius = 1;
[SerializeField] private float collisionCastDistance = 10;

private readonly List<Vector3> _castDirections = new List<Vector3>()
{
    Vector3.up,
    Vector3.left,
    Vector3.right
};

public void SetPosition(Vector3 targetPosition, Vector3? desiredDirection = null)
{
    transform.position = targetPosition;

    Collider[] hitColliders = Physics.OverlapSphere(transform.position, radius, _forceSystem.GroundLayer);
    if (hitColliders.Length <= 0) return;

    var hit = ResolveCollision(hitColliders, desiredDirection);
    if (hit == null) return;

    transform.position = hit.Value.position + hit.Value.desiredDirection.normalized * radius;
}

private (Vector3 position, Vector3 desiredDirection)? ResolveCollision(Collider[] hitColliders, Vector3? desiredDirection)
{
    var currentCollider = hitColliders[0].gameObject;

    if (desiredDirection == null || desiredDirection == Vector3.zero)
    {
        return GetColliderExit(currentCollider);
    }

    var hit = GetClosestHit((Vector3) desiredDirection, currentCollider);
    if (hit == null) return null;

    return (((RaycastHit)hit).point, (Vector3)desiredDirection);
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private (Vector3 position, Vector3 desiredDirection)? GetColliderExit(GameObject currentCollider)
{
    var hits = new List<(Vector3 direction, RaycastHit hit)>();

    foreach (Vector3 direction in _castDirections)
    {
        var closestHit = GetClosestHit(direction, currentCollider);
        if(closestHit == null) continue;

        hits.Add((direction, (RaycastHit)closestHit));
    }

    if (hits.Count == 0) return null;

    var allDistances = hits.Select(valueTuple => valueTuple.hit.distance).ToList();

    var nearestIndex = allDistances.IndexOf(allDistances.Max());
    var nearestHit = hits[nearestIndex];

    return (nearestHit.hit.point, nearestHit.direction);
}

private RaycastHit? GetClosestHit(Vector3 desiredDirection, GameObject currentCollider)
{
    var currentPosition = transform.position;

    var origin = currentPosition + desiredDirection.normalized * collisionCastDistance;
    var maxDistance = (desiredDirection.normalized * collisionCastDistance).magnitude - radius;

    var hits = Physics.SphereCastAll(origin, radius, -desiredDirection.normalized, maxDistance, _forceSystem.GroundLayer).ToList();
    
    if (hits.Count == 0) return null;

    for (int i = hits.Count - 1; i >= 0; i--)
    {
        if (hits[i].collider.gameObject == currentCollider.gameObject) continue;

        hits.RemoveAt(i);
    }

    var distances = hits.Select(hit => hit.distance).ToList();
    var index = distances.IndexOf(distances.Max());

    return hits[index];
}`
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/Setposition-drone-before.gif",
                    size: "100", 
                    alt: "Drone in wall",
                    caption: "Figure 2: Drone getting stuck in wall by player sword attack.",
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/Setposition-drone-after.gif",
                    size: "100", 
                    alt: "Drone not in wall",
                    caption: "Figure 3: Drone bouncing off the wall after players sword attack."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `closestEnemy.GetComponent<ForceBody>.ClearForces();
playerPosition = transform.position;

var newEnemyPosition = playerPosition;
newEnemyPosition.x += gameObject.GetDirection() * enemySnapOffsetXMultiplier;
newEnemyPosition.y += enemySnapOffsetYMultiplier;

closestEnemy.transform.position = newEnemyPosition;`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `var enemyForceBody = closestEnemy.GetComponent<ForceBody>();
enemyForceBody.ClearForces();
playerPosition = transform.position;

var newEnemyPosition = playerPosition;
newEnemyPosition.x += gameObject.GetDirection() * enemySnapOffsetXMultiplier;
newEnemyPosition.y += enemySnapOffsetYMultiplier;

desireDirection = new Vector3(-newEnemyPosition.x, 0);
enemyForceBody.SetPosition(newEnemyPosition, desireDirection);`
                },
                {
                    type: "text", 
                    content: "Here above is an usecase for this SetPosition function. Before the drone was getting stuck in the wall by the players sword attack. After using the function the drone will bounce off the wall. This was great because it was also a bug fix."
                },
            ]
        },
        {
            title: "Pick-Up System",
            description: "Rebuilt the pick-up system with <highlight-text>SRP</highlight-text> (Single Responsibility Principle), introducing chains and ordered pickups. We reworked the existing pick-up system to add more features and structure. Pickups can now be chained in specific sequences, and events can trigger upon collecting all pickups in a scene or its chain.<br><br>With this feature, another developer and I practiced <highlight-text>pair programming</highlight-text>. We worked together on one machine and took turns writing the code. If one of us had an idea, we would <highlight-text>discuss it in depth</highlight-text> to see if it would work and if there might be a better way. This was a great way to collaborate on a feature, and both of us learned from each other.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[SerializeField] private GameObject visual;
[HideInInspector] [CanBeNull] public PickupChain parerentChain;

private bool _isPickedUp
public bool IsPickedUp
{
    get => _isPickedUp;
    set
    {
        _isPickedUp = value;
        SetActivation(_isPickedUp);
    }
}
    
public void Pickup() => PickupSystem.Instance.AddPickup(this);

public bool HasChain() => parentChain.HasPickups;

private void SetActivation(bool isPickedUp) => visual.SetActive(!isPickedUp);`
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/pick-up.gif",
                    size: "100", 
                    alt: "Picking up pickups",
                    caption: "Figure 4: Picking up the pick-ups, skipping one to show the chain."
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/PS-chain-incpector.png",
                    size: "100", 
                    alt: "Inspector view chains",
                    caption: "Figure 5: Inspector view of the pickup chains, red and blue boxes are 2 sperate chains."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public void AddPickup(Pickup targetPickup)
{
    targetPickup.IsPickedup = isOrderd ? AddOrderd(targetPickup) : AddUnorderd() ;

    if (!IsComplete) return;
    onChainComplete?.Invoke();
}

private bool AddUnorderd()
{
    _nextItemIndex++;
    return true;
}

private bool AddOrderd(targetPickup)
{
    var index = Array.IndexOf(pickups, pickup);
    if(index == _nextItemIndex)
    {
        _nextItemIndex++;
        return true;
    }

    return false;   
}`
                },
                {
                    type: "text", 
                    content: "Chains are a collection of pickups and can be ordered or unordered. If they are ordered, you can only pick up the pickups in the order you chained the pickups. When all are collected it will invoke the <highlight-text>On Chain Complete</highlight-text> event."
                },
                {
                    type: "text", 
                    content: "You have 1 PickupSystem class that manages chains and single pickups. Almost every piece of the system has events that can trigger things in the scene: When you pick up an individual pickup.<br>When you complete an entire chain.<br>When you have picked up all pickups in the entire scene"
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/PS-UML.png",
                    size: "100", 
                    alt: "UML Diagram of Pick-Up System",
                    caption: "Figure 6: UML diagram of the pickup system."
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/PS-structuur.png",
                    size: "100", 
                    alt: "Chain flow pickup system",
                    caption: "Figure 7: Chain flow of the pickup system."
                },
            ]
        },
        {
            title: "Player Movement Enhancements",
            description: "I have made significant improvements to player movement mechanics, focusing on jump momentum, ledge grabbing, and smoother deceleration. This was primarily a <highlight-text>research-driven feature</highlight-text> aimed at enhancing the overall gameplay experience and first time working in a big project. The optimized movement system allows players to maintain forward momentum if they stop walking mid-jump, preventing abrupt halts. Additionally, the deceleration mechanics enable players to take a few extra steps after releasing the movement keys, resulting in a more fluid and dynamic interaction within the game.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/YesMomentumJump.gif",
                    size: "100", 
                    alt: "Player jumping while moveing",
                    caption: "Figure 8: The player jumping while moveing left and right smoothly."
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/Deceleration.gif", 
                    size: "100", 
                    alt: "Player stoping with walking",
                    caption: "Figure 9: The player stoping with walking and decelerating by sliding."
                },
                {
                    type: "text", 
                    content: "This section provides insights into the code implementations that support the new movement features, illustrating how adjustments to reaction times and movement settings contribute to enhanced player control."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public void AdjustReactionTime(bool becomesNotReactive)
{
    if (IsSprinting || becomesNotReactive == !_isReactive) return;

    if (_isGrounded && _isReactive && becomesNotReactive)
    {
        movementForce.Duration *= decelarationMultiplier;
        _movementSettings[MovementStates.Sprinting] *= decelarationMultiplier;
        _movementSettings[MovementStates.Walking] *= decelarationMultiplier;
        _isReactive = false;
    }
    else if (!_isReactive && !becomesNotReactive)
    {
        movementForce.Duration /= decelarationMultiplier;
        _movementSettings[MovementStates.Sprinting] /= decelarationMultiplier;
        _movementSettings[MovementStates.Walking] /= decelarationMultiplier;
        _isReactive = true;
    }
}`
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public static void MovementSettings operator /(MovementSettings targetSettings, float divider)
{
    if (divider == 0)
    {
        thorw new DivideByZeroException();
    }
    
    targetSettings.groundSpeed /= divider;
    targetSettings.airSpeed /= divider;
    targetSettings.maxGroundAcceleration /= divider;
    targetSettings.maxAirAcceleration /= divider;
    return targerSettings;
}
    
public static void MovementSettings operator *(MovementSettings targetSettings, float multiplier)
{    
    targetSettings.groundSpeed *= divider;
    targetSettings.airSpeed *= divider;
    targetSettings.maxGroundAcceleration *= divider;
    targetSettings.maxAirAcceleration *= divider;
    return targerSettings;
}`
                },
                {
                    type: "text", 
                    content: "Grab release mechanics demonstrate how the player releases from ledges and adjusts their position accordingly. This would be diffrent when facing left or right. Or even when hanging from a drone, then you shouldn't get an offset."
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private Vector2 SetReleasePosition(GrabalePoint aGrabpoint, bool release = false)
{
    if (aGrabpoint == null) return parent.transform.position;

    var parentPosition = parent.transform.position;

    switch (aGrabpoint.GrabType)
    {
        case GrabType.LEFTEDGE
            parentPostion += release ? -realeaseOffset : (Vector3) releaseEdgeOffset;
            break;

        case GrabType.RIGHTEDGE
            parentPostion += release ? realeaseOffset : (Vector3) releaseEdgeOffset.InvertedX();
            break;

        default:
            return praentPosition;
    }
}`
                },
                { 
                    type: "image", 
                    src: "OperationStarfallMedia/Release.gif", 
                    size: "100", 
                    alt: "Player releasing the ledge",
                    caption: "Figure 10: The player releasing from a ledge and smoothly adjusting position after detaching."
                }
            ]
        },
        {
            title: "Post Mortem",
            description: "Operation Starfall was a pivotal project in my game development journey and the oldest in my portfolio. It marked my turning point, where I transitioned from smaller projects to handling advanced features like custom systems and complex mechanics.<br><br>This project allowed me to work on high-level features, such as the Force System, and deepen my understanding of game development on a professional scale. It also prepared me for the real-world work environment, improving my skills in both coding and project management.",
            wide: true,
            elements: [
                {
                    type: "text", 
                    content: "A big thank you to Alex Kentie and Berend Weij, whose guidance was invaluable throughout the project. Their mentorship made this experience transformative and set a strong foundation for my future work."
                },
            ]
        }
    ]
};