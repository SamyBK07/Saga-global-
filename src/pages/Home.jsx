import { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import { getSearchHistory, addToSearchHistory } from "../utils/searchHistory";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState(() => getSearchHistory());

  const results = useProducts({ search });
  const nouveautes = [...products].slice(-6).reverse();

  const handleSearch = (query) => {
    setSearch(query);
    if (query.trim() !== "") {
      setHistory(addToSearchHistory(query));
    }
  };

  return (
    <div className="home">
      <section className="search-section">
        <SearchBar onSearch={handleSearch} initialValue={search} />

        {history.length > 0 && (
          <div className="search-history">
            <span className="search-history-label">Recherches récentes :</span>
            {history.map((q) => (
              <button key={q} className="search-history-chip" onClick={() => handleSearch(q)}>
                {q}
              </button>
            ))}
          </div>
        )}
      </section>

      {search.trim() !== "" ? (
        <section>
          <h2 className="section-title">Résultats pour « {search} »</h2>
          {results.length === 0 ? (
            <p className="empty-state">Aucun produit trouvé.</p>
          ) : (
            <div className="products-grid">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <section>
          <h2 className="section-title">Dernières nouveautés</h2>
          <div className="products-grid">
            {nouveautes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
