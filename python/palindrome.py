from collections import deque

def is_palindrome(characters):
  q = deque(characters)
  while len(q) > 1:
    first = q.popleft()
    last = q.pop()
    if first != last:
      return False
  return True

print(is_palindrome('abc'))
print(is_palindrome('aba'))
print(is_palindrome('estse'))
