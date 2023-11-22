function reverseList(head: ListNode | null): ListNode | null {
  // TC: BigO(n) [where n is the length of the LinkedList]
  // SC: BigO(1)
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
