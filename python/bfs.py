from collections import defaultdict

class Graph:
  def __init__(self):
    self.graph = defaultdict(list)
    self.visited = set()
  
  def addEdge(self,u,v):
    self.graph[u].append(v)

  def dfs(self, start):
    if start in self.visited:
      print('cycle detected')
      return
    self.visited.add(start)
    print(start)
    neighbors = self.graph[start]
    for n in neighbors:
      self.dfs(n)

g = Graph()
g.addEdge(1,2)
g.addEdge(2,5)
g.addEdge(1,3)
g.addEdge(2,1)
g.dfs(1)
