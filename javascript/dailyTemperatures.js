/*
Given a list of daily temperatures T,
return a list such that, for each day in the input,
tells you how many days you would have to wait until a warmer temperature.
If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

I: array list of temperatures
O: array days till warmer tempature
C: NA
E: []
*/

var dailyTemperatures = function(temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];
  for(let i=0; i<temperatures.length; i++){
    while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
      let j = stack.pop();
      res[j] = i-j;
    }
    stack.push(i);
  }
  return res;
};

const a = [1, 2, 3, 4, 5]; // => [1, 1, 1, 1, 0]
const b = [5, 4, 3, 2, 1]; // => [0, 0, 0, 0, 0]
const c = [73, 74, 75, 71, 69, 72, 76, 73] // => [1, 1, 4, 2, 1, 1, 0, 0]
const d = [3, 4, 5, 1, 9]; // => [1, 1, 2, 1, 0]
const e = [];

console.log(dailyTemperatures(c));
