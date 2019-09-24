var spiralOrder = function(matrix) {
  const ans = [];
  if (matrix.length === 0) {
      return ans;
  }
  let r = matrix.length;
  let c = matrix[0].length;
  let total = matrix.length * matrix[0].length;
  
  let i = 0;
  let j = 0;
  for (let count = 0; count < total; count++) {
    ans.push(matrix[i][j]);
    matrix[i][j] === null;
    // increase column
    if (matrix[i][j + 1]) {
      j++;
    }
    // increase row
    else if (matrix[i + 1][j]) {
      i++;
    }
    // decrease column
    // decrease row
  }
   console.log(ans);
   return;
};

spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]);
