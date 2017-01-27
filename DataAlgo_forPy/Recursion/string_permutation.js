// Given a string, write a function that uses recursion to output a list of all the possible permutations of that string.

// For example, given s='abc' the function should return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

// Note: If a character is repeated, treat each occurence as distinct,
// for example an input of 'xxx' would return a list with 6 "versions" of 'xxx'

const permutations = (string) => {
  let output = []

  if (string.length === 1) {
    output = [string]
  } else {

    for (let i = 0, letter = string[i]; i < string.length; i++) {
      // Slice from the start of the string upto the current index (left)
      // Concat first slice with the remaining letters after the index (right)
      const left = string.substring(0, i)
      const right = string.substring(i + 1)
      const permString = left + right

      // Recursively create permutations
      const single_permutation = permutations(permString)

      for (let j = 0, perm_letter = single_permutation[j]; j < single_permutation.length; j++) {
        // Loop through permutations and concat each current letter (from outer scope)
          // with the current permutation set
        // push string combination to output

        // NOTE: Must concat because our base-case returns an array
        output.push(letter + perm_letter)
      }
    }
  }

  return output
}

console.log(permutations("abc")) // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
