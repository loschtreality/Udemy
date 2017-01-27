// Given a string, write a function that uses recursion to output a list of all the possible permutations of that string.

// For example, given s='abc' the function should return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

// Note: If a character is repeated, treat each occurence as distinct,
// for example an input of 'xxx' would return a list with 6 "versions" of 'xxx'

const permutations = (string) => {
  let output = []

  if (string.length === 1) {
    output = [string]
  }

    for (let i = 0; i < string.length; i++) {
      const letter = string[i]
      // Slice from the start of the string up to the current index (left)
      // Concat first slice with the remaining letters after the index (right)

      const left = string.substring(0, i)
      const right = string.substring(i + 1)
      const permString = left + right

      // Recursively create permutations
      const single_permutation = permutations(permString)

      for (let j = 0; j < single_permutation.length; j++) {
        const perm_letter = single_permutation[j]

        // Loop through permutations and concat each current letter (from outer scope)
          // with the current permutation set
        // push string combination to output

        output.push(letter + perm_letter)
      }
    }

  return output
}

console.log(permutations("abc")) // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
