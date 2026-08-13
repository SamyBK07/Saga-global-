import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  const totals = await pool.query(
    "SELECT COUNT(*) AS nb_commandes, COALESCE(SUM(total),0) AS chiffre_affaires FROM orders"
  );

  const topProducts = await pool.query(`
    SELECT item->>'name' AS name, SUM((item->>'quantity')::int) AS total_qty
    FROM orders, jsonb_array_elements(items) AS item
    GROUP BY item->>'name'
    ORDER BY total_qty DESC
    LIMIT 5
  `);

  res.json({
    nbCommandes: Number(totals.rows[0].nb_commandes),
    chiffreAffaires: Number(totals.rows[0].chiffre_affaires),
    topProduits: topProducts.rows,
  });
});

export default router;
