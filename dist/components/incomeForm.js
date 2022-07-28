const incomeForm = () => {
    const balanceElement = document.querySelector('#balance');
    const incomeTitleOfTransation = document.querySelector('#income__title-of-transation');
    const incomeAmount = document.querySelector('#income__amount');
    const incomeCategory = document.querySelector('#income__category');
    const incomeSource = document.querySelector('#income__source');
    const incomeAddBtn = document.querySelector('#income__add-button');
    const historyContainer = document.querySelector('#history__container');
    // All storage income transactions in localStorage
    let createdIncomeTransactions = [];
    incomeAddBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Start user balance
        let balanceElementValue = localStorage.getItem('balance');
        let balance = Number(balanceElementValue);
        // History transaction elements
        let transactionHtmlContainerElement, titleHtmlElement, amounteHtmlElement, categoryHtmlElement, sourceHtmlElement, dateElement;
        const incomeElementsContainer = [
            titleHtmlElement,
            amounteHtmlElement,
            categoryHtmlElement,
            sourceHtmlElement,
            dateElement,
        ];
        transactionHtmlContainerElement = document.createElement('div');
        transactionHtmlContainerElement.classList.add('transaction__container', 'transaction__container--income');
        // Income inputs elements
        let incomeInputs = [
            incomeTitleOfTransation,
            incomeAmount,
            incomeCategory,
            incomeSource,
        ];
        // Get current date
        let currentDate = new Date(), currentHours = `${currentDate.getHours()}`, currentMinutes = `${currentDate.getMinutes()}`, currentMonth = `${currentDate.getMonth() + 1}`, currentDay = `${currentDate.getUTCDate() + 1}`, currentYear = `${currentDate.getFullYear()}`;
        // Add 0 brefore hours and minutes < 10
        if (Number(currentHours) < 10)
            currentHours = `0${currentHours}`;
        if (Number(currentMinutes) < 10)
            currentMinutes = `0${currentMinutes}`;
        let title = incomeTitleOfTransation.value, amount = `${incomeAmount.value} $`, category = incomeCategory.value, source = incomeSource.value, date = `${currentHours}:${currentMinutes} ${currentMonth}/${currentDay}/${currentYear}`;
        const incomeInputsValues = [title, amount, category, source, date];
        incomeElementsContainer.forEach((element, i) => {
            // Create elements to history transaction
            element = document.createElement('p');
            element.innerHTML = incomeInputsValues[i];
            element.classList.add('transaction__element');
            transactionHtmlContainerElement.appendChild(element);
        });
        transactionHtmlContainerElement.setAttribute('data-transaction-type', 'income');
        historyContainer.appendChild(transactionHtmlContainerElement);
        createdIncomeTransactions.push(transactionHtmlContainerElement);
        function saveLocalStorage() {
            let createdIncomeTransactionsHtml = '';
            localStorage.getItem('incomeTransactions') === null
                ? (createdIncomeTransactionsHtml = '')
                : (createdIncomeTransactionsHtml =
                    localStorage.getItem('incomeTransactions'));
            for (let i = 0; i < createdIncomeTransactions.length; i++) {
                let childIncome = createdIncomeTransactions[i].outerHTML;
                createdIncomeTransactionsHtml += childIncome;
            }
            localStorage.setItem('incomeTransactions', createdIncomeTransactionsHtml);
        }
        saveLocalStorage();
        incomeInputs.forEach((input) => {
            input.value = '';
        });
        // Update balance function
        const updateBalance = () => {
            amount = amount.replace(/ \$/g, '');
            let newBalance = balance + Number(amount);
            balanceElementValue = newBalance.toString();
            balanceElement.innerHTML = `Total balance ${balanceElementValue} $`;
            balanceElement.setAttribute('data-value', `${balanceElementValue}`);
            localStorage.setItem('balance', balanceElementValue);
        };
        updateBalance();
    });
};
export default incomeForm;
