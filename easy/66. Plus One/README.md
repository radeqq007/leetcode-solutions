# 66. Plus One

This function takes a big int that is represented as an array of numbers. It increments the big int by 1 and returns it as an array of numbers.

1. Join the array elements and parse them into a big into
```ts
BigInt(digits.join(''))
```

2. Add 1 that's the type of big int
```ts
+ BigInt(1)
```

3. Parse the big int into a string
```ts
String(...)
```

4. Split the string into an array and parse it's elements into a number
```ts
.split('').map(Number)
```

5. Return the result
