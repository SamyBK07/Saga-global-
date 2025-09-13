import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      background: "#f0f0f0"
    }}>
      <h1 style={{ fontSize: "1.8rem" }}>Saga Global</h1>
      <div>
        <Link to="/" style={{ margin: "0 1rem" }}>Accueil</Link>
        <Link to="/categories" style={{ margin: "0 1rem" }}>Catégories</Link>
        <span style={{ marginLeft: "1rem" }}>Panier : {cart.length}</span>
      </div>
    </nav>
  );
}