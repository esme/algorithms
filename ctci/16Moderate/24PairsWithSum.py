def pairsWithSum(array, target):
  result = []

  hashmap = set(array)

  for num in array:
    if target - num in hashmap:
      result = [num, target - num]

  return result

print(pairsWithSum([1, 2, 3, 4, 5], 7))
