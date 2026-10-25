const project = {
    name: "Sparkleblast",
    description: "Sparkleblast is a 3D magical girl boomer shooter built in Unreal Engine, a full-scale student production developed by a team of 17 across an 8-hour daily schedule, five days a week. We treated it like a real studio: dedicated workspace, structured workflow, and a genuine commitment to shipping something worth playing.<br><br>Our process was Agile at its core, though we tailored it to what actually worked. We liked to say we ran \"Scrum without the S, because that is slop\", cutting the ceremonial overhead and keeping only what drove results: sprint planning, per-task definitions of done, reviews, and retrospectives. No fluff, just the parts that kept the team aligned and the project moving.",
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
        // { icon: "fab fa-linkedin", name: "Aura farm linkedin post", url: "https://www.linkedin.com/in/bas-de-reus/" },
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
                    src: "SparkleblastMedia/Navmesh.png",
                    size: "110", 
                    alt: "X",
                    caption: "Figure 2: NavMeshBounds."
                },
            ]
        },
        {
            title: "Chomper (Melee Enemy)",
            description: "The chomper enemy was the first real enemy I developed, this was done via a featurespec from a designer. <highlight-text>The first time I have worked with a featurespec</highlight-text>, everything in detail on what and how the enemy can do or not. Here for Chomper has alot of depth.",
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
                    caption: "Figure 4: Early development of wandering state with circle."
                },
                {
                    type: "blueprint",
                    name: "Create circle",
                    preview: "SparkleblastMedia/GetCirclePoints.png",
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
                    caption: "Figure 5: Early development of chase state."
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
            description: "Spidershooter was the second and final enemy I developed, also built from a feature spec. What made this one particularly interesting was the collaboration involved. <highlight-text>Another developer had already created a custom gun system, and this enemy needed to integrate with it</highlight-text>. It was a great opportunity to work closely with a teammate, iron out a few edge cases in the gun system, and deliver a polished result together.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "SparkleblastMedia/FinalSpidershooter.gif",
                    size: "100", 
                    alt: "X",
                    caption: "Figure 6: The spidershooter enemy in action."
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/SpiderShooter.gif",
                    size: "100", 
                    alt: "X",
                    caption: "Figure 7: Patrol movement & walking backwards when player is close."
                },
                {
                    type: "text",
                    content: "Movement was another significant aspect of the Spidershooter. It uses a waypoint-based patrol system, and when the player gets too close, it retreats by walking backwards. This behavior was intentional, as a ranged enemy should always maintain distance from the player rather than engaging up close.",
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
                    type: "text",
                    content: "Finally, the Spidershooter needed a controlled firing pattern. Constant shooting would leave the player no room to dodge or retaliate, so it fires in bursts. A simple counter tracks each burst, and once it hits zero, a cooldown begins. This opens up significantly more strategic depth for the player.",
                    breakRow: true
                },
                {
                    type: "blueprint",
                    name: "BPC_ShootingState part 3",
                    preview: "SparkleblastMedia/Shooting3.png",
                    breakRow: false
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/SpiderShooterBurst.gif",
                    size: "100", 
                    alt: "X",
                    caption: "Figure 8: Burst shots."
                },
                {
                    type: "blueprint",
                    name: "BP_SpiderShooter",
                    preview: "SparkleblastMedia/BP_SpiderShooter.png",
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
                    caption: "Figure 9: Practice project, with collision and mat changing.",
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
                    caption: "Figure 10: pausing the game during movement."
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
                    src: "SparkleblastMedia/Widget.png",
                    size: "100", 
                    alt: "pause widget",
                    caption: "Figure 11: pause widget."
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "What a great project this was. I learned many new things, met many people in new ways, and <highlight-text>overcame a fear I had</highlight-text>. This fear was of being a one-trick-pony, only knowing Unity. I have learned Unreal, even if just a small part, and now I can approach trying new things without that fear. Yes, I did not have the same skill level as in Unity, but that comes with time. It is also not like I started from zero; I already understand how games are made, just using a different tool this time.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "SparkleblastMedia/BetterCode.png",
                    size: "80", 
                    alt: "Better code example",
                    caption: "Figure 12: A message of me to the team when I found a new node."
                },
                { 
                    type: "image", 
                    src: "SparkleblastMedia/KerstMetDes.jpg",
                    size: "70", 
                    alt: "Christmas photo with designers",
                    caption: "Figure 13: A Christmas photo with peak designers, Adam & Stars."
                },
                {
                    type: "text",
                    content: "During this project I worked closely with the designers, especially the two in figure 13. Together we built both enemies and their small interactions. This was a great learning experience: giving each other feedback, iterating on design and implementation, and having a great laugh. Through this I truly came to understand what a designer does during a project and what to expect from them.<br><br>During the last week of the project I was implementing the animations for the enemies. This was a task I underestimated in terms of how long it would take. The first two days were spent researching how to trigger animations in Blueprints. I finally found the right approach, but then connecting it to my enemy system was not working. Everything broke at that point. Not everything I attempt will go perfectly, this was a reality check in a way. The takeaway is: don't rush a feature you have no idea how to build.<br><br>This project reminds me of <a href=\"OperationStarfall\">Neon Origins</a>, also a large-scale project. It sometimes felt like I was right back in that time, building a feature with less time pressure, with great focus on one part of the game and the ability to polish it. I can't wait to work on a semester-long project; that is scheduled for years 3 and 4 at HKU.",
                    breakRow: false
                },
                {
                    type: "text",
                    content: "Big thanks to Nathan and Victor for setting this project up and allowing me to work with them on it. They worked hard to make this large-scale team project possible at HKU, something that would normally not exist.",
                    breakRow: false
                },
            ]
        },
    ]
};
