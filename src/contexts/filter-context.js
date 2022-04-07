import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const FilterContext = createContext();
const useFilters = () => useContext(FilterContext);

const FiltersProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    collections: {
      MCL: false,
      SF: false,
      MB: false,
      RBR: false,
    },
    price: 5000,
    discount: 0,
    sort: "",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FiltersProvider, useFilters };
