import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/success");
  };

  return (
    <div>
      <h2>Commande</h2>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>

      <p>Total : {getTotalPrice()} FCFA</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom complet" required />
        <input type="tel" placeholder="Téléphone" required />
        <textarea placeholder="Recommandation" />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Checkout;
