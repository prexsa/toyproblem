// implemente a queue data structure
// methods: enqueue, dequeue, size

class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.end = 0;
  }
}

Queue.prototype.enqueue = value => {
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = () => {
  if(this.size() > 0) {
    let copy = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return copy;
  }
}

Queue.prototype.size = () => {
  return this.count - this.end;
}