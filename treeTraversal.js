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

const a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4);
a.left.right = new TreeNode(5);

preOrder(a);