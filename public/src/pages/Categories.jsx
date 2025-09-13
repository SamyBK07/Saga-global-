import { Link } from "react-router-dom";
import "../styles/categories.css"; // Assure-toi que le chemin est correct

export default function Categories() {
  return (
    <div className="categories-container">
      <h2>Choisissez une catégorie</h2>
      <div className="categories">
        <Link to="/lithotherapie" className="category-card">Lithothérapie</Link>
        <Link to="/cosmetique" className="category-card">Cosmétique</Link>
      </div>
    </div>
  );
}
