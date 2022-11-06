const renderTransactions = () => {
    const historyContainer = document.querySelector('.history-container');
    if (localStorage.getItem('transactions') !== null) {
        let createdTransactions = JSON.parse(localStorage.getItem('transactions'));
        for (let transaction of createdTransactions) {
            let historyItemContainer = document.createElement('div');
            historyItemContainer.classList.add('history__item-container');
            // Create html element
            Object.values(transaction).forEach((i) => {
                let item = document.createElement('p');
                item.classList.add('history__item');
                item.innerHTML = i.toString();
                historyItemContainer.appendChild(item);
            });
            historyContainer.appendChild(historyItemContainer);
        }
    }
};
export { renderTransactions };
