import { useState } from "react";

function ProductCard({ product }) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        width: "200px",
        textAlign: "center",
        opacity: product.available ? 1 : 0.5,
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <h3>{product.name}</h3>
      <p>{product.price} €</p>
      <p style={{ color: product.available ? "green" : "red" }}>
        {product.available ? "Disponible" : "Rupture de stock"}
      </p>

      {product.available && (
        <button
          onClick={toggleCart}
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            background: inCart ? "red" : "blue",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {inCart ? "Retirer du panier" : "Ajouter au panier"}
        </button>
      )}
    </div>
  );
}

export default ProductCard;
