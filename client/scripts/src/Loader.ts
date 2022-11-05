const loader = () => {
    const loaderElement = document.getElementById('loader');

    window.addEventListener('load', () => {
        loaderElement.style.display = 'none';
    });
};

export { loader };
