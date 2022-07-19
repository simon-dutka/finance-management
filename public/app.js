const balanceElement = document.querySelector('#balance');
const formTitleOfTransation = document.querySelector('#form__title-of-transation');
const formAmount = document.querySelector('#form__amount');
const formCategory = document.querySelector('#form__category');
const formSource = document.querySelector('#form__source');
const incomeBtn = document.querySelector('#income_button');
const historyContainer = document.querySelector('#history');
// Start user balance
let balance = 0;
// Render balance function
const renderBalance = () => {
    balanceElement.innerHTML = `Total balance ${balance.toString()} $`;
};
renderBalance();
let title, amount, category, source;
//*TODO: Add reset input function
// History transaction elements
let transactionHtmlContainerElement, titleHtmlElement, amounteHtmlElement, categoryHtmlElement, sourceHtmlElement;
incomeBtn.addEventListener('click', (event) => {
    //*TODO: Delete later
    event.preventDefault();
    transactionHtmlContainerElement = document.createElement('div');
    transactionHtmlContainerElement.classList.add('transaction__container');
    const incomeElementsContainer = [
        titleHtmlElement,
        amounteHtmlElement,
        categoryHtmlElement,
        sourceHtmlElement,
    ];
    const incomeElementsValues = [
        (title = formTitleOfTransation.value),
        (amount = `${formAmount.value} $`),
        (category = formCategory.value),
        (source = formSource.value),
    ];
    incomeElementsContainer.forEach((element, i) => {
        // Create elements to history transaction
        element = document.createElement('p');
        element.innerHTML = incomeElementsValues[i];
        element.classList.add('transaction__element');
        transactionHtmlContainerElement.appendChild(element);
    });
    historyContainer.appendChild(transactionHtmlContainerElement);
});
