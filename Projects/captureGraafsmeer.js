const project = {
    name: "Capture Graafsmaar",
    description: "Capture Graafsmaar is a location-based AR-ish mobile game for Android, developed during my MBO exams for the client City of Amsterdam.<br><br>I contributed significantly to this project as the lead developer. I answered questions from both artists and developers and <highlight-text>implemented a total of 12 features</highlight-text>, including 9 gameplay features and 3 development features. I worked extensively on UI developing and focused on various mobile-specific functionalities. Additionally, I conducted multiple playtesting sessions with users and ensured that the documentation was consistently updated.<br><br>This project allowed me to demonstrate my development and planning skills. In the post-mortem, I reflected not only on the project's strengths and weaknesses but also shared my strong opinions about the client and the handling of the exams by the school: Media College Amsterdam.",
    hasQuickMenu: true,
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
        { icon: "fas fa-gamepad", name: "Download for Android", url: "https://github.com/Team-Swamp/CaptureGraafsmeer/releases/" },
        { icon: "fas fa-globe", name: "Customer Website", url: "https://www.amsterdam.nl/" },
        { icon: "fab fa-youtube", name: "Watch Gameplay", url: "https://www.youtube.com/watch?v=tSfMB9JWZ2Q&ab_channel=LisavBoven" }
    ],
    features: [
        {
            title: "Photobook Custom Window",
            description: "Why did I create a custom window for the photobook? Simple — I wanted to streamline the process of adding new pages and connecting them with interactable elements. Previously, this involved multiple manual steps: copying a template page, adding it to the photobook class, including the interactable’s icon (a circular image), writing text for the interactable, linking it to the correct page, positioning it using GEO location, placing a 3D model on the interactable, and testing for any errors during the process.<br><br>After developing the custom window, the workflow became much more efficient. Now, all I need to do is fill in the necessary data (text, icon, and position) and press the 'Create' button. This has made the process significantly faster and easier for other developers or even artists to use.",
            wide: false,
            hasQuickMenu: true,
            elements: [
                {
                    type: "imageSlider",
                    leftImage: "CapturegraafsmeerMedia/PhotobookWindow.png",
                    rightImage: "CapturegraafsmeerMedia/PhotobookWindowInactive.png",
                    caption: "Figure 1: Photobook window, active and inactive.",
                    size: "",
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
                    type: "text", 
                    content: "This custom window is currently the only one I’ve built for any Unity project. It did come with an odd behavior — when switching to a different window, all the text and fields would disappear. Despite investigating the issue, I couldn’t pinpoint the cause, so I decided to create a basic version with just the essential fields and data.<br><br>I tried fixing this using the repaint window functionality, but that didn’t work out. Ultimately, I left it as is because the primary focus was to build a working game without major issues.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/BeforeMakePage.png", 
                    size: "100", 
                    alt: "Before making",
                    caption: "Figure 2: How Unity looks before creating a new page. (click on the image)",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/AfterMakePage.png", 
                    size: "100", 
                    alt: "After making",
                    caption: "Figure 3: How Unity looks after creating a new page. (click on the image)",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "<highlight-text>How do you use the photobook window?</highlight-text> In Figure 4, you can see how to use the photobook window. First, fill in the required data and press the 'Make new page!' button. This action generates three things: a new page in the photobook UI game object, a new photo interactable at the bottom of the hierarchy window, and a scriptable object containing all the data.<br><br>Some connections are made automatically, but two links need to be done manually by the developer: the interactable must be linked to the photobook page, and the page must be added to the photobook’s list of pages. Once these steps are completed, the photobook is fully functional with the new page.<br><br>Why not fully automated? While I could have fully automated the process, I opted for more control. Instead of spawning one game object at a time, I generate all the necessary game objects at once.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/NumberdMakePage.png", 
                    size: "100", 
                    alt: "Highlight new object",
                    caption: "Figure 4: A highlight to the new objects and refrences.",
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
                    type: "text", 
                    content: "With the MenuItem function atribute it has a place to be found. The bar at top, with the file, edit, assets ect. There it can be found, in this case it's under <highlight-text>Codename-BDLMTW</highlight-text>, the name of the project before it had a name.",
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
            description: "The photobook is the way to see the progress of walking the route and learning about the Amsterdam area of Watergraafsmeer. The photobook has many pages of each site seeing, but they are locked at first. To unlock it you need to take a photo of it. It an easy to use photobook, 2 buttons on the side to browse the book and a close button. Your photo of the site at the top and under it information about it.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/Photobook.gif", 
                    size: "75", 
                    alt: "Capture Graafsmeer Icon",
                    caption: "Figure 5: Browsing through the photobook.",
                    breakRow: true
                },
                {
                    type: "text", 
                    content: "There are 3 compentents to achieve this system. A page holder, photobook, and the pages. Page holder is an abstraction of an object that can show multiple panels or pages, this was done for the development speed of the introcution panel.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Check if the buttons should be visibility or not
/// </summary>
/// <param name="length">The length of the list that is getting checked for the next button.</param>
protected void CheckButtonsUsability(int length)
{
    if (p_currentIndex == 0)
        p_previousButton.SetActive(false);

    if(p_currentIndex == length)
        p_nextButton.SetActive(false);
}

/// <summary>
/// Set the current item to display.
/// </summary>
/// <param name="isIncreasing">Is the current item the next or previous?</param>
protected abstract void SetCurrentItem(bool ?isIncreasing);`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Set the next item to display, so also check the buttons visibility
/// </summary>
/// <param name="length">The length of the list that is getting checked for the next button.</param>
protected void SetNextItem(int length)
{
    if(length == p_currentIndex)
        return;

    if(p_currentIndex == length - 2)
        p_nextButton.SetActive(false);
    
    if(!p_previousButton.activeSelf)
        p_previousButton.SetActive(true);
}

/// <summary>
/// Set the previous item to display, so also check the buttons visibility. Plus decreases p_currentIndex.
/// </summary>
protected void SetPreviousItem()
{
    if(p_currentIndex == 0)
        return;

    if (p_currentIndex - 2 == -1)
        p_previousButton.SetActive(false);
    
    if(!p_nextButton.activeSelf)
        p_nextButton.SetActive(true);
    
    p_currentIndex--;
}`,
                    breakRow: true
                },
                {
                    type: "text", 
                    content: "First we set up the photobook before using it.<br><br>Step 1 is looking at the save system if there are already photos made. If so, we will set the interactable to visted and turn the pages one in the photobook.<br><br>Step 2 is checking if the side buttons should been shown. Why is that? If were at the first page we hide the button to go left trough the book, because there is no page on the left. This is the same for the last page and the button for right.<br><br>Step 3 is showing the current page. This would be the first page when first time opening it. Or the last opened page if the book has been opened ealier.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Awake()
{
    int l = pages.Length;
    
    for (int i = l - 1; i >= 0; i--)
    {
        if (Saver.Instance.PhotoAmountMade >= i)
            pages[i].GetPhotoInteractable.IsVisited = true;
    }
    
    gameObject.SetActive(false);
}

private void OnEnable() => SetupPhotoBook();

private void SetupPhotoBook()
{
    CheckButtonsUsability(pages.Length);
    ViewPages();
}

private void ViewPages()
{
    foreach (var page in pages)
    {
        page.ForceClose();
    }
    
    pages[p_currentIndex].ForceOpen();
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Set the title, photo and info text of this page
/// </summary>
public void SetProperties()
{
    photo.texture = interactable.GetTexture();
    info.text = interactable.GetInfo();
    pointOfInterestRender.texture = data.Render;
}
    
/// <summary>
/// Set the PhotoData to a new data set.
/// </summary>
/// <param name="target">The target data</param>
public void SetData(PhotoData target) => data = target;`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "The pages themself have data to hold, this can be set and applied to there properties and gameobjects.<br><br>To animate the pages I use an animationcurve to have it like a book page flip. This works both when going to the left or right. There are also 2 functions that force open or close the page when needed.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Closes this page, without questions
/// </summary>
public void ForceClose() => _rect.localScale = _closed;

/// <summary>
/// Opens this page, without questions
/// </summary>
public void ForceOpen() => _rect.localScale = Vector3.one;

/// <summary>
/// Calls the animation fot the page, if it's open it will close, otherwise it will go form close to open
/// </summary>
/// <param name="isOpening">Is the page open or not</param>
public void AnimatePage(bool isOpening)
    => StartCoroutine(((IScalable) this).AnimateScale(isOpening ? _closed : Vector3.one));

IEnumerator IScalable.AnimateScale(Vector3 targetScale)
{
    Vector3 initialScale = _rect.localScale;
    float elapsedTime = 0f;

    while (elapsedTime < animationDuration)
    {
        elapsedTime += Time.deltaTime;
        float timeLeft = Mathf.Clamp01(elapsedTime / animationDuration);
        float curveValue = animationCurve.Evaluate(timeLeft);
        _rect.localScale = Vector3.Lerp(initialScale, targetScale, curveValue);
        
        yield return null;
    }

    _rect.localScale = targetScale;
}`,
                    breakRow: false
                },
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
            description: "To fill the photobook, users interact with points of interest to take photos. A confirmation panel appears, showing a preview and an interactive render. After confirming, a camera interface with a zoom slider and a photo capture button becomes available. The process is simple and user-friendly.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/PhotoTaking.gif", 
                    size: "50", 
                    alt: "Capture Graafsmeer Icon",
                    caption: "Figure X: Taking a photo. (early development)",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/Zoom.gif", 
                    size: "50", 
                    alt: "Capture Graafsmeer Icon",
                    caption: "Figure X: Zoom feature in action.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "When a photo is taken, the raw image is captured and saved. Camera usage is stopped once the process completes. Errors are handled with informative messages, and other systems such as saving and photo interaction updates are triggered accordingly.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void FindCamera()
{
    WebCamDevice[] devices = WebCamTexture.devices;

    if (devices.Length <= 0)
        throw new Exception(NO_CAMERA_ERROR);
    
    CameraTexture = new WebCamTexture(devices[0].name);
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Captures the current frame and applies it to the photo image.
/// </summary>
public void TakePhoto()
{
    if (!CameraTexture.isPlaying)
        throw new Exception(CAMERA_NOT_ACTIVE_ERROR);
    
    if (_currentInteractable == null)
        throw new Exception(NO_PHOTO_INTERACTABLE_ERROR);
    
    _currentPhoto = CaptureFrame(CameraTexture);

    if (!_currentInteractable.SaveTexture(_currentPhoto))
        throw new Exception(UNABLE_TO_SAVE_PHOTO_ERROR + _currentInteractable.name);
    
    _currentInteractable.IsVisited = true;
    Saver.Instance.PhotoAmountMade++;
    lastPhoto.texture = _currentInteractable.GetTexture();
    
    onPhotoTaken?.Invoke();
    
    if (_currentInteractable.ShouldHighlightButton)
        onHighlightButton?.Invoke();
    
    OnDisable();
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private Texture2D CaptureFrame(WebCamTexture liveTexture)
{
    Rect cameraUvRect = liveCamera.uvRect;
    
    int x = Mathf.FloorToInt(cameraUvRect.x * liveTexture.width);
    int y = Mathf.FloorToInt(cameraUvRect.y * liveTexture.height);
    int width = Mathf.FloorToInt(cameraUvRect.width * liveTexture.width);
    int height = Mathf.FloorToInt(cameraUvRect.height * liveTexture.height);
    
    Texture2D currentTexture = new Texture2D(width, height);
    Color[] pixels = liveTexture.GetPixels(x, y, width, height);
    
    currentTexture.SetPixels(pixels);
    currentTexture.Apply();
    
    return currentTexture;
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "When the zoom slider is adjusted, the zoom level is updated by modifying a rectangular area. This same logic is applied during the photo-taking process.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Set the zoom amount of the camera
/// </summary>
/// <param name="zoomTarget">Target zoom value</param>
public void Zoom(float zoomTarget)
{
    float width = 1f / zoomTarget;
    float height = 1f / zoomTarget;
    Rect uvRect = new Rect((1f - width) / 2f, (1f - height) / 2f, width, height);
    
    liveCamera.uvRect = uvRect;
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private const int ASK_PERMISSION_DELAY = 6;
private const string CAMERA_PERMISSION = Permission.Camera;

protected virtual void Start() => Invoke(nameof(AskPermission), ASK_PERMISSION_DELAY);

/// <summary>
/// Will ask the device camera, will be used inherited classes
/// </summary>
public void AskPermission()
{
    if (!Permission.HasUserAuthorizedPermission(CAMERA_PERMISSION))
        Permission.RequestUserPermission(CAMERA_PERMISSION);
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "On game start up we ask for the camera permisson of th Android phone. If this is not accept we will ask permisson when clicking on a interactbale object. This in done via the Unity Android namespace.",
                    breakRow: false
                }
            ]
        },
        {
            title: "Geo Location",
            description: "To explore the area of Watergraafsmeer in Amsterdam, we need a mobile-friendly solution. One option could be to create a movement system controlled via the user interface. But why not use your real location instead? By utilizing the phone’s real-world coordinates, we can integrate them directly into the game. This approach is perfect for the older workers in the city of Amsterdam. It’s automated, easy to use, and allows them to focus solely on the gameplay.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/GeoLocationOverview.png", 
                    size: "100", 
                    alt: "Image",
                    caption: "Figure X: An overview of all objects placed with geo location.",
                    breakRow: true
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/GeoLocationStart.png", 
                    size: "100", 
                    alt: "Image",
                    caption: "Figure X: All object before the game starts.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "When using the <highlight-text>CoordinatesTransform</highlight-text> class, at the start of the game, each game object will be placed in its real-life position, as shown in Figure X. Simply provide the latitude and longitude of the object, and it will be positioned accordingly. This is achieved through a formula that converts coordinates into meters, accounting for the curvature of the Earth. Details on how this process works will be explained later.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/Darwin.png", 
                    size: "80", 
                    alt: "Image",
                    caption: "Figure X: An example CoordinatesTransform placed at there correct location.",
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public enum CoordinatesTransformType
{
    STATIC,
    STATIC_DEBUG,
    PLAYER,
    PLAYER_DEBUG
}`,
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/GeoInspector.png", 
                    size: "100", 
                    alt: "Image",
                    caption: "Figure X: CoordinatesTransform inspector view.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "The CoordinatesTransform class <highlight-text>offers four different modes:</highlight-text> static mode, player mode, static debug mode, and player debug mode.<br><br>Static mode is the simplest. It places objects based on their coordinates, but this placement happens only once. Player mode functions similarly, but it continuously updates the position of objects at regular intervals.<br><br>Static debug mode is designed for development purposes. It allows developers to verify object placements, and any changes made in the engine are instantly reflected in the game. Player debug mode builds upon static debug mode by introducing checks for specific player requirements that are not handled by the static version.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/GeoLocation.gif", 
                    size: "100", 
                    alt: "Image",
                    caption: "Figure X: Showcasing the player debug mode of the CoordinatesTransform.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Awake()
{
    if (type is CoordinatesTransformType.PLAYER or CoordinatesTransformType.PLAYER_DEBUG)
        _player = GetComponent<LocationUpdater>();
}`,
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// A test version of the status for the location. This should be removed when we have player model.
/// </summary>
private void Update()
{
    sprite.color = Input.location.status switch
    {
        LocationServiceStatus.Running => colors[0],
        LocationServiceStatus.Failed => colors[1],
        LocationServiceStatus.Initializing => colors[2],
        LocationServiceStatus.Stopped => colors[3],
        _ => throw new ArgumentOutOfRangeException()
    };
}

/// <summary>
/// Get the live location of the player.
/// </summary>
/// <returns>Returns a Vector2 with latitude & longitude</returns>
public Vector2 GetLiveLocation()
{
    if (!Input.location.isEnabledByUser)
        return Vector2.zero;
    
    LocationInfo location = Input.location.lastData;
    return new Vector2(location.latitude, location.longitude);
}`,
                    breakRow: false
                },                
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Ask for the location of the device form its inheritance
/// and will place the CoordinatesTransform once to the correct location
/// </summary>
protected override void Start()
{
    base.Start();
    
    if (type == CoordinatesTransformType.STATIC)
        UpdateLocation(null);
}

private void Update()
{
    if(_isReactive
        || type is CoordinatesTransformType.STATIC)
        return;

    switch (type)
    {
        case CoordinatesTransformType.PLAYER:
            UpdateLocation(_player.GetLiveLocation());
            break;
        case CoordinatesTransformType.PLAYER_DEBUG:
        case CoordinatesTransformType.STATIC_DEBUG:
            UpdateLocation(null);
            break;
        default:
            UpdateLocation(null);
            Debug.LogWarning($"Default was triggered in {gameObject.name}.");
            break;
    }
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "To create an accurate location-based system, I used the following formula to convert coordinates into meters while accounting for the curvature of the Earth: <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>(</mo><mi>latitude</mi><mo>and</mo><mi>longitude</mi><mo>&#x00D7;</mo> <!-- Multiplication sign --><mfrac><mi>&#x03C0;</mi> <!-- pi --><mn>180</mn></mfrac><mo>)</mo><mo>&#x00D7;</mo> <!-- Multiplication sign --><mi>Earth&#x2019;s&#x00A0;radius</mi><mo>,</mo></math> the radius of earth is 6378137 meters. Next to this we can see how we write this in C#.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void UpdateLocation(Vector2 ?pos)
{
    Vector2 targetPosition = pos ?? coordinates;
    targetPosition.Subtract(origin);
    (double latitude, double longitude) = ConvertToMeters(targetPosition.x, -targetPosition.y);
    Vector3 finalTargetPosition = new Vector3((float) latitude, 0, (float) longitude);
    
    if (_isReactive)
        return;
    
    StartCoroutine(LerpPosition(finalTargetPosition));
}

private (double, double) ConvertToMeters(double latitude, double longitude)
{
    double latitudeInMeters = latitude * Math.PI / HALF_CIRCLE * EARTH_RADIUS;
    double longitudeInMeters = longitude * Math.PI / HALF_CIRCLE * EARTH_RADIUS;
    
    return (latitudeInMeters, longitudeInMeters);
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Display every serialized variable, headers and space.
/// </summary>
public override void OnInspectorGUI()
{
    serializedObject.Update();

    DrawScriptField();
    
    EditorGUILayout.LabelField(SETTINGS_HEADER, EditorStyles.boldLabel);
    EditorGUILayout.PropertyField(_cords);
    EditorGUILayout.PropertyField(_type);

    if (ShouldShowPlayerSettings())
    {
        EditorGUILayout.LabelField(PLAYER_SETTINGS_HEADER, EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(_lerp);
        EditorGUILayout.PropertyField(_update);
    }
    
    serializedObject.ApplyModifiedProperties();
}

private bool ShouldShowPlayerSettings()
    => targets.Select(t => new SerializedObject(t)).Select(obj
    => obj.FindProperty(TYPE)).Any(typeProp => typeProp.enumValueIndex is 2 or 3);`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "Lastly, for the geo-location system, I will demonstrate how I created two different versions of the class to be displayed in the inspector. By using the <highlight-text>CustomEditor</highlight-text> class attribute, I can control how the GUI is rendered for the specific class. This allows me to hide or show settings that are only relevant for the player or player debug mode within the CoordinatesTransform class.<br><br>The reason for this approach is the size of the development team. By customizing the inspector, I can reduce confusion for team members who might encounter settings that have no effect in certain modes, such as static mode. For example, settings meant for player modes would be hidden when static mode is enabled, keeping the interface clean and intuitive.",
                    breakRow: false
                },
                {
                    type: "imageSlider",
                    leftImage: "CapturegraafsmeerMedia/GeoInspector2.png",
                    rightImage: "CapturegraafsmeerMedia/GeoInspector.png",
                    caption: "Figure X: The 2 inspector views of the CoordinatesTransform, for the static mode and the other for a player mode.",
                    size: "-1",
                    breakRow: false
                },
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
            title: "Interactive Buttons",
            description: "Buttons are animated and flash.",
            wide: false,
            elements: [
                { 
                    type: "empty"
                }
            ]
        },
        {
            title: "Culling",
            description: "Mobile phones generally have limited performance capabilities, and running a simple 3D Unity game can quickly drain the battery. To address this, we decided to optimize visual performance by implementing culling techniques. Specifically, we use a combination of <highlight-text>frustum culling & occlusion culling</highlight-text>. This was made with pair programming, a great way to work on this, with the technical artist.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/Culling.gif", 
                    size: "100", 
                    alt: "Culling gif",
                    caption: "Figure X: Objects behing other and objects outside the camera view will not be shown.",
                    breakRow: true
                },
                {
                    type: "text", 
                    content: "Frustum culling is a technique used in computer graphics to improve rendering performance by excluding objects that are outside the camera's view frustum—a pyramid-shaped region extending from the camera's perspective. This ensures that only objects within the camera's field of view are processed for rendering, minimizing unnecessary calculations for objects not visible to the player.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "Occlusion culling further enhances performance by preventing rendering operations for GameObjects that are hidden behind other objects. In Unity, this is achieved using precomputed data generated during the baking process, which determines visibility at runtime. By excluding objects that do not contribute to the scene's visibility, occlusion culling significantly reduces rendering overhead.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void UpdateCullAbles()
{
    Plane[] planes = GeometryUtility.CalculateFrustumPlanes(_this);
    int length = _cullAbleObjects.Length;
    
    for (int i = 0; i < length; i++)
    {
        bool isVisible = GeometryUtility.TestPlanesAABB(planes, _cachedRenderers[i].bounds);
        
        OcclusionCulling(ref isVisible, i);
        
        _cullAbleObjects[i].SetActive(isVisible);
    }
}

private void OcclusionCulling(ref bool isVisible, int i)
{
    if (!isVisible) 
        return;
    
    Vector3 direction = _cullAbleObjects[i].transform.position - _this.transform.position;
    float distance = direction.magnitude;
    RaycastHit hit;
        
    if (Physics.Raycast(_this.transform.position, direction, out hit, distance)
        && hit.transform != _cullAbleObjects[i].transform)
        isVisible = false;
}`,
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void InitCullingObjects()
{
    _cullAbleObjects = GameObject.FindGameObjectsWithTag(CULL_ABLE_TAG);
    _cachedRenderers = new Renderer[_cullAbleObjects.Length];
    int length = _cullAbleObjects.Length;
    
    for (int i = 0; i < length; i++)
    {
        _cachedRenderers[i] = _cullAbleObjects[i].GetComponent<Renderer>();
    }
}`,
                    breakRow: false
                },
            ]
        },          
        {
            title: "Save System",
            description: "While playing, unexpected events like a phone call might occur, causing you to close the game and lose progress. To prevent this, I implemented a save system that tracks three key aspects: the current waypoint on the route highlighter, the color of the route highlighter, and the number of photos saved in the photobook. This ensures that your progress is preserved even if the game is interrupted.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public int PhotoAmountMade
{
    get => _photoAmountMade;
    
    set
    {
        if (value == _photoAmountMade) 
            return;
        
        _photoAmountMade = value;
        PlayerPrefs.SetInt(PHOTO_KEY, _photoAmountMade);
        PlayerPrefs.Save();
    }
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `protected override void Awake()
{
    base.Awake();
    
    if (PlayerPrefs.HasKey(PHOTO_KEY))
        _photoAmountMade = PlayerPrefs.GetInt(PHOTO_KEY);
    
    if (PlayerPrefs.HasKey(ROUTE_KEY))
        _checkpointsPassed = PlayerPrefs.GetInt(ROUTE_KEY);
    
    if (PlayerPrefs.HasKey(ROUTE_COLOR))
        _routeColorIndex = PlayerPrefs.GetInt(ROUTE_COLOR);

    if (PlayerPrefs.HasKey(ROUTE_WIDTH))
    {
        _routeWidth = PlayerPrefs.GetFloat(ROUTE_WIDTH);
        
        if (_routeWidth == 0)
            _routeWidth = 1;
    }
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "When the game scene is loaded, the saved data is retrieved and applied to the relevant systems. For example, the photobook checks how many photos have been saved and activates the corresponding pages if their indices are less than or equal to the saved count.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Awake()
{
    int l = pages.Length;
    
    for (int i = l - 1; i >= 0; i--)
    {
        if (Saver.Instance.PhotoAmountMade >= i)
            pages[i].GetPhotoInteractable.IsVisited = true;
    }
    
    gameObject.SetActive(false);
}`,
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "CapturegraafsmeerMedia/Delete.png", 
                    size: "75", 
                    alt: "Delete data panel",
                    caption: "Figure X: Delete data panel",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "There is also an option to reset all progress, which is hidden within the introduction panel. This allows players to replay the game after deleting all previous data.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// This will reset the progress of the route and photos made
/// </summary>
public void ResetData()
{
    PhotoAmountMade = 0;
    CheckpointsPassed = 0;
    RouteColorIndex = 0;
    RouteWidth = 1f;
}`,
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
                    content: "More bla bla and Lead Developer Experience",
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
