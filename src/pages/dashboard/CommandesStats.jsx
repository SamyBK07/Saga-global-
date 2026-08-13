import { useState, useEffect } from "react";
import { API_BASE } from "../../services/api";
import formatPrice from "../../utils/formatPrice";

const CommandesStats = () => {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/api/orders`).then((r) => r.json()),
      fetch(`${API_BASE}/api/stats`).then((r) => r.json()),
    ])
      .then(([ordersData, statsData]) => {
        setOrders(ordersData);
        setStats(statsData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="dashboard-stats">
      <h2>Commandes & Statistiques</h2>

      <div className="stats-cards">
        <div className="stats-card">
          <span className="stats-value">{stats.nbCommandes}</span>
          <span className="stats-label">Commandes</span>
        </div>
        <div className="stats-card">
          <span className="stats-value">{formatPrice(stats.chiffreAffaires)}</span>
          <span className="stats-label">Chiffre d'affaires</span>
        </div>
      </div>

      <h3>Produits les plus vendus</h3>
      {stats.topProduits.length === 0 ? (
        <p>Aucune donnée.</p>
      ) : (
        <ul className="top-produits-list">
          {stats.topProduits.map((p, i) => (
            <li key={i}>{p.name} — {p.total_qty} vendus</li>
          ))}
        </ul>
      )}

      <h3>Historique des commandes</h3>
      {orders.length === 0 ? (
        <p>Aucune commande pour le moment.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((o) => (
            <li key={o.id} className="order-item">
              <div>
                <strong>{o.name}</strong> — {o.phone}
                <br />
                {o.address}
                <br />
                {new Date(o.created_at).toLocaleString("fr-FR")}
              </div>
              <ul>
                {o.items.map((item, i) => (
                  <li key={i}>{item.name} x{item.quantity}</li>
                ))}
              </ul>
              <strong>{formatPrice(o.total)}</strong>
              {o.note && <p><em>Note : {o.note}</em></p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommandesStats;
