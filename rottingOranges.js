var orangesRotting = function(grid) {
  if(grid == null || grid.length == 0) return 0;

  let q = [];
  let res = 0;
  let fresh = 0;
  
  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (grid[i][j] === 1) {
        fresh++;
      }
      if (grid[i][j] === 2) {
        q.push([i, j]);
      }
    })
  })
  
  while(q.length) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const n = q.shift();
      const [r, c] = n;
      grid[r][c] = 3;
      bfs(r, c);
      grid[r][c] = 2;
    }
    res++;
  }
  
  function bfs(i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;

    
    if (grid[i][j] === 1) {
      fresh--;
      grid[i][j] = 2;
      q.push([i, j]);
    }

    if (grid[i][j] !== 3) {
      return;
    }

    bfs(i - 1, j)
    bfs(i + 1, j)
    bfs(i, j - 1)
    bfs(i, j + 1)
  }

  return fresh === 0 ? res - 1 : -1;
};

console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
// console.log(orangesRotting([[1,2]]));