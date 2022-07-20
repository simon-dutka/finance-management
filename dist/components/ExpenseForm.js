const expenseForm = () => {
    const balanceElement = document.querySelector('#balance');
    const expenseTitleOfTransation = document.querySelector('#expense__title-of-transation');
    const expenseAmount = document.querySelector('#expense__amount');
    const expenseCategory = document.querySelector('#expense__category');
    const expenseSource = document.querySelector('#expense__source');
    const expenseBtn = document.querySelector('#expense__button');
    const historyContainer = document.querySelector('#history');
    expenseBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let balanceElementValue = balanceElement.dataset.value;
        let balance = Number(balanceElementValue);
        // History transaction elements
        let transactionHtmlContainerElement, titleHtmlElement, amounteHtmlElement, categoryHtmlElement, sourceHtmlElement;
        const expenseElementsContainer = [
            titleHtmlElement,
            amounteHtmlElement,
            categoryHtmlElement,
            sourceHtmlElement,
        ];
        transactionHtmlContainerElement = document.createElement('div');
        transactionHtmlContainerElement.classList.add('transaction__container');
        // expense inputs elements
        let expenseInputs = [
            expenseTitleOfTransation,
            expenseAmount,
            expenseCategory,
            expenseSource,
        ];
        let title = expenseTitleOfTransation.value, amount = `${expenseAmount.value} $`, category = expenseCategory.value, source = expenseSource.value;
        const expenseInputsValues = [title, amount, category, source];
        expenseElementsContainer.forEach((element, i) => {
            // Create elements to history transaction
            element = document.createElement('p');
            element.innerHTML = expenseInputsValues[i];
            element.classList.add('transaction__element');
            transactionHtmlContainerElement.appendChild(element);
        });
        // Clear expense inputs
        expenseInputs.forEach((input) => {
            input.value = '';
        });
        historyContainer.appendChild(transactionHtmlContainerElement);
        // Update balance function
        const updateBalance = () => {
            amount = amount.replace(/ \$/g, '');
            let newBalance = balance - Number(amount);
            balanceElementValue = newBalance.toString();
            balanceElement.innerHTML = `Total balance ${balanceElementValue} $`;
            balanceElement.setAttribute('data-value', `${balanceElementValue}`);
        };
        updateBalance();
    });
};
export default expenseForm;