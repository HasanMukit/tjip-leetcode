function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
    // TC: BigO(n1 + n2)
    // SC: BigO(n1 + n2)
  let sortedHead = new ListNode(0);
  let movingHead: ListNode = sortedHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      movingHead.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      movingHead.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    movingHead = movingHead.next;
  }
  while (list1) {
    movingHead.next = new ListNode(list1.val);
    list1 = list1.next;
    movingHead = movingHead.next;
  }
  while (list2) {
    movingHead.next = new ListNode(list2.val);
    list2 = list2.next;
    movingHead = movingHead.next;
  }

  return sortedHead.next;
}
