class Node(object):
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None
  def __repr__(self):
    return '{{val: {}, left: {}, right: {}}}'.format(self.val, self.left, self.right)

def inorder(n):
  if (not n):
    return
  inorder(n.left)
  print(n.val)
  inorder(n.right)

def preorder(n):
  if (not n):
    return
  print(n.val)
  preorder(n.left)
  preorder(n.right)

def postorder(n):
  if (not n):
    return
  postorder(n.left)
  postorder(n.right)
  print(n.val)

a = Node(1)
a.left = Node(2)
a.right = Node(3)
inorder(a)
preorder(a)
postorder(a)