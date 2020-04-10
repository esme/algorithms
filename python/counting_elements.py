class Solution(object):
    def countElements(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        res = 0;
        count = [0] * (max(arr) + 2)
        for num in arr:
          count[num] += 1

        for num in arr:
          if count[num + 1]:
            res += 1
        
        return res

sol = Solution()
print(sol.countElements([1,2,3]))
print(sol.countElements([1,1,2]))