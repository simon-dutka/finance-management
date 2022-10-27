const renderHistory = () => {
    const historyAllBtn = document.querySelector('#history__all-btn');
    const historyIncomeBtn = document.querySelector('#history__income-btn');
    const historyExpenseBtn = document.querySelector('#history__expense-btn');

    const historyContainer: HTMLElement = document.querySelector(
        '#history__container'
    );

    // All transactions filter
    historyAllBtn.addEventListener('click', () => {
        // Remove all transactions
        historyContainer.replaceChildren();
        historyContainer.innerHTML = localStorage.getItem('allTransactions');
    });

    // Income transactions filter
    historyIncomeBtn.addEventListener('click', () => {
        let incomeTransactions = '';
        historyContainer.innerHTML = localStorage.getItem('allTransactions');

        for (let i = 0; i < historyContainer.children.length; i++) {
            if (
                historyContainer.children[i].classList.contains(
                    'transaction__container--income'
                )
            ) {
                incomeTransactions += historyContainer.children[i].outerHTML;
            }
        }

        // Remove all transactions
        historyContainer.replaceChildren();
        historyContainer.innerHTML = incomeTransactions;
    });

    // Expense transactions filter
    historyExpenseBtn.addEventListener('click', () => {
        let expenseTransactions = '';
        historyContainer.innerHTML = localStorage.getItem('allTransactions');

        for (let i = 0; i < historyContainer.children.length; i++) {
            if (
                historyContainer.children[i].classList.contains(
                    'transaction__container--expense'
                )
            ) {
                expenseTransactions += historyContainer.children[i].outerHTML;
            }
        }

        // Remove all transactions
        historyContainer.replaceChildren();
        historyContainer.innerHTML = expenseTransactions;
    });
};

export default renderHistory;
