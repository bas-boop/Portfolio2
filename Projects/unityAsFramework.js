const project = {
    name: "Unity as a framework",
    description: "I was challenged to make a code only game. But to not make everything I was allowed to have 1 entry point in a game engine, like Unity's Update or Unreal's Tick. So I explored how to make my own game systems, without relying on Unity's built-in game architecture. Sometimes fighting with the existing systems to make it work.<br><br>So I made a very simple 2D top-down shooting game with enemies that wander around and chase the player when in range. All made with custom game architecture using design patterns.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2025" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "4 weeks" },
        { icon: "fas fa-cogs", label: "Framework", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/bas-boop/IntegratedGameplaySystem" },
        { icon: "fas fa-gamepad", name: "Download game", url: "https://github.com/bas-boop/IntegratedGameplaySystem/releases/tag/1.0" },
    ],
    features: [
        {
            title: "Gameobject Component Library",
            description: "Since the project was about using <highlight-text>Unity only for visuals and audio</highlight-text>, I created a <highlight-text>custom object management system</highlight-text> that acts as a centralized registry for all GameObjects. This library provides a <highlight-text>clean architecture</highlight-text> for creating, accessing, and managing game entities without relying on Unity's traditional GameObject instantiation and scene hierarchy. The system includes <highlight-text>type-safe generic methods</highlight-text> for retrieving components and GameObjects, making the codebase more maintainable and type-checked at compile time rather than runtime.",
            wide: true,
            elements: [
                {
                    type: "code",
                    language: "cs",
                    code: `public sealed class GameobjectComponentLibrary : MonoBehaviour
{
    private static readonly Dictionary<string, GameObject> _gameObjects = new ();

    // Get or create a GameObject by name
    public static GameObject GetGameObject(string gameObjectName)
    {
        if (_gameObjects.ContainsKey(gameObjectName))
            return _gameObjects[gameObjectName];
        return CreateGameObject(gameObjectName);
    }
    
    // Type-safe generic retrieval
    public static GameObject GetGameObject<T>() where T : Component
    {
        return _gameObjects.Values.FirstOrDefault(go => 
            go != null && go.GetComponent<T>() != null);
    }

    public static T[] GetGameObjectComponents<T>() where T : Component
    {
        return _gameObjects.Values
            .Select(go => go.GetComponent<T>())
            .Where(component => component != null)
            .ToArray();
    }

    public static GameObject CreateGameObject(string gameObjectName)
    {
        if (_gameObjects.ContainsKey(gameObjectName))
            return _gameObjects[gameObjectName];
        
        GameObject newGameObject = new (gameObjectName);
        _gameObjects.Add(newGameObject.name, newGameObject);
        return _gameObjects.Last().Value;
    }
}`,
                    breakRow: false
                },
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/GameUml.png",
                    size: "100",
                    alt: "Game architecture UML",
                    caption: "Figure 1: Complete class diagram and how they integrate with the GameobjectComponentLibrary.",
                    breakRow: true
                },
                {
                    type: "text",
                    content: "<strong>How it's used:</strong> The library is accessed throughout the game to manage the entire entity system. For example, in the <highlight-text>PlayerManager</highlight-text>, it's used to create the player GameObject and all its child objects (visual, firepoint), add components dynamically, and establish parent-child relationships. This centralized approach ensures all GameObjects are tracked in one place and can be efficiently queried by type or name.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `// PlayerManager creation using the library
private void CreateComponents()
{
    GameobjectComponentLibrary.CreateGameObject(NAME);
    GameobjectComponentLibrary.CreateGameObject(VISUAL);
    GameobjectComponentLibrary.CreateGameObject(FIREPOINT);
    GameobjectComponentLibrary.SetParent(VISUAL, NAME);
    GameobjectComponentLibrary.SetParent(FIREPOINT, NAME);

    // Add components dynamically
    _rigidbody2D = GameobjectComponentLibrary.AddComponent<Rigidbody2D>(NAME);
    _inputParser = GameobjectComponentLibrary.AddComponent<InputParser>(NAME);
    _shooter = GameobjectComponentLibrary.AddComponent<Shooter>(NAME);
    
    _thisGameObject = GameobjectComponentLibrary.GetGameObject(NAME);
}`
                },
                {
                    type: "code",
                    language: "cs",
                    code: `// Centralized collision detection using the library
private void UpdateCollision()
{
    Trigger[] allColliders = 
        GameobjectComponentLibrary.GetGameObjectComponents<Trigger>();

    for (int i = 0; i < allColliders.Length; i++)
    {
        for (int j = i + 1; j < allColliders.Length; j++)
        {
            if (allColliders[i].enabled && allColliders[j].enabled)
                allColliders[i].IsColliding(allColliders[j]);
        }
    }
}`

                },
                {
                    type: "text",
                    content: "<strong>Game loop integration:</strong> The <highlight-text>TheGame</highlight-text> class manages all game entities through a list of <highlight-text>IGameobject</highlight-text> interfaces, coordinating their lifecycle with custom OnStart, OnUpdate, and OnFixedUpdate methods. Additionally, the collision system uses the library to efficiently retrieve all <highlight-text>Trigger components</highlight-text> across all GameObjects, enabling a centralized O(n²) collision check without scene iteration.",
                    breakRow: false 
                },
            ]
        },
        {
            title: "State machine",
            description: "A flexible and reusable <highlight-text>Finite State Machine</highlight-text> architecture that manages entity behavior through well-defined states. The system uses a <highlight-text>shared data dictionary</highlight-text> to pass information between states, eliminating tight coupling and making it easy to add new states or behaviors without modifying existing code.",
            wide: false,
            elements: [
                {
                    type: "text",
                    content: "The Finite State Machine is the core controller that manages state transitions. Each state is <highlight-text>automatically registered</highlight-text> in a shared dictionary upon FSM creation, allowing states to retrieve other states and shared data without direct references. The <highlight-text>SwitchState method</highlight-text> handles the lifecycle: it initializes the state on first use, calls DoExit on the current state, and calls DoEnter on the new state, ensuring clean transitions.",
                    breakRow: true
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public sealed class FSM
{
    private State _currentState;
    public readonly DictWrapper sharedData = new ();

    public FSM(IEnumerable<State> states)
    {
        foreach (State state in states)
        {
            sharedData.Set(state.GetType().Name, state);
        }
    }
    
    public void UpdateState()
    {
        if (_currentState != null)
            _currentState.DoUpdate();
    }
    
    public void FixedUpdateState()
    {
        if (_currentState != null)
            _currentState.DoFixedUpdate();
    }

    public void SwitchState(State targetState)
    {
        if (!targetState.isInit)
            targetState.Init(this, sharedData);
        
        _currentState?.DoExit();
        _currentState = targetState;
        _currentState.DoEnter();
    }
}`,
                    breakRow: false
                },
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/StateMachineUML.png",
                    size: "80",
                    alt: "State Machine UML diagram",
                    caption: "Figure 2: UML diagram showing the FSM architecture",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The <highlight-text>DictWrapper</highlight-text> is a type-safe generic dictionary that allows states to safely retrieve shared data without knowing about specific types beforehand. States access shared references like the Transform, Rigidbody, and other state objects through this dictionary, promoting <highlight-text>loose coupling</highlight-text> and making the system extensible.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public abstract class State
{
    public bool isInit;
    
    protected FSM p_owner;
    protected DictWrapper p_sharedData;
    
    public abstract void DoEnter();
    public abstract void DoExit();
    public abstract void DoUpdate();
    public abstract void DoFixedUpdate();

    public void Init(FSM owner, DictWrapper sharedData)
    {
        p_owner = owner;
        p_sharedData = sharedData;
        isInit = true;
    }
}`
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public sealed class DictWrapper
{
    private readonly Dictionary<string, object> _data = new ();

    public T Get<T>(string key)
    {
        if (_data.TryGetValue(key, out object value))
            return (T)value;
        return default;
    }

    public void Set<T>(string key, T value) => _data[key] = value;
}`
                },
                {
                    type: "text",
                    content: "The EnemyManager creates three states (Idle, Wander, Attack) and registers them in the FSM's shared data. It also stores critical references like the Transform and Rigidbody so states can access them without direct knowledge of the EnemyManager. This design allows the same FSM to be reused for any entity type.",
                    breakRow: false
                },
                
                {
                    type: "code",
                    language: "cs",
                    code: `_states = new List<State>()
{
    new Idle(),
    new Wander(),
    new Attack(GameobjectComponentLibrary.GetGameObject("Player").transform),
};
_fsm = new (_states);

// Register all states and shared data
_fsm.sharedData.Set("Idle", _states[0]);
_fsm.sharedData.Set("Wander", _states[1]);
_fsm.sharedData.Set("Attack", _states[2]);
_fsm.sharedData.Set("Transform", _thisGameObject.transform);
_fsm.sharedData.Set("Rb", _rigidbody2D);

// Start with Idle state
_fsm.SwitchState(_states[0]);`,
                    breakRow: true
                },
                {
                    type: "text",
                    content: "The Idle state waits for a timer to complete, then randomly transitions to either Wander or Attack. It demonstrates how states access shared data and trigger transitions through the FSM.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public sealed class Idle : State
{
    private const float TIME_TO_BE_IDLE = 5;
    private Timer _idleTimer;

    public override void DoEnter()
    {
        _idleTimer = new (TIME_TO_BE_IDLE);
        _idleTimer.OnTimerDone += DoSomeThing;
        _idleTimer.Start();
    }

    public override void DoUpdate() => _idleTimer.Tick(Time.deltaTime);

    private void DoSomeThing()
    {
        _idleTimer.OnTimerDone = null;
        _idleTimer.Stop();

        // Random transition to Wander or Attack
        if (CoinFlip.Flip())
            p_owner.SwitchState(p_sharedData.Get<Wander>("Wander"));
        else
            p_owner.SwitchState(p_sharedData.Get<Attack>("Attack"));
    }
}`
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public sealed class Wander : State
{
    private const float SPEED = 10f;
    private const float ARRIVE_THRESHOLD = 0.5f;
    
    private Rigidbody2D _ourRb;
    private Vector2 _positionToWanderTo;

    public override void DoEnter()
    {
        _ourRb = p_sharedData.Get<Rigidbody2D>("Rb");
        PickNewWanderPosition();
    }

    public override void DoFixedUpdate()
    {
        Vector2 direction = (_positionToWanderTo - _ourRb.position).normalized;
        _ourRb.AddForce(direction * (SPEED * Time.deltaTime));

        if (Vector2.Distance(_ourRb.position, _positionToWanderTo) <= ARRIVE_THRESHOLD)
            p_owner.SwitchState(p_sharedData.Get<Idle>("Idle"));
    }
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The Wander state picks a random position and moves toward it. Once arrived, it transitions back to Idle. It retrieves the Rigidbody from shared data and uses <highlight-text>DoFixedUpdate</highlight-text> for physics calculations.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The Attack state chases the player for a set duration using a timer. It retrieves the player's Transform from shared data and applies force toward it. This demonstrates how states can access external entities and implement complex behaviors.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public sealed class Attack : State
{
    private const float TIME_TO_CHASE = 15;
    private const float MAX_SPEED = 15;
    
    private Rigidbody2D _ourRb;
    private Transform _ourTransform;
    private Transform _attackTransform;
    private Timer _chaseTimer;

    public override void DoEnter()
    {
        _ourRb = p_sharedData.Get<Rigidbody2D>("Rb");
        _ourTransform = p_sharedData.Get<Transform>("Transform");
        
        _chaseTimer = new (TIME_TO_CHASE);
        _chaseTimer.OnTimerDone += DoneChasing;
        _chaseTimer.Start();
    }

    public override void DoFixedUpdate()
    {
        if (_attackTransform == null) return;

        _ourRb.AddForce(_attackTransform.position - _ourTransform.position);
        if (_ourRb.linearVelocity.magnitude > MAX_SPEED)
            _ourRb.linearVelocity = _ourRb.linearVelocity.normalized * MAX_SPEED;
    }

    private void DoneChasing()
    {
        p_owner.SwitchState(p_sharedData.Get<Idle>("Idle"));
    }
}`
                }
            ]
        },
        {
            title: "Builder pattern",
            description: "A flexible object construction pattern that separates the creation of complex objects from their representation. The builder allows step-by-step configuration of objects with a clean, fluent API, making instantiation <highlight-text>readable and maintainable</highlight-text>.",
            wide: false,
            elements: [
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/BuilderUml.png",
                    size: "80",
                    alt: "Builder pattern UML diagram",
                    caption: "Figure 3: UML diagram showing the builder pattern architecture",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public class EnemyBuilder
{
    private readonly EnemyManager _enemy = new ();

    public EnemyBuilder SetName(string name)
    {
        _enemy._name = name;
        _enemy._visual = "Visual" + name;
        return this;
    }
    
    public EnemyBuilder SetStartPosition(Vector2 startPos)
    {
        _enemy._startPosition = startPos;
        return this;
    }
    
    public EnemyBuilder SetSize(float size)
    {
        _enemy._size = size;
        return this;
    }

    public EnemyManager Build()
    {
        return _enemy;
    }
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The builder pattern is implemented through a <highlight-text>nested static class</highlight-text> within the object being constructed. This approach encapsulates all configuration logic and provides a <highlight-text>fluent interface</highlight-text> for object creation. Each setter method returns the builder instance, enabling <highlight-text>method chaining</highlight-text> for expressive construction syntax.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The builder maintains a private reference to the object being constructed, allowing it to safely modify internal fields. Each setter method returns <highlight-text>this</highlight-text>, enabling fluent chaining. The <highlight-text>Build() method</highlight-text> finalizes construction and returns the configured object, ensuring all setup is complete before use.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The builder pattern significantly improves code readability when creating multiple EnemyManager instances. Each enemy is configured with specific properties in a clear, self-documenting way:",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `private void CreateObjects()
{
    _playerManager = new ();
    
    _enemyManager = new EnemyManager.EnemyBuilder()
        .SetName("TheSquareEnemy")
        .SetStartPosition(Vector2.one * 4)
        .SetSize(2)
        .Build();
    
    _enemyManager1 = new EnemyManager.EnemyBuilder()
        .SetName("TheSquareEnemy1")
        .SetStartPosition(Vector2.one * 25)
        .SetSize(5)
        .Build();
    
    _enemyManager2 = new EnemyManager.EnemyBuilder()
        .SetName("TheSquareEnemy2")
        .SetStartPosition(Vector2.one * -10)
        .SetSize(0.75f)
        .Build();
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "This pattern eliminates the need for multiple constructors with different parameter combinations (constructor overloading), making the API <highlight-text>more maintainable</highlight-text>. It also provides <highlight-text>optional configuration</highlight-text> – developers can set only the properties they need. The fluent interface makes code <highlight-text>self-explaining</highlight-text>, as the method names clearly indicate what each configuration step does.",
                    breakRow: true
                }
            ]
        },
        {
            title: "Object Pooling",
            description: "A high-performance pattern that reuses objects instead of instantiating and destroying them repeatedly. This significantly reduces memory allocations and garbage collection pressure, resulting in smoother gameplay with reduced frame stutters.",
            wide: true,
            elements: [
                {
                    type: "text",
                    content: "Object pooling is critical for games that frequently create and destroy objects (like bullets, particles, or enemies). Instead of allocating new memory and destroying objects, pooling maintains a pre-allocated queue of reusable objects. When needed, objects are dequeued and reactivated; when done, they're returned to the pool. This approach keeps memory usage stable and predictable, eliminating garbage collection spikes.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public T GetObject(Vector3 position, Quaternion rotation, Transform targetParent)
{
    T pooledObject = _objectQueue.Count == 0 
        ? CreateObject(targetParent)
        : _objectQueue.Dequeue();
    
    pooledObject.Activate(position, rotation);
    _dequeuedObjects.Add(pooledObject);
    return pooledObject;
}

public void ReturnObject(T obj)
{
    if (_objectQueue.Contains(obj))
        return;
    
    obj.Deactivate();
    _objectQueue.Enqueue(obj);
    _dequeuedObjects.Remove(obj);
}`,
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public interface IPoolable<T> where T : MonoBehaviour, IPoolable<T>
{
    public void Activate(Vector3 position, Quaternion rotation);
    public void Deactivate();
    public void ReturnToPool();
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The <highlight-text>ObjectPool<T></highlight-text> maintains a queue of available objects and a list of dequeued objects currently in use. GetObject() retrieves an object from the queue (or creates one if empty), activates it, and adds it to the dequeued list. ReturnObject() deactivates an object and returns it to the queue for reuse.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The <highlight-text>IPoolable<T> interface</highlight-text> defines the contract that all poolable objects must implement. Activate() prepares the object for use at a specific position, Deactivate() prepares it for reuse, and ReturnToPool() sends it back to the pool.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The Shooter system demonstrates object pooling in action. The pool is initialized with a bullet prefab, then bullets are retrieved and positioned when needed.",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/ObjectPoolingUml.png",
                    size: "100",
                    alt: "Object Pooling UML diagram",
                    caption: "Figure 4: UML diagram showing the object pooling architecture and relationships.",
                    breakRow: true
                },
                {
                    type: "code",
                    language: "cs",
                    code: `// Initialize the object pool in Shooter
Bullet bulletPrefab = GameobjectComponentLibrary.AddComponent<Bullet>("Bullet");
_bulletPool = new ObjectPool<Bullet>(transform, bulletPrefab);
_bulletPool.OnStart();

// Get a bullet from the pool and shoot
private void Shoot()
{
    _bulletPool.GetObject(_firePoint.position, _firePoint.rotation, null);
}`,
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `// The Bullet class implements lifecycle methods
public void Activate(Vector3 position, Quaternion rotation)
{
    transform.position = position;
    transform.rotation = rotation;
    gameObject.SetActive(true);
    
    Vector2 moveDirection = transform.up * _speed;
    _rb.AddForce(moveDirection, ForceMode2D.Impulse);
    Invoke(nameof(ReturnToPool), 20);
}

public void Deactivate()
{
    gameObject.SetActive(false);
    _rb.linearVelocity = Vector2.zero;
}

public void ReturnToPool() => ObjectPool.ReturnObject(this);`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "Without object pooling, rapid bullet firing would create hundreds of new GameObjects and destroy them constantly, causing garbage collection overhead and frame stutters. With pooling, the same 10-20 bullets are reused indefinitely. Activation is just a few method calls, and when bullets despawn, they're simply deactivated and returned to the queue, ready for the next shot.",
                    breakRow: false
                }
            ]
        },
        {
            title: "Observer event system",
            description: "A decoupled event system that allows different parts of the game to communicate without direct references to each other. This pattern eliminates tight coupling between systems (like enemies, player, and UI) by using a centralized event dispatcher that broadcasts events to all registered listeners.",
            wide: false,
            elements: [
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/ObserverUml.png",
                    size: "100",
                    alt: "Observer Pattern UML diagram",
                    caption: "Figure 5: UML diagram showing the observer pattern architecture and relationships.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `using System;
using System.Collections.Generic;

namespace Event
{
    public static class EventObserver
    {
        private static readonly Dictionary<ObserverEventType, Action> eventDict = new();

        public static void AddListener(ObserverEventType type, Action func)
        {
            eventDict.TryAdd(type, null); // checks if the type is already in the dict or not
            eventDict[type] += func;
        }
        
        public static void RemoveListener(ObserverEventType type, Action func)
        {
            if (eventDict.ContainsKey(type)
                && eventDict[type] != null)
                eventDict[type] -= func;
        }
        
        public static void InvokeEvent(ObserverEventType type)
        {
            if (eventDict.TryGetValue(type, out Action value))
                value?.Invoke();
        }
    }
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The observer pattern is fundamental for decoupled architectures. Instead of the PlayerManager directly calling the UI update method, or the EnemyManager knowing about game state, both systems register as listeners for specific events. When something important happens (enemy dies, player takes damage, game ends), the EventObserver broadcasts to all listeners – new listeners can be added without modifying existing code.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The EventObserver is a static utility class that maintains a dictionary mapping event types to action delegates. AddListener() registers a callback function for a specific event type, RemoveListener() safely unsubscribes listeners, and InvokeEvent() triggers all registered callbacks. The ObserverEventType enum defines all possible game events, ensuring type safety and preventing typos.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `namespace Event
{
    public enum ObserverEventType
    {
        GAME_BEGIN,
        GAME_END_LOSE,
        GAME_END_WON,
        ENEMY_COUNT,
    }
}`,
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `// EnemyUi listens to enemy count changes
public sealed class EnemyUi
{
    private int _currentCount;
    private TMP_Text _text;
    
    public EnemyUi(int count, TMP_Text text)
    {
        _currentCount = count + 1;
        _text = text;
    }
    
    public void UpdateUi()
    {
        _currentCount--;
        _text.text = $"Enemies remaining: {_currentCount}";
        
        if (_currentCount == 0)
            EventObserver.InvokeEvent(ObserverEventType.GAME_END_WON);
    }
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "When an enemy dies, the EnemyManager broadcasts the ENEMY_COUNT event. The EnemyUi listener responds by updating the enemy counter on screen. If the count reaches zero, it triggers the GAME_END_WON event.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "Similarly, PlayerManager broadcasts GAME_END_LOSE when the player dies, allowing the EventObserver to notify all listeners (UI, audio systems, restart logic, etc.) without the player knowing about them.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `// EnemyManager broadcasts when it dies
private void Remove()
{
    EventObserver.InvokeEvent(ObserverEventType.ENEMY_COUNT);
    
    _fsm = null;
    _collider = null;
    GameobjectComponentLibrary.RemoveGameobject(_visual);
    GameobjectComponentLibrary.RemoveGameobject(_name);
}`,
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `// PlayerManager broadcasts game loss
private void Die()
{
    EventObserver.InvokeEvent(ObserverEventType.GAME_END_LOSE);
    
    _collider = null;
    GameobjectComponentLibrary.RemoveGameobject(VISUAL);
    GameobjectComponentLibrary.RemoveGameobject(FIREPOINT);
    GameobjectComponentLibrary.RemoveGameobject(NAME);
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "TheGame class shows how <highlight-text>multiple listeners can respond to a single event</highlight-text>. When GAME_END_WON is triggered, two separate listeners execute: one hides the controls UI and another displays the win screen. This demonstrates the power of the pattern – adding new responses to events requires only a single line of code.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `private void AddEvents()
{
    // Enemy count listener
    EventObserver.AddListener(ObserverEventType.ENEMY_COUNT, () => _enemyUi.UpdateUi());
    
    // Game start
    EventObserver.AddListener(ObserverEventType.GAME_BEGIN,
        () => GameobjectComponentLibrary.GetUiElement("Controls").alpha = 0);
    
    // Game loss
    EventObserver.AddListener(ObserverEventType.GAME_END_LOSE,
        () => GameobjectComponentLibrary.GetUiElement("GameLost").alpha = 1);
    
    // Game win - two listeners for one event
    EventObserver.AddListener(ObserverEventType.GAME_END_WON,
        () => GameobjectComponentLibrary.GetUiElement("GameLost").alpha = 1);
    EventObserver.AddListener(ObserverEventType.GAME_END_WON,
        () => GameobjectComponentLibrary.GetUiElement("GameLost").text = "You won");
}`,
                    breakRow: true
                },
                {
                    type: "text",
                    content: "The main benefits are clear: systems don't need direct references to each other, new listeners can be added without modifying existing code, the same EventObserver handles any number of event types, and the event flow is explicit and easy to follow. This makes it trivial to add features like sound effects, particle effects, or analytics that respond to game events.",
                    breakRow: false
                }
            ]
        },
        {
            title: "Code visuals",
            description: "A fully code-driven visual system that generates sprites at runtime without using any image assets. Shapes, colors, and outlines are procedurally created, allowing visuals to be defined entirely in code while keeping Unity responsible only for rendering.",
            wide: true,
            elements: [
                
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/Square.png",
                    size: "50",
                    alt: "Observer Pattern UML diagram",
                    caption: "Figure 6: Square enemy",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/Triangle.png",
                    size: "50",
                    alt: "Observer Pattern UML diagram",
                    caption: "Figure 7: Triangle player",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "UnityAsFrameworkMedia/Circle.png",
                    size: "80",
                    alt: "Observer Pattern UML diagram",
                    caption: "Figure 8: Circle bullet",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "To stay consistent with the goal of using <highlight-text>Unity only as a rendering layer</highlight-text>, all visuals in the game are generated procedurally through code. Instead of importing sprite assets, shapes like squares, triangles, and circles are created at runtime using pixel-level texture manipulation. This makes the visual system <highlight-text>data-driven</highlight-text>, flexible, and completely decoupled from the Unity editor.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `namespace Visuals
{
    public enum ShapeType
    {
        SQUARE,
        TRIANGLE,
        CIRCLE
    }
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The <highlight-text>ShapeType enum</highlight-text> defines the available primitive shapes that can be generated. This allows game systems to request visuals symbolically (\"give me a circle enemy\") instead of referencing concrete assets, keeping visuals interchangeable and easy to extend.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `public static class SpriteMaker
{
    private const int SIZE = 100;
    private const int BORDER_THICKNESS = 5;
    private const float BORDER_COLOR_DARKNESS = 0.4f;

    public static void MakeSprite(
        SpriteRenderer spriteRenderer,
        ShapeType shapeType,
        Color color)
    {
        Texture2D tex = new (SIZE, SIZE);
        Color outlineColor = color * BORDER_COLOR_DARKNESS;

        switch (shapeType)
        {
            case ShapeType.SQUARE:
                DrawSquare(SIZE, BORDER_THICKNESS, tex, color, outlineColor);
                break;

            case ShapeType.TRIANGLE:
                DrawTriangle(SIZE, BORDER_THICKNESS, tex, color, outlineColor);
                break;

            case ShapeType.CIRCLE:
                DrawCircle(SIZE, BORDER_THICKNESS, tex, color, outlineColor);
                break;
        }

        tex.Apply();
        spriteRenderer.sprite = Sprite.Create(
            tex,
            new (0, 0, SIZE, SIZE),
            Vector2.one * 0.5f);
    }
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The <highlight-text>SpriteMaker</highlight-text> is a static utility responsible for generating textures pixel-by-pixel. Given a <highlight-text>ShapeType</highlight-text> and a base color, it creates a Texture2D, draws the shape with a darker outline for visual clarity, and converts it into a Sprite at runtime. This eliminates the need for any sprite files while still supporting distinct visual styles.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "Each shape has its own dedicated draw function that operates directly on the texture's pixels. The square uses boundary checks, the triangle uses a diagonal fill rule, and the circle uses distance-based math from the texture center. Borders are calculated using a configurable thickness value, ensuring consistent outlines across all shapes.",
                    breakRow: false
                },
                {
                    type: "code",
                    language: "cs",
                    code: `private static void DrawCircle(
    int size,
    int borderThickness,
    Texture2D tex,
    Color fillColor,
    Color outlineColor)
{
    int center = size / 2;
    float outerRadius = size / 2f;
    float innerRadius = outerRadius - borderThickness;

    for (int y = 0; y < size; y++)
    {
        for (int x = 0; x < size; x++)
        {
            float dx = x - center;
            float dy = y - center;
            float dist = Mathf.Sqrt(dx * dx + dy * dy);

            if (dist <= outerRadius)
                tex.SetPixel(
                    x,
                    y,
                    dist >= innerRadius
                        ? outlineColor
                        : fillColor);
        }
    }
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "This approach makes visuals <highlight-text>cheap to generate</highlight-text>, easy to tweak, and trivial to expand. New shapes can be added by extending the ShapeType enum and implementing a new draw method without touching prefabs, importing textures, or modifying existing game logic. It also ensures visual consistency across entities while keeping the project fully code-centric.",
                    breakRow: true
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "It was fun deep-diving in code and fighting with Unity's existing system. I learned a lot about architecture, maybe making my own game engine in the future. The project was not made to be played by players, just a learning experience for me.",
            wide: true,
            elements: [
                {
                    type: "text",
                    content: "This project was an assignment for school to learn about code architecture and design patterns. I already have done design patterns many times before, but this was the first time I really tried to make a full game system from scratch without relying on Unity's built-in features. It was a fun challenge to think about how to structure everything in a way that is flexible, maintainable, and decoupled from Unity's monolithic architecture.<br><br>After grading I did get the highest grade (89%) of the class, only missing point for UX as the player.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "Next time when I need to create a game engine or framework, I will not do it in Unity as Unity is not made for that. If I would make a game engine or framework from scratch, I would use some graphics library and a language like C++ or C# to not have some of the limitations that Unity gives.<br><br>Perhaps a good project during summer break, a simple 2D game engine from scratch in C++ using SFML.",
                    breakRow: false
                },
            ]
        }
    ]
};
