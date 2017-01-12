require 'set'

# Problem
# Given an integer array, output all the unique pairs that sum up to a specific value k.
# So the input:
# pair_sum([1,3,2,2],4)

# would return 2 pairs:
#  (1,3)
#  (2,2)

# NOTE: FOR TESTING PURPOSES CHANGE YOUR FUNCTION SO IT OUTPUTS THE NUMBER OF PAIRS

def pair_sum(array, target)

  return nil if array.size < 2

  seen = Set.new()
  output = []

  array.each do |num|
    diff = target - num

    unless seen.include?(diff)
      seen.add(num)
    else
      output.push([ [num,diff].min, [num,diff].max ])
    end
  end

  output.size
end

p (pair_sum([1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1],10) == 6)
p (pair_sum([1,2,3,1],3) == 1)
p (pair_sum([1,3,2,2],4) == 2)
