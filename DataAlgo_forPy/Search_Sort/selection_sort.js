// Implement selection sort

const selection_sort = (array) => {
  let reference_index = 0

  while (reference_index < array.length - 1) {
    let minimum = array[reference_index]
    let minimum_index = reference_index

    for (var i = reference_index; i < array.length; i++) {
      if (array[i] < minimum) {
        minimum = array[i]
        minimum_index = i
      }
    }

    if (minimum_index !== reference_index) {
      let temp = array[reference_index]
      array[reference_index] = array[minimum_index]
      array[minimum_index] = temp
    }

    reference_index++
  }

  return array
}

console.log(selection_sort([5,4,3,2,1])) // [1,2,3,4,5]
