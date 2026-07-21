import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "2290152084633";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemsList = cartItems
      .map((item) => `- ${item.name} x${item.quantity}`)
      .join("\n");

    const message =
      `Nouvelle commande Saga Globale\n\n` +
      `Nom: ${name}\n` +
      `Téléphone: ${phone}\n\n` +
      `Articles:\n${itemsList}\n\n` +
      `Total: ${getTotalPrice()} FCFA\n` +
      (note ? `Note: ${note}` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
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
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          placeholder="Recommandation"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button type="submit">Valider la commande</button>
      </form>
    </div>
  );
};

export default Checkout;
