const sortTransactions = () => {
    let historyContainerEl = document.getElementById('history-container');
    let sortListContainer: any = document.getElementById('sort-list-container');

    sortListContainer.addEventListener('change', function () {
        const transactionAmountProto = {
            amount: 1,
            id: 1,
        };

        const sortByAmount = () => {
            let lowToHigh = [];
            let highToLow = [];

            // Push elements to correct arrays for sort by amount
            for (let i = 0; i < historyContainerEl.children.length; i++) {
                let transactionToSort = Object.create(transactionAmountProto);

                transactionToSort.amount = Number(
                    historyContainerEl.children[
                        i
                    ].children[1].innerHTML.replace(/\$/g, '')
                );

                transactionToSort.id = i;

                lowToHigh.push(transactionToSort);
                highToLow.push(transactionToSort);
            }

            if (this.value === 'Low to high') {
                // Sort item by low to high
                lowToHigh.sort(function (a, b) {
                    return a.amount - b.amount;
                });

                function render() {
                    let sortedArr = [];
                    for (let i = 0; i < lowToHigh.length; i++) {
                        sortedArr.push(
                            historyContainerEl.children[lowToHigh[i].id]
                        );
                    }

                    historyContainerEl.replaceChildren();

                    for (let i = 0; i < lowToHigh.length; i++) {
                        historyContainerEl.appendChild(sortedArr[i]);
                    }
                }

                render();
            } else {
                // Sort item by high to low
                highToLow.sort(function (a, b) {
                    return a.amount - b.amount;
                });

                highToLow = highToLow.reverse();

                function render() {
                    let sortedArr = [];

                    for (let i = 0; i < highToLow.length; i++) {
                        sortedArr.push(
                            historyContainerEl.children[highToLow[i].id]
                        );
                    }

                    historyContainerEl.replaceChildren();

                    for (let i = 0; i < highToLow.length; i++) {
                        historyContainerEl.appendChild(sortedArr[i]);
                    }
                }

                render();
            }
        };

        const sortByDate = () => {};

        this.value === 'Low to high' || this.value === 'High to low'
            ? sortByAmount()
            : sortByDate();
    });
};

export { sortTransactions };
