class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

class Queue:
  def __init__(self):
    self.head = self.tail = None

  def isEmpty(self):
    return self.head == None

  def enqueue(self, item):
    temp = Node(item)
    if (self.tail == None):
      self.head = self.tail = temp
      return
    self.tail.next = temp
    self.tail = temp

  def dequeue(self):
    if self.isEmpty():
      return
    temp = self.head
    self.head = temp.next
    return temp

a = Queue()
a.enqueue('1')
a.enqueue('2')
a.enqueue('3')
a.dequeue()
print(a.head.data)
print(a.tail.data)
