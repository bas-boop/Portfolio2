const project = {
    name: "Codename-C",
    description: "This is a released game about <highlight-text>trying to overthrow a corrupt regime</highlight-text>—by using their own documents against them. Through an old video game, you discover a glitch that unlocks access to classified government files. But there’s a catch: as a teenager, you only have one hour per day to play.<br><br>The project began from a fascination with <highlight-text>time appreciation</highlight-text>—how can a game make you value the time you spend in it?",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2025" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "1.5 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity 6" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/bas-boop/Codename-C" },
        { icon: "fas fa-gamepad", name: "Play on Itch.io", url: "https://baz-geluk9.itch.io/codename-c" },
        //{ icon: "fab fa-youtube", name: "Watch Trailer", url: "https://company-website.com" },
        { icon: "fas fa-comments-dollar", name: "Marketing", url: "https://bsky.app/profile/codename-c.bsky.social" },
        { icon: "fab fa-linkedin", name: "Linkedin post", url: "https://www.linkedin.com/posts/bas-de-reus_codename-c-activity-7342875514677698560-_x1J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyXW_QBYnnhUpYqZHkEpCUWg_gEMk7DUus" },
    ],
    features: [
        {
            title: "Marketing",
            description: "To promote my narrative OS-simulation game, I created a marketing campaign that <highlight-text>blended gameplay with social media storytelling</highlight-text>. I posed as a character who had discovered an old computer and began unraveling its secrets day by day. For one week, I posted daily updates on <highlight-text>X and Bluesky</highlight-text> as if I were this character, slowly revealing an eerie mystery tied to corrupt governments, encrypted documents, and digital secrets.<br><br>Each post combined <highlight-text>in-character writing, screenshots, and questions</highlight-text> like “What would you do with this file?” to invite speculation and engagement. These posts helped set the tone and world before players even touched the game.",
            wide: false,
            elements: [
                {
                    type: "image",
                    src: "Codename-CMedia/MarketingBio.png",
                    size: "100",
                    alt: "Screenshot of martking bio",
                    caption: "Figure 1: The bio used on social media profile",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "Codename-CMedia/day1marketing.png",
                    size: "100",
                    alt: "Day 1 marketing",
                    caption: "Figure 2: Day 1 - First glimpse of the OS",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "To support the campaign, I released a small downloadable demo on Itch.io. It contained a limited slice of the game’s world, with <highlight-text>five documents hidden across a fictional OS</highlight-text>.<br><br>The demo itself spanned only two in-game days, while the social media story told the <highlight-text>full five-day experience</highlight-text>. I also included a built-in feedback button to encourage interaction and gather early impressions.<br><br>This allowed players to <highlight-text>step into the mystery themselves</highlight-text>—not just follow it from the outside.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The original plan included reaching out to true crime and ARG-focused content creators. While this step wasn’t executed due to time, it remains a promising idea for future projects.<br><br>Unfortunately, the campaign had limited reach: only <highlight-text>one visitor clicked through to the game</highlight-text>. In hindsight, I’d invest more in:<br>• Visual content<br>• Hashtag strategy<br>• Early audience interaction<br><br>Despite the low numbers, this campaign helped me experiment with <highlight-text>worldbuilding beyond the screen</highlight-text> and taught me how important visibility is for a strong concept.",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "Codename-CMedia/day4marketing.png",
                    size: "100",
                    alt: "Day 4: marketing",
                    caption: "Figure 3: Day 4 - 'Some of these files feel too real…'",
                    breakRow: false
                }
            ]
        },
        {
            title: "Designing concepts",
            description: "It began with an attempt to explore the concept of appreciating time. I’d tried something similar before, but it didn’t work out—the game just wasn’t fun. You’d perform an action, wait, then repeat. It felt dull and uninspired.<br><br>This time, I started by asking: <highlight-text>how can time itself become a meaningful part of gameplay?</highlight-text><br><br>Maybe time could be treated as a resource. Imagine a city builder where your limited real-world playtime also determines how much you can build. Or perhaps a rogue-like, where every move costs a chunk of time, forcing strategic decisions. What if levels were time-locked—one minute per level, and you can only accomplish what that minute allows? Choose your actions wisely: what to do, what to skip.<br><br>Now that idea feels like it’s going somewhere.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "Codename-CMedia/PreviousGame.png", 
                    size: "100", 
                    alt: "Previous game", 
                    caption: "Figure 4: previous game about time appreciation.",
                    breakRow: false
                },
            ]
        },
        // {
        //     title: "Playtester feedback",
        //     description: "Feature is <highlight-text>cool</highlight-text>.",
        //     wide: true,
        //     elements: [
        //         { 
        //             type: "empty",
        //         },
        //     ]
        // },
        {
            title: "Locked Documents",
            description: "Locked documents are the core mechanic of the game. These files require a pin code to unlock. There are two types of files: <highlight-text>text files</highlight-text> and <highlight-text>locked files</highlight-text>. Text files contain clues and pin codes needed to access the locked files. Your goal is to find the correct pin for each locked document, read the contents, and uncover the story.",
            wide: false,
            elements: [
                {
                    type: "image",
                    src: "Codename-CMedia/LockDocPrefab.png",
                    size: "75",
                    alt: "Locked document prefab",
                    caption: "Figure 5: The locked document prefab.",
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public void Check(string guess)
{
    if (_pinToCheck != string.Empty
        && _pinToCheck == guess)
    {
        SetState(true);
        return;
    }
    
    if (guess == pin.ToString())
        SetState(true);
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "To check whether the user’s input is correct, we first verify if a randomized pin exists. If it does, and the guess matches, the document unlocks. Otherwise, we fall back to a default pin (e.g., <code>1111</code>)—primarily used for testing during development.",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "Codename-CMedia/PinDocPrefab.png",
                    size: "60",
                    alt: "Pin document prefab",
                    caption: "Figure 6: The pin document prefab.",
                    breakRow: true
                },
                {
                    type: "text",
                    content: "This is a text file that holds the pin for a corresponding locked document. Its structure is simple: some introductory text, followed by the pin, and then more text. This format allows creative freedom while still embedding the critical pin code within the content.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `[SerializeField] private string beforeText;
[SerializeField] private string afterText;

private void Start()
{
    text.text = beforeText + documentWithPin.GetPin() + afterText;
}`,
                    breakRow: false
                },
            ]
        },
        // {
        //     title: "Scene magament",
        //     description: "Feature is <highlight-text>cool</highlight-text>.",
        //     wide: true,
        //     elements: [
        //         { 
        //             type: "empty",
        //         },
        //     ]
        // },
        {
            title: "Platformer",
            description: "To unlock the government documents, I wanted to introduce some kind of backdoor—maybe a glitch or a suspicious link? Then the idea hit: what if there was a <highlight-text>hidden mini-game</highlight-text> that granted access? A <highlight-text>glitched objective</highlight-text> at the end of a level would fit perfectly, especially in a platformer. So I decided to create a simple platformer with two doors—one that progresses to the next level, and another <highlight-text>'glitch' door</highlight-text> that unlocks the government files.",
            wide: false,
            elements: [
                {
                    type: "text",
                    content: "The platformer is intentionally small, so I thought—why not make it a challenge? I set a goal to <highlight-text>build the entire game in under two hours</highlight-text>. The player, coins, and doors were easy enough to implement, but <highlight-text>level design and visuals</highlight-text> took more time than expected.<br><br>Due to a few movement bugs, I wasn’t able to complete everything within the time limit. I later fixed these issues in newer versions. If you compare version 0.5 to 0.7, you’ll notice the differences caused by those bugs and how little else has changed since then.",
                    breakRow: false
                },              
                {
                    type: "image",
                    src: "Codename-CMedia/Platformer.gif",
                    size: "100",
                    alt: "Platformer gif",
                    caption: "Figure 7: platforming in action.",
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void Update()
{
    Vector2 input = _inputActionAsset["Move"].ReadValue<Vector2>();
    walk.SetInput(input);
}

private void AddListeners()
{
    _inputActionAsset["Jump"].performed += JumpAction;
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `private void FixedUpdate()
{
    rigidbody2d.linearVelocityX = _input.x * speed;
    
    if (left.IsGrounded 
        && !buttom.IsGrounded)
    {
        rigidbody2d.linearVelocityX = 0;
    }
    else if (right.IsGrounded
                && !buttom.IsGrounded)
    {
        rigidbody2d.linearVelocityX = 0;
    }
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public void DoJump()
{
    if (!groundChecker.IsGrounded)
        return;
    
    rioRigidbody2D.linearVelocityY = jumpStrength;
}`,
                    breakRow: false
                },
                {
                    type: "text",
                    content: "Even though I gave myself limited time for this, I still focused on code quality by following <custom-tooltip tooltip=\"Single Responsibility Principle - A module should be responsible to one, and only one, actor.\">SRP</custom-tooltip>. Input, walking, and jumping are separated into their own systems and only connected where necessary.",
                    breakRow: false
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "This project was a bit unusual to make. For the first time in five years of making games, I didn’t feel motivated to work on it. I only pushed through because there was a deadline.",
            wide: false,
            elements: [
                {
                    type: "text", 
                    content: "Marketing turned out to be the most fun part. It’s a little different from writing code or creating art, and that change made it enjoyable.<br><br>I definitely want to do this again for future projects—maybe with higher production value than just text and screenshots.",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "Codename-CMedia/MarketingNotion.png",
                    size: "50",
                    alt: "Notion marketing",
                    caption: "Figure 8: Notion page about the marketing.",
                    breakRow: true
                },
                {
                    type: "text", 
                    content: "When developing a game, the focus is usually on making it playable and fun. But as the developer, I also want a smooth workflow. The OS levels weren’t fun to build and were time-consuming. Linking locked documents with the correct text files and pins involved too much manual referencing.<br><br>That’s why, if I have time, I’d like to create a level editor tool to streamline the process. Maybe a custom Unity window like I built for my <a href=\"CaptureGraafsmeer\">Capture Graafsmeer</a> exam project.",
                    breakRow: false
                },
            ]
        }
    ]
};
