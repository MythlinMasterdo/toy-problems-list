var BinarySearchTree = function(val) {
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

var Node = function(val) {
  this.right = null;
  this.left = null;
  this.value = val;
}
