// Question
// Given a string, write a function that uses recursion to reverse it.
// Requirements
// You MUST use pen and paper or a whiteboard to answer this, no coding allowed!

const reverse_rec = (str) => {
  if (str.length == 0) return str

  return str[str.length - 1] + reverse_rec(str.substr(0, str.length - 1))
}

const reverse_iterative = (str) => {
  let result = ""
  let index = str.length - 1

  while (index >= 0) {
    result += str[index]
    index--
  }

  return result
}

const word = "hello"
console.log(reverse_rec(word))
console.log(reverse_iterative(word))
