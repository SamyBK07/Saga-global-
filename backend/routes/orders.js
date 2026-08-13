import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM orders ORDER BY created_at DESC");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { name, phone, address, items, total, note } = req.body;
  const result = await pool.query(
    "INSERT INTO orders (name, phone, address, items, total, note) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
    [name, phone, address, JSON.stringify(items), total, note]
  );
  res.json(result.rows[0]);
});

export default router;
