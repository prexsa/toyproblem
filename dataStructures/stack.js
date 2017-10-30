// implement a stack datastructure
// methods: push, pop, size

class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
}

Stack.prototype.push = value => {
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = () => {
  if(this.size > 0) {
    this.count--;
    let copy = this.storage[this.count];
    delete this.storage[this.count];
    return copy;
  }
}

Stack.prototype.size = () => {
  return this.count;
}