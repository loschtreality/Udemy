// Given a string in the form 'AAAABBBBCCCCCDDEEEE' compress it to become 'A4B4C5D2E4'.
// For this problem, you can falsely "compress" strings of single or double letters.
// For instance, it is okay for 'AAB' to return 'A2B1' even though this technically takes more space.

// The function should also be case sensitive, so that a string 'AAAaaa' returns 'A3a3'.


const str_compress = (string) => {
  if (string.length === 0) {
    return string
  }

  let count = 0
  let curr_char = string[0]
  let result = ""

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== curr_char) {
      result += `${curr_char}${count}`
      count = 1
      curr_char = string[i]
    } else {
      count++
    }
  }

  result += `${curr_char}${count}`

  return result
}


console.log(str_compress("A"))
console.log(str_compress("ABC"))
console.log(str_compress("AaBbCc"))
console.log(str_compress("AAAABBBBCCCCCDDEEEE"))
console.log(str_compress("AAAaaa"))
console.log(str_compress("RRDD"))
console.log(str_compress(""))
