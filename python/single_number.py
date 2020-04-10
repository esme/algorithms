class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        a = 0
        for i in nums:
            a ^= i
        return a

sol = Solution()
print(sol.singleNumber([4, 1, 2, 1, 4]))
