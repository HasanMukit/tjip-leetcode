function hasCycle(head: ListNode | null): boolean {
  // TC: BigO(n)
  // SC: BigO(1)
  if (!head) return false;
  let slowHead: ListNode | null = head;
  let fastHead = head.next;
  let result: boolean = false;
  while (slowHead && fastHead?.next) {
    if (!fastHead || !slowHead) {
      result = false;
      break;
    }
    if (slowHead === fastHead) {
      result = true;
      break;
    }
    slowHead = slowHead.next;
    fastHead = fastHead.next.next;
  }
  return result;
}
