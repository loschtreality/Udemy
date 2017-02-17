// Implement Merge Sort

const merge_sort = (array) => {
  if (array.length <= 1) return array

  const mid_point = Math.trunc(array.length / 2)

  const left = merge_sort(array.slice(0, mid_point))
  const right = merge_sort(array.slice(mid_point))

  return merge(left, right)
}

const merge = (left, right) => {
  const merged_array = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged_array.push(left.shift())
    } else if (left[0] === right[0]) {
      merged_array.push(left.shift())
    } else {
      merged_array.push(right.shift())
    }
  }

  return merged_array.concat(left, right)
}

console.log(merge_sort([6,4,1,2,4,6,2,10])) // [ 1, 2, 2, 4, 4, 6, 6, 10 ]
