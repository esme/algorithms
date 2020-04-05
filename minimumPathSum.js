var minPathSum = function(grid) {
  let r = grid.length, c = grid[0].length;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i === 0 && j > 0) grid[i][j] += grid[i][j-1];
      else if (j === 0 && i > 0) grid[i][j] += grid[i-1][j];
      else if (i > 0 && j > 0) grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j]);
    }
  }
  
  return grid[r - 1][c - 1];
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]));