// Consider an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.
// Here is an example input, the first array is shuffled and the number 5 is removed to construct the second array.
// Input:
// finder([1,2,3,4,5,6,7],[3,7,2,1,4,6])

// Output:
// 5 is the missing number


const finder = (first_array, second_array) => {
  if (first_array.length === second_array.length) {
    return "No missing elements"
  }

  let xOr = 0

  first_array.forEach((num) => xOr ^= num)

  second_array.forEach((num) => xOr ^= num)

  return xOr
}

console.log(finder([1,2,3,4,5,6,7],[3,7,2,1,4,6]) === 5)
console.log(finder([5,5,7,7],[5,7,7]) === 5)
console.log(finder([1,2,3,4,5,6,7],[3,7,2,1,4,6]) === 5)
console.log(finder([9,8,7,6,5,4,3,2,1],[9,8,7,5,4,3,2,1]) === 6)
