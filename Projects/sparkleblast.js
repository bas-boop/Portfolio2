const project = {
    name: "Sparkleblast",
    description: "Sparkle Blast is a 3D magical girl boomer shooter made in the Unreal Engine. This was done with a <highlighted-text>team of 17 students and our own office</highlighted-text>, a classroom. From 11 to 7 we would work every week day on this project.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2025-2026" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "3 months" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unreal" },
        { icon: "fas fa-code", label: "Language", value: "Blueprint & C++" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Scrum" },
        { icon: "fas fa-users", label: "Team Size", value: "17 (dev 3, art 7, des 7)" },
        { icon: "fa-solid fa-user-plus", label: "Role", value: "Gameplay developer" }
    ],
    links: [
        { icon: "fab fa-github", name: "Practice GitHub Repository", url: "https://github.com/bas-boop/ProjectPebble" },
        { icon: "fas fa-file", name: "Final report (Dutch)", url: "SparkleblastMedia/EindverslagExpandYouself-Public.pdf" },
        { icon: "fab fa-linkedin", name: "Chirstmas team update", url: "https://www.linkedin.com/posts/nathan-stroomberg_this-week-team-portomaxx-held-a-christmas-ugcPost-7409783944163926016-guGF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyXW_QBYnnhUpYqZHkEpCUWg_gEMk7DUus" },
        { icon: "fab fa-linkedin", name: "Aura farm linkedin post", url: "https://www.linkedin.com/in/bas-de-reus/" },
    ],
    features: [
        {
            title: "Test enemy",
            description: "A simple enemy that just walks around and takes damage. This was not used for the game but for me to learn how AI and NavMesh works in Unreal. It surfed as a basis for the other enemies.<br><br>I did some rescreach how to make the enemies, with the state trees or behaviour trees. After doing some rescreach and testing, I choose blueprint, because why learn something spefic in Unreal if I do not get Blueprint fully.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "SparkleblastMedia/TestEnemy.gif",
                    size: "100", 
                    alt: "TestEnemy gif",
                    caption: "Figure 1: The test enemy walking around."
                },
                {
                    type: "blueprint",
                    name: "BP_TestEnemy part 1",
                    preview: "SparkleblastMedia/TestEnemy1.png",
                    breakRow: false
                },
                {
                    type: "blueprint",
                    name: "BP_TestEnemy part 2",
                    preview: "SparkleblastMedia/TestEnemy2.png",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/BetterCode.png",
                    size: "80", 
                    alt: "X",
                    caption: "Figure 2: NavMeshBounds."
                },
            ]
        },
        {
            title: "Chomper (Melee Enemy)",
            description: "The chomper enemy was the first real enemy I developed, this was done via a featurespec from a designer. The first time I have worked with a featurespec, everything in detail on what and how the enemy can do or not. Here for Chomper has alot of depth.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "SparkleblastMedia/Chomper.gif",
                    size: "100", 
                    alt: "X",
                    caption: "Figure 3: The chomper enemy in action."
                },
                {
                    type: "text",
                    content: "Chomper drives around when the player is not close. It does that in circles on random spots in his driveable space. I create a circle with X amount of points, than Chomper would dirve that for Y amounts. When it is done driving all the circles it would choose a diffrent spot and drive some circles there.",
                    breakRow: true
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/ChomperWandering.gif",
                    size: "100", 
                    alt: "X",
                    caption: "Figure 4: Early development of wondering state with circle."
                },

                // todo
                {
                    type: "blueprint",
                    name: "Create circle",
                    preview: "SparkleblastMedia/Chomper4.png",
                    breakRow: false
                },

                {
                    type: "text",
                    content: "When the player is close to Chomper, it would stop driving around and chase the player. When he touches the player it will bite and return to driving around. If he did not hit the player in X amount of seconds it will overshoot its chase, just like Sonic. Then it will also go back to driving around or do a new attack if the player is close enhough.",
                    breakRow: true
                },
                {
                    type: "blueprint",
                    name: "BPC_ChaseState",
                    preview: "SparkleblastMedia/Chomper3.png",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/ChomperChase.gif",
                    size: "100", 
                    alt: "X",
                    caption: "Figure 4: Early development of chase state."
                },
                {
                    type: "blueprint",
                    name: "BP_Chomper switch state logic",
                    preview: "SparkleblastMedia/Chomper4.png",
                    breakRow: false
                },
            ]
        },
        {
            title: "SpiderShooter (Ranged Enemy)",
            description: "Text",
            wide: true,
            elements: [
                {
                    type: "blueprint",
                    name: "BP_SpiderShooter",
                    preview: "SparkleblastMedia/BP_SpiderShooter.png",
                    breakRow: false
                },
                {
                    type: "blueprint",
                    name: "BPC_ShootingState part 1",
                    preview: "SparkleblastMedia/Shooting1.png",
                    breakRow: false
                },
                {
                    type: "blueprint",
                    name: "BPC_ShootingState part 2",
                    preview: "SparkleblastMedia/Shooting2.png",
                    breakRow: false
                },
                {
                    type: "blueprint",
                    name: "BPC_ShootingState part 3",
                    preview: "SparkleblastMedia/Shooting3.png",
                    breakRow: false
                },
            ]
        },
        {
            title: "Learning Unreal",
            description: "To learn Unreal, I thought about <highlight-text>what basics you need in every engine</highlight-text>. Then I made a side project to learn those fundamentals. I implemented everything in Blueprints first and then in C++ to get a good understanding of both.<br><br>I have made the following:<br>- Player input<br>- Object spawning & destruction<br>- Collision with function calls<br>- Material changing<br>- Level switching",
            wide: false,
            elements: [
                {
                    type: "imageSlider",
                    leftImage: "SparkleblastMedia/Pebble1.png",
                    rightImage: "SparkleblastMedia/Pebble2.png",
                    caption: "Figure X: Practice project, with collision and mat changing.",
                    size: "-2",
                    initialPosition: 50,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cpp", 
                    code: `UFUNCTION(BlueprintCallable)
void SwitchMat(UStaticMeshComponent* targetMat);
                    
void AMatSwitcher::SwitchMat()
{
	MyMesh->SetMaterial(0, isSwitched ? startMat : endMat);
	mesh->SetMaterial(0, isSwitched ? startMat : endMat);
	isSwitched = !isSwitched;
}`
                },
                { 
                    type: "code", 
                    language: "cpp", 
                    code: `void AMyFirstCpp::BeginPlay()
{
	Super::BeginPlay();
	
	if (shouldDestroy)
	{
		UKismetSystemLibrary::PrintString(GetWorld(), deleteTextPrefix + *myActor->GetName());
		myActor->K2_DestroyActor();
	}

	if (shouldSpawn)
	{		
		UKismetSystemLibrary::PrintString(GetWorld(), spawmTextPrefix + *myActor->GetName());
		FVector location  (100,100,100);
		FRotator rotation (0,0, 0);
		FActorSpawnParameters parmz;
		//GetWorld()->SpawnActor(ActorToSpawn);
		GetWorld()->SpawnActor<ASpawnActor>(ActorToSpawn, location, FRotator::ZeroRotator, parmz);
	}
}`
                },
                {
                    type: "blueprint",
                    name: "BPC_Health",
                    preview: "SparkleblastMedia/BPC_Health.png",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "To ease in to the project I made a health component first. I have done this many times, so how hard can it be in Unreal. Added damage, healing, event when dead, and we are done. The only difficult part was the event call, because this was not done in my side project.",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/Pause.gif",
                    size: "80", 
                    alt: "pause gif",
                    caption: "Figure X: pausing the game during movement."
                },
                {
                    type: "text",
                    content: "The designers really wanted a pause menu, because it's not needed for the core gameplay?<br><br>Anyway, I learned how to make basis text and buttons appear on screen and pause the game's time. I did break the UI on the way, it very different that how Unity's does this. Probably in a better way but I did not fully know how it all works.",
                    breakRow: false
                },
                {
                    type: "blueprint",
                    name: "BP_Pause",
                    preview: "SparkleblastMedia/BP_Pause.png",
                    breakRow: false
                },                
                {
                    type: "blueprint",
                    name: "BP_TogglePause",
                    preview: "SparkleblastMedia/BP_TogglePause.png",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/BetterCode.png",
                    size: "80", 
                    alt: "pause widget",
                    caption: "Figure X: pause widget."
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "Text",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "SparkleblastMedia/BetterCode.png",
                    size: "100", 
                    alt: "Better code example",
                    caption: "Figure X: A message of me to the team when I found a new node."
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/KerstMetDes.jpg",
                    size: "100", 
                    alt: "Christmas photo with designers",
                    caption: "Figure X: A Christmas photo with peak designers."
                },
                {
                    type: "text",
                    content: "Last 3 days I broke both enemies when intergrating the animations and bite attack of chomer.",
                    breakRow: false
                },
            ]
        },
    ]
};
