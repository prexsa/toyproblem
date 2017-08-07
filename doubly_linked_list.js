// implement a doubly linked list
// with methods: add, remove

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyList.prototype.add = function(value) {
  let node = new Node(value);
  let currentNode = this.head;

  if(!currentNode) {
    this.head = node;
    this.tail = node;
    return node;
  }else{
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }

  return node;
}

DoublyList.prototype.remove = function(value) {
  let currentNode = this.head;

  if(currentNode.value === value) {
    this.head = currentNode.next;

    // if there is only one node
    if(this.head) {
      this.head.previous = null;
    }
    return this.head;
  }

  while(currentNode.next) {
    if(currentNode.value === value) {
      previous.next = currentNode.next;
      currentNode.next.previous = previous;
      return this.head;
    }
    previous = currentNode;
    currentNode = currentNode.next;
  }

  // if last node
  if(currentNode.value === value) {
    previous.next = null;
  }
  return this.head;
}