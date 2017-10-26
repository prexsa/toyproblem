// implement a singley linked list
// with methods: add, remove

// Access = O(n)
// Search = O(n)
// Insertion = O(1)
// Deletion = O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

SingleyLinkedList.prototype.add = (value) => {
  let node = new Node(value);
  
  if(!this.head) {
    this.head = node;
    this.tail = node;
  }else{
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
  return node;
}

SingleyLinkedList.prototype.remove = (value) => {
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

    if(currentNode.value = value) {
      previousNode.next = null;
    }
  }
}

SingleyLinkedList.prototype.reverse = () => {
  let currentNode = this.head;
  let previous;
  while(currentNode.next) {
    let next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = next;
  }
  currentNode.next = previous;
  return currentNode;
}

SingleyLinkedList.prototype.print = () => {
  let str = '';
  let currentNode = this.head;
  while(currentNode) {
    str += currentNode.value + ' ';
    currentNode = currentNode.next;
  }
  console.log(str.trim());
}

const list = new SingleyLinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(4)