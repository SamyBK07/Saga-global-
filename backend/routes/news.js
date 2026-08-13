import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM news ORDER BY created_at DESC");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { title, content, image } = req.body;
  const result = await pool.query(
    "INSERT INTO news (title, content, image) VALUES ($1,$2,$3) RETURNING *",
    [title, content, image]
  );
  res.json(result.rows[0]);
});

router.put("/:id", async (req, res) => {
  const { title, content, image } = req.body;
  const result = await pool.query(
    "UPDATE news SET title=$1, content=$2, image=$3 WHERE id=$4 RETURNING *",
    [title, content, image, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM news WHERE id=$1", [req.params.id]);
  res.json({ success: true });
});

export default router;
