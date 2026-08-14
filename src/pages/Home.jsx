import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import { getSearchHistory, addToSearchHistory } from "../utils/searchHistory";
import "./Home.css";
import NewsSection from "../components/NewsSection";

const Home = () => {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState(() => getSearchHistory());

  const { products: results, loading, error } = useProducts({ search });

  const handleSearch = (query) => {
    setSearch(query);
    if (query.trim() !== "") {
      setHistory(addToSearchHistory(query));
    }
  };

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-about-text">
          <p>Le bien-être à votre portée</p>
        </div>
      </section>

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

      <NewsSection />

      {search.trim() !== "" ? (
        <section>
          <h2 className="section-title">Résultats pour « {search} »</h2>
          {loading ? (
            <p className="empty-state">Chargement...</p>
          ) : error ? (
            <p className="empty-state">Erreur : {error}</p>
          ) : results.length === 0 ? (
            <p className="empty-state">Aucun produit trouvé.</p>
          ) : (
            <div className="products-grid">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      ) : null}
    </div>
  );
