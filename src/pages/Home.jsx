import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>✨ Le bien-être à votre portée</h1>
          <p>Beauté naturelle • Énergie positive</p>

          <Link to="/categories">
            <button className="hero-btn">
              Découvrir nos produits
            </button>
          </Link>
        </div>
      </section>

      {/* PRODUITS PHARES */}
      <section>
        <h2 className="section-title">Nos indispensables beauté</h2>

        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
