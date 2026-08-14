import { NavLink, Outlet, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";

const DashboardLayout = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <NavLink to="/dashboard/produits" className={({ isActive }) => isActive ? "active" : ""}>
          Produits
        </NavLink>
        <NavLink to="/dashboard/actualites" className={({ isActive }) => isActive ? "active" : ""}>
          Actualités
        </NavLink>
        <NavLink to="/dashboard/commandes" className={({ isActive }) => isActive ? "active" : ""}>
          Commandes & Stats
        </NavLink>
        <button onClick={logout}>Déconnexion</button>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-header">
          <Link to="/">
            <img src="/logo.png" alt="Retour au site" className="dashboard-header-logo" />
          </Link>
        </header>
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
