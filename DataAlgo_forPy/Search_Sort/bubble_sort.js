// Implement bubble sort

const buble_sort = (array) => {
  let notSorted = true

  while (notSorted) {
    let swapped = false
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true

        let temp = array[i + 1]
        array[i + 1] = array[i]
        array[i] = temp

      }
    }
    if (!swapped) { notSorted = false}
  }

  return array
}

console.log(buble_sort([5,4,3,2,1])) // [1,2,3,4,5]
