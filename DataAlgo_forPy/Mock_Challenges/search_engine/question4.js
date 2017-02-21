// Question
// Find the squareroot of a given number rounded down to the nearest integer, without using the sqrt function. For example, squareroot of a number between [9, 15] should return 3, and [16, 24] should be 4.
// Requirements
// Feel free to code this out (but its recommended that you use paper/pencil or whiteboard)

const find_sqrt = (num) => {
  if (num === 0) { return new Error('Must be larger than 0') }
  if (num === 1) { return 1 }

  let low = 0
  let high = Math.trunc((num / 2) + 1)

  while (low + 1 <= high) {
    let mid = Math.trunc(low + (high - low)/2)
    let square = Math.pow(mid, 2)

    if (square === num) {
      return mid
    } else if (square < num) {
      low = mid
    } else {
      high = mid
    }
  }

  return low
}

console.log(find_sqrt(9))
