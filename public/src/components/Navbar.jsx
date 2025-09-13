import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { cart } = useContext(CartContext); // panier global

  return (
    <nav style={{
      padding: "1rem",
      background: "black",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "2rem", color: "yellow", margin: 0 }}>
        Saga Global
      </h1>

      <div>
        <Link to="/" style={{ color: "yellow", margin: "0 1rem" }}>Accueil</Link>
        <Link to="/lithotherapie" style={{ color: "yellow", margin: "0 1rem" }}>Lithothérapie</Link>
        <Link to="/cosmetique" style={{ color: "yellow", margin: "0 1rem" }}>Cosmétique</Link>
        <span style={{ marginLeft: "1rem" }}>🛒 {cart.length}</span>
      </div>
    </nav>
  );
}

export default Navbar;
