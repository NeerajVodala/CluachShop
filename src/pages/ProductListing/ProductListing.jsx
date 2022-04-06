import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { ProductFilters } from "./components/ProductFilters/ProductsFilters";
import "./ProductListing.css";

export const ProductListing = () => {
  return (
    <>
      <Navbar />
      <main className="flex-row">
        <ProductFilters />
        <div className="product-section flex-row flex-wrap gp-2xl">
          {products.map((product) => (
            <ProductCard productDetails={product} key={product._id} />
          ))}
        </div>
      </main>
    </>
  );
};
