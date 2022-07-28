const expenseForm = () => {
    const balanceElement: HTMLHeadingElement =
        document.querySelector('#balance');
    const expenseTitleOfTransation: HTMLInputElement = document.querySelector(
        '#expense__title-of-transation'
    );
    const expenseAmount: HTMLInputElement =
        document.querySelector('#expense__amount');
    const expenseCategory: HTMLInputElement =
        document.querySelector('#expense__category');
    const expenseSource: HTMLInputElement =
        document.querySelector('#expense__source');
    const expenseAddBtn = document.querySelector('#expense__add-button');
    const historyContainer = document.querySelector('#history__container');

    // All storage expense transactions in localStorage
    let createdExpenseTransactions = [];

    expenseAddBtn.addEventListener('click', (event: Event) => {
        event.preventDefault();

        // Start user balance
        let balanceElementValue = localStorage.getItem('balance');

        let balance: number = Number(balanceElementValue);

        // History transaction elements
        let transactionHtmlContainerElement: HTMLElement,
            titleHtmlElement: HTMLElement,
            amounteHtmlElement: HTMLElement,
            categoryHtmlElement: HTMLElement,
            sourceHtmlElement: HTMLElement,
            dateElement: Date;

        const expenseElementsContainer = [
            titleHtmlElement,
            amounteHtmlElement,
            categoryHtmlElement,
            sourceHtmlElement,
            dateElement,
        ];

        transactionHtmlContainerElement = document.createElement('div');
        transactionHtmlContainerElement.classList.add(
            'transaction__container',
            'transaction__container--expense'
        );

        // Expense inputs elements
        let expenseInputs = [
            expenseTitleOfTransation,
            expenseAmount,
            expenseCategory,
            expenseSource,
        ];

        // Get current date
        let currentDate = new Date(),
            currentHours = `${currentDate.getHours()}`,
            currentMinutes = `${currentDate.getMinutes()}`,
            currentMonth = `${currentDate.getMonth() + 1}`,
            currentDay = `${currentDate.getUTCDate() + 1}`,
            currentYear = `${currentDate.getFullYear()}`;

        // Add 0 brefore hours and minutes < 10
        if (Number(currentHours) < 10) currentHours = `0${currentHours}`;
        if (Number(currentMinutes) < 10) currentMinutes = `0${currentMinutes}`;

        let title = expenseTitleOfTransation.value,
            amount = `${expenseAmount.value} $`,
            category = expenseCategory.value,
            source = expenseSource.value,
            date = `${currentHours}:${currentMinutes} ${currentMonth}/${currentDay}/${currentYear}`;

        const expenseInputsValues = [title, amount, category, source, date];

        expenseElementsContainer.forEach((element, i) => {
            // Create elements to history transaction
            element = document.createElement('p');
            element.innerHTML = expenseInputsValues[i];
            element.classList.add('transaction__element');
            transactionHtmlContainerElement.appendChild(element);
        });

        transactionHtmlContainerElement.setAttribute(
            'data-transaction-type',
            'expense'
        );

        historyContainer.appendChild(transactionHtmlContainerElement);

        createdExpenseTransactions.push(transactionHtmlContainerElement);

        function saveLocalStorage() {
            let createdExpenseTransactionsHtml = '';

            localStorage.getItem('expenseTransactions') === null
                ? (createdExpenseTransactionsHtml = '')
                : (createdExpenseTransactionsHtml = localStorage.getItem(
                      'expenseTransactions'
                  ));

            for (let i = 0; i < createdExpenseTransactions.length; i++) {
                let childExpense = createdExpenseTransactions[i].outerHTML;
                createdExpenseTransactionsHtml += childExpense;
            }

            localStorage.setItem(
                'expenseTransactions',
                createdExpenseTransactionsHtml
            );
        }

        saveLocalStorage();

        // Clear expense inputs
        expenseInputs.forEach((input) => {
            input.value = '';
        });

        // Update balance function
        const updateBalance = () => {
            amount = amount.replace(/ \$/g, '');
            let newBalance = balance - Number(amount);
            balanceElementValue = newBalance.toString();
            balanceElement.innerHTML = `Total balance ${balanceElementValue} $`;

            balanceElement.setAttribute('data-value', `${balanceElementValue}`);
            localStorage.setItem('balance', balanceElementValue);
        };

        updateBalance();
    });
};

export default expenseForm;
