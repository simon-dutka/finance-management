const deleteTransaction = () => {
    let deleteBtn = document.getElementsByClassName(
        'transaction__element--delete'
    );

    let transaction = document.getElementsByClassName('transaction__container');

    for (let i = 0; i < deleteBtn.length; i++) {
        const saveNewLocalStorage = () => {
            const historyContainer: any = document.querySelector(
                '#history__container'
            );

            let historyContainerLength = historyContainer.children.length;

            let transactionToSave = historyContainer.children;

            let element = transactionToSave.toString();
            let createdTransactionsHtml = '';

            for (let i = 0; i < historyContainerLength; i++) {
                createdTransactionsHtml += transactionToSave[i].outerHTML;
            }

            localStorage.setItem('allTransactions', createdTransactionsHtml);
        };

        const deleteElement = () => {
            transaction[i].remove();
            saveNewLocalStorage();
            location.reload();
        };

        deleteBtn[i].addEventListener('click', deleteElement);
    }
};

export default deleteTransaction;
