// A modified verison of the queue implementation
// Circular queue

const hotPotato = (list, num) => {
  let queue = new Queue();
  for(let i = 0; i < list.length; i++) {
    queue.enqueue(list[i]);
  }

  var eliminated = '';
  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated from the Hot Potato game.')
  }

  return queue.dequeue();
}