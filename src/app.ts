const balanceElement: HTMLHeadingElement = document.querySelector('#balance');
const formTitleOfTransation: HTMLInputElement = document.querySelector(
    '#form__title-of-transation'
);
const formAmount: HTMLInputElement = document.querySelector('#form__amount');
const formCategory: HTMLInputElement =
    document.querySelector('#form__category');
const formSource: HTMLInputElement = document.querySelector('#form__source');
const incomeBtn = document.querySelector('#income_button');
const historyContainer = document.querySelector('#history');

// Start user balance
let balanceElementValue = balanceElement.dataset.value;

// Render balance function
const renderBalance = () => {
    balanceElement.innerHTML = `Total balance ${balanceElementValue} $`;
};

renderBalance();

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
        formTitleOfTransation,
        formAmount,
        formCategory,
        formSource,
    ];

    //TODO: add foreach for this let
    let title = formTitleOfTransation.value,
        amount = `${formAmount.value} $`,
        category = formCategory.value,
        source = formSource.value;

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
