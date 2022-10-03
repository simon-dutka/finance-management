const deleteTransaction = () => {
    let deleteBtn = document.getElementsByClassName('transaction__element--delete');
    let transaction = document.getElementsByClassName('transaction__container');
    for (let i = 0; i < deleteBtn.length; i++) {
        const deleteElement = () => {
            console.log('hehelo');
        };
        deleteBtn[i].addEventListener('click', deleteElement);
    }
    // saveLocalStorage();
};
export default deleteTransaction;
