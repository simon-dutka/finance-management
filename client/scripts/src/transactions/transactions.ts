import { addTransaction } from './AddTransaction.js';
import { headTemplate } from '../templates/Head.js';
import { navbarTemplate } from '../templates/Navbar.js';
import { openTransaction } from './openTransaction.js';

addTransaction();
headTemplate();
navbarTemplate();
openTransaction();
