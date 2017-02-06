// Implement shell sort

const shell_sort = (array) => {
  let sublist_count = Math.trunc(array.length / 2)

  while (sublist_count > 0) {
    for (var start = 0; start <= sublist_count; start++) {
      gap_insertion_sort(array, start, sublist_count)
    }
    sublist_count = Math.trunc(sublist_count / 2)
  }

  return array
}

const gap_insertion_sort = (array, start, gap) => {
  for (var i = start + gap; i < array.length; i++) {
    let current_value = array[i]
    let position = i

    while (position >= gap && array[position - gap] > current_value) {
      array[position] = array[position - gap]
      position -= gap
    }
    array[position] = current_value
  }
}

console.log(shell_sort([5,4,3,2,1])) // [1,2,3,4,5]
