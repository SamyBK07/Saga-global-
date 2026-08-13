import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const CategoryPage = ({ title, category }) => {
  const { products: items, loading, error } = useProducts({ category });

  return (
    <div className="category-page">
      <h2 className="category-page-title">{title}</h2>

      {loading ? (
        <p className="empty-state">Chargement...</p>
      ) : error ? (
        <p className="empty-state">Erreur : {error}</p>
      ) : items.length === 0 ? (
        <p className="empty-state">Aucun produit dans cette catégorie pour le moment.</p>
      ) : (
        <div className="products-grid">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
