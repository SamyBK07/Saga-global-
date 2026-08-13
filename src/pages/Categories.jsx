import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import "./Categories.css";

const Categories = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="categories-page">
      <h2 className="categories-title">Nos Produits</h2>

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
