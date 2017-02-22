# Problem
# Given a list of integers, find the largest product you could make from 3 integers in the list
# Requirements
# You can assume that the list will always have at least 3 integers
# Paper/pencil only, don't code this out until you've solved it as far as you can by hand.

def largest_three(array)
  array.sort!

  largest = array.last + array[array.size - 2] + array[array.size - 3]
  smallest = array.first + array[1] + array.last

  [largest, smallest].max

end


p largest_three([5,4,1,7,9,3])
p largest_three([9,7,-10,-12,15])
