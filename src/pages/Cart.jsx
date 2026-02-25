import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import formatPrice from "../utils/formatPrice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalPrice } = useCart();

  if (cartItems.length === 0)
    return <p>Votre panier est vide.</p>;

  return (
    <div>
      <h2>Votre Panier</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total : {formatPrice(getTotalPrice())}</h3>

      <Link to="/checkout">
        <button>Commander</button>
      </Link>
    </div>
  );
};

export default Cart;
