import { useCart } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={`/images/${product.category}/${product.image}`}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{formatPrice(product.price)}</strong>
      <button onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;
