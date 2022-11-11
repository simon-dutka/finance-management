const removeHistoryElements = () => {
    let historyContainerIndex = document.getElementById('history-container-index');
    let numOfChild = historyContainerIndex.children.length;
    if (numOfChild > 4) {
        for (let i = 0; i < numOfChild - 4; i++) {
            historyContainerIndex.removeChild(historyContainerIndex.lastChild);
        }
    }
};
export { removeHistoryElements };
