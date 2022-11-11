const sortTransactions = () => {
    let historyContainerEl = document.getElementById('history-container');
    let sortListContainer = document.getElementById('sort-list-container');
    window.addEventListener('load', () => {
        const getStartTransactions = () => {
            let startTransactions = '';
            for (let i = 0; i < historyContainerEl.children.length; i++) {
                startTransactions += historyContainerEl.children[i].outerHTML;
            }
            return startTransactions;
        };
        localStorage.setItem('startTransactions', getStartTransactions());
    });
    sortListContainer.addEventListener('change', function () {
        const transactionAmountProto = {
            amount: 1,
            id: 0,
        };
        const transactionDateProto = {
            date: '1/1/2022',
            id: 0,
        };
        historyContainerEl.innerHTML =
            localStorage.getItem('startTransactions');
        // Push elements to correct arrays
        const pushElementsToArrays = (arr, transactionProto, propertyNum) => {
            for (let i = 0; i < historyContainerEl.children.length; i++) {
                let transactionToSort = Object.create(transactionProto);
                let el = historyContainerEl.children[i].children[propertyNum]
                    .innerHTML;
                propertyNum === 1
                    ? (transactionToSort.amount = Number(el.replace(/\$/g, '')))
                    : (transactionToSort.date = el);
                transactionToSort.id = i;
                arr.push(transactionToSort);
            }
        };
        // Render transactions after use sort
        const renderTransactions = (arr) => {
            let sortedArr = [];
            arr.forEach((el, i) => {
                sortedArr.push(historyContainerEl.children[arr[i].id]);
            });
            historyContainerEl.replaceChildren();
            arr.forEach((el, i) => {
                historyContainerEl.appendChild(sortedArr[i]);
            });
        };
        const sortByAmount = () => {
            let lowToHigh = [];
            let highToLow = [];
            // Sort items in an array
            const sortItemsByAmount = (arr) => {
                arr.sort((a, b) => a.amount - b.amount);
            };
            if (this.value === 'Low to high') {
                pushElementsToArrays(lowToHigh, transactionAmountProto, 1);
                sortItemsByAmount(lowToHigh);
                renderTransactions(lowToHigh);
            }
            else {
                pushElementsToArrays(highToLow, transactionAmountProto, 1);
                sortItemsByAmount(highToLow);
                highToLow = highToLow.reverse();
                renderTransactions(highToLow);
            }
        };
        const sortByDate = () => {
            let newestFirst = [];
            let oldestFirst = [];
            const sortItemsByDate = (arr) => {
                arr.sort((a, b) => new Date(a.date).getTime() < new Date(b.date).getTime()
                    ? 1
                    : -1);
            };
            if (this.value === 'Newest first') {
                pushElementsToArrays(newestFirst, transactionDateProto, 5);
                sortItemsByDate(newestFirst);
                renderTransactions(newestFirst);
            }
            else {
                pushElementsToArrays(oldestFirst, transactionDateProto, 5);
                sortItemsByDate(oldestFirst);
                oldestFirst = oldestFirst.reverse();
                renderTransactions(oldestFirst);
            }
        };
        this.value === 'Low to high' || this.value === 'High to low'
            ? sortByAmount()
            : sortByDate();
        sortListContainer.addEventListener('click', function () {
            if (this.value != '') {
                this.blur();
                this.value = '';
            }
        });
    });
};
export { sortTransactions };
