def getMaxSum(array):
  maxSum = 0
  val = 0
  for num in array:
    val = max(0, num + val)
    maxSum = max(val, maxSum)
  return maxSum

print(getMaxSum([2,3,-8,-1,2,4,-2,3]))