import { loader } from '../../Loader.js';
import { navbarTemplate } from '../../templates/Navbar.js';
import { renderTransactions } from '../../transactionsManagement/RenderTransactions.js';
import { sortTransactions } from './SortTransactions.js';
loader();
navbarTemplate();
renderTransactions();
sortTransactions();
