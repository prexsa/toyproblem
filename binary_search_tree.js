// Implement a binary search tree

// Time complexity
// access: O(log(n))
// search: O(log(n))
// insertion: O(log(n))
// deletion: O(log(n))

// Info:
// height and depth of an empty tree: -1
// height and depth of a tree with just a root node: 0

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

BinarySearchTree.prototype.add = function(val) {
  let node = new Node(val);

  if(!this.root) {
    this.root = node;
  }else{
    let currentNode = this.root;
    while(currentNode) {
      if(node.value < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      }else if(node.value > currentNode.value) {
        if(!currentNode.right) {
          currentNode.right = node;
          break
        }
        currentNode = currentNode.right;
      }else{
        break;
      }
    }
  }
}

BinarySearchTree.prototype.remove = function(val) {
  let currentNode = this.root;
  
  if(!currentNode) return null;

  if(currentNode.value === val) {
    if(!currentNode.left && !currentNode.right) return null;
    if(!currentNode.left) return node.right;
    if(!currentNode.right) return node.left;
  }
}

BinarySearchTree.prototype.contains = function(val) {
  let currentNode = this.head

  while(currentNode) {
    if(currentNode.value === val) return true;

    if(val < currentNode.value) {
      currentNode = currentNode.left;
    }else{
      currentNode = currentNode.right;
    }
  }
  return false;
}