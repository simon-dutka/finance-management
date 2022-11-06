// <div class="history__item-container">
//      <p class="history__item">Pizza with friends</p>
//      <p class="history__item">Income</p>
//      <p class="history__item">Food</p>
//      <p class="history__item">10/20/2022 23:48</p>
//      <p class="history__item">30$</p>
// </div>
const renderTransactions = () => {
    const loaderElement = document.getElementById('loader');
    window.addEventListener('load', () => {
        loaderElement.style.display = 'none';
    });
};
export { renderTransactions };
