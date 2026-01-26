document.addEventListener('DOMContentLoaded', function() {
    const isMiscellaneous = window.location.pathname.toLowerCase().includes("project");
    
    // Define filter configurations with their corresponding containers
    const filterConfigs = isMiscellaneous 
        ? [
            { filterId: 'tag-filter', containerId: 'project-container', options: filterOptions },
            { filterId: 'tag-filter-small', containerId: 'project-container-small', options: filterOptions2 }
          ]
        : [
            { filterId: 'tag-filter', containerId: 'project-container', options: filterOptions }
          ];
    
    filterConfigs.forEach(config => {
        const filterSelect = document.getElementById(config.filterId);
        if (!filterSelect) return; // Skip if element doesn't exist
        
        // Clear any existing options first
        filterSelect.innerHTML = '';
        
        // Add "All" option first
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All Projects';
        filterSelect.appendChild(allOption);
        
        // Populate filter options
        config.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            filterSelect.appendChild(optionElement);
        });

        // Handle filter changes - only affect projects in this container
        filterSelect.addEventListener('change', function() {
            const filterValue = filterSelect.value;
            const projectContainer = document.getElementById(config.containerId);
            const projects = projectContainer.querySelectorAll('.project-link');

            projects.forEach(project => {
                if (!project.getAttribute('data-tags')) return; // Skip if no tags
                const tags = project.getAttribute('data-tags').split(' ');
                let shouldShow = false;
                
                if (filterValue === 'all') {
                    shouldShow = true;
                } else if (filterValue === 'unity') {
                    shouldShow = tags.includes('unity') || tags.includes('unity6');
                } else {
                    shouldShow = tags.includes(filterValue);
                }
                
                if (shouldShow) {
                    project.style.display = '';
                    project.classList.remove('hidden');
                } else {
                    project.style.display = 'none';
                    project.classList.add('hidden');
                }
            });
        });
    });
});