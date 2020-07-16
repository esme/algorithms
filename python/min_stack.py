class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.array = []
        self.min = []
        

    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        if not self.min or x <= self.min[-1]:
          self.min.append(x)
        self.array.append(x)

    def pop(self):
        """
        :rtype: None
        """
        if self.array and self.getMin() == self.top():
          if self.min:
            self.min.pop()
        return self.array.pop()

    def top(self):
        """
        :rtype: int
        """
        return self.array and self.array[-1]

    def getMin(self):
        """
        :rtype: int
        """
        return self.min and self.min[-1]


minStack = MinStack()
minStack.push(0)
minStack.push(1)
minStack.push(0)
print(minStack.getMin())
minStack.pop()
print(minStack.getMin())
