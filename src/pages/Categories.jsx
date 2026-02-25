import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <h2>Nos catégories</h2>
      <Link to="/cosmetique">Cosmétique</Link>
      <br />
      <Link to="/lithotherapie">Lithothérapie</Link>
    </div>
  );
};

export default Categories;
