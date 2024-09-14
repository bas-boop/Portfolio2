// Load the navbar from the external file
fetch('/navbar.html')  // Using absolute path to fetch the navbar from root
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error fetching navbar:', error));