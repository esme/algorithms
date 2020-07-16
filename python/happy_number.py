class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        visited = set()

        while (n not in visited):
            visited.add(n)
            temp = 0
            for letter in str(n):
                temp += int(letter) ** 2
            if temp == 1:
                return True
            n = temp

        return False

sol = Solution()
print(sol.isHappy(19))
print(sol.isHappy(2))
print(sol.isHappy(5))