import math

def magicIndex(array):
  leftIdx = 0
  rightIdx = len(array) - 1
  while (leftIdx <= rightIdx):
    midIdx = int(math.floor((leftIdx + rightIdx) / 2))
    if (array[midIdx] == midIdx):
      return midIdx
    if (array[midIdx] < midIdx):
      leftIdx = midIdx + 1
    else:
      rightIdx = midIdx - 1
  return midIdx

print(magicIndex([-40,-20,-1,1,2,3,5,7,9,12,13]))
