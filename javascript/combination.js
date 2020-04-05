var combinationSum = function(candidates, target) {
  let sortedCandidates = candidates.sort();
  let result = [];

  let objCandidates = {};
  let uniqueCandidates = [];
  sortedCandidates.forEach(el => {
    if (!objCandidates[el]) {
      objCandidates[el] = true;
      uniqueCandidates.push(el);
    }
  })

  const recurse = (tempArray, sum, position) => {
    if (sum === target) {
      result.push(tempArray);
    }

    if (sum >= target) {
      return;
    }

    for (let i = position; i < uniqueCandidates.length; i++) {
      recurse(tempArray.concat(uniqueCandidates[i]), sum + uniqueCandidates[i], i);
    }
  }

  recurse([], 0, 0);
  return result;
};

console.log(combinationSum([2,3], 5));