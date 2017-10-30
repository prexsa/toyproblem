// implement a depth-first search and breath-first search 
// for tree traversal

const Tree = function(value) {
  this.value = value;
  this.children = [];
}

// Depth-First Traversal
const DSF = () => {
  let log = [];

  function recurse(currentNode) {
    log.push(currentNode);

    for(let i = 0; i < currentNode.children.length; i++) {
      recurse(currentNode.children[i]);
    }
  }
  recurse(root);
  return log;
}

// Breadth-First Traversal
const BSF = () => {
  let log = [];
  let queue = new Queue();

  queue.enqueue(root);

  let currentTree = queue.dequeue();

  while(currentTree) {
    log.push(currentTree);
    for(let i = 0; i < currentTree.children.length; i++) {
      queue.enqueue(currentTree.children[i]);
    }
  }
  return log;
}