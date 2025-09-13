import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/categories">Catégories</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/panier">Panier</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;