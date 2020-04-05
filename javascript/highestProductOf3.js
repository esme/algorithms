function highestProductOf3(arr) {
  if (arr.length < 3) {
    throw new Error('Less than 3 items!');
  }

  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);
  let highestProductOf2 = arr[0] * arr[1];
  let lowestProductOf2 = arr[0] * arr[1];
  let highestProductOf3 = arr[0] * arr[1] * arr[2];

  for (let i = 2; i < arr.length; i++) {
    const curr = arr[i];
    highestProductOf3 = Math.max(
      highestProductOf3,
      curr * highestProductOf2,
      curr * lowestProductOf2
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      curr * highest,
      curr * lowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      curr * highest,
      curr * lowest
    );

    highest = Math.max(highest, curr);

    lowest = Math.min(lowest, curr);
  }

  return highestProductOf3;
}

// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}