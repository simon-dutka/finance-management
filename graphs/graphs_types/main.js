const main = () => {
    // Todo: After click expense button total balance get space before $
    // Todo: Add data with values of categories
    const expenseAmount = document.querySelector('#expense__amount');
    const expenseAddBtn = document.querySelector('#expense__add-button');
    const expenseCategory = document.querySelector('#expense__category');

    let labelsData = [];

    let labelsDataLocalStorage = JSON.parse(
        localStorage.getItem('mainGraphLabelsData')
    );

    if (labelsDataLocalStorage !== null) labelsData = labelsDataLocalStorage;

    let dataValues = [1, 1, 1, 1, 1, 1];

    let data = {
        labels: labelsData,
        datasets: [
            {
                data: dataValues,
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
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        },
    };

    const mainGraph = new Chart(document.getElementById('main-graph'), config);

    let foodDataValue = 0,
        educationDataValue = 0,
        houseDataValue = 0,
        transportDataValue = 0,
        entertainmentDataValue = 0,
        otherDataValue = 0;

    // Remove old data
    // function removeData(chart) {
    //     chart.data.labels.pop();
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.pop();
    //     });
    //     chart.update();
    // }

    expenseAddBtn.addEventListener('click', () => {
        //* Testing now
        function removeData(chart) {
            chart.data.labels.pop();
            chart.data.datasets.forEach((dataset) => {
                dataset.data.pop();
                dataset.data.pop();
            });
            chart.update();
        }
        removeData(mainGraph);

        function addData(chart, label, data) {
            dataValues = [1, 1, 1, 1, 1, 20];
            // chart.data.labels.push('new item 10');
            chart.data.datasets.forEach((dataset) => {
                // value of amount
                dataset.data.push(10);
            });
            chart.update();
        }

        addData(mainGraph);

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

        let allCategoriesDataValues = [
            foodDataValue,
            educationDataValue,
            houseDataValue,
            transportDataValue,
            entertainmentDataValue,
            otherDataValue,
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

        let amount = Number(expenseAmount.value);
        let amountCategory = expenseCategory.value;

        // Todo: instead a lot's of if's -> foreach to check category and add values to category data container
        //! So bad - do it better bro (let's use loop)
        if (amountCategory === 'Food') {
            foodDataValue = foodDataValue + amount;
        }
        if (amountCategory === 'Education') {
            educationDataValue = educationDataValue + amount;
        }
        if (amountCategory === 'House') {
            houseDataValue = houseDataValue + amount;
        }
        if (amountCategory === 'Transport') {
            transportDataValue = transportDataValue + amount;
        }
        if (amountCategory === 'Entertainment') {
            entertainmentDataValue = entertainmentDataValue + amount;
        }
        if (amountCategory === 'Other') {
            otherDataValue = otherDataValue + amount;
        }
    });
};

export default main;

// Add data
// function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }
