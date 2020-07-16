class Solution(object):
    def convertToStr(self, S):
        backspaces = 0
        str = ''

        for c in reversed(S):
            if c == '#':
                backspaces += 1
            elif backspaces > 0:
                backspaces -= 1
            else:
                str = c + str
        
        return str

    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """
        return self.convertToStr(S) == self.convertToStr(T)

sol = Solution()
print(sol.backspaceCompare('he##llo#', 'llo#'))
