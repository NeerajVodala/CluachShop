const cartInitialState = {
  cart: [],
  wishlist: [],
};

const cartReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...prevState,
        cart: [...prevState.cart, { ...payload, quantity: 1 }],
      };
    case "INCREMENT_CART_ITEM":
      return {
        ...prevState,
        cart: prevState.cart.map((product) =>
          product._id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREMENT_CART_ITEM":
      return {
        ...prevState,
        cart: prevState.cart.map((product) =>
          product._id === payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...prevState,
        cart: prevState.cart.filter((product) => product._id !== payload),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...prevState,
        wishlist: [...prevState.wishlist, { ...payload }],
        cart: prevState.cart.filter((product) => product._id !== payload),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...prevState,
        wishlist: prevState.wishlist.filter(
          (product) => product._id !== payload
        ),
      };
    default:
      return prevState;
  }
};

export { cartInitialState, cartReducer };
