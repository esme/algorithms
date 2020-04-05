// recursive
const binarySearch = (arr, target, left, right) => {
  left = left || 0;
  right = right || arr.length - 1;

  if (left === right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, right)
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
};

// iterative
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function assertEqual(a, b) {
  if (a === b) console.log('PASS');
  else console.log(`FAIL: ${a} != ${b}`);
}

assertEqual(binarySearch([1, 4, 5, 7, 9, 10, 11], 10), 5);
