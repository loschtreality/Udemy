// Problem
// Given a list of integers and a target number, write a function that returns a boolean indicating if its possible to sum two integers from the list to reach the target number
// Requirements
// Try pen/paper before coding out your solution
// You can not use an integer element twice. Optimize for time over space


const two_sum = (array, target_sum) => {
  const seen_numbers = new Set()
  let two_numbers_sum = false

  array.forEach((number) => {
    const diff = target_sum - number

    if (seen_numbers.has(number)) {
      two_numbers_sum = true
    } else {
      seen_numbers.add(diff)
    }
  })

  return two_numbers_sum
}


const arr = [1,2,3,4,5,6]
const target = 10

console.log(two_sum(arr, target))
