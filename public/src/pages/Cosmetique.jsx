import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Cosmetique() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "2rem" }}>
      {products
        .filter(p => p.category === "cosmetique")
        .map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
