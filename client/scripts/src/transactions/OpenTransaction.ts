const openTransaction = () => {
    const cards = document.querySelectorAll('.card__item');
    const forms = document.querySelectorAll('.form__transactions');

    cards.forEach((element, i) => {
        element.addEventListener('click', () => {
            const classOpen = 'form__transactions--open';

            if (i === 0) {
                forms[1].classList.remove(classOpen);
                forms[i].classList.toggle(classOpen);
            } else {
                forms[0].classList.remove(classOpen);
                forms[i].classList.toggle(classOpen);
            }
        });
    });
};

export { openTransaction };
