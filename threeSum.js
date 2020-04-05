const threeSum = arr => {
  // looking for three integers that add up to 0.
​
  // doubly nested loop, with 3 variables.arr
  arr.sort((a,b) => a - b);
  let ans = [];
  for (let i = 0; i < arr.length - 2; i++) {
      while (i > 0 && arr[i] === arr[i - 1]) i = i + 1;
​
      let j = i + 1;
      let k = arr.length - 1;
      while (j < k) {

          sum = arr[i] + arr[j] + arr[k];
          if (sum > 0) {
              k = k - 1;
          } else if (sum < 0) {
              j = j + 1;
          } else {
              ans.push([arr[i], arr[j], arr[k]]);
              while (arr[j] == arr[j+ 1]) j++;
              while (arr[k] == arr[k - 1]) k--;
              j++;
              k--;
          }
      }
  }
  return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0]));