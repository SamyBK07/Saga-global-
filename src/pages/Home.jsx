import { useNavigate } from "react-router-dom";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Bienvenue</h1>
      <img src="/logo.png" alt="Saga Global Logo" className="home-logo" />
      <button onClick={() => navigate("/categories")} className="continue-btn">
        Continuer
      </button>
    </div>
  );
}

export default Home;
