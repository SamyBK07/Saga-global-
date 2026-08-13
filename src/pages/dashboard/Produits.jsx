import { useState, useEffect } from "react";
import { ID } from "appwrite";
import { storage, BUCKET_ID } from "../../services/appwrite";
import { API_BASE } from "../../services/api";

const empty = { name: "", price: "", description: "", category: "", image: "" };

const Produits = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => {
    fetch(`${API_BASE}/api/products`).then((r) => r.json()).then(setProducts);
  };

  useEffect(load, []);

  const uploadImage = async () => {
    if (!file) return form.image || "";
    const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file);
    return storage.getFileView(BUCKET_ID, uploaded.$id).href;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const imageUrl = await uploadImage();
      const payload = { ...form, price: Number(form.price), image: imageUrl };

      const url = editingId ? `${API_BASE}/api/products/${editingId}` : `${API_BASE}/api/products`;
      const method = editingId ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setForm(empty);
      setFile(null);
      setEditingId(null);
      load();
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (p) => {
    setForm({ name: p.name, price: p.price, description: p.description, category: p.category, image: p.image });
    setEditingId(p.id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ce produit ?")) return;
    await fetch(`${API_BASE}/api/products/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="dashboard-produits">
      <h2>Produits</h2>

      <form onSubmit={handleSubmit} className="dashboard-form">
        <input placeholder="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="number" placeholder="Prix (FCFA)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required>
          <option value="">Catégorie</option>
          <option value="cosmetique">Cosmétique</option>
          <option value="encens">Encens</option>
          <option value="lithotherapie">Lithothérapie</option>
        </select>
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <label>
          Photo (optionnel)
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button type="submit" disabled={saving}>{editingId ? "Modifier" : "Ajouter"}</button>
        {editingId && (
          <button type="button" onClick={() => { setForm(empty); setEditingId(null); setFile(null); }}>
            Annuler
          </button>
        )}
      </form>

      <ul className="dashboard-list">
        {products.map((p) => (
          <li key={p.id}>
            {p.image && <img src={p.image} alt={p.name} width="50" />}
            <span>{p.name} — {p.price} FCFA</span>
            <button onClick={() => handleEdit(p)}>Éditer</button>
            <button onClick={() => handleDelete(p.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produits;
