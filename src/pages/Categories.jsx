import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-page">
      <h2 className="categories-title">Nos Catégories</h2>

      <div className="categories-buttons">
        <Link to="/cosmetique" className="category-btn">
          Cosmétique
        </Link>

        <Link to="/lithotherapie" className="category-btn secondary">
          Lithothérapie
        </Link>
      </div>
    </div>
  );
};

export default Categories;
