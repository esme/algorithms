const coinSum = (coins, amount) => {
  const dp = Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      if (dp[i - coin] !== Number.MAX_VALUE) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

const input = [1, 2, 5];
const amount = 3;
console.log(coinSum(input, amount));