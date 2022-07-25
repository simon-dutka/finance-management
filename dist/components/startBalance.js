const balanceElement = document.querySelector('#balance');
// User set start balance
while (localStorage.getItem('balance') == null) {
    let userStartBalance = window.prompt('Type Your start balance', '');
    const numRegex = /^[\d]/g;
    if (numRegex.test(userStartBalance)) {
        localStorage.setItem('balance', userStartBalance);
    }
}
// Render balance function
const renderStartBalance = () => {
    balanceElement.innerHTML = `Total balance ${localStorage.getItem('balance')}$`;
};
export default renderStartBalance;
