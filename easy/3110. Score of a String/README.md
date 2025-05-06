# 3310. Score of a String

This function returns a score of a string, which is the sum of the absolute difference between the ASCII values of adjacent characters.


1. Define a sum variable
```ts
let sum = 0;
```

2. Loop through the string
```ts
for (let i = 0; i < s.length - 1; i++) {...}
```

3. Inside the loop add the absolute value of the difference between ASCII values of current and the next character
```ts
sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
```

4. Return the value of `sum`
```ts
return sum;
```
