import { Link } from "react-router-dom";
import "./Categories.css"; // CSS pour styliser les catégories

export default function Categories() {
  return (
    <div className="categories-container">
      <h2>Nos catégories</h2>
      <div className="categories">
        <Link to="/lithotherapie" className="category-card">
          Lithothérapie
        </Link>
        <Link to="/cosmetique" className="category-card">
          Cosmétique
        </Link>
      </div>
    </div>
  );
}