// Implement a Fibonnaci Sequence in three different ways:

// Recursively
// Dynamically (Using Memoization to store results)
// Iteratively

// Function Output:
// Your function will accept a number n and return the nth number of the fibonacci sequence

const recursive_fib = (number) => {
  if (number <= 2) { return 1 }

  return recursive_fib(number - 1) + recursive_fib(number - 2)
}

// console.log(recursive_fib(10)) // 55


// const iterative_fib = (number) => {
//   let fib_sum = 0
//   let prev = 0
//   let next = 1
//
//   while (number >= 0) {
//     fib_sum += next
//     prev = next
//     next = fib_sum + prev
//     number -= 2
//   }
//
//   return fib_sum
// }

const iterative_fib = (number) => {
  let fib_sum = 0
  let fib_next = 1

  for (let i = 0; i < number; i++) {
    [fib_sum, fib_next] = [fib_next, fib_sum + fib_next]
  }

  return fib_sum
}

console.log(iterative_fib(10)) // 55

const dynamic_fib = (number) => {
  const cache = {}
  let fib_sum = 0
  let prev = 0
  let next = 1

  while (number !== 0) {
    if (cache.hasOwnProperty(prev)) {
      let oldValue = prev
      prev = fib_sum
      fib_sum += cache[oldValue]
      next = fib_sum + prev
    } else {
      fib_sum += next
      prev = next
      next = fib_sum + prev
      cache[next] = next
    }

    number -= 2
  }
  return next
}

// console.log(dynamic_fib(10)) // 55
