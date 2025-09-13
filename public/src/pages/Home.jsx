import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Bienvenue chez Saga Global</h2>
      <p>Découvrez nos gammes de produits :</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
        <Link to="/lithotherapie" style={{ padding: "1rem", border: "1px solid #000" }}>
          Lithothérapie
        </Link>
        <Link to="/cosmetique" style={{ padding: "1rem", border: "1px solid #000" }}>
          Cosmétique
        </Link>
      </div>
    </div>
  )
}

export default Home
