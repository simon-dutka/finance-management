import deleteTransaction from './DeleteTransaction.js';
import renderHistory from './RenderHistory.js';
import renderCreatedTransactions from './RenderCreatedTransactions.js';

const historyManagement = () => {
    renderHistory();
    renderCreatedTransactions();
    deleteTransaction();
};

export default historyManagement;
