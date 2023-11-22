function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // n1: size of the array, n2: average size of the linkedList
    // TC: BigO(n1*n2) > BigO(n^2) 
    // SC: BigO(n1*n2) > BigO(n^2) 
  let sortedList: ListNode | null = new ListNode(Number.MIN_SAFE_INTEGER);
  for (let i = 0; i < lists.length; i++) {
    sortedList = mergeTwoLists(sortedList, lists[i]);
  }
  return sortedList?.next || null
}
