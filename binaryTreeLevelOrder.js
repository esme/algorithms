var levelOrder = function(root) {
  if (root === null) return;
  const q = [], result = [];
  q.push(root);
  while(q.length) {
    const temp = [];
    const count = q.length;
    for (let i = 0; i < count; i++) {
      const node = q.shift();
      temp.push(node.val);
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
    }
    result.push(temp);
  }
  console.log(result);
};

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);

levelOrder(a);