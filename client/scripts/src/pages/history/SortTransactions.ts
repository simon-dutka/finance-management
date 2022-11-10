const sortTransactions = () => {
    let historyContainerEl = document.getElementById('history-container');
    let sortListContainer: any = document.getElementById('sort-list-container');

    sortListContainer.addEventListener('change', function () {
        const transactionAmountProto = {
            amount: 1,
            id: 0,
        };

        const transactionDateProto = {
            date: '1/1/2022',
            id: 0,
        };

        // Push elements to correct arrays
        const pushElementsToArrays = (
            arr: any[],
            transactionProto: {},
            propertyNum: number
        ) => {
            for (let i = 0; i < historyContainerEl.children.length; i++) {
                let transactionToSort = Object.create(transactionProto);
                let el =
                    historyContainerEl.children[i].children[propertyNum]
                        .innerHTML;

                propertyNum === 1
                    ? (transactionToSort.amount = Number(el.replace(/\$/g, '')))
                    : (transactionToSort.date = el);

                transactionToSort.id = i;

                arr.push(transactionToSort);
            }
        };

        // Render transactions after use sort
        const renderTransactions = (arr: any[]) => {
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
            const sortItemsByAmount = (arr: any[]) => {
                arr.sort((a, b) => a.amount - b.amount);
            };

            if (this.value === 'Low to high') {
                pushElementsToArrays(lowToHigh, transactionAmountProto, 1);
                sortItemsByAmount(lowToHigh);
                renderTransactions(lowToHigh);
            } else {
                pushElementsToArrays(highToLow, transactionAmountProto, 1);
                sortItemsByAmount(highToLow);
                highToLow = highToLow.reverse();
                renderTransactions(highToLow);
            }
        };

        const sortByDate = () => {
            let newestFirst: any = [];
            let oldestFirst: any = [];

            const sortItemsByDate = (arr) => {
                arr.sort((a: any, b: any) =>
                    new Date(a.date).getTime() < new Date(b.date).getTime()
                        ? 1
                        : -1
                );
            };

            if (this.value === 'Newest first') {
                pushElementsToArrays(newestFirst, transactionDateProto, 5);
                sortItemsByDate(newestFirst);
                renderTransactions(newestFirst);
            } else {
                pushElementsToArrays(oldestFirst, transactionDateProto, 5);
                sortItemsByDate(oldestFirst);
                oldestFirst = oldestFirst.reverse();
                renderTransactions(oldestFirst);
            }
        };

        //! Onclick high to low and next newest first return incorrect sequence
        this.value === 'Low to high' || this.value === 'High to low'
            ? sortByAmount()
            : sortByDate();
    });
};

export { sortTransactions };
