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

function renderElement(element) {
    const sizeClass = `grid-item width-${element.size}`;
    if (element.type === 'code') {
        return `<div class="code"><pre><code class="language-${element.language}">${element.code}</code></pre></div>`;
    } else if (element.type === 'image') {
        return `<figure class="image-container width-${element.size}">
                    <a href="${element.src}" target="_blank">
                        <img src="${element.src}" alt="${element.alt}" loading="lazy">
                    </a>
                    <figcaption>${element.caption}</figcaption>
                </figure>`;
    } else if (element.type === 'text') {
        return `<div class="description"><p>${element.content}</p></div>`;
    } else if (element.type === 'empty') {
        return '';
    }
    return 'Something broke during generating this element!!!';
}

// Renders the project features with mixed code and images
function renderProjectFeatures(project) {
    const featureHtml = project.features.map(feature => {
        // Set the wide class for each feature based on its individual property
        const w = feature.wide ? "wide" : "";  // Check the wide property for the current feature
        
        return `
            <hr>
            <div class="code-container">
                <div class="description${w}">  <!-- Add the wide class if applicable -->
                    <h2>${feature.title}</h2>
                    <p>${feature.description}</p>
                </div>
                ${feature.elements.map(renderElement).join('')}
            </div>
        `;
    }).join('');

    // Update the inner HTML of the project-features container
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
