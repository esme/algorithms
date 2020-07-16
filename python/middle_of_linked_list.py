# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
    def __repr__(self):
        return '{{val: {}, next: {}}}'.format(self.val, self.next)

class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        fast = head
        slow = head

        while fast.next and fast.next.next:
            fast = fast.next.next
            slow = slow.next
        
        print('fast', fast.val)
        print('slow', slow.val)

        if fast.next is not None:
            return slow.next
        
        return slow
    
n = ListNode(1)
temp = n
for i in range(2, 4):
    temp.next = ListNode(i)
    temp = temp.next
print('n', n)

sol = Solution()
print(sol.middleNode(n))