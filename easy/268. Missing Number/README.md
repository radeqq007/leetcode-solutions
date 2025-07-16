# 268. Missing Number

This solution uses these proporties of XOR:

```ts
x ^ 0 = x
x ^ x = 0
```

We XOR all the indices from 0 to n and the array with a missing number.
Since every number from 0 to n appears exactly once except the missing number, all matching pairs (index and value) will cancel out due to x ^ x = 0, leaving the missing number as our final result.
