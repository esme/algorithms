from collections import deque

def hot_potato(names, num):
  queue = deque()
  for name in names:
    queue.append(name)

  while len(queue) > 1:
    for i in range(num):
      queue.append(queue.popleft())
    queue.popleft()
  return queue

print(hot_potato(('Bill', 'David', 'Susan', 'Jane', 'Kent', 'Brad'), 9))
