import heapq

class Solution(object):
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
        for i in range(len(stones)):
            stones[i] *= -1

        heapq.heapify(stones)

        while len(stones) > 1:
            stone1 = -heapq.heappop(stones)
            stone2 = -heapq.heappop(stones)
            if stone1 != stone2:
                heapq.heappush(stones, -(stone1 - stone2))

        if len(stones):
            return -heapq.heappop(stones)
        return 0
        

sol = Solution()
print(sol.lastStoneWeight([]))
print(sol.lastStoneWeight([2,7,4,1,8,1]))
print(sol.lastStoneWeight([9,3,2,10]))
print(sol.lastStoneWeight([7,6,7,6,9]))
