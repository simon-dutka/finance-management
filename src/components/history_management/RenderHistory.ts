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
        // Remove all transactions
        historyContainer.replaceChildren();
        historyContainer.innerHTML = localStorage.getItem('incomeTransactions');
    });

    // Expense transactions filter
    historyExpenseBtn.addEventListener('click', () => {
        // Remove all transactions
        historyContainer.replaceChildren();
        historyContainer.innerHTML = localStorage.getItem(
            'expenseTransactions'
        );
    });
};

export default renderHistory;
