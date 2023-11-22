import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RoutesComponent from "./Routes";
import { ProductProvider } from "./components/Context/ProductContext";
import { CartProvider } from "./components/Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <RoutesComponent />
          <ToastContainer />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
