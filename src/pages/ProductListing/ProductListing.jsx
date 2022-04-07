import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { ProductFilters } from "./components/ProductFilters/ProductsFilters";
import "./ProductListing.css";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-row">
        <ProductFilters />
        <div className="product-section flex-row flex-wrap gp-2xl">
          {products.map((product) => (
            <ProductCard productDetail={product} key={product._id} />
          ))}
        </div>
      </main>
    </>
  );
};
