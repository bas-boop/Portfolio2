// Function to render filter options
function renderFilterOptions() {
    const filterSelect = document.getElementById("tag-filter");
    filterOptions.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.label;
        filterSelect.appendChild(opt);
    });
}
  
// Arrays for language and engine tags
const languageTags = ["csharp", "cpp", "htmlcssjs"];
const engineTags = ["unity", "unreal", "godot"];
const hiddenTags = ["engine", "lang"];

// Mapping for display-friendly versions of certain tags
const tagDisplayNames = {
  "csharp": "C#",
  "cpp": "C++",
  "xr": "XR" // Ensure XR is fully capitalized
};

// Function to determine the appropriate class for a tag
function getTagClass(tag) {
  if (languageTags.includes(tag)) {
    return "tag-lang"; // Programming language tag
  } else if (engineTags.includes(tag)) {
    return "tag-engine"; // Game engine tag
  } else if (tag === "new") {
    return "tag-new"; // New project tag
  } else {
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
    .filter(project => filter === "all" || project.tags.includes(filter))
    .forEach(project => {
      const projectElement = document.createElement("a");
      projectElement.href = project.href;
      projectElement.classList.add("project-link");
      projectElement.setAttribute("data-tags", project.tags.join(" "));

      projectElement.innerHTML = `
        <div class="project">
          <img src="${project.image}" alt="${project.title}">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags
              .filter(tag => !hiddenTags.includes(tag)) // Exclude "engine" and "lang" from being displayed
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
