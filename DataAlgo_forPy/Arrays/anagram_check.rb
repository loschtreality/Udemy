# Given two strings, check to see if they are anagrams. An anagram is when the two strings can be written using the exact same letters (so you can just rearrange the letters to get a different phrase or word).
# For example:
# "public relations" is an anagram of "crap built on lies."
#
# "clint eastwood" is an anagram of "old west action"
#
# Note: Ignore spaces and capitalization. So "d go" is an anagram of "God" and "dog" and "o d g".

def anagram_check(init_string, test_string)
  init_string = init_string.split(" ").map(&:downcase).join("")
  test_string = init_string.split(" ").map(&:downcase).join("")

  return false unless init_string.size == test_string.size

  init_or = 0
  test_or = 0

  (init_string.size).times do |i|
    init_or ^= init_string[i].ord
    test_or ^= test_string[i].ord
  end

  init_or == test_or
end

p (anagram_check('go go go','gggooo') === true)
p (anagram_check('abc','cba') === true)
p (anagram_check('hi man','hi     man') === true)
p (anagram_check('aabbcc','aabbc') === false)
p (anagram_check('123','1 2') === false)
