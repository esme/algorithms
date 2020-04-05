class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1,v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1,v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
  }
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs (vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    })(start);

    return result;
  }

  /* DFS Iterative
  
    let S be a stack
    S.push(start)
    label start as visited
    while S is not empty
      vertex = S.pop()
      for each of vertex's neighbors
        if N has not been discovered
          label N as visited
          S.push(N)
   */
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    visited[start] = true;

    while(stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    visited[start] = true;

    while(queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g);
console.log(g.depthFirstIterative("A"));