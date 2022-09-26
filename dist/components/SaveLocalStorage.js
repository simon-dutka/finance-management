const historyContainer = document.querySelector('#history__container');
const saveLocalStorage = () => {
    let historyContainerLength = historyContainer.children.length;
    let transactionToSave = historyContainer.children[historyContainerLength - 1];
    let createdTransactionsHtml = '';
    let element = transactionToSave.outerHTML;
    localStorage.getItem('allTransactions') === null
        ? (createdTransactionsHtml = element)
        : (createdTransactionsHtml =
            localStorage.getItem('allTransactions') + element);
    localStorage.setItem('allTransactions', createdTransactionsHtml);
};
export { saveLocalStorage };
