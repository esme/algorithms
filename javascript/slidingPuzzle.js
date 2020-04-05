function movesToSolve(board) {
  let kRows = 2;
  let kCols = 3; 
  let goal;
  let start;
  for (let i = 0; i < board.length; ++i)
    for (let j = 0; j < board[0].length; ++j) {
      start += (board[i][j] + '0');
      goal += (i * kCols + j + 1) % (kRows * kCols) + '0';
  }
  
  if (start == goal) return 0;
  
  let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  
  let visited = {start};
  let steps = 0;
  let q = [];
  q.push(start);
  while (q.length) {
    ++steps;
    let size = q.length;
    while (size-- > 0) {
      let s = q.shift();
      q.pop();
      let p = s.find('0');
      let y = p / kCols;
      let x = p % kCols;        
      for (let i = 0; i < 4; ++i) {
        let tx = x + dirs[i][0];
        let ty = y + dirs[i][1];
        if (tx < 0 || ty < 0 || tx >= kCols || ty >= kRows) continue;
        let pp = ty * kCols + tx;
        let t = s;
        [t[p], t[pp]] = [t[pp], t[p]];
        if (visited.length === t) continue;
        if (t == goal) return steps;
        visited[t] = true;
        q.push(t);
      }
    }      
  }
  return -1;
}


console.log(movesToSolve([[1,2,0],[3,4,5]]));

