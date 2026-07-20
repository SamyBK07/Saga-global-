import { useState } from "react";
import { useCart } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";
import StarRating from "./StarRating";
import { getReviews, addReview } from "../utils/reviews";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState(() => getReviews(product.id));
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const average = reviews.length
    ? reviews.reduce((a, r) => a + r.rating, 0) / reviews.length
    : 0;

  const handleAddReview = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    const updated = addReview(product.id, { rating, comment });
    setReviews(updated);
    setRating(0);
    setComment("");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>

      <div className="product-rating">
        <StarRating rating={Math.round(average)} />
        <span className="rating-count">
          {reviews.length > 0 ? `(${reviews.length} avis)` : "Aucun avis"}
        </span>
      </div>

      <strong>{formatPrice(product.price)}</strong>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>

      <button type="button" className="toggle-reviews-btn" onClick={() => setShowReviews((p) => !p)}>
        {showReviews ? "Masquer les avis" : "Voir / laisser un avis"}
      </button>

      {showReviews && (
        <div className="reviews-panel">
          {reviews.length > 0 && (
            <ul className="reviews-list">
              {reviews.map((r, i) => (
                <li key={i} className="review-item">
                  <StarRating rating={r.rating} size={12} />
                  {r.comment && <p>{r.comment}</p>}
                </li>
              ))}
            </ul>
          )}

          <form className="review-form" onSubmit={handleAddReview}>
            <StarRating rating={rating} onChange={setRating} interactive />
            <textarea
              placeholder="Votre commentaire (optionnel)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" disabled={rating === 0}>
              Publier mon avis
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
