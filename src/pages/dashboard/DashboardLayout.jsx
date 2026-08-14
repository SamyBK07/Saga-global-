import { NavLink, Outlet } from "react-router-dom";
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
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
