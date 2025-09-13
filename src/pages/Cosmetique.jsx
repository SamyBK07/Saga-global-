import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Cosmetique() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Cosmétique</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {productsData.cosmetique.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}