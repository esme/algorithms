function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0], left = [], right = [];
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    if (el < pivot) left.push(el);
    else right.push(el);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([4,5,6,7,2,4,6,1]));