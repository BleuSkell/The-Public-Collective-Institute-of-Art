import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <img src="../../public/img/TPCIA-logo.png" alt="TPCIA logo" className="TPCIA-logo"/>
            <Link to="/">Homepage</Link>
            <Link to="/artlist">Artlist</Link>
            <Link to="/">Favorites</Link>
            <Link to="/">News</Link>
        </nav>
    );
}

export default NavBar;