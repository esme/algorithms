#        3
# [4,2,3,1,5], 4 => [2,3]
#        i
#  0 2 1 3 -1
# {
# 4: 0
# 2: 1
# 3: 2
# 1: 3
# 5: 4
# }

def two_sum(arr, target):
  dic = {}
  for i, num in enumerate(arr):
    dic[num] = i
  
  for i, num in enumerate(arr):
    diff = target - num
    # print(diff)
    if diff in dic and diff is not num:
      # print(diff, dic[diff]) #(1,3)
      return [dic[diff], i]


print(two_sum([4,2,3,1,5], 4 ))
