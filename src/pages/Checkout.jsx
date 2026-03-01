import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      name,
      phone,
      items: cartItems
        .map((item) => `${item.name} x${item.quantity}`)
        .join("\n"),
      total: getTotalPrice() + " FCFA",
      note,
    };

    try {
      const response = await fetch("https://formspree.io/f/mwvnjrjr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        clearCart();
        navigate("/success");
      } else {
        alert("Erreur lors de l'envoi de la commande.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi de la commande.");
    }
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

        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Checkout;
