/*
I - BST
O - second largest element
C - NA
E - if root === null
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const findLargestElement = (n) => {
  if (!n) {
    return null;
  }

  if (!n.right) {
    return n.val;
  }

  return findLargestElement(n.right);
}

const findSecondLargestElement = (n, result = null) => {
  if (n === null) {
    return null;
  }

  // if right exists, store parent in result and go right
  if (n.right) {
    return findSecondLargestElement(n.right, n.val);
  }

  // if right doesn't exist and left exists
  // find largest in left subtree
  if (!n.right && n.left) {
    return findLargestElement(n.left, n.val);
  }

  // return result
  if (!n.right && !n.left) {
    return result;
  }
}

const a = new Node(5);
a.left = new Node(3);
a.left.left = new Node(1);
a.left.right = new Node(4);
a.right = new Node(8);
a.right.left = new Node(6);
a.right.left.right = new Node(7);

const b = new Node(null);

console.log(findSecondLargestElement(a));
// console.log(findSecondLargestElement(b));

// console.log(findLargestElement(a));