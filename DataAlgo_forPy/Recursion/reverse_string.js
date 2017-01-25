// This interview question requires you to reverse a string using recursion.
// Make sure to think of the base case here.
// Again, make sure you use recursion to accomplish this.
// Do not slice (e.g. String.prototype.slice) or use iteration, there must be a recursive call for the function.

const reverse_string = (string, index = string.length - 1) => {
  if (index === 0) {
    return string[index]
  } else if (string.length === 0) {
    return string
  }

  return string[index] + reverse_string(string, index - 1);
}

console.log(reverse_string("hello")) // "olleh"
console.log(reverse_string("")) // ""
console.log(reverse_string("this is a sentence")) // "ecnetnes a si siht"
