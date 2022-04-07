export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "COLLECTION_FILTER":
      return {
        ...state,
        collections: {
          ...state.collections,
          [payload]: !state.collections[payload],
        },
      };
    case "PRICE_FILTER":
      return { ...state, price: payload };
    case "DISCOUNT_FILTER":
      return { ...state, discount: payload };
    case "SORT_FILTER":
      return { ...state, sort: payload };
    case "CLEAR_ALL":
      return {
        ...state,
        collections: {
          MCL: false,
          SF: false,
          MB: false,
          RBR: false,
        },
        price: 5000,
        discount: 0,
        sort: "",
      };
    default:
      return state;
  }
};
