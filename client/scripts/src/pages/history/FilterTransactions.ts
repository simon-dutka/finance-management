import { renderTransactions } from '../../transactionsManagement/RenderTransactions.js';

const filterTransactions = () => {
    const checkboxes: any = document.querySelectorAll('.checkbox');
    const historyContainer = document.getElementById('history-container');

    let filters: string[] = ['Income', 'Expense'];

    checkboxes.forEach((element, i) => {
        element.addEventListener('change', () => {
            let createdTransactions = JSON.parse(
                localStorage.getItem('transactions')
            );

            const filterItems = () => {
                historyContainer.replaceChildren();

                if (filters.length !== 2) {
                    createdTransactions = createdTransactions.filter(
                        (filter) => filters.includes(filter.type) === false
                    );
                }

                renderTransactions(createdTransactions);
            };

            const clickFilter = (filterNum: number, filterName: string) => {
                if (i === filterNum) {
                    filters.includes(filterName)
                        ? (filters = filters.filter(
                              (filter) => filter !== filterName
                          ))
                        : filters.push(filterName);
                }
            };

            let filtersCheckboxes = [
                {
                    filterNum: 0,
                    filterName: 'Income',
                },
                {
                    filterNum: 1,
                    filterName: 'Expense',
                },
            ];

            filtersCheckboxes.forEach((element) => {
                clickFilter(element.filterNum, element.filterName);
            });

            filterItems();
        });
    });
};

export { filterTransactions };
