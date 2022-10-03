import deleteTransaction from './history_management/DeleteTransaction';
import renderHistory from './history_management/RenderHistory';
import renderCreatedTransactions from './history_management/RenderCreatedTransactions';
const historyManagement = () => {
    renderHistory();
    renderCreatedTransactions();
    deleteTransaction();
};
export default historyManagement;
