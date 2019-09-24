function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const sortedLeft = mergeSort(arr.slice(0, mid));
  const sortedRight = mergeSort(arr.slice(mid));
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let i = 0, j = 0, result = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
    } else {
      result.push(right[j]);
    }
  }
  let remaining = i === left.length - 1 ? right.slice(j) : left.slice(i);
  return result.concat(remaining);
}
