import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const CategoryContext = createContext();
const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [dbCategories, setDbCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/categories");
      setDbCategories(response.data.categories);
    })();
  }, []);
  return (
    <CategoryContext.Provider value={{ dbCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { useCategory, CategoryProvider };
