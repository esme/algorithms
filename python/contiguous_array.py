class Solution(object):
    def findMaxLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in range(len(nums)):
          if nums[i] == 0:
            nums[i] = -1

        sum_to_index = {0: -1}
        total = 0
        maximum = 0

        for i in range(len(nums)):
          total += nums[i]
          if sum_to_index.get(total):
            maximum = max(maximum, i - sum_to_index[total])
          else:
            sum_to_index[total] = i
        
        print(sum_to_index)
        return maximum

sol = Solution()
print(sol.findMaxLength([1,1,1,1,1]))
print(sol.findMaxLength([0,1]))
print(sol.findMaxLength([0,1,0]))
print(sol.findMaxLength([1,1,0,1,0,1]))
print(sol.findMaxLength([1,0,1,0,1,1,1,1]))
