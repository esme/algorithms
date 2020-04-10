class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        curr = 0
        last_non_zero = 0

        while (curr < len(nums)):
            if (nums[curr] != 0):
                nums[curr], nums[last_non_zero] = nums[last_non_zero], nums[curr]
                last_non_zero += 1
            curr += 1
        return nums
        

sol = Solution()
print(sol.moveZeroes([1,0,0,1]))
print(sol.moveZeroes([1,0,1]))
print(sol.moveZeroes([0,1,0,3,12]))