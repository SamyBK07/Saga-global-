import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-page">
      <h2>Nos Catégories</h2>

      <div className="categories-grid">

        <Link to="/cosmetique" className="category-card cosmetique">
          <h3>💄 Cosmétique</h3>
          <p>Soins visage & beauté</p>
          <button>Voir les produits</button>
        </Link>

        <Link to="/lithotherapie" className="category-card lithotherapie">
          <h3>💎 Lithothérapie</h3>
          <p>Pierres & bien-être énergétique</p>
          <button>Voir les produits</button>
        </Link>

      </div>
    </div>
  );
};

export default Categories;
