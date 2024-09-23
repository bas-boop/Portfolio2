// Renders the project header with the project title
function renderHeader(project) {
    document.getElementById('project-header').innerHTML = `
        <h1>${project.name}</h1>
    `;
}

// Renders the project description and details
function renderProjectInfo(project) {
    const detailsHtml = project.details.map(detail => `
        <div class="detail-item">
            <i class="${detail.icon}"></i>
            <span><strong>${detail.label}: </strong>${detail.value}</span>
        </div>`).join('');

    const linksHtml = project.links.map(link => `
        <li><a href="${link.url}" target="_blank"><i class="${link.icon}"></i> ${link.name}</a></li>
    `).join('');

    document.getElementById('project-info').innerHTML = `
        <div class="code-container">
            <div class="description">
                <h2>Project Information</h2>
                <p>${project.description}</p>
            </div>
            <div class="project-details">${detailsHtml}</div>
            <ul class="link-list">${linksHtml}</ul>
        </div>
    `;
}

// Helper function to render the image grid if images are provided
function renderImageGrid(images) {
    return `
        <div class="image-grid">
            ${images.map(image => `
                <figure class="image-container flex-item width-${image.size}">
                    <img src="${image.src}" alt="${image.alt}">
                    <figcaption>${image.caption}</figcaption>
                </figure>
            `).join('')}
        </div>
    `;
}

// Helper function to render the code snippets
function renderCodeSnippets(codes) {
    return codes.map(codeSnippet => `
        <div class="code">
            <pre><code class="language-${codeSnippet.language}">${codeSnippet.code}</code></pre>
        </div>
    `).join('');
}

// Renders the project features, with support for multiple images and code snippets
function renderProjectFeatures(project) {
    const featureHtml = project.features.map(feature => `
        <hr>
        <div class="code-container">
            <div class="description">
                <h2>${feature.title}</h2>
                <p>${feature.description}</p>
            </div>
            <figure class="image-container flex-item width-40">
                <img src="${feature.image}" alt="${feature.alt}">
                <figcaption>${feature.caption}</figcaption>
            </figure>
            ${renderCodeSnippets(feature.codeSnippets)}
            ${feature.images ? renderImageGrid(feature.images) : ''}
        </div>
    `).join('');

    document.getElementById('project-features').innerHTML = featureHtml;
}

// Initialize the project page by rendering all sections
renderHeader(project);
renderProjectInfo(project);
renderProjectFeatures(project);
