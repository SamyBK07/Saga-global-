import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import "./Categories.css";

const Categories = () => {
  const { products, loading, error } = useProducts();

  const categories = [...new Set(products.map((p) => p.category).filter(Boolean))];

  return (
    <div className="categories-page">
      <h2 className="categories-title">Nos Produits</h2>

      {categories.length > 0 && (
        <div className="categories-filters">
          {categories.map((cat) => (
            <Link key={cat} to={`/categories/${cat}`} className="category-chip">
              {cat}
            </Link>
          ))}
        </div>
      )}

      {loading ? (
        <p className="empty-state">Chargement...</p>
      ) : error ? (
        <p className="empty-state">Erreur : {error}</p>
      ) : products.length === 0 ? (
        <p className="empty-state">Aucun produit pour le moment.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
