function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0], left = [], right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  left = quickSort(left);
  right = quickSort(right);
  let sorted = left.concat(pivot, right);
  return sorted;
}