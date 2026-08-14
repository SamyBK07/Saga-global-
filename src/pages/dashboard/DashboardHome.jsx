import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../../services/api";
import formatPrice from "../../utils/formatPrice";

const DashboardHome = () => {
  const [stats, setStats] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [newsCount, setNewsCount] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE}/api/stats`).then((r) => r.json()).then(setStats);
    fetch(`${API_BASE}/api/products`).then((r) => r.json()).then((d) => setProductsCount(d.length));
    fetch(`${API_BASE}/api/news`).then((r) => r.json()).then((d) => setNewsCount(d.length));
  }, []);

  return (
    <div>
      <h2>Tableau de bord</h2>
      <p>Vue d'ensemble de Saga Global</p>

      <div className="stats-cards">
        <Link to="/dashboard/produits" className="stats-card">
          <span className="stats-value">{productsCount}</span>
          <span className="stats-label">Produits</span>
        </Link>
        <Link to="/dashboard/actualites" className="stats-card">
          <span className="stats-value">{newsCount}</span>
          <span className="stats-label">Actualités</span>
        </Link>
        <Link to="/dashboard/commandes" className="stats-card">
          <span className="stats-value">{stats ? stats.nbCommandes : "..."}</span>
          <span className="stats-label">Commandes</span>
        </Link>
        <Link to="/dashboard/commandes" className="stats-card">
          <span className="stats-value">{stats ? formatPrice(stats.chiffreAffaires) : "..."}</span>
          <span className="stats-label">Chiffre d'affaires</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
