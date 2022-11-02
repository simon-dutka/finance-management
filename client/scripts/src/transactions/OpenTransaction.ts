const openTransaction = () => {
    let cards = document.querySelectorAll('.card__item');
    let forms = document.querySelectorAll('.form__transactions');

    cards.forEach((element, i) => {
        element.addEventListener('click', () => {
            let classOpen = 'form__transactions--open';

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
