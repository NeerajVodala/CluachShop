import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider, FiltersProvider, ProductsProvider } from "./contexts";
import { makeServer } from "./server";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FiltersProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </FiltersProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
