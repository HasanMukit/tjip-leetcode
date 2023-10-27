class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(node: ListNode | null): void {
  // TC: BigO(1)
  // SC: BigO(1)
  if (!node || !node.next) {
    return;
  }
  node.val = node.next.val;
  node.next = node.next.next;
}
