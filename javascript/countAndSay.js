
const generateSay = (input) => {
  const arr = [];
  let result = '';
  let prev = null;
  input.toString().split("").forEach(num => {
    if (prev === num) {
      const obj = arr[arr.length - 1];
      obj[num]++;
    } else {
      arr.push({
        [num]: 1
      });
    }
    prev = num;
  })

  arr.forEach(el => {
    const key = Object.keys(el)[0];
    const item = el[key];
    result += item;
    result += key;
  })

  return Number(result);
}

console.log(generateSay(1));
console.log(generateSay(11));
console.log(generateSay(21));
console.log(generateSay(1211));
console.log(generateSay(111221));
console.log(generateSay(312211));
