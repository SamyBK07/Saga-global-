import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      {/* Plus tard : /lithotherapie, /cosmetique */}
    </Routes>
  );
}