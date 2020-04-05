// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

var maxArea = function(height) {
  let area = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    const lower = Math.min(height[start], height[end]);
    const currArea = (end - start) * lower;
    area = Math.max(currArea, area);
    if (height[start] <= height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return area;
};

console.log(maxArea([1,4,3,2]));