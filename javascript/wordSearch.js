var exist = function(board, word) {
  const recurse = (row, col, str) => {
    if (str === word) {
      return true;
    }
    
    if (str.length > word.length) {
      return false;
    }
    
    let a, b, c, d;
    
    if (row > 0) {
      a = recurse(row - 1, col, str + board[row][col]);      
    }
    if (row < board.length - 1) {
      b = recurse(row + 1, col, str + board[row][col]); 
    }
    
    if (col > 0) {
      c = recurse(row, col - 1, str + board[row][col]);      
    }
    
    if (col < board[0].length - 1) {
      d = recurse(row, col + 1, str + board[row][col]); 
    }
    
    return a || b || c || d;
  };
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (recurse(i, j, '')) {
        return true;
      };
      return false;
    }
  }
};