import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, blue, yellow)",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "yellow", marginBottom: "2rem" }}>
        Bienvenue chez Saga
      </h1>

      <button
        onClick={() => navigate("/categories")}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Continuer
      </button>
    </div>
  );
}