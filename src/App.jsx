import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Lithotherapie from "./pages/Lithotherapie";
import Cosmetique from "./pages/Cosmetique";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/lithotherapie" element={<Lithotherapie />} />
        <Route path="/cosmetique" element={<Cosmetique />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
