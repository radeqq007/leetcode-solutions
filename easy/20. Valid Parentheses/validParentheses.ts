function isValid(s: string): boolean {
  if (s.length < 2) return false;

  let pairs: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let stack: string[] = [];

  for (let ch of s) {
    if (ch in pairs) {
      stack.push(ch);
      continue;
    }

    const top = stack.pop();
    if (pairs[top] != ch) return false;
  }

  return stack.length === 0;
}
