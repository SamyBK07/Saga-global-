import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/">
        <img src="/logo.png" alt="Saga Globale" className="site-logo" />
      </Link>

      <button className="burger-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div className="burger-menu">
          <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link to="/categories" onClick={() => setOpen(false)}>Catégories</Link>
          <Link to="/a-propos" onClick={() => setOpen(false)}>À propos</Link>
          <Link to="/cart" onClick={() => setOpen(false)}>Panier</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
