// Implement Quick Sort

const quick_sort = (array, first = 0, last = array.length - 1) => {
  if (first < last) {
  const split_point = partition(array, first, last)

  quick_sort(array, first, split_point - 1)
  quick_sort(array, split_point + 1, last)
  }
}

const partition = (array, first, last) => {
  const pivot_value = array[first]

  let left_mark = first + 1
  let right_mark = last
  let done = false

  while (!done) {

    while (left_mark <= right_mark && array[left_mark] <= pivot_value) {
      left_mark++
    }

    while (right_mark >= left_mark && array[right_mark] >= pivot_value) {
      right_mark--
    }

    if (right_mark < left_mark) {
      done = true
    } else {
      let temp = array[left_mark]
      array[left_mark] = array[right_mark]
      array[right_mark] = temp
    }

    let temp = array[first]
    array[first] = array[right_mark]
    array[right_mark] = temp

  }

  return right_mark
}

const arr = [5,6,2,1,4,8]
quick_sort(arr)
console.log(arr)
