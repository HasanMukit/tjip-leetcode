class MyListNode {
  value: number;
  // In JS we don't need to use pointer & we work with reference to the Object
  // Memory management is built in & garbage collection happens automatically
  next: MyListNode | null;
  constructor(value: number, next: MyListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  private static DUMMY_VALUE = 0;
  length: number;
  dummyHead: MyListNode;
  constructor() {
    this.dummyHead = new MyListNode(MyLinkedList.DUMMY_VALUE);
    this.length = 0;
  }

  get(index: number): number {
    // TC: BigO(n) [n being index]
    // SC: BigO(1)
    if (index < 0 || index >= this.length) return -1;
    let indexNode = this.dummyHead.next;
    while (index--) {
      if (indexNode) indexNode = indexNode.next;
    }
    return indexNode ? indexNode.value : -1
  }

  addAtHead(val: number): void {
    // TC: BigO(1)
    // SC: BigO(1)
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    // TC: BigO(n) [n being length of the LinkedList]
    // SC: BigO(1)
    this.addAtIndex(this.length, val);
  }

  addAtIndex(index: number, val: number): void {
    // TC: BigO(n) [n being index]
    // SC: BigO(1)
    if (index < 0 || index > this.length) return;
    let indexNode = this.dummyHead;
    while (index--) {
      if (indexNode.next) indexNode = indexNode.next;
    }
    if (indexNode) {
      const newNode = new MyListNode(val, indexNode.next);
      indexNode.next = newNode;
      this.length++;
    }
  }

  deleteAtIndex(index: number): void {
    // TC: BigO(n) [n being index]
    // SC: BigO(1)
    if (index < 0 || index > this.length) return;
    let prevIndexNode = this.dummyHead;
    while (index--) {
      if (prevIndexNode.next) prevIndexNode = prevIndexNode.next;
    }
    // Automatic garbage collection in JS/TS
    prevIndexNode.next = prevIndexNode?.next?.next || null
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
