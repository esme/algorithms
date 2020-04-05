/* Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction
(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

I: array of stock prices
O: max profit integer
C:
E: no prices

up
[1, 2, 3] => 2
down
[3, 2, 1] => 0
up down up
[1, 3, 5, 0, 12] => 12
up down up
[1, 3, 4, 8, 5] => 7
*/

const findMaxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = Infinity;
  prices.forEach(price => {
    minPrice = Math.min(price, minPrice);
    maxProfit = Math.max(maxProfit, price - minPrice);
  })
  return maxProfit;
};

const a = [1, 2, 3];
const b = [3, 2, 1];
const c = [1, 3, 5, 0, 12];
const d = [1, 3, 4, 8, 5];
const e = [];

console.log(findMaxProfit(a));
console.log(findMaxProfit(b));
console.log(findMaxProfit(c));
console.log(findMaxProfit(d));
console.log(findMaxProfit(e));

