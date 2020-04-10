class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        
        return False

sol = Solution()
print(sol.containsDuplicate([1, 1, 2]))
print(sol.containsDuplicate([1, 2]))