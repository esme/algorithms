var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length, n = nums2.length, l = 0, r = m;
  if (m > n) return findMedianSortedArrays(nums2, nums1);
  
  while (l <= r) {
    let i = Math.floor((l + r) / 2), j = Math.floor((m + n + 1) / 2) - i;
    
    let nums1iMinusOne = i === 0 ? -Infinity : nums1[i - 1];
    let nums2jMinusOne = j === 0 ? -Infinity : nums2[j - 1];
    let nums1i = i === m ? Infinity : nums1[i];
    let nums2j = j === n ? Infinity : nums2[j];

    if (nums1iMinusOne > nums2j) {
      r = i - 1;
    } else if (nums2jMinusOne > nums1i) {
      l = i + 1;
    } else {
      let max_left = Math.max(nums1iMinusOne, nums2jMinusOne);
      let min_right = Math.min(nums1i, nums2j);

      console.log(i - 1, j - 1, max_left);
      console.log(i, j, min_right);

      if ((m + n) % 2 == 0) {
        return (max_left + min_right) / 2;
      } else {
        return max_left;
      }
    }
  }

  return -1;
};

console.log(findMedianSortedArrays([3],[-2,-1]));