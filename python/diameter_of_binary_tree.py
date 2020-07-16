# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
    def __repr__(self):
        return '{{val: {}, left: {}, right: {}}}'.format(self.val, self.left, self.right)

class Solution(object):
    def diameterOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.ans = 0

        def depth(p):
            if not p:
                return 0
            
            left, right = depth(p.left), depth(p.right)
            self.ans = max(self.ans, left + right)
            return 1 + max(left, right)
        
        depth(root)
        return self.ans

n = TreeNode(1)
n.left = TreeNode(2)
n.right = TreeNode(3)

sol = Solution()
print(sol.diameterOfBinaryTree(n))
