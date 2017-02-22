// Problem
// Write a function that given a target amount of money and a list of possible coin denominations, returns the number of ways to make change for the target amount using the coin denominations
// Requirements
// Write out your work on paper/pencil, then see if you can code up your solution


const coin_change = (coins, target) => {
  const arr = [1] + [0] * coins

  for (var i = 0; i < coins.length; i++) {
    const coin = coins[i]

    for (var j = coin; j < coin + target; j++) {
      arr[i] += arr[j - coin]
    }
  }

  if (target === 0) {
    return 0
  } else {
    return arr[target]
  }
}

console.log(coin_change([1,5,10], 10))
