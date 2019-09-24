var merge = function(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a,b) => a[0] - b[0] ? a[0] - b[0] : a[1] - b[1]);
  console.log(intervals);
  let prev = intervals[0];
  let res = [prev];
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
};

merge([[0,1],[3,3],[2,6],[2,10],[15,18]]);
