function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // n: number of nodes in the larger list
  // TC: BigO(n)
  // SC: BigO(1)
  let carry = 0;
  let digitSum = 0;
  let movingHead = new ListNode(0);
  let sum = movingHead;
  while (l1 || l2 || carry) {
    digitSum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(digitSum / 10);
    movingHead.next = new ListNode(digitSum % 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    movingHead = movingHead.next;
  }
  return sum.next;
}
