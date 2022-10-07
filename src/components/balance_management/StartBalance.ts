const balanceElement: HTMLHeadingElement = document.querySelector('#balance');

// Render balance function
const renderStartBalance = () => {
    // User set start balance
    while (localStorage.getItem('startBalance') == null) {
        let userStartBalance = window.prompt('Type Your start balance', '');

        const numRegex = /^[\d]/g;
        if (numRegex.test(userStartBalance)) {
            localStorage.setItem('startBalance', userStartBalance);
        }

        location.reload();
    }
};

export default renderStartBalance;
