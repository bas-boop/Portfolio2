let activeProjects = projects;
let activeFilterOptions = filterOptions;

const isMiscellaneous = window.location.pathname.toLowerCase().includes("project");

if (isMiscellaneous) {
  console.log("Rendering both main and small projects on miscellaneous page");
}

// Helper function to create an HTML element with attributes and text content
function createElement(tag, attributes = {}, textContent = "") {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (textContent) element.textContent = textContent;
  return element;
}

// Arrays for language and engine tags
const languageTags = ["csharp", "cpp", "gdscript", "htmlcssjs", "blueprint"];
const engineTags = ["unity", "unity6", "unreal", "godot"];
const hiddenTags = ["engine", "lang", "nah"];

// Mapping for display-friendly versions of certain tags
const tagDisplayNames = {
  "play": "Play now",
  "3d": "3D",
  "25d": "2.5D",
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
  const tagClasses = {
    "new": "tag-new",
    "3d": "tag-3d",
    "25d": "tag-25d",
    "2d": "tag-2d",
    "play": "tag-play"
  };

  if (languageTags.includes(tag)) return "tag-lang";
  if (engineTags.includes(tag)) return "tag-engine";

  return tagClasses[tag] || "tag"; // Default class if no match
}

// Function to capitalize the first letter of a tag (if not mapped)
function capitalizeFirstLetter(tag) {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

// Function to get the display-friendly name for a tag
function getTagDisplayName(tag) {
  return tagDisplayNames[tag] || capitalizeFirstLetter(tag);
}

// Function to render filter options dynamically
function renderFilterOptions(filterId, projectsArray, filterOptionsArray) {
  const filterSelect = document.getElementById(filterId);
  if (!filterSelect) return; // Element doesn't exist
  
  filterSelect.innerHTML = ""; // Clear previous options

  const options = [
    { value: "all", label: "Show All" },
    ...(projectsArray.some(project => project.tags.includes("nah"))
      ? [{ value: "exclude-nah", label: "Exclude 'Under Construction'" }]
      : []),
    ...filterOptionsArray.map(option => ({ value: option.value, label: option.label }))
  ];

  options.forEach(option => {
    const opt = createElement("option", { value: option.value }, option.label);
    filterSelect.appendChild(opt);
  });
}

// Function to render project cards with the correct tags
function renderProjects(filter = "all", containerId, projectsArray) {
  const projectContainer = document.getElementById(containerId);
  if (!projectContainer) return; // Element doesn't exist
  
  projectContainer.innerHTML = ""; // Clear previous projects

  projectsArray
    .filter(project => {
      if (filter === "exclude-nah") return !project.tags.includes("nah");
      if (filter === "unity") {
        return ["unity", "unity6"].some(tag => project.tags.includes(tag));
      }
      return filter === "all" || project.tags.includes(filter);
    })
    .forEach(project => {
      const projectElement = createElement("a", {
        href: project.gitHub ? `${project.href}?github=${encodeURIComponent(project.gitHub)}` : project.href,
        class: "project-link",
        "data-tags": project.tags.join(" ")
      });

      if (project.blankTarget) projectElement.setAttribute("target", "_blank");

      // const imgClass = project.tags.includes("nah") ? "blur-image" : "";
      const imgClass = project.tags.includes("nah") ? "" : "";

      const highlightClass = project.highlight ? 'project project-highlight' : 'project';
      projectElement.innerHTML = `
        <div class="${highlightClass}">
          <img src="${project.image}" alt="${project.title}" class="${imgClass}">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags
              .filter(tag => !hiddenTags.includes(tag))
              .map(tag => `<span class="tag ${getTagClass(tag)}">${getTagDisplayName(tag)}</span>`)
              .join("")}
          </div>
        </div>`;
      projectContainer.appendChild(projectElement);
    });
}

// Function to create a highlight project card
function createHighlightProject(project) {
  const anchor = createElement("a", { 
    href: project.gitHub ? `${project.href}?github=${encodeURIComponent(project.gitHub)}` : project.href,
    class: `highlight-container${project.highlight ? ' highlight-special' : ''}`
  });

  // Image
  const img = createElement("img", { src: project.image, alt: project.title });

  // Info container
  const infoDiv = createElement("div", { class: "highlight-info" });
  infoDiv.appendChild(createElement("h2", {}, project.title));
  infoDiv.appendChild(createElement("p", {}, project.description));

  // Tags
  const tagsDiv = createElement("div", { class: "tags" });
  project.tags
    .filter(tag => !hiddenTags.includes(tag))
    .forEach(tag => {
      const span = createElement("span", { class: `tag ${getTagClass(tag)}` }, getTagDisplayName(tag));
      tagsDiv.appendChild(span);
    });

  infoDiv.appendChild(tagsDiv);
  anchor.appendChild(img);
  anchor.appendChild(infoDiv);

  return anchor;
}

// Function to render the highlight projects
function renderHighlightProjects() {
  const highlightContainer = document.querySelector(".highlight-slides");
  highlightContainer.innerHTML = ""; // Clear existing content

  highlightIndices
    .map(index => projects[index])
    .filter(Boolean) // Ignore invalid indices
    .forEach(project => {
      const highlightProject = createHighlightProject(project);
      highlightContainer.appendChild(highlightProject);
    });
}

// Initial rendering of filter options and projects
document.addEventListener("DOMContentLoaded", () => {
  if (isMiscellaneous) {
    // On miscellaneous page, render both main and small projects
    // Note: TagFilter.js handles populating the filter options
    renderProjects("all", "project-container", projects);
    renderProjects("all", "project-container-small", smallProjects);
    
    // Event listeners for both filters
    const mainFilter = document.getElementById("tag-filter");
    const smallFilter = document.getElementById("tag-filter-small");
    
    if (mainFilter) {
      mainFilter.addEventListener("change", function () {
        renderProjects(this.value, "project-container", projects);
      });
    }
    
    if (smallFilter) {
      smallFilter.addEventListener("change", function () {
        renderProjects(this.value, "project-container-small", smallProjects);
      });
    }
  } else {
    // Regular page - single filter and container
    renderFilterOptions("tag-filter", projects, filterOptions);
    renderProjects("all", "project-container", projects);
    
    const filterSelect = document.getElementById("tag-filter");
    if (filterSelect) {
      filterSelect.addEventListener("change", function () {
        renderProjects(this.value, "project-container", projects);
      });
    }
    
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
      renderHighlightProjects();
    }
  }
});
