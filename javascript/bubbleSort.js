function bubbleSort(arr) {
  const len = arr.length;
  let swap = true;
  for (var i = len; i > 0 && swap; i--) {
    console.log('test');
    swap = false;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([4,5,6,7,2,4,6,1]));
console.log(bubbleSort([1,2,3]));
