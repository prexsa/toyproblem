// implement a doubly linked list

// Time Complexity
// access: O(n)
// search: O(1)
// insert: O(1)
// delete: O(1)

class Node {
  constructor(val) {
    this.value = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

DoublyList.prototype.add = function(val) {
  let node = new Node(val);

  if(!this.head) {
    this.head = node;
    this.tail = node;
  }else{
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
}

DoublyList.prototype.remove = function(val) {
  let currentNode = this.head;

  while(currentNode) {
    if(currentNode.value === val) {
      if(currentNode === this.head && currentNode === this.tail) {
        this.head = null;
        this.tail = null;
      }else if(currentNode === this.head) {
        this.head = this.head.next;
        this.head.previous = null;
      }else if(currentNode === this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      }else{
        currentNode.previous.next = currentNode.next;
        currentNode.next.previous = currentNode.previous;
      }
      this.length--;
    }
    currentNode = currentNode.next;
  }
}

DoublyList.prototype.print = function() {
  let str = "";
  let currentNode = this.head;
  while(currentNode) {
    str += currentNode.value + " ";
    currentNode = currentNode.next;
  }
  console.log(str);
}