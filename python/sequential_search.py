def sequentialSearch(alist, item):
  position = 0
  while (position < len(alist)):
    if alist[position] == item:
      return position
    position += 1

  return -1

print(sequentialSearch([], 4)) # => -1
print(sequentialSearch([3, 4, 8], 4)) # => 1
print(sequentialSearch([3, 4, 8], 8)) # => 2
print(sequentialSearch([3, 4, 8], 5)) # => -1
