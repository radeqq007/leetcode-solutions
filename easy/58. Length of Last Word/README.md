# 58. Length of Last Word

This function returns the length of the last word in a given string:

1. Remove any leading or trailing spaces and splits the string into an array of words.

```ts
s.trim().split(' ')
```
2. Return the length of last element, which is the last word.
```ts
return words[words.length - 1].length;
```
