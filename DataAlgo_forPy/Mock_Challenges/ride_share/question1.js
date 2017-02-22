// Problem
// Given a list of integers, find the largest product you could make from 3 integers in the list
// Requirements
// You can assume that the list will always have at least 3 integers
// Paper/pencil only, don't code this out until you've solved it as far as you can by hand.

const largest_three = (array) => {
  const sorted = array.sort((a,b) => a > b ? 1 : -1)
  const last = array.length - 1
  const high = sorted[last] + sorted[last - 1] + sorted[last - 2]
  const low = sorted[0] + sorted[1] + sorted[last]

  return Math.max(high, low)
}

console.log(largest_three([5,4,1,7,9,3]))
console.log(largest_three([9,7,-10,-12,15]))
