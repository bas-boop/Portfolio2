
// Determine the path for navbar and footer
const isInProjectsFolder = window.location.pathname.includes('/Projects/');
const navbarPath = isInProjectsFolder ? '../navbar.html' : 'navbar.html';
const footerPath = isInProjectsFolder ? '../footer.html' : 'footer.html';

// Function to check if we're running locally
function isLocalhost() {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' ||
           window.location.hostname === '';
}

// Function to handle href modifications for local development
function modifyHref(href) {
    if (!isLocalhost() || href.endsWith('.html') || href.startsWith('http')) {
        return href;
    }
    
    // Add .html extension for local development
    // Don't modify the root path
    if (href === '/') {
        return '/index.html';
    }
    
    // Remove trailing slash if exists
    href = href.endsWith('/') ? href.slice(0, -1) : href;
    
    // Add .html extension
    return href + '.html';
}

// Modify all anchor tags to include .html when running locally
function updateAnchors() {
    if (isLocalhost()) {
        document.querySelectorAll('a').forEach(anchor => {
            const originalHref = anchor.getAttribute('href');
            // Skip external links and links that already have .html
            if (originalHref && !originalHref.startsWith('http') && !originalHref.endsWith('.html')) {
                // Special case for root
                if (originalHref === '/') {
                    anchor.setAttribute('href', '/index.html');
                } else {
                    // Remove trailing slash and add .html
                    const cleanHref = originalHref.endsWith('/') ? originalHref.slice(0, -1) : originalHref;
                    anchor.setAttribute('href', cleanHref + '.html');
                }
            }
        });
    }
}

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
        updateAnchors(); // Update anchors after loading new content
    })
    .catch(error => console.error(`Error fetching ${placeholderId}:`, error));
}

function populateProjectsDropdown() {
    const projectsDropdown = document.getElementById("projects-dropdown");
    if (projectsDropdown) {
        projects.forEach(project => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            const href = project.href;
            
            // Handle local development URLs
            if (isLocalhost() && !href.startsWith('http') && !href.endsWith('.html')) {
                if (href === '/') {
                    a.href = '/index.html';
                } else {
                    const cleanHref = href.endsWith('/') ? href.slice(0, -1) : href;
                    a.href = cleanHref + '.html';
                }
            } else {
                a.href = href;
            }
            
            a.textContent = project.title;
            li.appendChild(a);
            projectsDropdown.appendChild(li);
        });
    }
}

// Load navbar and footer
loadContent('navbar-placeholder', navbarPath, populateProjectsDropdown);
loadContent('footer-placeholder', footerPath);

