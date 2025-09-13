import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Lithotherapie from "./pages/Lithotherapie";
import Cosmetique from "./pages/Cosmetique";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/lithotherapie" element={<Lithotherapie />} />
      <Route path="/cosmetique" element={<Cosmetique />} />
    </Routes>
  );
}