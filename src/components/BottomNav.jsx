import { NavLink } from "react-router-dom";
import { FaHome, FaThLarge, FaShoppingCart, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const BottomNav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => "bottom-nav-item" + (isActive ? " active" : "")}>
        <FaHome className="bottom-nav-icon" />
        <span>Accueil</span>
      </NavLink>

      <NavLink to="/categories" className={({ isActive }) => "bottom-nav-item" + (isActive ? " active" : "")}>
        <FaThLarge className="bottom-nav-icon" />
        <span>Nos produits</span>
      </NavLink>

      <NavLink to="/a-propos" className={({ isActive }) => "bottom-nav-item" + (isActive ? " active" : "")}>
        <FaUser className="bottom-nav-icon" />
        <span>À propos</span>
      </NavLink>

      <NavLink to="/cart" className={({ isActive }) => "bottom-nav-item" + (isActive ? " active" : "")}>
        <div className="bottom-nav-icon-wrapper">
          <FaShoppingCart className="bottom-nav-icon" />
          {totalItems > 0 && <span className="bottom-nav-badge">{totalItems}</span>}
        </div>
        <span>Panier</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
