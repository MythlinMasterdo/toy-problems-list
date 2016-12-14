var BinarySearchTree = function() {
  this.root = null;
}

BinarySearchTree.prototype.insert = function(val) {
  var root = this.root;
  if(!root) {
    this.root = new Node(val);
    return;
  }
  var currentNode = root;
  var newNode = new Node(val);

  while(currentNode) {
    if(val < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if(!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

BinarySearchTree.prototype.depthFirst = function(cb) {
  cb(this.value);
  if(this.left !== null) {
    this.left.depthFirst(cb);
  }
  if(this.right !== null) {
    this.right.depthFirst(cb);
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if(this.root === value) {
    return true;
  } else if(value > this.root) {
    if(this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    if(this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
}

var Node = function(val) {
  this.right = null;
  this.left = null;
  this.value = val;
}

var bst = new BinarySearchTree();
bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.depthFirst();
