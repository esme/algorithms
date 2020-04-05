/*
    Question2 Suppose you're given a binary tree represented as an array. 
    For example, [3,6,2,9-1,10] represents the following binary tree (where -1 is a non-existent node): 3 6 2 10 9
    Write a function that determines whether the left or right branch of the tree is larger.
    The size of each branch is the sum of the node values.
    The function should retun the string "Right" if the right side is larger and "Left" if the left side is larger.
    If the tree has 0 nodes or if the size of the branches are equal, return the empty string.
    Example Input: 13,6,2,9,-1,101 Example Output: Left
*/

const solution = (arr) => {
  if (arr.length === 0) {
      return '';
  }
  
  let direction = ['root'];
  let left = 0;
  let right = 0;
  
  const height = Math.floor(Math.log2(arr.length)) + 1;

  for (let i = 1; i < height; i++) {
      for (let j = 0; j < 2 ** i; j++) {
          if (j < 2 ** i / 2) {
              direction.push('left');   
          } else {
              direction.push('right');
          }
      }
  }

  for (let k = 0; k < arr.length; k++) {
      if(direction[k] === 'left') {
          left += arr[k];
      } else {
          right += arr[k];
      }
  }

  console.log(left, right);

  if (left > right) {
      return 'Left'
  }

  if (right < left) {
      return 'Right'
  }

  if (right === left) {
      return '';
  }
};

solution([3,6,2,9,-1,10]);
