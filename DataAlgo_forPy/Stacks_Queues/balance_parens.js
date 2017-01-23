// Given a string of opening and closing parentheses, check whether it’s balanced. We have 3 types of parentheses: round brackets: (), square brackets: [], and curly brackets: {}.
//
// Assume that the string doesn’t contain any other character than these, no spaces words or numbers.
//
// As a reminder, balanced parentheses require every opening parenthesis to be closed in the reverse order opened. For example ‘([])’ is balanced but ‘([)]’ is not.
//
// You can assume the input string has no spaces.


const keyMap = {
  ")": "(",
  "]": "[",
  "}": "{",
}

const balance_parens = (string) => {
  const stack = []

  // eliminate edge case of starting with closed bracket
  // eliminate edge case of odd number of parens
  if (keyMap[string[0]] || string.length % 2 !== 0) { return false }

  string.split("").forEach((bracket) => {

    const lastItem = stack[stack.length - 1]
    const correspondingBrace = keyMap[bracket]

    if (!correspondingBrace) {
      stack.push(bracket)
    } else if (correspondingBrace === lastItem) {
      stack.pop()
    }

  })

  return stack.length === 0
}


console.log(balance_parens("(())")) // true
console.log(balance_parens("[{()}]")) // true
console.log(balance_parens("([)]")) // false
console.log(balance_parens("])}")) // false
