import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FiltersProvider, ProductsProvider } from "./contexts";
import { makeServer } from "./server";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FiltersProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </FiltersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
