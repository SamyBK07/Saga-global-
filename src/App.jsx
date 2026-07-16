import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cosmetique from "./pages/Cosmetique";
import Lithotherapie from "./pages/Lithotherapie";
import Encens from "./pages/Encens";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cosmetique" element={<Cosmetique />} />
          <Route path="/lithotherapie" element={<Lithotherapie />} />
          <Route path="/encens" element={<Encens />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
