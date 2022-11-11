import { renderTransactions } from '../../transactionsManagement/RenderTransactions.js';

const filterTransactions = () => {
    const checkboxes: any = document.querySelectorAll('.checkbox');
    const historyContainer = document.getElementById('history-container');

    let createdTransactions = JSON.parse(localStorage.getItem('transactions'));
    checkboxes.forEach((element, i) => {
        element.addEventListener('change', () => {
            if (element.checked) {
                //* Income transactions
                if (element.name === 'income') {
                    createdTransactions.forEach((element) => {
                        if (element.type !== 'Income') {
                            createdTransactions = createdTransactions.filter(
                                (item) => {
                                    return item !== element;
                                }
                            );
                        }
                    });

                    historyContainer.replaceChildren();
                    renderTransactions(createdTransactions);
                }
            } else {
                historyContainer.replaceChildren();
                renderTransactions(
                    JSON.parse(localStorage.getItem('transactions'))
                );
            }
        });
    });
};

export { filterTransactions };
