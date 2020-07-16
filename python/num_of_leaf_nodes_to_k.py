# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
    def __repr__(self):
        return '{{val: {}, left: {}, right: {}}}'.format(self.val, self.left, self.right)

class Solution(object):
    def __init__(self):
        self.nodes = 0
        self.res = 0

    def numOfLeafNodesToK(self, root, k):
        a = self.recurse(root, k)
        return self.res

    def recurse(self, root, k):
        if root is None:
            return 0
        if root.left is None and root.right is None:
            self.nodes += 1
            return 1
        left, right = self.recurse(root.left, k), self.recurse(root.right, k)
        if left and right and left + right <= k:
            self.res = self.nodes
        return max(left, right) + 1

n = TreeNode(2)
n.left = TreeNode(3)
n.left.left = TreeNode(5)
n.left.left.left = TreeNode(9)
n.left.right = TreeNode(6)
n.right = TreeNode(4)

sol = Solution()
print(sol.numOfLeafNodesToK(n, 1))
sol = Solution()
print(sol.numOfLeafNodesToK(n, 3))
sol = Solution()
print(sol.numOfLeafNodesToK(n, 10))
