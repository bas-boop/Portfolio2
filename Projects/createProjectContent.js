// Renders the project header with the project title
function renderHeader(project) {
    document.getElementById('project-header').innerHTML = `
        <h1>${safeGet(project.name)}</h1>
    `;
}

// Renders the project description and details
function renderProjectInfo(project) {
    const detailsHtml = project.details.map(detail => `
        <div class="detail-item">
            ${createIcon(detail.icon)}
            <span><strong>${detail.label}: </strong>${detail.value}</span>
        </div>`).join('');

    const linksHtml = project.links?.length ? project.links.map(link => `
        <li><a href="${link.url}" target="_blank">${createIcon(link.icon)} ${link.name}</a></li>
    `).join('') : '';

    document.getElementById('project-info').innerHTML = `
        <div class="code-container">
            <div class="description">
                <h2>Project Information</h2>
                <p>${safeGet(project.description)}</p>
            </div>
            <div class="project-details">${detailsHtml}</div>
            <ul class="link-list">${linksHtml}</ul>
        </div>
    `;
}

// Utility function to convert feature title into a URL-friendly ID
function formatFeatureTitle(title) {
    return title.replace(/\s+/g, '-'); // Replace spaces with hyphen (-)
}

// Renders the quick menu based on the project features
function renderQuickMenu(project) {
    // Check if the project itself has a quick menu flag
    if (!project.hasQuickMenu) return; // Exit if quick menu is disabled

    // Generate quick menu for all features
    const quickMenuHtml = project.features.map((feature) => {
        const featureId = formatFeatureTitle(feature.title); // Format feature title for the anchor link
        return `<li><a href="#${featureId}" class="quick-menu-link">${feature.title}</a></li>`;
    }).join('');

    // Insert the quick menu into the DOM
    document.getElementById('quick-menu').innerHTML = `
        <nav class="quick-menu">
            <h3>Jump to a section</h3>
            <ul>${quickMenuHtml}</ul>
        </nav>
    `;

    // Add event listeners to the links for smooth scrolling
    const links = document.querySelectorAll('.quick-menu-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target ID
            const targetElement = document.getElementById(targetId); // Find the target element

            if (targetElement) {
                // Smoothly scroll to the target element
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function escapeHtml(code) {
    // \n needs to be replaced with \\n in the code block provided

    return code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderElement(element) {
    let oneElementOneRow = '';

    if (element.breakRow) {
        oneElementOneRow = `style="flex-basis: 100%; max-width: 100%;"`;
    }

    if (element.type === 'code') {
        const escapedCode = escapeHtml(element.code);
        return `<div class="code" ${oneElementOneRow}><pre><code class="language-${element.language}">${escapedCode}</code></pre></div>`;
    } else if (element.type === 'image') {    
        return `<figure class="image-container width-${element.size}" ${oneElementOneRow}>
                    <a href="${element.src}" target="_blank">
                        <img src="${element.src}" alt="${element.alt}" loading="lazy">
                    </a>
                    <figcaption>${element.caption}</figcaption>
                </figure>`;
    } else if (element.type === 'text') {
        return `<div class="description" ${oneElementOneRow}><p>${element.content}</p></div>`;
    }
    else if (element.type === 'imageSlider') {
        return `<div class="imageSlider-container${element.size}">
                    <div class="imageSlider${element.size}" ${oneElementOneRow}>
                        <div class="imageSlider-wrapper${element.size} img-left">
                            <img src="${element.rightImage}" alt="Left Image">
                        </div>
                        <div class="imageSlider-wrapper${element.size} img-right img-wrapper-overlay">
                            <img src="${element.leftImage}" alt="Right Image">
                        </div>
                        <div class="slider">
                            <div class="handle">
                                <span class="drag-indicator">← →</span>
                            </div>
                        </div>
                        <figcaption class="imageSlider-caption${element.size}">${element.caption}</figcaption>
                    </div>
                </div>`;
    } else if (element.type === 'empty') {
        return '';
    }
    return '<div style="color:red;">Something broke during generating this element!!!</div>';
}

// Renders the project features with mixed code and images
function renderProjectFeatures(project) {
    const featureHtml = project.features.map((feature) => {
        const w = feature.wide ? "wide" : ""; // Check the wide property for the current feature
        const featureId = formatFeatureTitle(feature.title); // Format feature title for ID
        return `
            <hr>
            <div class="code-container" id="${featureId}">
                <div class="description${w}">
                    <h2 class="feature-header" id="${featureId}">
                        ${feature.title}
                        <span class="copy-icon" title="Copy link to this section">
                            <i class="fas fa-link"></i>
                        </span>
                    </h2>
                    <p>${feature.description}</p>
                </div>
                ${feature.elements.map(renderElement).join('')}
            </div>
        `;
    }).join('');

    document.getElementById('project-features').innerHTML = featureHtml;
}

function safeGet(value, fallback = 'Not Available') {
    return value ? value : fallback;
}

function createIcon(iconClass) {
    return `<i class="${iconClass}"></i>`;
}

// Initialize the project page by rendering all sections
renderHeader(project);
renderProjectInfo(project);
renderProjectFeatures(project);
renderQuickMenu(project);

function copyFeatureLink(featureId) {
    const url = `${window.location.origin}${window.location.pathname}#${featureId}`;
    navigator.clipboard.writeText(url)
        .then()
        .catch(() => alert("Failed to copy link."));
}

// Add click event listener for the copy icon
document.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.closest('.copy-icon')) {
        const header = target.closest('.feature-header');
        if (header) {
            const link = `${window.location.origin}${window.location.pathname}#${header.id}`;
            navigator.clipboard.writeText(link).then().catch((err) => {
                console.error('Failed to copy link: ', err);
            });
        }
    }
});


// Show/Hide the "Back to Top" button based on scroll position
window.onscroll = function () {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("back-to-top");

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.classList.add("show"); // Add show class to trigger animation
    } else {
        backToTopButton.classList.remove("show"); // Remove show class to hide the button
    }
}

// Scroll to the top of the page when the "Back to Top" button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove the hash from the URL without reloading the page
    if (window.location.hash) {
        const cleanUrl = window.location.href.split('#')[0];
        window.history.replaceState(null, null, cleanUrl);
    }
}

const sliders = document.querySelectorAll('.imageSlider, .imageSlider-1');

sliders.forEach(sliderContainer => {
    const slider = sliderContainer.querySelector('.slider');
    const imgOverlay = sliderContainer.querySelector('.img-right');

    let isDragging = false;

    slider.addEventListener('mousedown', function(e) {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
    });

    window.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        const rect = sliderContainer.getBoundingClientRect();
        let posX = e.clientX - rect.left;

        if (posX < 0) posX = 0;
        if (posX > rect.width) posX = rect.width;

        slider.style.left = `${posX}px`;
        const percentage = (posX / rect.width) * 100;
        imgOverlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    });

    window.addEventListener('mouseup', function() {
        isDragging = false;
        document.body.style.cursor = 'default';
    });

    // Mobile support for touch events
    slider.addEventListener('touchstart', function(e) {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
    });

    window.addEventListener('touchmove', function(e) {
        if (!isDragging) return;

        const rect = sliderContainer.getBoundingClientRect();
        let posX = e.touches[0].clientX - rect.left;

        if (posX < 0) posX = 0;
        if (posX > rect.width) posX = rect.width;

        slider.style.left = `${posX}px`;
        const percentage = (posX / rect.width) * 100;
        imgOverlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    });

    window.addEventListener('touchend', function() {
        isDragging = false;
        document.body.style.cursor = 'default';
    });
});