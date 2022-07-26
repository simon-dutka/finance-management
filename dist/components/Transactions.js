const historyContainer = document.querySelector('#history__container');
// Render created transactions
const renderCreatedTransactions = () => {
    if (localStorage.getItem('incomeTransactions') !== null &&
        localStorage.getItem('expenseTransactions') !== null) {
        historyContainer.innerHTML =
            localStorage.getItem('incomeTransactions') +
                localStorage.getItem('expenseTransactions');
    }
    else if (localStorage.getItem('incomeTransactions') !== null &&
        localStorage.getItem('expenseTransactions') === null) {
        historyContainer.innerHTML = localStorage.getItem('incomeTransactions');
    }
    else {
        historyContainer.innerHTML = localStorage.getItem('expenseTransactions');
    }
};
export default renderCreatedTransactions;
