import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center", margin: 0 }}>
        Saga Global
      </h1>
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Accueil</Link>
        <Link to="/lithotherapie" style={{ margin: "0 1rem" }}>Lithothérapie</Link>
        <Link to="/cosmetique" style={{ margin: "0 1rem" }}>Cosmétique</Link>
      </div>
    </nav>
  )
}

export default Navbar
