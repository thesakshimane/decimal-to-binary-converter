export function decimalToBinary(decimal: number): string {
  if (isNaN(decimal) || decimal < 0) return "Invalid Input";

  return decimal.toString(2); // Converts to binary
}
