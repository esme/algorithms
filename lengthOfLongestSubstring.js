var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  let set = {};
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (set[s[i]]) {
      const size = Object.keys(set).length;
      max = Math.max(size, max);
      i = set[s[i]] + 1;
      set = {};
    } else {
      set[s[i]] = i;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('dvdf'));