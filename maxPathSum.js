var maxPathSum = function(root) {
  let max = Number.MIN_SAFE_INTEGER;
  const helper = (n) => {
    if (n === null) return 0;
    let left = Math.max(helper(n.left), 0);
    let right = Math.max(helper(n.right), 0);
    
    max = Math.max(max, n.val + left + right);
    
    return n.val + left + right;
  }
  helper(root);
  return max;
};

const treeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new treeNode(-10);
console.log(maxPathSum(a));