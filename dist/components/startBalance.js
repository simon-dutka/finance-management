const balanceElement = document.querySelector('#balance');
// Start user balance
let balanceElementValue = balanceElement.dataset.value;
// Render balance function
const renderStartBalance = () => {
    balanceElement.innerHTML = `Total balance ${balanceElementValue}$`;
};
export default renderStartBalance;
