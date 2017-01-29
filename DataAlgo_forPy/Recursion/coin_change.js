// Note: This problem has multiple solutions and is a classic problem in showing issues with basic recursion.
// If you are having trouble with this problem (or it seems to be taking a long time to run in some cases)
// check out the Solution Notebook and fully read the conclusion link for a detailed description of the various ways to solve this problem!

// Given a target amount n and a list (array) of distinct coin values, what's the fewest coins needed to make the change amount.

// For example:
// If n = 10 and coins = [1,5,10]. Then there are 4 possible ways to make change:
// 1+1+1+1+1+1+1+1+1+1
// 5 + 1+1+1+1+1
// 5+5
// 10

// With 1 coin being the minimum amount.

const CACHE = {
  /*
    key: coin_value --- value: minimum number of coins needed to make change
      // EXAMPLE:

    1: 10,
    5: 2,
    10: 1

  */
}

const coin_change = (target_amount, coin_values) => {
  const min_coins = target_amount

  if (coin_values.includes(target_amount)) { return 1 }

  // Using reduce to filter values and do the loop logic in one function
    // Equivalnce: coin_values.filter(...).forEach(...)
  return coin_values.reduce((current_minimum, next_coin) => {

    // Filtered value
      if (next_coin <= target_amount) {
          const num_coins = 1 + coin_change(target_amount - next_coin, coin_values)
          if (num_coins < current_minimum) {
              current_minimum = num_coins
          }
      }

    // Must return or minimum will become undefined
      return current_minimum
  }, min_coins /* <-- Accumulator value (current_minimum) */)
}

const coin_change_dynamic = (target_amount, coin_values, known_results = {}) => {
  const min_coins = target_amount

  if (coin_values.includes(target_amount)) {
    known_results[target_amount] = 1
    return 1
  }

  else if (known_results[target_amount] > 0) {
    return known_results[target_amount]
  }

  else {
    // Using reduce to filter values and do the loop logic in one function
      // Equivalnce: coin_values.filter(...).forEach(...)
    return coin_values.reduce((current_minimum, next_coin) => {

      if (next_coin <= target_amount) {
          const num_coins = 1 + coin_change(target_amount - next_coin, coin_values, known_results)
          if (num_coins < current_minimum) {
              current_minimum = num_coins
              known_results[target_amount] = current_minimum
          }
      }

      // Must return or minimum will become undefined
      return current_minimum
    }, min_coins /* <-- Accumulator value (current_minimum) */)
  }
}

console.log(coin_change(15, [1,5,10]))
// console.log(coin_change_dynamic(55, [1,5,10]))
