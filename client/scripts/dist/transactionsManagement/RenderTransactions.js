const renderTransactions = (transactions) => {
    const historyContainer = document.querySelector('.history-container');
    if (localStorage.getItem('transactions') !== null) {
        let createdTransactions = transactions;
        for (let transaction of createdTransactions) {
            let historyItemContainer = document.createElement('div');
            historyItemContainer.classList.add('history__item-container');
            // Shortening titles longer than 27 characters
            if (transaction.title.length > 27) {
                let shortTitle = [];
                for (let i = 0; i < 27; i++) {
                    shortTitle.push(transaction.title.split('')[i]);
                }
                shortTitle.push('...');
                transaction.title = shortTitle.toString().replace(/,/g, '');
            }
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
