# 2807. Insert Greatest Common Divisors in Linked List

This function takes the head of a singly linked list and inserts a new node between every pair of nodes. The value of the new node is the greatest common divisor (GCD) of the two adjacent nodes' values.

1. Save the current and next element:
```ts
let cur = head;
let next = head?.next;
```

2. Loop as long as there is a next element in the list:
```ts
while (next) {...}
```

3. Inside the loop calculate the GCD by using gcd function, which uses the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)
```ts
let gcdValue = gcd(cur.val, next.val);
```

4. Insert a new node between `cur` and `next` elements
```ts
cur.next = new ListNode(gcdValue, next);
```

5. Update the current and next element
```ts
cur = next;
next = next.next;
```

6. Return the head of the modified list
```ts
return head;
```
