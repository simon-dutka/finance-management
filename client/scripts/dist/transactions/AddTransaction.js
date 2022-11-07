import { closeTransactions } from './CloseTransaction.js';
const addTransaction = () => {
    const formTransactions = document.querySelectorAll('.form-transactions');
    const formBtns = document.querySelectorAll('.form-btn');
    formBtns.forEach((element, i) => {
        element.addEventListener('click', () => {
            if (formTransactions[0].checkValidity() === true) {
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
                        type: 'Income',
                    };
                    let newTransaction = Object.create(transactionProto);
                    // Adding values to transaction object properties
                    let j = 0;
                    for (let property in newTransaction) {
                        newTransaction[property] =
                            formTransactions[i].children[j].value;
                        j++;
                    }
                    // Add $ symbol to amount property
                    newTransaction.amount = `${newTransaction.amount}$`;
                    // Add type of transaction
                    i === 0
                        ? (newTransaction.type = 'Income')
                        : (newTransaction.type = 'Expense');
                    transactions.push(newTransaction);
                    return JSON.stringify(transactions);
                };
                // Checking if password length is < 100
                if (formTransactions[i].children[0].value.length <= 100) {
                    // Checking if amount length is < 7
                    if (formTransactions[i].children[1].value.length <= 7) {
                        localStorage.setItem('transactions', saveTransaction());
                        closeTransactions(i);
                    }
                    else {
                        alert('Amount must be shorter than 7 digits');
                    }
                }
                else {
                    alert('Password must be shorter than 100 letters');
                }
            }
        });
    });
};
export { addTransaction };
