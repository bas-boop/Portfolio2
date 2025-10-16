const project = {
    name: "Maze Generator",
    description: "This project is a grid-based maze generator created in Unity, designed to give users full control over maze generation. Key customizable parameters include the size of the maze and <highlight-text>the choice of algorithm</highlight-text> for generating it, such as Prim's or the recursive backtracking method. The goal was to create an intuitive, flexible tool that provides users with various options to <highlight-text>generate perfect mazes</highlight-text>, where every open space is accessible.<br><br>I developed this project independently over the course of one week as part of a <highlight-text>trial assignment for a potential internship at DTT</highlight-text>. It required a strong understanding of algorithms and grid systems. The development process involved not only programming but also debugging, optimizing performance for larger mazes, and ensuring the user interface was intuitive for testing different configurations.",
    hasQuickMenu: true,
    details: [
        { icon: "fas fa-calendar-alt", label: "Year", value: "2023" },
        { icon: "fas fa-calendar-week", label: "Duration", value: "15 hours" },
        { icon: "fas fa-microchip", label: "Engine", value: "Unity" },
        { icon: "fas fa-code", label: "Language", value: "C#" },
        { icon: "fas fa-arrow-trend-up", label: "Workflow", value: "Waterfall" },
        { icon: "fas fa-user", label: "Team Size", value: "Solo" }
    ],
    links: [
        { icon: "fab fa-github", name: "GitHub Repository", url: "https://github.com/bas-boop/Unity-maze-gen" },
        { icon: "fas fa-gamepad", name: "Download application", url: "https://baz-geluk9.itch.io/mazegenerator" },
        { icon: "fas fa-globe", name: "Possible Internship", url: "https://www.d-tt.nl/" }
    ],
    features: [
        {
            title: "Abstract Maze Generator",
            description: "This is the central class of the project. It handles most of the core functionality, such as setting up the maze, placing the entrance and exit, and providing multiple functions for managing the cells. <highlight-text>It operates using the tilemap</highlight-text>, changing the tiles to red, green, or white. In this context, white tiles represent walls, red tiles are cells that could become part of the path, and green tiles are the final path after the algorithm processes them.",
            wide: true,
            elements: [
                { 
                    type: "image", 
                    src: "MazeGenMedia/MazeGen.gif", 
                    size: "200", 
                    alt: "Maze gen gif",
                    caption: "Figure 1: Maze generation gif, first instantly, then slowly.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Creates a blank maze for the generation.
/// </summary>
protected void SetupMaze()
{
    width = width % 2 == 0 ? width + 1 : width;
    height = height % 2 == 0 ? height + 1 : height;

    VisitedCells = new bool[width, height]; // Initialize the VisitedCells array
    
    for (int x = -1; x < width + 1; x++)
    {
        for (int y = -1; y < height + 1; y++)
        {
            var position = new Vector3Int(x, y, 0);

            if (x == -1 || y == -1 || x == width || y == height)
            {
                // Set walls for the border cells
                tilemap.SetTile(position, whiteTile);
            }
            else if (x % 2 == 0 || y % 2 == 0)
            {
                // Set walls for even-indexed cells
                tilemap.SetTile(position, whiteTile);
            }
            else
            {
                // Set empty space for odd-indexed cells
                tilemap.SetTile(position, redTile);
                VisitedCells[x, y] = false;
            }
        }
    }
}`,
                    breakRow: false
                },                
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Finds a starting position for the generation. And sets its self.
/// </summary>
/// <returns>The chosen starting position.</returns>
protected Vector3Int FindAndSetStartPosition()
{
    var availableCells = new List<Vector3Int>();

    // Adds every red tile
    for (int x = 1; x < width; x += 2)
    {
        for (int y = 1; y < height; y += 2)
        {
            availableCells.Add(new Vector3Int(x, y, 0));
        }
    }

    if (availableCells.Count != 0) return GetRandomTile(availableCells);
    
    Debug.LogError("No available cells for starting position.");
    return Vector3Int.zero;
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "When the generation process begins, several initial steps are performed. First, the maze is set up by creating a blank grid with the specified size. Once this is complete, a random cell within the maze is selected as the starting point for the algorithm to begin carving out paths.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "For managing the tiles, two functions are used most frequently. The first is for changing the color of the current tile and its neighboring tile, while the second is for retrieving an unvisited neighboring tile. These two functions are repeatedly utilized by the algorithm throughout the maze generation process.<br><br>The first function, <highlight-text>UpdateTileColor</highlight-text>, is responsible for updating the color of tiles to indicate their status during the generation process. The tile between the currentTile and neighborTile is updated, as well as the currentTile itself.<br><br>The second function, <highlight-text>GetUnvisitedNeighbors</highlight-text>, retrieves all neighboring tiles of the current cell that have not yet been visited. This is a core part of the algorithm, as it determines the next steps in the maze generation.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Changes the tile in between currentTile and neighborTile to a color. And the currentTile gets changed.
/// </summary>
/// <param name="currentTile">The current tile, that gets also changed</param>
/// <param name="neighborTile">The neighbor to look for the tile in between.</param>
protected void UpdateTileColor(Vector3Int currentTile, Vector3Int neighborTile = default)
{
    // Making the wallTile green
    if (neighborTile != default)
    {
        var wallTilePosition = currentTile + (neighborTile - currentTile) / 2;
        tilemap.SetTile(wallTilePosition, greenTile);
    }

    // Update the tiles for the path
    tilemap.SetTile(currentTile, greenTile);
    tilemap.SetTile(neighborTile, greenTile);
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `protected List<Vector3Int> GetUnvisitedNeighbors(Vector3Int cell)
    => _directions.Select(direction => cell + direction).Where(neighbor => IsInsideMaze(neighbor) && !VisitedCells[neighbor.x, neighbor.y]).ToList();`,
                    breakRow: true
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Creates the entrance and exit for the maze.
/// </summary>
protected void CreateEntranceAndExit()
{
    var entrancePosition = FindRandomEmptyTile();
    var exitPosition = FindRandomEmptyTile();

    // Ensure entrance and exit positions are valid
    while (!IsValidEntranceExitPosition(entrancePosition)) entrancePosition = FindRandomEmptyTile();
    while (!IsValidEntranceExitPosition(exitPosition)) exitPosition = FindRandomEmptyTile();
    
    // Adjust entrance position to be at the left edge and exit position to be at the right edge
    entrancePosition.x = -1;
    exitPosition.x = width;

    // Set tiles for entrance and exit
    tilemap.SetTile(entrancePosition, greenTile);
    tilemap.SetTile(exitPosition, greenTile);

    // Make the second tile for entrance and exit, because outer wall is 2 tiles thick
    var entrancePosition2 = new Vector3Int(0, entrancePosition.y, 0);
    var exitPosition2 = new Vector3Int(width - 1, exitPosition.y, 0);
    tilemap.SetTile(entrancePosition2, greenTile);
    tilemap.SetTile(exitPosition2, greenTile);
    
    mazeDoneSound.Play();
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "After the algorithm completes the maze generation, the entrance and exit are created. These are placed on the <highlight-text>left and right sides of the maze</highlight-text>, respectively. Both the entrance and exit are <highlight-text>two tiles deep</highlight-text>, making them easier to spot in a large maze.<br><br>As this marks the final step of the generation process, a distinct sound is played to <highlight-text>notify the user that the maze is complete</highlight-text>. This sound is different from the tile-changing sound to clearly signal the completion.",
                    breakRow: false
                },
            ]
        },
        {
            title: "Performace",
            description: "One of the requirements is that the maze should be generated with a <highlight-text>minimum width and height of 250 by 250 cells</highlight-text>. This can be a challenging task if you don’t know how to approach it. Why does this pose a problem? Imagine starting at a cell and moving to the next cell, then the next, and so on. At some point, this process might be repeated so many times that the <highlight-text>stack becomes overloaded</highlight-text>, resulting in a stack overflow error.<br><br>When this happens, the maze generation will abruptly stop <highlight-text>midway through the process.</highlight-text>",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "MazeGenMedia/StackOverflow.png", 
                    size: "100", 
                    alt: "Stack overflow error",
                    caption: "Figure 2: Stack overflow error during generation of maze.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `// RecursiveBacktracking generate function
protected override IEnumerator GenerateMazeCoroutine(bool isSlowly = true)
{
    VisitedCells = new bool[width, height]; // Initialize the visitedCells array
    CellStack = new Stack<Vector3Int>(); // Initialize the cell stack

    SetupMaze();

    var startPosition = FindAndSetStartPosition();
    CellStack.Push(startPosition);
    UpdateTileColor(startPosition);
    
    // Update the starting tile color before entering the main loop
    yield return new WaitForSeconds(waitTime);
    UpdateTileColor(startPosition);

    // Loop until all cells have been in the CellStack
    while (CellStack.Count > 0)
    {
        if (isSlowly) 
        {
            yield return new WaitForSeconds(waitTime); // Pause execution and resume
            tileChangeSound.Play();
        }

        var currentCell = CellStack.Peek();
        VisitedCells[currentCell.x, currentCell.y] = true;

        var unvisitedNeighbors = GetUnvisitedNeighbors(currentCell);

        if (unvisitedNeighbors.Count > 0)
        {
            var randomNeighbor = unvisitedNeighbors[Random.Range(0, unvisitedNeighbors.Count)];
            UpdateTileColor(currentCell, randomNeighbor);
            CellStack.Push(randomNeighbor);
        }
        else
        {
            // Mark the current cell as visited after backtracking
            UpdateTileColor(currentCell);
            CellStack.Pop();
        }

        // Stop the maze generation process
        if (AllTilesVisited()) break;
    }

    CreateEntranceAndExit();
}`,
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "To address this issue, I have used the <highlight-text>Stack data structure</highlight-text>, which offers <highlight-text>better performance than a standard array or list</highlight-text>. Additionally, the stack is stored on the heap, avoiding the limitations of stack memory.<br><br>If the current cell has all its neighboring cells visited, the program removes (or 'pops') the current cell from the stack and backtracks to the previous cell. However, if there is any neighboring cell that has not been visited, the algorithm moves to that cell and checks its neighbors.<br><br>By implementing this method, I have resolved the performance issues and <highlight-text>successfully achieved the minimum maze size</highlight-text> of 250 by 250 cells. However, the actual limit is significantly larger. While I haven’t tested the absolute maximum size, it largely depends on the capabilities of your machine. The largest maze I’ve generated so far was <highlight-text>10,000 by 10,000 cells</highlight-text>, which took several hours to complete.",
                    breakRow: false
                },
            ]
        },
        {
            title: "Recursive Backtracking Algorithm",
            description: "The <highlight-text>recursive backtracking algorithm</highlight-text> is one of the algorithm the generate the maze with. It systematically explores the maze, carving out paths and backtracking when it reaches dead ends. This algorithm ensures that the maze is fully connected, with no unreachable areas. During execution, cells are visited, and the stack is used to track the path taken, allowing the algorithm to backtrack efficiently whenever necessary.<br><br>In action, the algorithm alternates between <highlight-text>marking tiles</highlight-text> and <highlight-text>backtracking</highlight-text>, dynamically updating the maze's visual representation. When executed with delays, it provides a real-time visualization of the maze generation, accompanied by sound effects for an engaging user experience.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "MazeGenMedia/Recursive.gif", 
                    size: "100", 
                    alt: "Recursive gif",
                    caption: "Figure 3: Recursive backtracking algorithm im action, generating the maze.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `protected override IEnumerator GenerateMazeCoroutine(bool isSlowly = true)
{
    VisitedCells = new bool[width, height]; // Initialize the visitedCells array
    CellStack = new Stack<Vector3Int>(); // Initialize the cell stack

    SetupMaze();

    var startPosition = FindAndSetStartPosition();
    CellStack.Push(startPosition);
    // UpdateTileColor(startPosition);
    
    // Update the starting tile color before entering the main loop
    yield return new WaitForSeconds(waitTime);
    UpdateTileColor(startPosition);

    // Loop until all cells have been in the CellStack
    while (CellStack.Count > 0)
    {
        if (isSlowly) 
        {
            yield return new WaitForSeconds(waitTime); // Pause execution and resume
            tileChangeSound.Play();
        }

        var currentCell = CellStack.Peek();
        VisitedCells[currentCell.x, currentCell.y] = true;

        var unvisitedNeighbors = GetUnvisitedNeighbors(currentCell);

        if (unvisitedNeighbors.Count > 0)
        {
            var randomNeighbor = unvisitedNeighbors[Random.Range(0, unvisitedNeighbors.Count)];
            UpdateTileColor(currentCell, randomNeighbor);
            CellStack.Push(randomNeighbor);
        }
        else
        {
            // Mark the current cell as visited after backtracking
            UpdateTileColor(currentCell);
            CellStack.Pop();
        }

        // Stop the maze generation process
        if (AllTilesVisited()) break;
    }

    CreateEntranceAndExit();
}`,
                    breakRow: true
                }
            ]
        },
        {
            title: "Prim's Algorithm",
            description: "The <highlight-text>Prim's algorithm</highlight-text> is another method used to generate mazes, emphasizing simplicity and efficiency. This algorithm grows the maze by repeatedly selecting and connecting unvisited cells to the current maze structure. Unlike recursive backtracking, which primarily focuses on depth-first exploration, Prim’s algorithm generates mazes with a bias toward broader, more interconnected layouts, often <highlight-text>resulting in shorter paths between points</highlight-text>.",
            wide: false,
            elements: [
                { 
                    type: "image", 
                    src: "MazeGenMedia/Prims.gif", 
                    size: "100", 
                    alt: "Prims gif",
                    caption: "Figure 4: Prim's algorithm im action, generating the maze.",
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `protected override IEnumerator GenerateMazeCoroutine(bool isSlowly = true)
{
    // Initialize the visitedCells array and the cell stack
    VisitedCells = new bool[width, height];
    CellStack = new Stack<Vector3Int>();
    
    SetupMaze();

    // Choose a random starting cell and mark it as visited
    var startPosition = FindAndSetStartPosition();
    VisitedCells[startPosition.x, startPosition.y] = true;

    // Add the starting cell to the cell stack
    CellStack.Push(startPosition);

    // Loop until all cells have been visited
    while (!AllTilesVisited())
    {
        if (isSlowly)
        {
            yield return new WaitForSeconds(waitTime); // Pause execution and resume
            tileChangeSound.Play();
        }
        
        // Get the current cell from the top of the stack
        var currentCell = CellStack.Peek();

        // Get the unvisited neighbors of the current cell
        var unvisitedNeighbors = GetUnvisitedNeighbors(currentCell);

        if (unvisitedNeighbors.Count > 0)
        {
            var randomNeighbor = unvisitedNeighbors[Random.Range(0, unvisitedNeighbors.Count)];
            VisitedCells[randomNeighbor.x, randomNeighbor.y] = true;

            // Add the neighbor to the maze by updating the tile colors
            UpdateTileColor(currentCell, randomNeighbor);

            // Add the neighbor to the cell stack
            CellStack.Push(randomNeighbor);
        }
        else CellStack.Pop(); // If all neighbors have been visited, remove the current cell from the stack
    }

    CreateEntranceAndExit();
}`,
                    breakRow: true
                }
            ]
        },
        {
            title: "Camera",
            description: "Every time when generating a maze, the size would change and the camera should also be placed correct. So a simple way was calculating the tilemaps size and placing the camera in the middle of that. Ofcouse with some padding around to see the whole maze.",
            wide: false,
            elements: [
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Sets the zoom of the camera at the good distance, with the tilemap it's size.
/// </summary>
/// <param name="targetBounds">The tilemap size.</param>
private void MoveAndZoomCamera(Bounds targetBounds)
{
    var targetPosition = targetBounds.center;
    var targetSize = Mathf.Max(targetBounds.size.x, targetBounds.size.y) * 0.5f;

    _mainCamera.transform.position = new Vector3(targetPosition.x, targetPosition.y, _mainCamera.transform.position.z);
    _mainCamera.orthographicSize = targetSize + padding;
}`,
                    breakRow: false
                },
                { 
                    type: "code", 
                    language: "cs", 
                    code: `/// <summary>
/// Calculates the tilemap size.
/// </summary>
/// <returns>The size of the tilemap</returns>
private Bounds CalculateTilemapBounds()
{
    var tilemapRenderers = tilemap.GetComponentsInChildren<Renderer>();

    if (tilemapRenderers.Length == 0) return new Bounds(tilemap.position, Vector3.zero);

    var bounds = tilemapRenderers[0].bounds;

    for (int i = 1; i < tilemapRenderers.Length; i++)
    {
        bounds.Encapsulate(tilemapRenderers[i].bounds);
    }

    return bounds;
}`,
                    breakRow: false
                },
            ]
        },
        {
            title: "Post Mortem",
            description: "Although I wasn't selected for the internship, mainly due to the high volume of applicants, I received a grade of 7.1/10 for my efforts. This score reflects solid work but also highlights areas for improvement, such as refining my approach to code documentation and enhancing the error-catching and handling aspects of the project. Despite this, the experience was a valuable learning opportunity. It allowed me to sharpen my skills in Unity development and algorithm design, providing insights that will inform my approach to future projects.",
            wide: false,
            elements: [
                {
                    type: "text", 
                    content: "<br>When comparing myself to my classmates who also attempted this trial assignment, I was one of the few who successfully completed the project but still didn’t secure the internship. There are many possible reasons for this. At the time, the overall skill level of the class wasn’t particularly high. Most students were unable to create even a 20 by 20 maze. For those who could, their implementations often failed to meet the 250 by 250 cell requirement due to poor data structure choices and a lack of algorithm knowledge.",
                    breakRow: false
                },
                {
                    type: "text", 
                    content: "That said, I must also acknowledge my own shortcomings, as I too failed to secure the internship. One key issue was that my program allowed users to input negative numbers, which caused errors and impacted my marks. Additionally, my code documentation was not as detailed as expected. While it covered the basics, it didn’t go in-depth as it should have. Another area of improvement was inheritance and abstraction. While I used inheritance, it was limited to the two different algorithms, and the abstract generator class could have been broken into smaller, more modular components for better structure. Lastly, the user experience could have been improved. The user interface lacked feedback, such as animations or sound effects when interacting with buttons. While I did include audio (which could be muted), it didn’t add much to the overall experience.<br><br>In summary, while I was able to complete the project and demonstrate my capabilities, the shortcomings in input validation, documentation, inheritance, and user experience were significant enough to impact my score and the final decision. Nonetheless, this experience taught me important lessons that I will carry forward into future projects.",
                    breakRow: false
                },
            ]
        }
    ]
};
