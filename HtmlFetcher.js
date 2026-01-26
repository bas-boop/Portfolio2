
// Determine the path for navbar and footer
const isInProjectsFolder = window.location.pathname.toLowerCase().includes('/projects/');
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
    if (!isLocalhost() || href.startsWith('http')) {
        return href;
    }
    
    // Extract query string and hash fragments
    const hashIndex = href.indexOf('#');
    const queryIndex = href.indexOf('?');
    
    let hash = '';
    let query = '';
    let basePath = href;
    
    // Determine what comes first: ? or #
    if (queryIndex !== -1) {
        hash = queryIndex < hashIndex || hashIndex === -1 ? '' : href.substring(hashIndex);
        query = hashIndex !== -1 && hashIndex < queryIndex ? '' : href.substring(queryIndex);
        basePath = href.substring(0, Math.min(queryIndex, hashIndex === -1 ? Infinity : hashIndex));
    } else if (hashIndex !== -1) {
        hash = href.substring(hashIndex);
        basePath = href.substring(0, hashIndex);
    }
    
    // If the base path already ends with .html or is a file we shouldn't modify, just return as is
    if (basePath.endsWith('.html') || basePath.endsWith('.pdf') || basePath.includes('.')) {
        return href;
    }
    
    // Add .html extension for local development
    // Don't modify the root path
    if (basePath === '/') {
        return '/index.html' + query + hash;
    }
    
    // Remove trailing slash if exists
    const cleanPath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    
    // Add .html extension before the query and hash
    return cleanPath + '.html' + query + hash;
}

// Modify all anchor tags to include .html when running locally
function updateAnchors() {
    if (isLocalhost()) {
        document.querySelectorAll('a').forEach(anchor => {
            const originalHref = anchor.getAttribute('href');
            // Skip external links
            if (originalHref && !originalHref.startsWith('http')) {
                // Extract query string and hash fragments
                const hashIndex = originalHref.indexOf('#');
                const queryIndex = originalHref.indexOf('?');
                
                let hash = '';
                let query = '';
                let basePath = originalHref;
                
                // Determine what comes first: ? or #
                if (queryIndex !== -1) {
                    hash = queryIndex < hashIndex || hashIndex === -1 ? '' : originalHref.substring(hashIndex);
                    query = hashIndex !== -1 && hashIndex < queryIndex ? '' : originalHref.substring(queryIndex);
                    basePath = originalHref.substring(0, Math.min(queryIndex, hashIndex === -1 ? Infinity : hashIndex));
                } else if (hashIndex !== -1) {
                    hash = originalHref.substring(hashIndex);
                    basePath = originalHref.substring(0, hashIndex);
                }
                
                // If the base path already ends with .html or is a file we shouldn't modify, do nothing
                if (!basePath.endsWith('.html') && !basePath.endsWith('.pdf') && !basePath.includes('.')) {
                    // Special case for root
                    if (basePath === '/') {
                        anchor.setAttribute('href', '/index.html' + query + hash);
                    } else {
                        // Remove trailing slash and add .html before the query and hash
                        const cleanHref = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
                        anchor.setAttribute('href', cleanHref + '.html' + query + hash);
                    }
                }
            }
        });
    }
}

function loadContent(placeholderId, filePath, callback) {
    // Try fetching with the original path first
    fetch(filePath)
    .then(response => {
        if (!response.ok) {
            // If the file has .html extension, try without it
            if (filePath.endsWith('.html')) {
                const pathWithoutExt = filePath.slice(0, -5);
                return fetch(pathWithoutExt).then(retryResponse => {
                    if (!retryResponse.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return retryResponse.text();
                });
            }
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
            if (isLocalhost() && !href.startsWith('http')) {
                // Extract query string and hash fragments
                const hashIndex = href.indexOf('#');
                const queryIndex = href.indexOf('?');
                
                let hash = '';
                let query = '';
                let basePath = href;
                
                // Determine what comes first: ? or #
                if (queryIndex !== -1) {
                    hash = queryIndex < hashIndex || hashIndex === -1 ? '' : href.substring(hashIndex);
                    query = hashIndex !== -1 && hashIndex < queryIndex ? '' : href.substring(queryIndex);
                    basePath = href.substring(0, Math.min(queryIndex, hashIndex === -1 ? Infinity : hashIndex));
                } else if (hashIndex !== -1) {
                    hash = href.substring(hashIndex);
                    basePath = href.substring(0, hashIndex);
                }
                
                // If the base path already ends with .html, just use it as is
                if (!basePath.endsWith('.html')) {
                    if (basePath === '/') {
                        a.href = '/index.html' + query + hash;
                    } else {
                        const cleanHref = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
                        a.href = cleanHref + '.html' + query + hash;
                    }
                } else {
                    a.href = href;
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
loadContent('navbar-placeholder', navbarPath, function() {
    populateProjectsDropdown();
    // Reinitialize theme toggle after navbar is injected (since innerHTML destroys event listeners)
    if (typeof initThemeToggle === 'function') {
        initThemeToggle();
    }
});
loadContent('footer-placeholder', footerPath);

