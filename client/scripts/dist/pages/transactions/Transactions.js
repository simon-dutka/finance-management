import { addTransaction } from '../../transactionsManagement/AddTransaction.js';
import { loader } from '../../Loader.js';
import { navbarTemplate } from '../../templates/Navbar.js';
import { openTransaction } from '../../transactionsManagement/openTransaction.js';
addTransaction();
loader();
navbarTemplate();
openTransaction();
