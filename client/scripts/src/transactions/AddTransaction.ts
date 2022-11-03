const addTransaction = () => {
    let formTransactions: any = document.querySelectorAll('.form-transactions');
    let formBtns = document.querySelectorAll('.form-btn');

    formBtns.forEach((element, i) => {
        // Save transaction values in Local Storage onclick 'Add' button
        element.addEventListener('click', () => {
            const saveTransaction = () => {
                let transactionValues: string[] = [];

                for (let j = 0; j < 4; j++) {
                    transactionValues.push(
                        `elVal-${formTransactions[i].children[j].value} `
                    );
                }

                return transactionValues.toString();
            };

            const createdTransactions = localStorage.getItem('allTransactions');

            createdTransactions === null
                ? localStorage.setItem('allTransactions', saveTransaction())
                : localStorage.setItem(
                      'allTransactions',
                      saveTransaction() + createdTransactions
                  );
        });
    });
};

export { addTransaction };
