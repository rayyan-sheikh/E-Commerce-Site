import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductDetails from "./pages/ProductDetails";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
