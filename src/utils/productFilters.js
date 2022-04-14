export const getCollectionsFilteredData = (products, collections) => {
  if (Object.values(collections).every((val) => val === false)) return products;
  return products.filter((product) => collections[product.collectionId]);
};

export const getDiscountFilteredData = (products, discount) => {
  return products.filter((product) => product.discount >= discount);
};

export const getPriceFilteredData = (products, price) => {
  return products.filter(
    (product) => Number(product.discountPrice) <= Number(price)
  );
};

export const getSortedData = (products, sort) => {
  if (sort === "HIGH_TO_LOW")
    return [...products].sort((a, b) => b.discountPrice - a.discountPrice);
  if (sort === "LOW_TO_HIGH")
    return [...products].sort((a, b) => a.discountPrice - b.discountPrice);
  return products;
};
