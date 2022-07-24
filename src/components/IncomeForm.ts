const incomeForm = () => {
    const balanceElement: HTMLHeadingElement =
        document.querySelector('#balance');
    const incomeTitleOfTransation: HTMLInputElement = document.querySelector(
        '#income__title-of-transation'
    );

    const incomeAmount: HTMLInputElement =
        document.querySelector('#income__amount');
    const incomeCategory: HTMLInputElement =
        document.querySelector('#income__category');
    const incomeSource: HTMLInputElement =
        document.querySelector('#income__source');
    const incomeAddBtn = document.querySelector('#income__add-button');
    const historyContainer = document.querySelector('#history__container');

    incomeAddBtn.addEventListener('click', (event: Event) => {
        event.preventDefault();

        // Start user balance
        let balanceElementValue = balanceElement.dataset.value;

        let balance: number = Number(balanceElementValue);

        // History transaction elements
        let transactionHtmlContainerElement: HTMLElement,
            titleHtmlElement: HTMLElement,
            amounteHtmlElement: HTMLElement,
            categoryHtmlElement: HTMLElement,
            sourceHtmlElement: HTMLElement;

        const incomeElementsContainer = [
            titleHtmlElement,
            amounteHtmlElement,
            categoryHtmlElement,
            sourceHtmlElement,
        ];

        transactionHtmlContainerElement = document.createElement('div');
        transactionHtmlContainerElement.classList.add(
            'transaction__container',
            'transaction__container--income'
        );

        // Income inputs elements
        let incomeInputs = [
            incomeTitleOfTransation,
            incomeAmount,
            incomeCategory,
            incomeSource,
        ];

        let title = incomeTitleOfTransation.value,
            amount = `${incomeAmount.value} $`,
            category = incomeCategory.value,
            source = incomeSource.value;

        const incomeInputsValues = [title, amount, category, source];

        incomeElementsContainer.forEach((element, i) => {
            // Create elements to history transaction
            element = document.createElement('p');
            element.innerHTML = incomeInputsValues[i];
            element.classList.add('transaction__element');
            transactionHtmlContainerElement.appendChild(element);
        });

        transactionHtmlContainerElement.setAttribute(
            'data-transaction-type',
            'income'
        );

        historyContainer.appendChild(transactionHtmlContainerElement);

        // Clear income inputs
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
        };

        updateBalance();
    });
};

export default incomeForm;
