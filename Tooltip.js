class CustomTooltip extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the tooltip container
        const container = document.createElement('span');
        container.classList.add('tooltip-container');

        // Add the slot for text content
        const slot = document.createElement('slot');
        container.appendChild(slot);

        // Create the tooltip box
        const tooltipBox = document.createElement('span');
        tooltipBox.classList.add('tooltip-box');
        tooltipBox.textContent = this.getAttribute('tooltip');

        // Append elements to the shadow DOM
        shadow.appendChild(container);
        container.appendChild(tooltipBox);

        // Add styling
        const style = document.createElement('style');
        style.textContent = `
            .tooltip-container {
            position: relative;
            display: inline-block;
            cursor: pointer;
            }
            .tooltip-box {
            visibility: hidden;
            position: absolute;
            top: 115%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4c3a62;
            color: #ddd;
            padding: 5px 10px;
            border-radius: 4px;
            white-space: normal;
            font-size: 14px;
            z-index: 10;
            opacity: 0;
            transition: opacity 0.2s;
            max-width: 300px;
            min-width: 300px;
            }
            .tooltip-box::after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #4c3a62 transparent;
            font-weight: normal;
            }
            .tooltip-container:hover .tooltip-box {
            visibility: visible;
            opacity: 1;
            }`;
        shadow.appendChild(style);
    }
}

customElements.define('custom-tooltip', CustomTooltip);