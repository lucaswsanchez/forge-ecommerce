import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ShoppingCart from "./components/Shopping/ShoppingCart";
import Checkout from "./components/Shopping/Checkout";
import OrderConfirmation from "./components/Shopping/OrderConfirmation";
import ProductDetail from "./components/Home/ProductDetail";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
