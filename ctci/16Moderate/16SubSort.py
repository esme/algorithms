from collections import deque

def subSort(array):
  end_left = findEndLeftSubsequenceOfArray(array)
  start_right = findStartRightSubsequenceOfArray(array)
  # print('end_left: ')
  # print(end_left)
  # print('start_right')
  # print(start_right)
  if end_left == len(array) - 1 and start_right == 0:
    return None

  max_index = findMaxBeforeStartRight(array, start_right)
  min_index = findMinAfterEndLeft(array, end_left)
  left_index = shrinkLeft(array, min_index, end_left)
  right_index = shrinkRight(array, max_index, start_right)

  return (left_index, right_index)

def shrinkLeft(array, min_index, start):
  for i in range(start, -1, -1):
    if (array[i] < array[min_index]):
      return i + 1
  return 0

def shrinkRight(array, max_index, start):
  for i in range(start, len(array)):
    if (array[i] > array[max_index]):
      return i - 1
  return len(array) - 1

def findEndLeftSubsequenceOfArray(array):
  for i in range(len(array) - 1):
    if (array[i] > array[i + 1]):
      return i
  return len(array) - 1

def findStartRightSubsequenceOfArray(array):
  for i in range(len(array) - 1, 1, -1):
    if (array[i - 1] > array[i]):
      return i
  return 0

def findMaxBeforeStartRight(array, start_right):
  max_index = 0
  for i in range(0, start_right):
    if (array[i] > array[max_index]):
      max_index = i
  return max_index

def findMinAfterEndLeft(array, end_left):
  min_index = end_left + 1
  for i in range(end_left + 1, len(array), -1):
    if (array[i] < array[min_index]):
      min_index = i
  return min_index

print(subSort([]))
print(subSort([1,2,4]))
print(subSort([1,2,4,7,10,11,8,12,5,6,16,18,19]))
