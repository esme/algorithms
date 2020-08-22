from collections import defaultdict

class Solution(object):
    def canFinish(self, n, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
        g = [[] for i in range(n)]
        degree = [0] * n

        for course, prereq in prerequisites:
          g[prereq].append(course)
          degree[course] += 1

        bfs = [i for i in range(n) if degree[i] == 0]

        for i in bfs:
          for j in g[i]:
            degree[j] -= 1
            if degree[j] == 0:
              bfs.append(j)
        
        return len(bfs) == n

s = Solution()
print(s.canFinish(2, [[1,0]]))
print(s.canFinish(2, [[1,0],[0,1]]))