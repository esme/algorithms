var binaryTreePaths = function(root) {
  const res = [];
  if (root) searchBT(root, "", res);
  return res;
};

const searchBT = function(root, str, res) {
  if (!root.left && !root.right) res.push(str + root.val);
  if (root.left) searchBT(root.left, str + root.val + '->', res);
  if (root.right) searchBT(root.right, str + root.val + '->', res);
}

const treeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new treeNode(1);
a.left = new treeNode(2);
a.left.left = new treeNode(4);
a.right = new treeNode(3);
console.log(binaryTreePaths(a));