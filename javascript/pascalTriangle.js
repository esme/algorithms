var getRow = function(rowIndex) {
  let arr = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j >= 1; j--) {
      const temp = arr[j] + arr[j - 1];
      arr[j] = temp;
    }
    arr.push(1);
  }
  console.log(arr);
  return arr;
};

getRow(4);