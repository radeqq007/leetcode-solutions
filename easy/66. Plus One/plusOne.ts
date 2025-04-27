function plusOne(digits: number[]): number[] {
  return String(BigInt(digits.join('')) + BigInt(1))
    .split('')
    .map(Number);
}
