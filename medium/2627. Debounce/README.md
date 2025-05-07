# 2627. Debounce

This function takes a function `fn` and a delay in milliseconds `ms`, and returns a debounced version of the function. The debounced function will only be called after the specified delay has passed since the last time it was invoked.

1. Define a new timeout variable
```ts
let timeout: ReturnType<typeof setTimeout>;
```

2. Return a new function that takes any number of arguments
```ts
return function (...args: any[]) { ... }
```

3.  Inside the function body, clear the previous timeout
```ts
clearTimeout(timeout);
```

4. Set a new timeout to call the original function after the specified delay
```ts
timeout = setTimeout(() => fn(...args), t);
```
