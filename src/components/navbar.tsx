import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">Homepage</Link>
            <Link to="/artlist">Artlist</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/news">News</Link>
        </nav>
    );
}

export default NavBar;