document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('tag-filter');
    
    // Clear any existing options first
    filterSelect.innerHTML = '';
    
    // Add "All" option first
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'All Projects';
    filterSelect.appendChild(allOption);
    
    // Use the correct filter options based on the page
    const options = window.location.pathname.toLowerCase().includes("miscellaneous") ? filterOptions2 : filterOptions;
    
    // Populate filter options
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        filterSelect.appendChild(optionElement);
    });

    // Handle filter changes
    filterSelect.addEventListener('change', function() {
        const filterValue = filterSelect.value;
        const projects = document.querySelectorAll('.project-link');

        projects.forEach(project => {
            if (!project.getAttribute('data-tags')) return; // Skip if no tags
            const tags = project.getAttribute('data-tags').split(' ');
            if (filterValue === 'all' || tags.includes(filterValue)) {
                project.style.display = '';
                project.classList.remove('hidden');
            } else {
                project.style.display = 'none';
                project.classList.add('hidden');
            }
        });
    });
});