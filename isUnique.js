// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

const isStringUnique = (str) => {
  // create a set to store characters
  // loop through string
    // if character exists in set, return false
    // else, add character to set
  const store = new Set([]);
  for (let char of str) {
    if (store.has(char)) {
      return false;
    }
    store.add(char);
  }
  return true;
};

console.log(isStringUnique('helo'));
