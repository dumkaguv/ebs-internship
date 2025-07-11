export const formatPrice = (price: number) =>
  price % 1 === 0 ? price : price.toFixed(1);
