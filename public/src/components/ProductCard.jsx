function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem",
      width: "200px",
      textAlign: "center",
      opacity: product.available ? 1 : 0.5
    }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "4px" }} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p style={{ color: product.available ? "green" : "red" }}>
        {product.available ? "Disponible" : "Rupture de stock"}
      </p>
    </div>
  )
}

export default ProductCard
