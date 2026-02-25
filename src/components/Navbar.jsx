import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Saga Globale</Link>
      <div>
        <Link to="/categories">Catégories</Link>
        <Link to="/cart">
          Panier ({getTotalItems()})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
