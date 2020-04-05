var findMin = function(nums) {
  let left = 0, right = nums.length - 1;
  while (left !== right) {
    if (nums[left] < nums[right]) return nums[left];
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[left]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[right];
};

console.log(findMin([3,4,5,1,2]));