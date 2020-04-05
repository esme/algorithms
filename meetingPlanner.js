/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

/*
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.
*/

function getOverlap(itemA, itemB) {
  const start = Math.max(itemB[0], itemA[0]);
  const end = Math.min(itemB[1], itemA[1]);

  return end <= start ? null : [start, end];
}

function meeting_planner(slotsA, slotsB, dur) {
  let idxA = 0;
  let idxB = 0;
  
  while(idxA < slotsA.length && idxB < slotsB.length) {
      let itemA = slotsA[idxA];
      let itemB = slotsB[idxB];

      const overlap = getOverlap(itemA, itemB);
      if (overlap && overlap[1] - overlap[0] >= dur) {
          return [overlap[0], overlap[0] + dur];
      }
      
      if (itemA[1] < itemB[1]) {
          idxA++;
      } else {
          idxB++; 
      }  
  }
 
  return [];
}

console.log(meeting_planner([[7,12]], [[2,11]], 5)); // => []
console.log(meeting_planner([[6,12]], [[2,11]], 5)); // => [6, 11]
console.log(meeting_planner([[1,10]], [[2,3],[5,7]], 2)); // =>
console.log(meeting_planner([[0,5],[50,70],[120,125]], [[0,50]], 8));
console.log(meeting_planner([[10,50],[60,120],[140,210]], [[0,15],[60,70]], 8));
console.log(meeting_planner([[10,50],[60,120],[140,210]], [[0,15],[60,72]], 12));
