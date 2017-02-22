// Problem
// Given a list of account ID numbers (integers) which contains duplicates , find the one unique integer. (the list is guaranteed to only have one unique (non-duplicated) integer
// Requirements
// Do not use built-in Python functions or methods


const find_unique = (array) => {
  const seen_numbers = {}

  array.forEach((number) => {
    if (seen_numbers[number]) {
      seen_numbers[number]++
    } else {
      seen_numbers[number] = 1
    }
  })

  return Number(Object.keys(seen_numbers).filter((key) => seen_numbers[key] === 1)[0])
}


const numbers = [5,1,2,1,2,6,7,2,6,7]
console.log(find_unique(numbers)) // 5
