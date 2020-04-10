class Solution(object):
    def twoSum(self, nums, target):
        seen = {}
        for i, num in enumerate(nums):
            remaining = target - num
            if remaining in seen:
                return [seen[remaining], i]
            seen[num] = i
        return []

sol = Solution()
print(sol.twoSum([], 9))
print(sol.twoSum([1, 2, 3], 5))
print(sol.twoSum([2,7,11,15], 9))
