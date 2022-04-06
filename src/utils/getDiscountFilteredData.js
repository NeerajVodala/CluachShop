export const getDiscountFilteredData = (products, discount) => {
  return products.filter((product) => product.discount > discount);
};
