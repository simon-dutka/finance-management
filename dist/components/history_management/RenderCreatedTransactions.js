const historyContainer = document.querySelector('#history__container');
const renderCreatedTransactions = () => {
    historyContainer.innerHTML = localStorage.getItem('allTransactions');
};
export default renderCreatedTransactions;
