/* Given a collection of intervals, merge all overlapping intervals. */
// const mergeIntervals = (intervals) => {
//   if (!intervals.length) return intervals;
  
//   // sort by start time
//   intervals.sort((a, b) => a[0] - b[0]);

//   let prev = intervals[0];
//   const result = [prev];

//   for (let curr of intervals) {
//     if (curr[0] <= prev[1]) {
//       prev[1] = Math.max(curr[1], prev[1]);
//     } else {
//       result.push(curr);
//       prev = curr;
//     }
//   }
//   return result;
// }

const a = [[1, 4], [4, 5], [6, 7]] // => [[1, 5], [6, 7]]
const b = [[1, 3], [4, 5]] // => [[1, 3], [4, 5]]
const c = [[6, 7], [1, 6]] // => [1, 7]
const d = [];

console.log(mergeIntervals(a));
console.log(mergeIntervals(b));
console.log(mergeIntervals(c));
console.log(mergeIntervals(d));
