import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <h1>Le bien-être à votre portée</h1>
      <p>Cosmétiques de qualité • Paiement à la livraison</p>

      <h2>Nos indispensables beauté</h2>

      <div className="products-grid">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
