export function Navigation() {
    return (
        <header>
            <img src="images\logo.svg" alt="logo" className="logo"/>
            <nav>
                <ul className="nav__links">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <button>
                Contact
            </button>
        </header>
    )
}