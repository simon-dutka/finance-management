const sortTransactions = () => {
    let historyContainerEl = document.getElementById('history-container');
    let sortListContainer = document.getElementById('sort-list-container');
    sortListContainer.addEventListener('change', function () {
        const transactionAmountProto = {
            amount: 1,
            id: 0,
        };
        const sortByAmount = () => {
            let lowToHigh = [];
            let highToLow = [];
            // Push elements to correct arrays for sort by amount
            const pushElementsToArrays = (arr) => {
                for (let i = 0; i < historyContainerEl.children.length; i++) {
                    let transactionToSort = Object.create(transactionAmountProto);
                    transactionToSort.amount = Number(historyContainerEl.children[i].children[1].innerHTML.replace(/\$/g, ''));
                    transactionToSort.id = i;
                    arr.push(transactionToSort);
                }
            };
            // Sort items in an array
            const sortItems = (arr) => {
                arr.sort((a, b) => a.amount - b.amount);
            };
            const renderTransactions = (arr) => {
                let sortedArr = [];
                for (let i = 0; i < arr.length; i++) {
                    sortedArr.push(historyContainerEl.children[arr[i].id]);
                }
                historyContainerEl.replaceChildren();
                for (let i = 0; i < arr.length; i++) {
                    historyContainerEl.appendChild(sortedArr[i]);
                }
            };
            if (this.value === 'Low to high') {
                pushElementsToArrays(lowToHigh);
                sortItems(lowToHigh);
                renderTransactions(lowToHigh);
            }
            else {
                pushElementsToArrays(highToLow);
                sortItems(highToLow);
                highToLow = highToLow.reverse();
                renderTransactions(highToLow);
            }
        };
        const sortByDate = () => { };
        this.value === 'Low to high' || this.value === 'High to low'
            ? sortByAmount()
            : sortByDate();
    });
};
export { sortTransactions };
