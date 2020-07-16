def insertionSort(arr):
  for i in range(1, len(arr)):
    j = i
    while j > 0 and arr[j] < arr[j-i]:
      arr[j], arr[j-1] = arr[j-1], arr[j]
      j -= 1
  return arr

print(insertionSort([7,5,6,2,9,1]))
