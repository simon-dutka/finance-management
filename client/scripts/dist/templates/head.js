const headTemplate = () => {
    class HeadElement extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" / >
            
                <title>Finance Management</title>

                <link rel="stylesheet" href="/client/styles/app.css" />
            </head>
            `;
            this.classList.add('navbar__container');
        }
    }
    customElements.define('head-element', HeadElement);
};
export { headTemplate };
