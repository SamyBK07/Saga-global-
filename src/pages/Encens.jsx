import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const Encens = () => {
  const encensProducts = products.filter(
    (product) => product.category === "encens"
  );

  return (
    <div>
      <h2>Encens</h2>

      <div className="products-grid">
        {encensProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Encens;
