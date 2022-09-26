// // import { saveLocalStorageIncome } from './SaveLocalStorage.js';

// const deleteTransaction = () => {
//     let deleteBtn = document.getElementsByClassName(
//         'transaction__element--delete'
//     );

//     let transaction = document.getElementsByClassName('transaction__container');

//     let allTransactionsArray = [];
//     // push transacitons to allTransactionsArray
//     for (let i = 0; i < deleteBtn.length; i++) {
//         allTransactionsArray.push(transaction[i]);
//     }

//     allTransactionsArray.forEach((element, i) => {
//         const deleteElement = () => {
//             element.remove();
//         };

//         deleteBtn[i].addEventListener('click', deleteElement);
//     });

//     saveLocalStorageIncome();
// };

// export default deleteTransaction;
