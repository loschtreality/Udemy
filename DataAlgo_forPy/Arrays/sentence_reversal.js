// Given a string of words, reverse all the words. For example:
// Given:
// 'This is the best'
//
// Return:
// 'best the is This'
//
// As part of this exercise you should remove all leading and trailing whitespace. So that inputs such as:
// '  space here'  and 'space here      '
//
// both become:
// 'here space'


const reversal = (sentence) => {
  return sentence.split(' ').reverse().join(' ')
}

console.log(reversal('abc'))
console.log(reversal('abc def'))
console.log(reversal('  space here'))
console.log(reversal('This is the best'))
