def fib(n):
  if n == 1:
    return n
  else:
    return n * fib(n-1)

print(fib(4))
