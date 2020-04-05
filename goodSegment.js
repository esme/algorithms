// KeepTrucking Coding Challenge

function goodSegment(badNumbers, l, r) {
  let result = 0;
  const bad = new Set();
  badNumbers.forEach(num => {
      bad.add(num);
  })
  console.log(bad);

  let count = 0;
  for (let i = l; i <= r; i++) {
      if (!bad.has(i)) {
          count++;
      } else {
          result = Math.max(count, result);
          count = 0;
      }
  }

  result = Math.max(count, result);
  return result;
}
