class NavbarElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="navbar__user-container">
                    <img
                        class="navbar__user-img"
                        src="../assets/user.svg"
                        alt="user image"
                    />
                    <p class="navbar__username">John Smith</p>
                </div>

                <navbar class="navbar__container-items">
                    <ul class="navbar__items">
                        <li class="navbar__item">
                            <a href="./history/history.html">History</a>
                        </li>
                        <li class="navbar__item">Transactions</li>
                        <li class="navbar__item">Statistic</li>
                    </ul>
                </navbar>

                <p class="navbar__logout">Logout</p>
            `;
        this.classList.add('navbar__container');
    }
}
customElements.define('navbar-element', NavbarElement);
