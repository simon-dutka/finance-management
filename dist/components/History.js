const renderHistory = () => {
    const incomeAddBtn = document.querySelector('#income__add-button');
    const expenseAddBtn = document.querySelector('#expense__add-button');
    const historyAllBtn = document.querySelector('#history__all-btn');
    const historyincomeBtn = document.querySelector('#history__income-btn');
    const historyExpenseBtn = document.querySelector('#history__expense-btn');
    const historyContainer = document.querySelector('#history__container');
    let allTransactionsContainer = [];
    let incomeTransactionsContainer = [];
    let expenseTransactionsContainer = [];
    // Add income transactions to incomeTransactionsContainer
    incomeAddBtn.addEventListener('click', () => {
        for (let i = 0; i < historyContainer.children.length; i++) {
            let transaction = historyContainer.children[i];
            if (transaction.dataset.transactionType === 'income') {
                allTransactionsContainer.push(transaction);
                incomeTransactionsContainer.push(transaction);
            }
        }
    });
    // Add expense transactions to incomeTransactionsContainer
    expenseAddBtn.addEventListener('click', () => {
        for (let i = 0; i < historyContainer.children.length; i++) {
            let transaction = historyContainer.children[i];
            if (transaction.dataset.transactionType === 'expense') {
                allTransactionsContainer.push(transaction);
                expenseTransactionsContainer.push(transaction);
            }
        }
    });
    // All transactions filter
    historyAllBtn.addEventListener('click', () => {
        // Remove all transactions
        historyContainer.replaceChildren();
        // Add income transactions
        for (let i = 0; i < allTransactionsContainer.length; i++) {
            historyContainer.appendChild(allTransactionsContainer[i]);
        }
    });
    // Income transactions filter
    historyincomeBtn.addEventListener('click', () => {
        // Remove all transactions
        historyContainer.replaceChildren();
        // Add income transactions
        for (let i = 0; i < incomeTransactionsContainer.length; i++) {
            historyContainer.appendChild(incomeTransactionsContainer[i]);
        }
    });
    // Expense transactions filter
    historyExpenseBtn.addEventListener('click', () => {
        // Remove all transactions
        historyContainer.replaceChildren();
        // Add income transactions
        for (let i = 0; i < expenseTransactionsContainer.length; i++) {
            historyContainer.appendChild(expenseTransactionsContainer[i]);
        }
    });
};
export default renderHistory;
