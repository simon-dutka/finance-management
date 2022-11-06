import { loader } from '../Loader.js';
import { navbarTemplate } from '../templates/Navbar.js';
import { renderTransactions } from './RenderTransactions.js';
loader();
navbarTemplate();
renderTransactions();
