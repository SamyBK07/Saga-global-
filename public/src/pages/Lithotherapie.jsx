import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

function Lithotherapie() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Produits Lithothérapie</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.lithotherapie.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Lithotherapie
