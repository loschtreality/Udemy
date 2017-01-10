// Given an integer array, output all the unique pairs that sum up to a specific value k.
// So the input:
// pair_sum([1,3,2,2],4)

// would return 2 pairs:
//  (1,3)
//  (2,2)

// NOTE: FOR TESTING PURPOSES CHANGE YOUR FUNCTION SO IT OUTPUTS THE NUMBER OF PAIRS


const pair_sum = (array, target) => {
  array = array.sort((a,b) => a - b)

  const pairs = []
  const pair_set = new Set()

  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j]
      let pair_string = `${array[i]},${array[j]}`
      if (sum === target && !pair_set.has(pair_string)) {
        pair_set.add(pair_string)
        pairs.push([array[i], array[j]])
      }
    }
  }
  
  return pairs
}

console.log(pair_sum([1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1],10).length === 6)
console.log(pair_sum([1,2,3,1],3).length === 1)
console.log(pair_sum([1,3,2,2],4).length === 2)
