def tripleStep(n):
  memo = [-1] * (n + 1)
  memo[0] = 1
  memo[1] = 1
  
  return countWays(n, memo)
  
def countWays(n, memo):
  if n < 0:
    return 0
  if n == 0:
    return 1
  if memo[n] > -1:
    return memo[n]
  memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo)
  return memo[n]

print(tripleStep(4))