import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DashboardLayout = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <NavLink to="/dashboard/produits">Produits</NavLink>
        <NavLink to="/dashboard/actualites">Actualités</NavLink>
        <NavLink to="/dashboard/commandes">Commandes & Stats</NavLink>
        <button onClick={logout}>Déconnexion</button>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
