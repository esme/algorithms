var threeSum = function(nums) {
    let solution = [];
    let obj = {};
    nums.forEach(el => {
      if (!obj[el]) {
        obj[el] = 1;
      } else {
        obj[el]++;
      }
    });

    if (Object.keys(obj).length === 1) {
      return nums;
    }

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        obj[nums[i]]--;
        obj[nums[j]]--;
        let twoSum = -nums[i] - nums[j];
        if (obj[twoSum] >= 1) {
          solution.push([nums[i], nums[j], twoSum]);
        }
        obj[nums[i]]++;
        // obj[nums[j]]++;
      }
      obj[nums[i]]--;
    }
    return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0]));