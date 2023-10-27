function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // TC: BigO(n) [where n is the length of the LinkedList]
  // SC: BigO(1)
  let dummyHead = new ListNode(0, head);
  let slowHead: ListNode | null = dummyHead;
  let fastHead: ListNode | null = dummyHead;
  while (n-- && fastHead) {
    fastHead = fastHead.next;
  }
  while (slowHead && fastHead?.next) {
    slowHead = slowHead.next;
    fastHead = fastHead.next;
  }
  if (!slowHead?.next) return null;
  slowHead.next = slowHead.next.next;
  return dummyHead.next;
}
