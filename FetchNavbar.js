// Determine if the current page is in the 'Projects' folder
const pathToNavbar = window.location.pathname.includes('/Projects/') ? '../navbar.html' : 'navbar.html';

// Load the navbar from the appropriate path
fetch(pathToNavbar)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error fetching navbar:', error));
