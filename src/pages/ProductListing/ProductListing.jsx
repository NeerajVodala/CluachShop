import "./ProductListing.css";
import { Navbar, ProductFilters, ProductCard } from "../../components";
import {
  getCollectionsFilteredData,
  getDiscountFilteredData,
  getPriceFilteredData,
  getSortedData,
} from "../../utils";
import { useProducts, useFilters } from "../../contexts";

export const ProductListing = () => {
  const { dbData } = useProducts();
  const {
    filterState: { collections, price, discount, sort },
  } = useFilters();
  const collectionsFilteredData = getCollectionsFilteredData(
    dbData,
    collections
  );
  const priceFilteredData = getPriceFilteredData(
    collectionsFilteredData,
    price
  );
  const discountFilteredData = getDiscountFilteredData(
    priceFilteredData,
    discount
  );
  const sortedData = getSortedData(discountFilteredData, sort);
  const products = sortedData;
  return (
    <>
      <Navbar />
      <main className="flex-row">
        <ProductFilters />
        <div className="product-section flex-row flex-wrap justify-center gp-2xl">
          {products.map((product) => (
            <ProductCard productDetails={product} key={product._id} />
          ))}
        </div>
      </main>
    </>
  );
};
