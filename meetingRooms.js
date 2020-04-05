const canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let curr of intervals) {
    if (prev === curr) continue;
    if(prev[0] < curr[1]) return false;
    prev = curr;
  }
  return true;
};

console.log(canAttendMeetings([[5,10], [2,6]]));