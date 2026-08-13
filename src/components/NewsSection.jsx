import { useState, useEffect } from "react";
import { API_BASE } from "../services/api";
import "./NewsSection.css";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/news`)
      .then((r) => r.json())
      .then(setNews)
      .finally(() => setLoading(false));
  }, []);

  if (loading || news.length === 0) return null;

  return (
    <section className="news-section">
      <h2 className="section-title">Actualités</h2>
      <div className="news-grid">
        {news.map((n) => (
          <article key={n.id} className="news-card">
            {n.image && <img src={n.image} alt={n.title} />}
            <h3>{n.title}</h3>
            <p>{n.content}</p>
            <span className="news-date">
              {new Date(n.created_at).toLocaleDateString("fr-FR")}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
