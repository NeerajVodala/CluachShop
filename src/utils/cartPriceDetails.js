export const getTotalPrice = (cartProducts) => {
  return cartProducts.reduce(
    (price, product) => (price = price + product.price * product.quantity),
    0
  );
};

export const getDiscountPrice = (cartProducts) => {
  return cartProducts.reduce(
    (discountPrice, product) =>
      (discountPrice =
        discountPrice +
        (product.price - product.discountPrice) * product.quantity),
    0
  );
};

