const saveLocalStorage = () => {
    const historyContainer: any = document.querySelector('#history__container');

    let historyContainerLength = historyContainer.children.length;

    if (historyContainer.children.length !== 0) {
        let transactionToSave =
            historyContainer.children[historyContainerLength - 1];
        let element = transactionToSave.outerHTML;

        let createdTransactionsHtml = '';

        localStorage.getItem('allTransactions') === null
            ? (createdTransactionsHtml = element)
            : (createdTransactionsHtml =
                  localStorage.getItem('allTransactions') + element);

        localStorage.setItem('allTransactions', createdTransactionsHtml);
    }
};

export { saveLocalStorage };
