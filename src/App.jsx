import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cosmetique from "./pages/Cosmetique";
import Encens from "./pages/Encens";
import Lithotherapie from "./pages/Lithotherapie";
import AboutPage from "./pages/AboutPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/dashboard/Login";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";
import Produits from "./pages/dashboard/Produits";
import Actualites from "./pages/dashboard/Actualites";
import CommandesStats from "./pages/dashboard/CommandesStats";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="produits" element={<Produits />} />
            <Route path="actualites" element={<Actualites />} />
            <Route path="commandes" element={<CommandesStats />} />
          </Route>

          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="site-main">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/cosmetique" element={<Cosmetique />} />
                    <Route path="/categories/encens" element={<Encens />} />
                    <Route path="/categories/lithotherapie" element={<Lithotherapie />} />
                    <Route path="/a-propos" element={<AboutPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/success" element={<Success />} />
                  </Routes>
                </main>
                <Footer />
                <BottomNav />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
