const project = {
    name: "Smoll knight + horse",
    description: "This project is a dynamiclly added html page. Used as a template for all other projects. Made for speeding up the creating process of project pages. As a developer I should make everything as lazy as possible.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2020" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "1 month" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/repository-link" },
        { icon: "fas fa-tasks", name: "Tasks Board", url: "https://trello.com/board-link" },
        { icon: "fas fa-gamepad", name: "Play on Itch.io", url: "https://itch.io/game-link" },
        { icon: "fab fa-artstation", name: "Artstation", url: "https://artstation.com/portfolio-link" }
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
        },{
            title: "Enum Extensions",
            description: "Under the hood, enums are essentially lists of numbers, allowing you to pass these numeric values to a variable. While these numbers can be easily modified, you may need to associate an enum with a string or a vector. <br><br>To address this, I created custom <highlight-text>Attributes</highlight-text> that store additional data for each enum constant. Simply call the enum constant to retrieve its associated value—whether it’s a string, vector, or another type—and you’re good to go.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public enum Fruit
{
    [StringValue("Sweet Apple")]
    Apple,
    
    [StringValue("Ripe Banana")]
    Banana,
    
    [StringValue("Juicy Orange")]
    Orange,
    
    [StringValue("Fresh Mango")]
    Mango,
    
    [StringValue("Grapes")]
    Grape
}`,
                    breakRow: false
                },
                {
                    type: "code", 
                    language: "cs", 
                    code: `public sealed class StringValue : Attribute
{
    public string Value { get; }

    public StringValue(string value) => Value = value;
}`,
                    breakRow: false
                },
                {
                    type: "code", 
                    language: "cs", 
                    code: `/// summary
/// Get the string of an enum type.
/// param name="value" The enum that you want the string from. /param
/// returns The StringValue, if not existing returns empty string. /returns
public static string GetString(this Enum value)
{
    Type type = value.GetType();
    FieldInfo fieldInfo = type.GetField(value.ToString());
    StringValue attribute = (StringValue) Attribute.GetCustomAttribute(fieldInfo, typeof(StringValue));

    return attribute?.Value ?? string.Empty;
}`,
                    breakRow: false
                },
                {
                    type: "code", 
                    language: "cs", 
                    code: `public void LogFruit()
{
    string fruitString = myFruit.GetString();
    Debug.Log($"The selected fruit is: {fruitString}");
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "With this extension logic in mind, why stop there? I wanted to implement a function that returns a random enum constant. I frequently used this feature in the practice exam for the cooking game. The reasons for not incorporating it in this project can be found in the post-mortem.",
                    breakRow: false
                },
                {
                    type: "code", 
                    language: "cs", 
                    code: `/// summary
/// Retrieves a random enum value of the specified type.
/// typeparam name="T" The enum type. /typeparam
/// returns A random enum value of type T. /returns
public static T GetRandomEnumValue<T>()
{
    Array enumValues = Enum.GetValues(typeof(T));
    Random random = new Random();
    return (T)enumValues.GetValue(random.Next(enumValues.Length));
}`,
                    breakRow: false
                },
                {
                    type: "code", 
                    language: "cs", 
                    code: `private void FillOrder()
{
    int lenght = dishToOrder.Orders.Length;
    for (int i = 0; i < lenght; i++)
    {
        if (dishToOrder.Orders[i] == Dish.NONE)
            dishToOrder.Orders[i] = EnumExtensions.GetRandomEnumValue<Dish>();   
    }
}`,
                    breakRow: false
                },
            ]
        },
        {
            title: "Vector Extensions",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
    ]
};
