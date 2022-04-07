export const getSortedData = (products, sort) => {
  if (sort === "HIGH_TO_LOW")
    return [...products].sort((a, b) => b.discountPrice - a.discountPrice);
  if (sort === "LOW_TO_HIGH")
    return [...products].sort((a, b) => a.discountPrice - b.discountPrice);
  return products;
};
