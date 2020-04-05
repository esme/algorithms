var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (Number.isInteger(map[diff])) {
      return [map[diff], i];
    }
    map[num] = i;
  }
};

console.log(twoSum([2,7,11,15], 9));