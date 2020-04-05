var sumNumbers = function(root) {
  return helper(root, 0);
};

var helper = function(n, sum) {
  if (n === null) return 0;
  if (n.left === null && n.right === null) {
    return sum + n.val;
  }
  return helper(n.left, (sum + n.val) * 10) + helper(n.right, (sum + n.val) * 10);
}

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new TreeNode(4);
a.left = new TreeNode(9);
a.left.left = new TreeNode(5);
a.left.right = new TreeNode(1);
a.right = new TreeNode(0);

console.log(sumNumbers(a));
