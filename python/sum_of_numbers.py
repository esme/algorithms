def sum_of_numbers(numbers):
  if len(numbers) == 1:
    return numbers[0]
  
  return numbers[0] + sum_of_numbers(numbers[1:])

print(sum_of_numbers([1,2,3]))
print(sum_of_numbers([1,2]))
