import { useState, useEffect } from "react";
import { ID } from "appwrite";
import { storage, BUCKET_ID } from "../../services/appwrite";
import { API_BASE } from "../../services/api";

const empty = { title: "", content: "", image: "" };

const Actualites = () => {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = () => {
    fetch(`${API_BASE}/api/news`).then((r) => r.json()).then(setNews);
  };

  useEffect(load, []);

  const uploadImage = async () => {
    if (!file) return form.image || "";
    const uploaded = await storage.createFile({
      bucketId: BUCKET_ID,
      fileId: ID.unique(),
      file: file,
    });
    return storage.getFileView({
      bucketId: BUCKET_ID,
      fileId: uploaded.$id,
    }).href;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const imageUrl = await uploadImage();
      const payload = { ...form, image: imageUrl };

      const url = editingId ? `${API_BASE}/api/news/${editingId}` : `${API_BASE}/api/news`;
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

  const handleEdit = (n) => {
    setForm({ title: n.title, content: n.content, image: n.image });
    setEditingId(n.id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer cette actualité ?")) return;
    await fetch(`${API_BASE}/api/news/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="dashboard-actualites">
      <h2>Actualités</h2>

      <form onSubmit={handleSubmit} className="dashboard-form">
        <input placeholder="Titre" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Contenu" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
        <label>
          Photo (optionnel)
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button type="submit" disabled={saving}>{editingId ? "Modifier" : "Publier"}</button>
        {editingId && (
          <button type="button" onClick={() => { setForm(empty); setEditingId(null); setFile(null); }}>
            Annuler
          </button>
        )}
      </form>

      <ul className="dashboard-list">
        {news.map((n) => (
          <li key={n.id}>
            {n.image && <img src={n.image} alt={n.title} width="50" />}
            <span>{n.title}</span>
            <button onClick={() => handleEdit(n)}>Éditer</button>
            <button onClick={() => handleDelete(n.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Actualites;
