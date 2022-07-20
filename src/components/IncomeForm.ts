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
    const incomeBtn = document.querySelector('#income_button');
    const historyContainer = document.querySelector('#history');

    // Start user balance
    let balanceElementValue = balanceElement.dataset.value;

    incomeBtn.addEventListener('click', (event: Event) => {
        event.preventDefault();

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
        transactionHtmlContainerElement.classList.add('transaction__container');

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

        // Clear income inputs
        incomeInputs.forEach((input) => {
            input.value = '';
        });

        historyContainer.appendChild(transactionHtmlContainerElement);

        // Update balance function
        const updateBalance = () => {
            amount = amount.replace(/ \$/g, '');
            let newBalance = balance + Number(amount);
            balanceElementValue = newBalance.toString();
            balanceElement.innerHTML = `Total balance ${balanceElementValue} $`;
        };

        updateBalance();
    });
};

export default incomeForm;
