from unordered_list import Node, UnorderedList

class OrderedList(UnorderedList):
  def search(self, item):
    current = self.head
  
    while current is not None:
      if current.value == item:
        return True
      if current.value > item:
        return False
      current = current.next
  
    return False

  def add(self, item):
    current = self.head
    previous = None

    while current:
      if current.value > item:
        break
      previous, current = current, current.next

    temp = Node(item)
    if previous is None:
      temp.next, self.head = self.head, temp
    else:
      temp.next, previous.next = current, temp

  def traverse(self):
    current = self.head
    while(current):
      print(current.value)
      current = current.next

a = OrderedList()
a.add(1)
a.add(10)
a.add(5)
a.traverse()