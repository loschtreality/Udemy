// Given two strings, check to see if they are anagrams. An anagram is when the two strings can be written using the exact same letters (so you can just rearrange the letters to get a different phrase or word).
// For example:
// "public relations" is an anagram of "crap built on lies."
//
// "clint eastwood" is an anagram of "old west action"
//
// Note: Ignore spaces and capitalization. So "d go" is an anagram of "God" and "dog" and "o d g".

const anagram_check = (init_string, test_string) => {
  init_string = init_string.split(" ").map((item) => { item.toLowerCase()}).join("")
  test_string = init_string.split(" ").map((item) => { item.toLowerCase()}).join("")

  if (init_string.length !== test_string.length) return false

  let init_or = 0
  let test_or = 0

  for (let i = 0; i < init_string.length; i++) {
    init_or ^= init_string[i].charCodeAt(0)
    test_or ^= test_string[i].charCodeAt(0)
  }

  return init_or === test_or
}


console.log(anagram_check('go go go','gggooo') === true)
console.log(anagram_check('abc','cba') === true)
console.log(anagram_check('hi man','hi     man') === true)
console.log(anagram_check('aabbcc','aabbc') === false)
console.log(anagram_check('123','1 2') === false)
