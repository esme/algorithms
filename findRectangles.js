/*
We have one 2D array, filled with zeros and ones. We have to find the starting point and ending point of all rectangles filled with 0. It is given that rectangles are separated and do not touch each other however they can touch the boundary of the array.A rectangle might contain only one element.

input = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ]


Output:
[
  [2, 3, 3, 5], [3, 1, 5, 1], [5, 3, 6, 5]
]

Explanation:
We have three rectangles here, starting from 
(2, 3), (3, 1), (5, 3)

Input = [
            [1, 0, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 0]
        ]


Output:
[
  [0, 1, 0, 1], [1, 2, 1, 2], [2, 3, 3, 5], 
  [3, 1, 4, 1], [5, 3, 5, 6], [7, 2, 7, 2], 
  [7, 6, 7, 6]
]

*/

const findRectangles = (input) => {
  const output = [];

  const checkIfZero = (row, col) => {
    if (row > input.length - 1) return false;
    if (col > input[0].length - 1) return false;
    if (input[row][col] === 0) return true;
    return false;
  }

  const recurse = (row, col) => {
    input[row][col] = 2; 
    // if right is 0 && down is not 0, recurse to the right
    if (checkIfZero(row, col + 1) && !checkIfZero(row + 1, col)) {
      return recurse(row, col + 1);
    }
    // if down is 0 && right is not 0, recurse down
    else if (checkIfZero(row + 1, col) && !checkIfZero(row, col + 1)) {
      return recurse(row + 1, col);
    }
    // if right and down are 0, recurse both down and right
    else if (checkIfZero(row + 1, col) && checkIfZero(row, col + 1)) {
      const x = recurse(row + 1, col);
      const y = recurse(row, col + 1);
      return x;
    }
    // else, return coordinates
    else {
      return [row, col];
    }
  }
  
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === 0) {
        const start = [i, j];
        const end = recurse(i, j);
        output.push(start.concat(end));
      }
    }
  }
  return output;
};

const input = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ]
        
const output = [
  [2, 3, 3, 5], [3, 1, 5, 1], [5, 3, 6, 5]
]

const a = [
[0,0],
[0,0]
] // => [0, 0, 1, 1]

const c = [];
console.log(findRectangles(input));
