import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

function Cosmetique() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Produits Cosmétiques</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.cosmetique.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Cosmetique
