function pairSum(head: ListNode | null): number {
    // n is the size of the linked list
    // TC: BigO(3n/2) > BigO(n) 
    // SC: BigO(1)
  if (!head) return 0;
  function reverseList(head: ListNode | null): ListNode | null {
    let prevNode: ListNode | null = null;
    let currentNode: ListNode | null = head;
    let nextNode: ListNode | null = head?.next || null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return prevNode;
  }

  let slowHead: ListNode | null = head;
  let fastHead: ListNode | null = head;

  while (fastHead?.next && slowHead) {
    // TC: BigO(n/2) as fastHead jumps twice 
    // SC: BigO(1)
    fastHead = fastHead.next.next;
    slowHead = slowHead.next;
  }

  let secondHalfHead = reverseList(slowHead); // TC: BigO(n/2) SC: BigO(1)
  let maxSum = Number.MIN_VALUE;
  while (secondHalfHead && head) {
    // TC: BigO(n/2) 
    // SC: BigO(1)
    maxSum = Math.max(maxSum, head.val + secondHalfHead.val);
    head = head.next 
    secondHalfHead = secondHalfHead.next
  }
  return maxSum;
}