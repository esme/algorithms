import collections

class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        hash = collections.defaultdict(list)
        for word in strs:
            sorted_word = ''.join(sorted(word))
            hash[sorted_word].append(word)

        return hash.values()

    def groupAnagrams2(self, strs):
        hash = collections.defaultdict(list)
        res = []
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            hash[tuple(count)].append(s)
        return hash.values()
        
sol = Solution()
print(sol.groupAnagrams2(['eat', 'ate', 'no', 'on']))
print(sol.groupAnagrams2([]))
