# Given a string, determine if it is compreised of all unique characters.
# For example, the string 'abcde' has all unique characters and should return True.
# The string 'aabcde' contains duplicate characters and should return false.

require 'set'

def unique_chars(string)
  char_set = Set.new()

  string.each_char do |chr|
    unless char_set.include?(chr)
      char_set.add(chr)
    else
      return false
    end
  end

  true

end

p unique_chars('abcde') # true
p unique_chars('aabcde') # false
p unique_chars('abcdefa') # false
