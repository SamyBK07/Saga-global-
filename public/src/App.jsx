import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lithotherapie from "./pages/Lithotherapie";
import Cosmetique from "./pages/Cosmetique";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lithotherapie" element={<Lithotherapie />} />
        <Route path="/cosmetique" element={<Cosmetique />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
