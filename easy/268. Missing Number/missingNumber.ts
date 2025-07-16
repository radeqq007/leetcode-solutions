function missingNumber(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i];
  }
  res ^= nums.length;
  return res;
}
