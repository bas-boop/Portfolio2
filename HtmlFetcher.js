// Function to load content into a specified placeholder
function loadContent(placeholderId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error(`Error fetching ${placeholderId}:`, error));
}

// Determine the path for navbar and footer
const isInProjectsFolder = window.location.pathname.includes('/Projects/');
const navbarPath = isInProjectsFolder ? '../navbar.html' : 'navbar.html';
const footerPath = isInProjectsFolder ? '../footer.html' : 'footer.html';

// Load navbar and footer
loadContent('navbar-placeholder', navbarPath);
loadContent('footer-placeholder', footerPath);
