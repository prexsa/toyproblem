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
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
};

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
};

BinarySearchTree.prototype.inOrderTraverse = function(cb) {
  let inOrderTraverseNode = function(node, cb) {
    if(node !== null) {
      inOrderTraverseNode(node.left, cb);
      cb(node.value);
      inOrderTraverseNode(node.right, cb);
    }
  };

  inOrderTraverseNode(root, cb);
};

BinarySearchTree.prototype.preOrderTraverse = function(cb) {
  let preOrderTraverseNode = function(node, cb) {
    if(node !== null) {
      cb(node.value);
      preOrderTraverseNode(node.left, cb);
      preOrderTraverseNode(node.right, cb);
    }
  };

  preOrderTraverseNode(root, cb);
};

BinarySearchTree.prototype.postOrderTraverse = function(cb) {
  let postOrderTraverseNode = function(node, cb) {
    if(node !== null) {
      postOrderTraverseNode(node.left, cb);
      postOrderTraverseNode(node.right, cb);
      cb(node.value);
    }
  }; 

  postOrderTraverseNode(root, cb);
};

BinarySearchTree.prototype.min = function() {
  let minNode = function(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left;
      }
      return node.value;
    }
    return null;
  }

  return minNode(root);  
}

BinarySearchTree.prototype.max = function() {
  let maxNode = function(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right;
      }
      return node.value;
    }
    return null;
  }

  return maxNode(root);
}

BinarySearchTree.prototype.remove = function(val) {
  let currentNode = this.root;
  
  if(!currentNode) return null;

  if(currentNode.value === val) {
    if(!currentNode.left && !currentNode.right) return null;
    if(!currentNode.left) return node.right;
    if(!currentNode.right) return node.left;
  }

  if(!currentNode) return null;
  while(currentNode) {
    if(val < currentNode.value) {
      currentNode = currentNode.left
    } else if (val > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      if(currentNode.left === null & currentNode.right === null) {
        currentNode = null;
        return currentNode;
      }

      if(currentNode.left === null) {
        currentNode = currentNode.right;
        return currentNode;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
        return currentNode;
      }
    }
  }
};

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
};