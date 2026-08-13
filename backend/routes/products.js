import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { name, price, description, category, image } = req.body;
  const result = await pool.query(
    "INSERT INTO products (name, price, description, category, image) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [name, price, description, category, image]
  );
  res.json(result.rows[0]);
});

router.put("/:id", async (req, res) => {
  const { name, price, description, category, image } = req.body;
  const result = await pool.query(
    "UPDATE products SET name=$1, price=$2, description=$3, category=$4, image=$5 WHERE id=$6 RETURNING *",
    [name, price, description, category, image, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM products WHERE id=$1", [req.params.id]);
  res.json({ success: true });
});

export default router;
