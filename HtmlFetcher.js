
// Determine the path for navbar and footer
const isInProjectsFolder = window.location.pathname.includes('/Projects/');
const navbarPath = isInProjectsFolder ? '../navbar.html' : 'navbar.html';
const footerPath = isInProjectsFolder ? '../footer.html' : 'footer.html';

function loadContent(placeholderId, filePath, callback) {
    fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById(placeholderId).innerHTML = data;
        if (callback) callback(); // Run the callback AFTER loading
    })
    .catch(error => console.error(`Error fetching ${placeholderId}:`, error));
}

function populateProjectsDropdown() {
    const projectsDropdown = document.getElementById("projects-dropdown");
    if (projectsDropdown) {
        projects.forEach(project => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = project.href;
            a.textContent = project.title;
            li.appendChild(a);
            projectsDropdown.appendChild(li);
        });
    }
}

// Load navbar and footer
loadContent('navbar-placeholder', navbarPath, populateProjectsDropdown);
loadContent('footer-placeholder', footerPath);

