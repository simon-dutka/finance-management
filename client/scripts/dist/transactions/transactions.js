import { addTransaction } from './AddTransaction.js';
import { loader } from '../Loader.js';
import { navbarTemplate } from '../templates/Navbar.js';
import { openTransaction } from './openTransaction.js';
addTransaction();
loader();
navbarTemplate();
openTransaction();
