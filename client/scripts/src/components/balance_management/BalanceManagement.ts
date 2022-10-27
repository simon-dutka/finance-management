import renderStartBalance from './StartBalance.js';
import updateBalance from './UpdateBalance.js';

const balanceManagement = () => {
    updateBalance();
    renderStartBalance();
};

export default balanceManagement;
