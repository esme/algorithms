# sumA + b - a = sumB + a - b
# sumA - sumB = 2(a - b)
# a - b = (sumA - sumB) / 2

def sumSwap(arrA, arrB):
  setB = set(arrB)
  for a in arrA:
    b = a - (sum(arrA) - sum(arrB)) / 2
    if b in setB:
      return [a, b]
  return None

print(sumSwap([3], [1,2]))
print(sumSwap([2], [1,3]))