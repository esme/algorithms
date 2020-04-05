/* Given an integer array nums,
find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

I: integer array nums
O: sum of contiguous subarray with largest sum
C: 
E: subarray.length === 0

*/

const maxSubArray = (arr) => {
  if (!arr.length) return 0;
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
  }
  return Math.max(...arr);
};

const a = [-2,1,-3,4,-1,2,1,-5,4] // => 6
const b = [1, 5, -3, -10] // => 6
const c = [];
// store max of current num and continuous sum
// [1, 6, 3, -7]

console.log(maxSubArray(a));
console.log(maxSubArray(b));
console.log(maxSubArray(c));