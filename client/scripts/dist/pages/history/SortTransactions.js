const sortTransactions = () => {
    let historyContainerEl = document.getElementById('history-container');
    let sortListContainer = document.getElementById('sort-list-container');
    sortListContainer.addEventListener('change', function () {
        const transactionAmountProto = {
            amount: 1,
            id: 0,
        };
        const transactionDateProto = {
            date: '1/1/2022',
            id: 0,
        };
        // Render transactions after use sort
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
            const sortItemsByAmount = (arr) => {
                arr.sort((a, b) => a.amount - b.amount);
            };
            if (this.value === 'Low to high') {
                pushElementsToArrays(lowToHigh);
                sortItemsByAmount(lowToHigh);
                renderTransactions(lowToHigh);
            }
            else {
                pushElementsToArrays(highToLow);
                sortItemsByAmount(highToLow);
                highToLow = highToLow.reverse();
                renderTransactions(highToLow);
            }
        };
        const sortByDate = () => {
            let newestFirst = [];
            const pushElementsToArrays = (arr) => {
                for (let i = 0; i < historyContainerEl.children.length; i++) {
                    let transactionToSort = Object.create(transactionDateProto);
                    transactionToSort.date =
                        historyContainerEl.children[i].children[5].innerHTML;
                    transactionToSort.id = i;
                    arr.push(transactionToSort);
                }
            };
            const sortItemsByDate = (arr) => {
                arr.sort((a, b) => new Date(a.date).getTime() < new Date(b.date).getTime()
                    ? 1
                    : -1);
            };
            if (this.value === 'Newest first') {
                pushElementsToArrays(newestFirst);
                sortItemsByDate(newestFirst);
                renderTransactions(newestFirst);
            }
        };
        this.value === 'Low to high' || this.value === 'High to low'
            ? sortByAmount()
            : sortByDate();
    });
};
export { sortTransactions };
