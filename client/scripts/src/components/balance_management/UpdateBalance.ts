const updateBalanceIncome = () => {
    const historyContainer: HTMLElement = document.querySelector(
        '#history__container'
    );

    const balanceElement: HTMLHeadingElement =
        document.querySelector('#balance');

    let incomeTransactions = '';

    for (let i = 0; i < historyContainer.children.length; i++) {
        if (
            historyContainer.children[i].classList.contains(
                'transaction__container--income'
            )
        ) {
            incomeTransactions += historyContainer.children[i].outerHTML;
        }
    }

    let balanceValue = 0;

    if (incomeTransactions !== '') {
        let incomeBalance = incomeTransactions
            .match(/\d*\s\$/g)
            .toString()
            .replace(/\$ | ,/g, '');

        let incomeValue = incomeBalance.match(/\d*/g);

        for (let i = 0; i < incomeValue.length; i++) {
            let num = incomeValue[i];
            if (num !== '') balanceValue += Number(num);
        }
    }

    // second
    let expenseTransactions = '';

    for (let i = 0; i < historyContainer.children.length; i++) {
        if (
            historyContainer.children[i].classList.contains(
                'transaction__container--expense'
            )
        ) {
            expenseTransactions += historyContainer.children[i].outerHTML;
        }
    }

    if (expenseTransactions !== '') {
        let expenseBalance = expenseTransactions
            .match(/\d*\s\$/g)
            .toString()
            .replace(/\$ | ,/g, '');

        let expenseValue = expenseBalance.match(/\d*/g);

        for (let i = 0; i < expenseValue.length; i++) {
            let num = expenseValue[i];
            if (num !== '') balanceValue -= Number(num);
        }
    }

    const saveBalance = () => {
        balanceElement.innerHTML = `Total balance ${
            balanceValue + Number(localStorage.getItem('startBalance'))
        } $`;

        balanceElement.setAttribute('data-value', `${balanceValue}`);
        localStorage.setItem('balance', balanceValue.toString());
    };

    saveBalance();
};

export default updateBalanceIncome;
