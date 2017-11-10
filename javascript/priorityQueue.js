// Queue implementation with priority

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  };

  enqueue(element, priority) {
    let queueElement = new QueueElement();

    if(this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for(let i = 0; i < this.items.length; i++) {
        if(queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if(!added) {
        items.push(queueElement);
      }
    }
  };

  isEmpty() {
    return this.items.length ==== 0;
  }
}