export const getCollectionsFilteredData = (products, collections) => {
  if (Object.values(collections).every((val) => val === false)) return products;
  return products.filter((product) => collections[product.collectionId]);
};
