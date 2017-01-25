# This assignment is a variety of small problems to begin you getting used to the idea of recursion.
# They are not full-blown interview questions, but do serve as a great start for getting your mind "in the zone" for recursion problems.
#
#
# CHALLENGE 1:
#
# Write a recursive function which takes an integer and computes the cumulative sum of 0 to that integer
# For example, if n=4 , return 4+3+2+1+0, which is 10.
#
# This problem is very similar to the factorial problem presented during the introduction to recursion.
# Remember, always think of what the base case will look like.
#
# In this case, we have a base case of n =0 (Note, you could have also designed the cut off to be 1).
# In this case, we have: n + (n-1) + (n-2) + .... + 0
#

def rec_sum(num)
  return num if num <= 1
  num + rec_sum(num - 1)
end


p (rec_sum(4)) # --> 10
#
# CHALLENGE 2:
#
# Given an integer, create a function which returns the sum of all the individual digits in that integer.
#
# For example: if n = 4321, return 4+3+2+1
#
# Hints:
# 1. You'll neeed to use modulo --> 4321 % 10 = 1
# 1. You'll neeed to use division --> 4321 / 10 = 432



def sum_func(num)
  return num if num <= 1

  divided = num / 10
  moded = num % 10

  moded + sum_func(divided)
end

p sum_func(4321) # 10
p sum_func(1337) # 14

#
# CHALLENGE 3:
#
# Note, this is a more advanced problem than the previous two! It aso has a lot of variation possibilities and we're ignoring strict requirements here.
# Create a function called word_split() which takes in a string phrase and a set list_of_words.
# The function will then determine if it is possible to split the string in a way in which words can be made from the list of words.
# You can assume the phrase will only contain words found in the dictionary if it is completely splittable.
#
# For example:
#
# word_split('themanran',['the','ran','man']) --> ['the', 'man', 'ran']
#
# word_split('ilovedogsJohn',['i','am','a','dogs','lover','love','John']) --> ['i', 'love', 'dogs', 'John']
#
# word_split('themanran',['clown','ran','man']) --> []

def word_split(phrase, dictionary = [], output = nil)
  # Must not default output to [] or the output will be overwritten every call

  output = [] if output.nil?
  return output if phrase.empty?

  dictionary.each do |word|

    if phrase.start_with?(word)
      output << word
      word_split(phrase.slice(word.length..-1), dictionary, output)
    end

  end

  return output
end

p word_split('themanran',['the','ran','man']) # --> ['the', 'man', 'ran']

p word_split('ilovedogsJohn',['i','am','a','dogs','lover','love','John']) # --> ['i', 'love', 'dogs', 'John']

p word_split('themanran',['clown','ran','man']) # --> []
