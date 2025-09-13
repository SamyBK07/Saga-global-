export default function Cart({ cart }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛒 Votre Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
