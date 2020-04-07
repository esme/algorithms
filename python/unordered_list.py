class Node(object):
  def __init__(self, value):
    self.value = value
    self.next = None

class UnorderedList(object):
  def __init__(self):
    self.head = None
  
  def is_empty(self):
    return self.head is None

  def add(self, value):
    temp = Node(value)
    temp.next = self.head
    self.head = temp

  def size(self):
    count = 0
    curr = self.head
    while (curr):
      count += 1
      curr = curr.next

    return count
  
  def search(self, item):
    curr = self.head
    while (curr):
      if curr.value == item:
        return True
      curr = curr.next

    return False

  def remove(self, item):
    curr = self.head
    prev = None

    while True:
      if curr.value == item:
        break
      prev = curr
      curr = curr.next

    if prev is None:
      self.head = curr.next
    else:
      prev.next = curr.next
      
# l = UnorderedList()
# l.add(1)
# l.add(2)
# print(l.size())
# print(l.search(1))
# print(l.search(3))
# print(l.remove(2))
# print(l.head.value)