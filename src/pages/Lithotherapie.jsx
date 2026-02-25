import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const Lithotherapie = () => {
  const pierres = products.filter(
    (product) => product.category === "lithotherapie"
  );

  return (
    <div>
      <h2>Lithothérapie</h2>

      <div className="products-grid">
        {pierres.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Lithotherapie;
