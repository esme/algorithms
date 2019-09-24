const canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let curr of intervals) {
    if (prev === curr) continue;
    if(isOverlap(prev, curr)) return false;
    prev = curr;
  }
  return true;
};

const isOverlap = (a, b) => {
  return b[0] < a[1];
};

console.log(canAttendMeetings([[5,10], [2,6]]));