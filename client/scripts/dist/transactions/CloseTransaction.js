const closeTransactions = (formNum) => {
    const formTransactions = document.querySelectorAll('.form__transactions');
    const classOpen = 'form__transactions--open';
    formTransactions[formNum].classList.remove(classOpen);
};
export { closeTransactions };
