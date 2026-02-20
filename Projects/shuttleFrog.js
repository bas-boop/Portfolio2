const project = {
    name: "ShuttleFrog",
    description: "ShuttleFrog is a co-op gyro mobile arcade stick item delivery game. This was made as a school project for HKU; the assignment was a half-physical, half-digital game. We had a lot of fun designing and testing different technologies.<br><br>This game has been <highlight-text>showcased at Dutch Game Week 2025</highlight-text>, where it was played by a large and diverse audience. Showcasing ShuttleFrog provided valuable player feedback and was a great opportunity to connect with other game developers and industry professionals.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2025" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "4 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum & Waterfall" },
        { icon: "fas fa-users", label: "Team Size", value: "1 dev, 2 artist, 2 designers" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Lead developer" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/bas-boop/ShuttleFrog" },
        { icon: "fab fa-github", name: "Gyro Prototype GitRepo", url: "https://github.com/bas-boop/Gyro" },
        { icon: "fas fa-tasks", name: "Miro board", url: "https://miro.com/app/board/uXjVJJDDxpc=/" },
        { icon: "fas fa-file", name: "Game Design Document", url: "ShuttleFrogMedia/Shuttlefrog-GDD.pdf" },
        { icon: "fab fa-youtube", name: "Watch Old Gameplay", url: "https://youtu.be/Alik5d1Vi-k" },
        { icon: "fab fa-youtube", name: "Watch AB testing", url: "https://youtu.be/Asj_nkJd900" },
        { icon: "fab fa-linkedin", name: "HKU expo post", url: "https://www.linkedin.com/posts/bas-de-reus_shuttlefrog-is-een-immersieve-2-player-co-op-activity-7394110918948782082-wOm4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyXW_QBYnnhUpYqZHkEpCUWg_gEMk7DUus" },
        { icon: "fab fa-linkedin", name: "Dutch Game Week post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7403502611678523393/" },
    ],
    features: [
        {
            title: "Gyro Controls",
            description: "To make the game half-physical, we used the gyroscope of a mobile phone to control the camera. This was a challenge to implement because the game is played in landscape mode, which is not the default orientation for gyro controls. I had to do some math to convert the gyro data to the correct orientation.",
            wide: false,
            elements: [
                {
                    type: "image",
                    src: "ShuttleFrogMedia/TeachersPlayingTheGame.jpg",
                    size: "50",
                    alt: "Playing ShuttleFrog at Dutch Game Week 2025",
                    caption: "Figure 1: Gyro controls in action with a chair.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "ShuttleFrogMedia/GyroPrototype.gif",
                    size: "100", 
                    alt: "Gyro prototype gif",
                    caption: "Figure 2: Testing the gyro controls in the prototype."
                },
                {
                    type: "code", 
                    language: "cs", 
                    code: `// prototype code for gyro controls
private void Update()
{
    if (turner == null
        || AttitudeSensor.current == null)
        return;

    Quaternion attitude = AttitudeSensor.current.attitude.ReadValue();
    Quaternion converted = new Quaternion(attitude.x, attitude.z, -attitude.y, -attitude.w);
    Quaternion correction = Quaternion.Euler(90f, 0f, 0f);

    // (0, 0, 0) is correct but looking down is looking forward in game
    Quaternion pitchFix = Quaternion.Euler(0f, 0f, 90f);
    Quaternion finalRotation = correction * pitchFix * converted;
    turner.rotation = finalRotation;
}`
                },
                {
                    type: "text",
                    content: "To test this, I made a simple prototype that only displays the value of the gyro on screen and rotates the camera in first-person style. This was a great way to test the gyro controls and make sure they were working correctly before implementing them in the main game.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "The prototype helped me with setting up the gyro controls for mobile. There is only one big problem: the game we want <highlight-text>needs a third-person camera</highlight-text>. This was because we want the players to see the player character, ShuttleFrog!<br><br>To solve this, I had to do some more math to convert the gyro data to a third-person camera. This was a bit more challenging than the first-person camera, but I was able to get it working with some trial and error.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `// final code for gyro controls in the main game
private void UpdateRotation()
{
    Quaternion deviceAttitude = AttitudeSensor.current.attitude.ReadValue();
    Quaternion correction = Quaternion.Euler(NINETY_DEGREES, 0, -NINETY_DEGREES);
    Quaternion adjustedAttitude = correction * deviceAttitude;

    fullTurner = adjustedAttitude;
    Vector3 euler = fullTurner.eulerAngles;
    Quaternion horizontalRotation = Quaternion.Euler(0, euler.y, 0);

    if (useRigidbody)
        rigidbodyToTurn.MoveRotation(horizontalRotation);
    else
        horizontalTurner.rotation = horizontalRotation;
}`
                },
                { 
                    type: "image", 
                    src: "ShuttleFrogMedia/GyroInGame.gif",
                    size: "100", 
                    alt: "Gyro controls gif",
                    caption: "Figure 3: Final gyro controls in game."
                },
            ],
        },
        {
            title: "Delivery System",
            description: "Delivering plushies is the main mechanic of the game, so I had to make a delivery system that was fun and easy to use. It is split into two parts: the first part is picking up the plushies, and the second part is delivering them to the correct location.<br><br>This feature did go through <highlight-text>many design iterations</highlight-text>, so some parts of the systems I made were not used or are a bit messy. This was a fun challenge for me because I had not had a designer before who pushed me to make such quick iterations.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "ShuttleFrogMedia/GrabPlushie.gif",
                    size: "70", 
                    alt: "Picking-up plushie gif",
                    caption: "Figure 5: Picking-up plushie."
                },
                { 
                    type: "image", 
                    src: "ShuttleFrogMedia/ReleasePlushie.gif",
                    size: "70", 
                    alt: "Deliver plushie gif",
                    caption: "Figure 6: Delivering plushie."
                },
                { 
                    type: "image", 
                    src: "ShuttleFrogMedia/IconSystem.gif",
                    size: "110", 
                    alt: "Hiding and showing icons gif",
                    caption: "Figure 8: Hiding and showing icons."
                },
                { 
                    type: "text", 
                    content: "We wanted no confusion about where the plushies should be delivered, so we added icons above the delivery points. These icons would hide when you hold a plushie, except for the icon of the plushie you are holding. This way you always know where to deliver the plushie you are holding, and you do not have to look at the map or anything to find out where to deliver it.<br><br>After delivering the plushie, the icons would show again, so you can easily find the next delivery point. This was a great way to make the delivery system more intuitive and fun to use.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `public void SetDeliveryPointsDemanding(PlushieType? targetType)
{
    foreach (DeliveryPoint deliveryPoint in deliveryPoints)
    {
        if (deliveryPoint.GetPlushieType() == targetType
            && !deliveryPoint.HasPlushie)
            deliveryPoint.DemandPlushie();
        else 
            deliveryPoint.UnDemandPlushie();
    }
}

public void SetAllDemanding()
{
    foreach (DeliveryPoint deliveryPoint in deliveryPoints.Where(deliveryPoint => !deliveryPoint.HasPlushie))
        deliveryPoint.DemandPlushie();
}`,
                    breakRow: true
                },
                { 
                    type: "text", 
                    content: "Instead of using raycasts, I chose to use trigger colliders for the delivery system. This was a design choice I made because it was easier to implement and it worked well with the game. The player would enter the trigger collider of the delivery point, and then the delivery point would check if the player is holding the correct plushie. If they are, then the delivery point would accept the plushie and give the player points.<br><br>Using trigger colliders also made it easier to apply feedback from playtesting. Instead of changing a value in a raycast, the designer could just change the size of the trigger collider to make it easier or harder to deliver the plushie. This was a great way to make the delivery system more flexible and fun to use.",
                    breakRow: false
                },
                {
                    type: "imageSlider",
                    leftImage: "ShuttleFrogMedia/ColliderYes.png",
                    rightImage: "ShuttleFrogMedia/ColliderNo.png",
                    caption: "Figure 7: Collider stuff.",
                    size: "-2",
                    initialPosition: 60,
                    breakRow: false
                },
            ],
        },
        {
            title: "Multiple Playtesting",
            description: "This project was playtested a lot, not because school required it, but because we showcased it at Dutch Game Week 2025. To make it perfect, we went out of our way to playtest it with many different people. We had a lot of fun doing this because we got to see how different people interacted with the game and what they liked and did not like about it.<br><br>We also got a lot of valuable feedback from the playtesting, which we used to improve the game. We made many changes based on the feedback, which made the game much better.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "ShuttleFrogMedia/Playtesting.png",
                    size: "100", 
                    alt: "Playtesting gif",
                    caption: "Figure 9: Playtesting."
                },
                { 
                    type: "text", 
                    content: "The biggest feedback we got every time was about the <highlight-text>onboarding of the game</highlight-text>. This was not a surprise because there are two players cooperating but with different controls and roles. We did have introduction panels that explained how the game is played, but after every playtest, we got feedback that the players did not read them or did not understand them. So we added new panels each time to explain the biggest misunderstandings.",
                    breakRow: true
                },
                {
                    type: "imageSlider",
                    leftImage: "ShuttleFrogMedia/intro_panel1.png",
                    rightImage: "ShuttleFrogMedia/intro_panel2.png",
                    caption: "Figure 10: Introduction panel 1 and 2.",
                    size: "-2",
                    initialPosition: 50,
                    breakRow: false
                },
                {
                    type: "imageSlider",
                    leftImage: "ShuttleFrogMedia/intro_panel_bonus.png",
                    rightImage: "ShuttleFrogMedia/intro_panel_bonus_2.png",
                    caption: "Figure 11: The 2 extra introduction panels made after playtesting.",
                    size: "-2",
                    initialPosition: 50,
                    breakRow: false
                },
            ],
        },
        {
            title: "Post Mortem",
            description: "ShuttleFrog is a project that I am very proud of; I did not expect that. It started as the first project of year 2 at HKU, and it ended as a game that <highlight-text>I almost sold</highlight-text>. Along the way, there were many playtests and a showcase at <highlight-text>Dutch Game Week 2025</highlight-text> in Breda.",
            wide: true,
            elements: [
                { 
                    type: "text", 
                    content: "I did not expect to be proud of this project for a few reasons. All team projects in year 1 at HKU were not fun or good. They were just projects that I made for a grade. ShuttleFrog started that way as well, but then the random team selection happened. I got a great artist (Sophie Groot) and designer (Mike Weller). With the three of us, we had a strong core on the team. We did have some conflicts in team dynamics, and someone left the group. After this, we had the room for our freedom and had a <highlight-text>rapid production tempo</highlight-text>.",
                    breakRow: false
                },
                { 
                    type: "text", 
                    content: "After Dutch Game Week 2025, I did some guest lectures at my MBO, Media College Amsterdam. I brought my phone and controller with me, just in case I needed them during the lectures. Many students and old teachers of mine enjoyed the game a lot. So much so that one teacher asked me why I did not <highlight-text>sell it to elementary schools to teach kids cooperation</highlight-text>. This was a great idea, and I took some action to make this happen. Sadly, this idea did not go through because it would take too much time for me; I was too busy with HKU. I'm still open to the idea, but only when I have more time.",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "ShuttleFrogMedia/PlayingGame.jpg",
                    size: "100",
                    alt: "Playing ShuttleFrog at Dutch Game Week 2025",
                    caption: "Figure 12: Sophie and I playing ShuttleFrog at Dutch Game Week 2025.",
                    breakRow: false
                },
                {
                    type: "image",
                    src: "ShuttleFrogMedia/GameStand.jpg",
                    size: "100",
                    alt: "Game stand",
                    caption: "Figure 13: ShuttleFrog game stand at Dutch Game Week 2025.",
                    breakRow: false
                },
                { 
                    type: "text", 
                    content: "The project was at some points a challenge for me. The designer made so many iterations; sometimes I was developing a feature and then in the middle of that, I got a redesign of that feature. This made every piece of code potentially obsolete when I wrote it. Therefore, I made systems to be very changeable with <custom-tooltip tooltip=\"Single Responsibility Principle - A module should be responsible to one, and only one, actor.\">SRP</custom-tooltip> & <custom-tooltip tooltip=\"Open–Closed Principle - States that software entities should be open for extension, but closed for modification.\">OCP</custom-tooltip> (the S and O of SOLID). At the end of the development cycle, there was also some commented-out code for good measure.<br><br>A great project, fun to develop, fun playing the game, and a great learning opportunity.",
                    breakRow: true
                },
            ]
        }
    ]
};
