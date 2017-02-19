// Problem
// You've been given a list of historical stock prices for a single day for Amazon stock. The index of the list represents the timestamp, so the element at index of 0 is the initial price of the stock, the element at index 1 is the next recorded price of the stock for that day, etc. Your task is to write a function that will return the maximum profit possible from the purchase and sale of a single share of Amazon stock on that day. Keep in mind to try to make this as efficient as possible.

// For example, if you were given the list of stock prices:
// prices = [12,11,15,3,10]

// Then your function would return the maximum possible profit, which would be 7 (buying at 3 and selling at 10).

// Requirements

// Try to solve this problem with paper/pencil first without using an IDE. Also keep in mind you should be able to come up with a better solution than just brute forcing every possible sale combination
// Also you can't "short" a stock, you must buy before you sell the stock.

// --------- -------------- ----------------- --------------------

// Clarifying questions:

// 1. If a negative value is the maximum profit, should I return that number or 0
// 2. Will I have to account for any missing data


// Constraints:

// Best time / space complexity
// must buy before selling

// Ideas

// 1. Check current value against remaining values, return greatest profit
  // Time: o(n log n), Space: o(1)

// 2. keep a running minimum & maximum. Afer checking each value, return the max - min difference
  // Time: o(n), Space: o(1)


// Test:

// [12,11,15,3,10] -> 7
// [1,2,3,4,5] -> 4
// [5,4,3,2,1] -> -1

// Code:

const stock_profit = (stocks) => {
  let minimum = stocks[0]
  let profit = stocks[1] - stocks[0]

  for (var price = 1; price < stocks.length; price++) {
    const current_price = stocks[price]
    const current_profit = current_price - minimum

    minimum = Math.min(minimum, current_price)

    profit = Math.max(profit, current_profit)
  }

  return profit
}

console.log(stock_profit([12,11,15,3,10])) // -> 7
console.log(stock_profit([1,2,3,4,5])) // -> 4
console.log(stock_profit([5,4,3,2,1])) // -> -1
