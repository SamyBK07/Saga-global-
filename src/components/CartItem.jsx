import { useCart } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img
        src={`/images/${item.category}/${item.image}`}
        alt={item.name}
        width="80"
      />
      <div>
        <h4>{item.name}</h4>
        <p>{formatPrice(item.price)}</p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            updateQuantity(item.id, Number(e.target.value))
          }
        />
        <button onClick={() => removeFromCart(item.id)}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default CartItem;
