const binary_search = (array, target) => {
    let first = 0
    let last = array.length - 1
    let found = false

    while (first <= last && !found) {
        let mid = Math.trunc((first + last) / 2)

        if (array[mid] === target) {
            found = true
        } else if (target < array[mid]) {
            last = mid - 1
        } else {
            first = mid + 1
        }

    }

    return found
}

const recursive_bsearch = (array, target) => {
  if (array.length === 0) { return false }

  const mid = Math.trunc(array.length / 2)
  const element = array[mid]
  const left = array.slice(0, mid)
  const right = array.slice(mid + 1)

  if (element === target) {
    return true
  } else if (target < element) {
    return recursive_bsearch(left, target)
  } else {
    return recursive_bsearch(right, target)
  }

}

console.log(binary_search([1,2,3,4,5,6,7], 5))
console.log(recursive_bsearch([1,2,3,4,5,6,7], 5))
