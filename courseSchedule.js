const canFinish = function(numCourses, prerequisites) {
  const dependencies = new Array(numCourses);
  const addDependencies = (course, dependency) => {
    if (!dependencies[course]) {
      dependencies[course] = {};
    }

    if (!dependencies[course][dependency]) {
      dependencies[course][dependency] = true;
      if (dependencies[dependency]) {
        const arr = Object.keys(dependencies[dependency]);
        for (let el of arr) {
          addDependencies(course, el);
        }
      }
    }
    return;
  }
  
  for (let prereq of prerequisites) {
    addDependencies(prereq[0], prereq[1]);
  }

  return dependencies;
};

console.log(canFinish(2, [[1, 0], [0, 1]]));
