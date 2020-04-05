const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

// left, root, right
const inOrder = (root) => {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
  return;
}

// root, left, right
const preOrder = (root) => {
  if (root === null) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
  return;
}

// left, right, root
const postOrder = (root) => {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
  return;
}

// left, root, right
const inOrderIterative = (root) => {
  const stack = [];
  let n = root;

  while (n || stack.length) {
    if (n) {
      stack.push(n);
      n = n.left;
    } else {
      n = stack.pop();
      console.log(n.val);
      n = n.right;
    }
  }
}

// root, left, right
const preOrderIterative = (root) => {
  const stack = [];
  let n = root;

  while (n || stack.length) {
    if (n) {
      console.log(n.val);
      stack.push(n.right);
      n = n.left;
    } else {
      n = stack.pop();
    }
  }
}

// left, right, root
const postOrderIterative = (root) => {
  const stack = [];
  let n = root;

  while (n || stack.length) {
    if (n) { // 
      stack.push(n); // 1
      console.log(n.val); // 1
      n = n.right; // 3
    } else {
      n = stack.pop(); // 1
      n = n.left; // 2
    }
  }
}

const a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4);
a.left.right = new TreeNode(5);

// console.log(inOrder(a));
// console.log(inOrderIterative(a));
// console.log(preOrder(a));
// console.log(preOrderIterative(a));
console.log(postOrder(a));
console.log(postOrderIterative(a));