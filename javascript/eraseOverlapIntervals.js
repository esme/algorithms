/*
I: intervals
O: minimum number of intervals to make them non-overlapping
C:
E: intervals.length === 0
*/
const eraseOverlapIntervals = (intervals) => {
  // sort by end time
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0];
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (curr[0] < prev[1]) {
      count++;
    } else {
      prev = curr;
    }
  }
  return count;
}

const a = [[1,2], [2,3], [4,5]] // => 0
const b = [[1,2], [1,2], [1,2]] // => 2
const c = [[2,5], [1,2], [2,3]] // => 1
const d = [] // => 0;
console.log(eraseOverlapIntervals(a));
console.log(eraseOverlapIntervals(b));
console.log(eraseOverlapIntervals(c));
console.log(eraseOverlapIntervals(d));