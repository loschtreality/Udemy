# Problem

# Given a list of integers, write a function that will return a list, in which for each index the element will be the product of all the integers except for the element at that index
# For example, an input of [1,2,3,4] would return [24,12,8,6] by performing [2×3×4,1×3×4,1×2×4,1×2×3]

# Requirements

# You can not use division in your answer! Meaning you can't simply multiply all the numbers and then divide by eahc element for each index!
# Try to do this on a white board or with paper/pencil.

# Test:
  # [1,2,3,4] #--> [24,12,8,6]


# Ideas:

# 1. Loop over each number and have a second loop which multiplies the remaining numbers. If the indexes of the loops match, skip that index.
  # Time: o(n^2) Space: o(n)

# 2. Greedy algorithm caching values. Loop through the original array and set the value in the result array to the total product at that time. Then reset the total to 1 and do the same operation in reverse. Return the array
  # Time o(n) Space: o(n)


def soluiton(array)
  result = []
  total = 1

  array.each_with_index do |number, index|
    result[index] = total
    total *= number
  end

  total = 1

  array.to_enum.with_index.reverse_each do |number, index|
    result[index] *= total
    total *= number
  end

  result
end

p soluiton([1,2,3,4]) # --> [24,12,8,6]
p soluiton([4,3,2,1]) # --> [6,8,12,24]
p soluiton([2,2,2,2]) # --> [8,8,8,8]
