// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let cur = head;
  let next = head?.next;

  while (next) {
    let gcdValue = gcd(cur.val, next.val);

    cur.next = new ListNode(gcdValue, next);

    cur = next;
    next = next.next;
  }

  return head;
}

function gcd(a: number, b: number) {
  let R: number;
  while (a % b > 0) {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}
