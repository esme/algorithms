var isAnagram = function(s, t) {
  const alphabet = [];
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i)
    alphabet[code] = alphabet[code] ? alphabet[code] + 1 : 0;
  };
  for (let i = 0; i < t.length; i++) {
    const code = s.charCodeAt(i)
    alphabet[code] = alphabet[code] ? alphabet[code] + 1 : 0;
  };
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i]) return false;
  }
  return true;
};

console.log(isAnagram('ana', 'naa'));