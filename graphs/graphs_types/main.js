const main = () => {
    // Todo: Add data with values of categories

    const expenseAddBtn = document.querySelector('#expense__add-button');

    let labelsData = [];

    let labelsDataLocalStorage = JSON.parse(
        localStorage.getItem('mainGraphLabelsData')
    );

    if (labelsDataLocalStorage !== null) labelsData = labelsDataLocalStorage;

    const data = {
        labels: labelsData,
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    '#75d18e',
                    '#75d1b5',
                    '#75afd1',
                    '#d18c75',
                    '#d1759a',
                    '#af75d1',
                ],
                hoverOffset: 4,
            },
        ],
    };

    const config = {
        type: 'doughnut',
        data: data,
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        },
    };

    const mainGraph = new Chart(document.getElementById('main-graph'), config);

    expenseAddBtn.addEventListener('click', () => {
        // Expense data from localStorare
        let expenseTransactionsText;

        // All categories in graph
        let allCategories = [
            'Food',
            'Education',
            'House',
            'Transport',
            'Entertainment',
            'Other',
        ];

        expenseTransactionsText = localStorage.getItem('expenseTransactions');

        // Adding data to labelsData
        allCategories.forEach((category) => {
            if (expenseTransactionsText !== null) {
                if (
                    expenseTransactionsText.includes(category) &&
                    labelsData.includes(category) === false
                ) {
                    labelsData.push(category);
                }
            }
        });

        // Update data labels
        mainGraph.data.labels = labelsData;
        mainGraph.update();

        localStorage.setItem('mainGraphLabelsData', JSON.stringify(labelsData));
    });
};

export default main;
