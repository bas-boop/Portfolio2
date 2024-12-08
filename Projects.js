// Function to render filter options
function renderFilterOptions() {
  const filterSelect = document.getElementById("tag-filter");

  // Add default "all" option
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "Show All";
  filterSelect.appendChild(allOption);

  // Add the "Exclude nah" option
  if (window.location.pathname === "/" || window.location.pathname.includes("index")) {
    const excludeNahOption = document.createElement("option");
    excludeNahOption.value = "exclude-nah";
    excludeNahOption.textContent = "Exclude 'Under Construction'";
    filterSelect.appendChild(excludeNahOption);
  }

  // Add other filter options
  filterOptions.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.label;
      filterSelect.appendChild(opt);
  });
}

  
// Arrays for language and engine tags
const languageTags = ["csharp", "cpp", "gdscript", "htmlcssjs"];
const engineTags = ["unity", "unity6", "unreal", "godot"];
const hiddenTags = ["engine", "lang", "nah"];

// Mapping for display-friendly versions of certain tags
const tagDisplayNames = {
  "play": "Play now",
  "3d": "3D",
  "2d": "2D",
  "csharp": "C#",
  "cpp": "C++",
  "unity6": "Unity 6",
  "gdscript": "GDscript",
  "htmlcssjs": "HTML CSS JS",
  "xr": "XR",
  "nah": "Under Construction"
};

// Function to determine the appropriate class for a tag
function getTagClass(tag) {
  if (languageTags.includes(tag)) {
    return "tag-lang"; // Programming language tag
  } else if (engineTags.includes(tag)) {
    return "tag-engine"; // Game engine tag
  } else if (tag === "new") {
    return "tag-new"; // New project tag
  }else if (tag === "3d") {
    return "tag-3d"; // New project tag
  }else if (tag === "2d") {
    return "tag-2d"; // New project tag
  } else if (tag === "play")
    return "tag-play"
  else {
    return "tag"; // Default tag class
  }
}

// Function to capitalize the first letter of a tag (if not mapped)
function capitalizeFirstLetter(tag) {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

// Function to get the display-friendly name for a tag
function getTagDisplayName(tag) {
  if (tagDisplayNames[tag]) {
    return tagDisplayNames[tag]; // Return the mapped display name if it exists (like "C#" or "XR")
  }
  return capitalizeFirstLetter(tag); // Otherwise capitalize the first letter of the tag
}

// Function to render project cards with correct tag classes
function renderProjects(filter = "all") {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = ""; // Clear previous projects

  projects
    .filter(project => {
      const hasNahTag = project.tags.includes("nah");

      if (filter === "exclude-nah") {
        return !hasNahTag;
      }
      
      // Adjust filter for Unity and Unity 6 tags
      if (filter === "unity" || filter === "unity6") {
        return project.tags.includes("unity") || project.tags.includes("unity6");
      }

      return filter === "all" || project.tags.includes(filter);
    })
    .forEach(project => {
      const projectElement = document.createElement("a");
      projectElement.href = project.href;

      if (project.blankTarget)
        projectElement.target = "_blank";
      
      projectElement.classList.add("project-link");
      projectElement.setAttribute("data-tags", project.tags.join(" "));

      // const imgClass = project.tags.includes("nah") ? "blur-image" : "";
      const imgClass = project.tags.includes("nah") ? "" : "";

      projectElement.innerHTML = `
        <div class="project">
          <img src="${project.image}" alt="${project.title}" class="${imgClass}">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags
              .filter(tag => !hiddenTags.includes(tag))
              .map(
                tag => `<span class="tag ${getTagClass(tag)}">${getTagDisplayName(tag)}</span>`
              )
              .join("")}
          </div>
        </div>
      `;
      projectContainer.appendChild(projectElement);
    });
}

// Event listener to handle filter changes
document.getElementById("tag-filter").addEventListener("change", function () {
  renderProjects(this.value);
});

// Initial rendering of filter options and projects
renderFilterOptions();
renderProjects(); // Default is to show all projects
