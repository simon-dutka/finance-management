import { closeTransactions } from './CloseTransaction.js';
const addTransaction = () => {
    const formTransactions = document.querySelectorAll('.form-transactions');
    const formBtns = document.querySelectorAll('.form-btn');
    formBtns.forEach((element, i) => {
        element.addEventListener('click', () => {
            const saveTransaction = () => {
                let createdTransactions = localStorage.getItem('transactions');
                let transactions;
                createdTransactions === null
                    ? (transactions = [])
                    : (transactions = JSON.parse(createdTransactions));
                // Prototype of transaction object
                const transactionProto = {
                    title: 'Title of transaction',
                    amount: 1,
                    category: 'Salary',
                    source: 'Cash',
                };
                let newTransaction = Object.create(transactionProto);
                // Adding values to transaction object properties
                let j = 0;
                for (let property in newTransaction) {
                    newTransaction[property] =
                        formTransactions[i].children[j].value;
                    j++;
                }
                transactions.push(newTransaction);
                return JSON.stringify(transactions);
            };
            localStorage.setItem('transactions', saveTransaction());
            const clearInputs = () => {
                for (let j = 0; j < 4; j++) {
                    formTransactions[i].children[j].value = '';
                }
            };
            clearInputs();
            closeTransactions(i);
        });
    });
};
export { addTransaction };
