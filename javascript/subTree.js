var isSubtree = function(s, t) {
  if (s === null) return false;
  if (isSame(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var isSame = function(s, t) {
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;
  if (s.val != t.val) return false;
  return isSame(s.left, t.left) || isSame(s.right, t.right);
}

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);

const b = new TreeNode(2);
isSubtree(a, b);