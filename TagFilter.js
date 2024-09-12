document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('tag-filter');
    const projects = document.querySelectorAll('.project');

    filterSelect.addEventListener('change', function() {
        const filterValue = filterSelect.value;

        projects.forEach(project => {
            const tags = project.getAttribute('data-tags').split(' ');
            if (filterValue === 'all' || tags.includes(filterValue)) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});