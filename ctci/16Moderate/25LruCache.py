class Node:
  def __init__(self, k, v):
    self.key = k
    self.val = v
    self.prev = None
    self.next = None

class LruCache:
  def __init__(self, capacity):
    self.capacity = capacity
    self.dict = {}
    self.head = Node(0, 0)
    self.tail = Node(0, 0)
    self.head.next = self.tail
    self.tail.prev = self.head

  def get(self, key):
    if key in self.dict:
      n = self.dict[key]
      self._remove(n)
      self._add(n)
      return n.val

  def set(self, key, val):
    if key in self.dict:
      self._remove(self.dict[key])
    n = Node(key, val)
    self._add(n)
    self.dict[key] = n
    if len(self.dict) > self.capacity:
      nxt = self.head.next
      self._remove(nxt)
      del self.dict[nxt.key]

  def _remove(self, node):
    p = node.prev
    n = node.next
    p.next = n
    n.prev = p

  def _add(self, node):
    p = self.tail.prev
    p.next = node
    node.prev = p
    self.tail.prev = node
    node.next = self.tail

obj = LruCache(5)
obj.set('a', 'apple')
obj.set('b', 'boy')
print(obj.get('a'))
print(obj.get('b'))
obj.set('a', 'animal')
print(obj.get('a'))
