def binarySearch(alist, item):
  low = 0
  high = len(alist) - 1
  while low <= high:
    mid = (low + high) // 2
    if item == alist[mid]:
      return mid
    elif item < alist[mid]:
      high = mid - 1
    else:
      low = mid + 1
  return -1

print(binarySearch([1,4,5,6,7], 4))