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

        // Render transactions after use sort
        const renderTransactions = (arr: any[]) => {
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
            const pushElementsToArrays = (arr: any[]) => {
                for (let i = 0; i < historyContainerEl.children.length; i++) {
                    let transactionToSort = Object.create(
                        transactionAmountProto
                    );

                    transactionToSort.amount = Number(
                        historyContainerEl.children[
                            i
                        ].children[1].innerHTML.replace(/\$/g, '')
                    );

                    transactionToSort.id = i;

                    arr.push(transactionToSort);
                }
            };

            // Sort items in an array
            const sortItemsByAmount = (arr: any[]) => {
                arr.sort((a, b) => a.amount - b.amount);
            };

            if (this.value === 'Low to high') {
                pushElementsToArrays(lowToHigh);

                sortItemsByAmount(lowToHigh);

                renderTransactions(lowToHigh);
            } else {
                pushElementsToArrays(highToLow);

                sortItemsByAmount(highToLow);
                highToLow = highToLow.reverse();

                renderTransactions(highToLow);
            }
        };

        const sortByDate = () => {
            let newestFirst: any = [];
            let oldestFirst: any = [];

            const pushElementsToArrays = (arr: any[]) => {
                for (let i = 0; i < historyContainerEl.children.length; i++) {
                    let transactionToSort = Object.create(transactionDateProto);

                    transactionToSort.date =
                        historyContainerEl.children[i].children[5].innerHTML;

                    transactionToSort.id = i;

                    arr.push(transactionToSort);
                }
            };

            const sortItemsByDate = (arr) => {
                arr.sort((a: any, b: any) =>
                    new Date(a.date).getTime() > new Date(b.date).getTime()
                        ? 1
                        : -1
                );
            };

            if (this.value === 'Newest first') {
                pushElementsToArrays(newestFirst);
                sortItemsByDate(newestFirst);
                renderTransactions(newestFirst);
            } else {
                pushElementsToArrays(oldestFirst);
                sortItemsByDate(oldestFirst);
                renderTransactions(oldestFirst);
            }
        };

        this.value === 'Low to high' || this.value === 'High to low'
            ? sortByAmount()
            : sortByDate();
    });
};

export { sortTransactions };
