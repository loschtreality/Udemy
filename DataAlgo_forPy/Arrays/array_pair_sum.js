// Given an integer array, output all the unique pairs that sum up to a specific value k.
// So the input:
// pair_sum([1,3,2,2],4)

// would return 2 pairs:
//  (1,3)
//  (2,2)

// NOTE: FOR TESTING PURPOSES CHANGE YOUR FUNCTION SO IT OUTPUTS THE NUMBER OF PAIRS


const pair_sum = (array, target) => {

  if (array.length < 2) return null

  const seen = new Set()
  const output = []

  array.forEach((num) => {
    let difference = target - num

    if (!seen.has(difference)) {
      seen.add(num)
    } else {
      output.push( [Math.min(num, difference), Math.min(num, difference)] )
    }
  })

  return output.length
}

console.log(pair_sum([1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1],10) === 6)
console.log(pair_sum([1,2,3,1],3) === 1)
console.log(pair_sum([1,3,2,2],4) === 2)
