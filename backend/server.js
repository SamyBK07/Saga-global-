import express from "express";
import cors from "cors";
import { initDb } from "./db.js";
import productsRoutes from "./routes/products.js";
import newsRoutes from "./routes/news.js";
import ordersRoutes from "./routes/orders.js";
import statsRoutes from "./routes/stats.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/stats", statsRoutes);

const PORT = process.env.PORT || 4000;

initDb().then(() => {
  app.listen(PORT, () => console.log(`Backend démarré sur le port ${PORT}`));
});
