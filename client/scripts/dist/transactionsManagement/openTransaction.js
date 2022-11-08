const openTransaction = () => {
    const cards = document.querySelectorAll('.card__item');
    const formTransactions = document.querySelectorAll('.form__transactions');
    cards.forEach((element, i) => {
        element.addEventListener('click', () => {
            const classOpen = 'form__transactions--open';
            if (i === 0) {
                formTransactions[1].classList.remove(classOpen);
                formTransactions[i].classList.toggle(classOpen);
            }
            else {
                formTransactions[0].classList.remove(classOpen);
                formTransactions[i].classList.toggle(classOpen);
            }
        });
    });
};
export { openTransaction };
