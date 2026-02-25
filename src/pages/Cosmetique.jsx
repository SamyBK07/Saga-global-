import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const Cosmetique = () => {
  const cosmetiques = products.filter(
    (product) => product.category === "cosmetique"
  );

  return (
    <div>
      <h2>Cosmétique</h2>

      <div className="products-grid">
        {cosmetiques.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cosmetique;
