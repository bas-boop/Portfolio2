const project = {
    name: "Capture Graafsmaar",
    description: "Capture Graafsmaar is a location-based AR-ish mobile game for Android, developed during my MBO exams for the client Amsterdam government.<br><br>I contributed significantly to this project as the lead developer. I answered questions from both artists and developers and implemented a total of 13 features, including 10 gameplay features and 3 development features. I worked extensively on UI developing and focused on various mobile-specific functionalities. Additionally, I conducted multiple playtesting sessions with users and ensured that the documentation was consistently updated.<br><br>This project allowed me to demonstrate my development and planning skills. In the post-mortem, I reflected not only on the project's strengths and weaknesses but also shared my strong opinions about the client and the handling of the exams by the school: Media College Amsterdam.",
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2024" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "9 weeks" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum, 3 week sprints" },
        { icon: "fas fa-users", label: "Team Size", value: "3 devs, 3 artists" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Lead developer" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/Team-Swamp/CaptureGraafsmeer" },
        { icon: "fas fa-tasks", name: "Tasks Board", url: "https://trello.com/b/9nVWXrSX/examen-trello" },
        { icon: "fas fa-gamepad", name: "Download for Android", url: "https://github.com/Team-Swamp/CaptureGraafsmeer/releases/tag/4.0" },
        { icon: "fas fa-globe", name: "Customer Website", url: "https://www.amsterdam.nl/" },
        { icon: "fab fa-youtube", name: "Watch Gameplay", url: "https://www.youtube.com/watch?v=tSfMB9JWZ2Q&ab_channel=LisavBoven" }
    ],
    features: [
        {
            title: "Photobook Custom Window",
            description: "Why did I create a custom window for the photobook? Simple — I wanted to streamline the process of adding new pages and connecting them with interactable elements. Previously, this involved multiple manual steps: copying a template page, adding it to the photobook class, including the interactable’s icon (a circular image), writing text for the interactable, linking it to the correct page, positioning it using GEO location, placing a 3D model on the interactable, and testing for any errors during the process.<br><br>After developing the custom window, the workflow became much more efficient. Now, all I need to do is fill in the necessary data (text, icon, and position) and press the 'Create' button. This has made the process significantly faster and easier for other developers or even artists to use.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "Capturegraafsmeer/PhotobookWindow.png", 
                    size: "100", 
                    alt: "PhotobookWindow",
                    caption: "Figure X: PhotobookWindow",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "Capturegraafsmeer/PhotobookWindowInactive.png", 
                    size: "80", 
                    alt: "PhotobookWindow",
                    caption: "Figure X: PhotobookWindow",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "This custom window is currently the only one I’ve built for any Unity project. It did come with an odd behavior — when switching to a different window, all the text and fields would disappear. Despite investigating the issue, I couldn’t pinpoint the cause, so I decided to create a basic version with just the essential fields and data.<br><br>I tried fixing this using the repaint window functionality, but that didn’t work out. Ultimately, I left it as is because the primary focus was to build a working game without major issues.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `if (!EditorApplication.isFocused)
{
    GUILayout.Space(MARGIN);
    GUILayout.Label(NAME_FIELD + SPACE + _newObjectName);
    GUILayout.Space(MARGIN);
    GUILayout.Label(INFO_FIELD + SPACE + _info);
    GUILayout.Space(MARGIN);
    GUILayout.Label(CORDS_FIELD + SPACE + _cords);
    GUILayout.Space(MARGIN);
    
    if(_interactableTexture == null)
        GUILayout.Label(TEXTURE_FIELD + SPACE + "NULL");
    else
        GUILayout.Label(TEXTURE_FIELD + SPACE + _interactableTexture.name);
    
    GUILayout.Space(MARGIN);
    UnRequestRepaint();
    return;
}`,
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "Capturegraafsmeer/BeforeMakePage.png", 
                    size: "100", 
                    alt: "PhotobookWindow",
                    caption: "Figure X: PhotobookWindow",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "Capturegraafsmeer/AfterMakePage.png", 
                    size: "100", 
                    alt: "PhotobookWindow",
                    caption: "Figure X: PhotobookWindow",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "<highlight-text>How do you use the photobook window?</highlight-text> In Figure X, you can see how to use the photobook window. First, fill in the required data and press the 'Make new page!' button. This action generates three things: a new page in the photobook UI game object, a new photo interactable at the bottom of the hierarchy window, and a scriptable object containing all the data.<br><br>Some connections are made automatically, but two links need to be done manually by the developer: the interactable must be linked to the photobook page, and the page must be added to the photobook’s list of pages. Once these steps are completed, the photobook is fully functional with the new page.<br><br>Why not fully automated? While I could have fully automated the process, I opted for more control. Instead of spawning one game object at a time, I generate all the necessary game objects at once.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "Capturegraafsmeer/NumberdMakePage.png", 
                    size: "50", 
                    alt: "PhotobookWindow",
                    caption: "Figure X: PhotobookWindow",
                    breakRow: true
                },
                {
                    type: "text", 
                    content: "With the MenuItem function atribute it has a place to be found. The bar at top, with the file, edit, assets ect. There it can be found.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[MenuItem("Codename-BDLMTW/PhotoBook Window")]
public static void ShowWindow()
{
    PhotoBookWindow window = GetWindow<PhotoBookWindow>();
    window.Show();
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private const int MARGIN = 20;
                    
private static readonly Vector2 WINDOW_SIZE = new (400f, 380f);

private bool _needsRepaint;
private string _newObjectName = "Default Text";
private string _info = "Info";
private Vector2 _cords = Vector2.zero;
private Texture2D _interactableTexture;
private Page _currentPage;
private PhotoData _currentData;
private GUIStyle _greenButtonStyle;`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private const string SPACE = " ";
private const string INTERACTABLE_PATH = "Assets/Prefabs/Funcinal/Entities/Photo-Interactable.prefab";
private const string PAGE_PAGE = "Assets/Prefabs/Funcinal/UI/Canvas/PhotoBook/Page.prefab";
private const string DIRECTORY_PATH = "Assets/ScriptableObjects/Photos/";
private const string PHOTO_BOOK_NAME = "Photobook";
private const string PHOTO_MAKER_NAME = "Photo maker";
private const string CAMERA_PANEL_NAME = "CameraPanel";
private const string NAME_FIELD = "Name for new page:";
private const string INFO_FIELD = "Info for new page:";
private const string CORDS_FIELD = "Vector2 coordinates field:";
private const string TEXTURE_FIELD = "Render texture for interactable ->";
private const string BUTTON_TEXT = "Make new page!";
private const string SCRIPTABLE_OBJECT_SUFFIX = ".asset";
private const string INVALID_CHARACTERS = "^[a-zA-Z0-9 ]+$";
private const string PREFAB_PATH_NOT_FOUND_ERROR = "Prefab not found at path: ";
private const string NAME_NEEDED_ERROR = "There is a name needed!";
private const string INVALID_NAME_ERROR = "Invalid input for the name field.";
private const string PHOTO_BOOK_REFERENCE_WARNING = "You need to reference the page in the photobook pages list!";
private const string TEXTURE_WARNING = "Do not click on this, only drag and drop a texture! ^^^^^";
private const string PHOTO_INTERACTABLE_REFERENCE_WARNING = "You need to reference the interactable in the page!";`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "When creating a new page, three elements are generated: a new page in the photobook object, a clickable photo interactable for use during gameplay, and a scriptable object containing all relevant data.<br><br>To achieve this, paths to existing prefabs are required. The system locates the necessary prefabs, creates instances, and updates their names and data accordingly. Built-in error handling and user warnings are included to ensure smooth operation and notify the user if something goes wrong.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void CreatePhotoData()
{
    PhotoData newData = CreateInstance<PhotoData>();

    if (!Directory.Exists(DIRECTORY_PATH))
    {
        Directory.CreateDirectory(DIRECTORY_PATH);
        AssetDatabase.Refresh();
    }

    newData.Title = _newObjectName;
    newData.Info = (_info, null);
    newData.Render = _interactableTexture;

    string path = DIRECTORY_PATH + _newObjectName + SCRIPTABLE_OBJECT_SUFFIX;

    AssetDatabase.CreateAsset(newData, path);
    AssetDatabase.SaveAssets();

    _currentData = newData;
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void MakeNewPage()
{
    CreatePhotoData();
    
    GameObject parentObject = GameObject.Find(PHOTO_BOOK_NAME);

    if (!parentObject)
        return;
    
    GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>(PAGE_PAGE);
    if (prefab != null)
    {
        GameObject newPage = (GameObject)PrefabUtility.InstantiatePrefab(prefab, parentObject.transform);
        newPage.name = _newObjectName;

        newPage.transform.localScale = Vector3.one;
        newPage.transform.SetAsFirstSibling();
        newPage.GetComponent<RectTransform>().pivot = new Vector2(0, 0.5f);

        _currentPage = newPage.GetComponent<Page>();
        _currentPage.SetData(_currentData);
        
        Debug.LogWarning(PHOTO_BOOK_REFERENCE_WARNING);
    }
    else
        Debug.LogError(PREFAB_PATH_NOT_FOUND_ERROR + PAGE_PAGE);
    
    SpawnInteractable();
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void SpawnInteractable()
{
    GameObject parentObject = GameObject.Find(PHOTO_MAKER_NAME);
    GameObject panel = GameObject.Find(CAMERA_PANEL_NAME);

    if (!parentObject
        || !panel)
        return;
    
    GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>(INTERACTABLE_PATH);
    if (prefab != null)
    {
        GameObject newObject = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
        newObject.name = _newObjectName;

        newObject.GetComponent<CoordinatesTransform>().SetCords(_cords);
        PhotoInteractable newInteractable = newObject.GetComponent<PhotoInteractable>();
        
        newInteractable.ParentPage = _currentPage;
        newInteractable.SetPhotoTaker(parentObject.GetComponent<PhotoTaker>());
        newInteractable.SetPhotoData(_currentData);
        newInteractable.SetPanel(panel.GetComponent<CameraPanel>());
        
        Debug.LogWarning(PHOTO_INTERACTABLE_REFERENCE_WARNING);
    }
    else
        Debug.LogError(PREFAB_PATH_NOT_FOUND_ERROR + INTERACTABLE_PATH);
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void TextureField(string label, ref Texture2D texture)
{
    GUILayout.BeginHorizontal();
    GUILayout.Label(label);
    texture = (Texture2D)EditorGUILayout.ObjectField(texture, typeof(Texture2D), false);
    GUILayout.EndHorizontal();
    
    GUILayout.BeginHorizontal();
    GUILayout.FlexibleSpace();
    GUIStyle centeredLabelStyle = new (EditorStyles.boldLabel)
    {
        normal =
        {
            textColor = Color.yellow
        }
    };
    GUILayout.Label(TEXTURE_WARNING, centeredLabelStyle);
    GUILayout.FlexibleSpace();
    GUILayout.EndHorizontal();
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "Lastly, we validate character inputs to ensure the object name is valid. For example, if the provided name contains a `!`, an error will be triggered, and the create button will be disabled. This is because Unity cannot handle files with such characters. The `!` is just one of several disallowed characters, all of which are checked by the function <highlight-text>IsValidFileName</highlight-text>.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private bool InvalidInput()
{
    if (_newObjectName == string.Empty)
    {
        GUILayout.BeginHorizontal();
        GUILayout.FlexibleSpace();
        GUIStyle centeredLabelStyle = new (EditorStyles.boldLabel)
        {
            normal =
            {
                textColor = Color.red
            }
        };
        GUILayout.Label(NAME_NEEDED_ERROR, centeredLabelStyle);
        GUILayout.FlexibleSpace();
        GUILayout.EndHorizontal();

        RequestRepaint();
        
        return true;
    }
    
    if (!IsValidFileName(_newObjectName))
    {
        GUILayout.BeginHorizontal();
        GUILayout.FlexibleSpace();
        GUIStyle centeredLabelStyle = new (EditorStyles.boldLabel)
        {
            normal =
            {
                textColor = Color.red
            }
        };
        GUILayout.Label(INVALID_NAME_ERROR, centeredLabelStyle);
        GUILayout.FlexibleSpace();
        GUILayout.EndHorizontal();

        RequestRepaint();
        
        return true;
    }
    
    return false;
}
    
private static bool IsValidFileName(string fileName)
{
    string pattern = INVALID_CHARACTERS;
    Regex regex = new Regex(pattern);
    return regex.IsMatch(fileName);
}`,
                    breakRow: false
                }
            ]
        },
        {
            title: "Photobook",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Interactable",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Photo Taking",
            description: "Bla bla + zoom",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Geo Location",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Introduction",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Animated Buttons",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Flashing Buttons",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Culling",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },          
        {
            title: "Save System",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Enum Extensions",
            "description": "Under the hood, enums are essentially lists of numbers, allowing you to pass these numeric values to a variable. While these numbers can be easily modified, you may need to associate an enum with a string or a vector. <br><br>To address this, I created custom <highlight-text>Attributes</highlight-text> that store additional data for each enum constant. Simply call the enum constant to retrieve its associated value—whether it’s a string, vector, or another type—and you’re good to go.",
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
                    "content": "With this extension logic in mind, why stop there? I wanted to implement a function that returns a random enum constant. I frequently used this feature in the practice exam for the cooking game. The reasons for not incorporating it in this project can be found in the post-mortem.",
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
        {
            title: "Scene Switcher",
            description: "Bla bla",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Lead Developer Experience",
            description: "Test for looks.<br>A big thank you to Alex Kentie and Berend Weij, whose guidance was invaluable throughout the project. Their mentorship made this experience transformative and set a strong foundation for my future work. A big thank you to Alex Kentie and Berend Weij, whose guidance was invaluable throughout the project. Their mentorship made this experience transformative and set a strong foundation for my future work. A big thank you to Alex Kentie and Berend Weij, whose guidance was invaluable throughout the project. Their mentorship made this experience transformative and set a strong foundation for my future work.",
            wide: true,
            elements: [
                {
                    type: "text", 
                    content: "A big thank you to Alex Kentie and Berend Weij, whose guidance was invaluable throughout the project. Their mentorship made this experience transformative and set a strong foundation for my future work. A big thank you to Alex Kentie and Berend Weij, whose guidance was invaluable throughout the project. Their mentorship made this experience transformative and set a strong foundation for my future work.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "A big thank you to Alex Kentie and Berend Weij, whose guidance was invaluable throughout the project. Their mentorship made this experience transformative and set a strong foundation for my future work. A big thank you to Alex Kentie and Berend Weij.",
                    breakRow: false
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "Reflection",
            wide: true,
            elements: [
                { 
                    type: "empty"
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `int a = 1;`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "More bla bla",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "../Covers/CaptureGraafsmeer.png", 
                    size: "60", 
                    alt: "Capture Graafsmeer Icon",
                    caption: "Figure X: Capture Graafsmeer Icon",
                    breakRow: false
                },
            ]
        }
    ]
};
