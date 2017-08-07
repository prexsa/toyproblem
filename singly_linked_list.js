// implement a singley linked list
// with methods: add, remove

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.head = null;
  }
}

SinglyList.prototype.add = function(value) {
  let node = new Node(value);

  if(!this.head) {
    this.head = node;
    return node;
  }else{
    currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    current.next = node;
  }
}

SinglyList.prototype.remove = function(value) {
  let currentNode = this.head;

  if(currentNode.value === value) {
    this.head = currentNode.next;
  }else{
    let previousNode = currentNode;

    while(currentNode.next) {
      if(currentNode.value === value) {
        previousNode.next = currentNode.next;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}

let sl = new SinglyList();
sl.add(1);
sl.add(2);
sl.add(3);
sl.add(4);
// 1-> 2-> 3-> 4