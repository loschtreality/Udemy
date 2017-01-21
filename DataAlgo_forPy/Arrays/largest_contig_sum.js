// Given an array of integers (positive and negative) find the largest continuous sum.


const large_cont_sum = (array) => {
  let max = array[1]
  let cont_sum = 0
  let running_total = 0

  array.forEach((num) => {
    let sum = num + cont_sum
    running_total += num
    if (sum > max) {
      cont_sum += num
      max = cont_sum
    } else {
      cont_sum = num
    }

    if (running_total > max) {
      max = running_total
    }
  })

  return max
}


console.log(large_cont_sum([1,2,-1,3,4,-1]) === 9)
console.log(large_cont_sum([1,2,-1,3,4,10,10,-10,-1]) === 29)
console.log(large_cont_sum([-1,1]) === 1 )
