import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/artlist" className="nav-link">Kunst</Link>
            <Link to="/favorites" className="nav-link">Favorieten</Link>
            <Link to="/news" className="nav-link">Nieuws</Link>
        </nav>
    );
}

export default NavBar;