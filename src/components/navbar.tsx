import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav style={{ marginBottom: "2rem" }}>
            <Link to="/" style={{ marginRight: "1rem" }}>Homepage</Link>
            <Link to="/artlist">Artlist</Link>
        </nav>
    );
}

export default NavBar;