// Given a string, determine if it is compreised of all unique characters.
// For example, the string 'abcde' has all unique characters and should return True.
// The string 'aabcde' contains duplicate characters and should return false.


const unique_chars = (string) => {
  const char_set = new Set()

  for (var i = 0; i < string.length; i++) {
    if (!char_set.has(string[i])) {
      char_set.add(string[i])
    } else {
      return false
    }
  }

  return true
}

console.log(unique_chars('abcde')) // true
console.log(unique_chars('aabcde')) // false
console.log(unique_chars('abcdefa')) // false
