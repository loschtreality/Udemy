const sequential_search = (array, target) => {

  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true
    }
  }

  return false
}

const ordered_sequential_search = (array, target) => {

  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true
    } else if (array[i] > target) {
      return false
    }
  }

  return false
}

console.log(sequential_search([6,7,2,8,1,0,5], 1))
console.log(sequential_search([1,2,3,4,5,6,7], 5))
