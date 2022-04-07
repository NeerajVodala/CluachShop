export const getPriceFilteredData = (products, price) => {
  return products.filter(
    (product) => Number(product.discountPrice) <= Number(price)
  );
};
