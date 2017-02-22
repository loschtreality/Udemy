# Problem
# Given a list of integers and a target number, write a function that returns a boolean indicating if its possible to sum two integers from the list to reach the target number
# Requirements
# Try pen/paper before coding out your solution
# You can not use an integer element twice. Optimize for time over space

require "set"

def two_sum(array, target_sum)
  seen_numbers = Set.new()

  array.each do |num|
    diff = target_sum - num

    if seen_numbers.include?(num)
      return true
    else
      seen_numbers.add(diff)
    end
  end

  false
end


arr = [1,2,3,4,5,6]
target = 10

p two_sum(arr, target)
