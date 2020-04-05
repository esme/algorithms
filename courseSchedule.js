var canFinish = function(n, prerequisites) {
  const adj = {};
  const indegree = {};
  const bfs = [];
  
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  
  for (let pair of prerequisites) {
    const [course, prereq] = pair;
    adj[prereq].push(course);
    if (!indegree[course]) indegree[course] = 0;
    indegree[course]++;
  }
  
  console.log('adj', adj);
  console.log('indegree', indegree);
  
  for (let i = 0; i < n; i++) {
    if (!indegree[i]) bfs.push(i);
  }

  console.log('bfs', bfs);

  for (let node of bfs) {
    for (let i = 0; i < adj[node].length; i++) {
      const j = adj[node][i];
      if (--indegree[j] === 0) bfs.push(j);
      console.log('bfs', bfs);
    }
  }
  return Object.keys(bfs).length === n;
};

// const canFinish = function(numCourses, prerequisites) {
//   const dependencies = new Array(numCourses);
//   const addDependencies = (course, dependency) => {
//     if (!dependencies[course]) {
//       dependencies[course] = {};
//     }

//     if (!dependencies[course][dependency]) {
//       dependencies[course][dependency] = true;
//       if (dependencies[dependency]) {
//         const arr = Object.keys(dependencies[dependency]);
//         for (let el of arr) {
//           addDependencies(course, el);
//         }
//       }
//     }
//     return;
//   }
  
//   for (let prereq of prerequisites) {
//     addDependencies(prereq[0], prereq[1]);
//   }

//   return dependencies;
// };

console.log(canFinish(2, [[1,0]]));
console.log(canFinish(3, [[1,0],[2,1]]));

