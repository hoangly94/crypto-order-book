export function calculateTotalQuantity(data?: [number, number][]) {
  if (!data) return 0;
  return data.reduce((acc, [_, quantity]) => acc + quantity, 0);
}

export function formatTokenPrice(price: number) {
  return Number(price).toLocaleString("en-US", {
    minimumFractionDigits: 8,
    maximumFractionDigits: 8,
  });
}
export function formatTokenQuantity(price: number) {
  return Number(price).toLocaleString("en-US", {
    minimumFractionDigits: 8,
    maximumFractionDigits: 8,
  });
}
