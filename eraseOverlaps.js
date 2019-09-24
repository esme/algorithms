var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0] ? a[0] - b[0] : b[1] - a[1]);
  console.log(intervals);
  
  return intervals;
};

eraseOverlapIntervals([[1,2], [1,3]]);