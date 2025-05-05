# 58. Length of Last Word

This function the length of the last word in a given string:

1.
```ts
s.trim().split(' ')
```
Removes any leading or trailing spaces and splits the string into an array of words.

2.
```ts
return words[words.length - 1].length;
```
Returns the length of last element, which is the last word.
