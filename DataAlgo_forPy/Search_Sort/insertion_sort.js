// Implement insertion sort

const insertion_sort = (array) => {

  for (var i = 1; i < array.length; i++) {
    let current_value = array[i]
    let position = i

    while (position > 0 && array[position - 1] > current_value) {
      array[position] = array[position - 1]
      position--
    }
    array[position] = current_value
  }

  return array
}

console.log(insertion_sort([5,4,3,2,1])) // [1,2,3,4,5]
