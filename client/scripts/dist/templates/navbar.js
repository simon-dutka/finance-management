const navbarTemplate = () => {
    class NavbarElement extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <div class="navbar__user-container">
                    <img
                        class="navbar__user-img"
                        src="/client/assets/user.svg"
                        alt="user image"
                        
                    />
                    <p class="navbar__username">John Smith</p>
                </div>

                <navbar class="navbar__container-items">
                    <ul class="navbar__items">
                        <li class="navbar__item">
                            <a href="/client/public/index.html">Home</a>
                        </li>
                        <li class="navbar__item">
                            <a href="/client/public/history/history.html">History</a>
                        </li>
                        <li class="navbar__item">
                            <a href="/client/public/transactions/transactions.html">Transactions</a>
                        </li>
                        <li class="navbar__item">
                            <a href="/client/public/statistics/statistics.html">Statistic</a>
                        </li>
                    </ul>
                </navbar>

                <p class="navbar__logout">Logout</p>
            `;
            this.classList.add('navbar__container');
        }
    }
    customElements.define('navbar-element', NavbarElement);
};
export { navbarTemplate };
