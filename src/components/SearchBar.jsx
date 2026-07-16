import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch, initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
