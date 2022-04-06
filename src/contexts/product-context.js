import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();
const useProducts = () => useContext(ProductContext);

const ProductsProvider = ({ children }) => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setDbData(response.data.products);
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ dbData }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductsProvider, useProducts };
