# Problem
# Given an integer array, output all the unique pairs that sum up to a specific value k.
# So the input:
# pair_sum([1,3,2,2],4)

# would return 2 pairs:
#  (1,3)
#  (2,2)

# NOTE: FOR TESTING PURPOSES CHANGE YOUR FUNCTION SO IT OUTPUTS THE NUMBER OF PAIRS

def pair_sum(array, target)
  pairs = []
  array.sort!

  (array.size - 1).times do |i|
    ((i + 1)...array.size).each do |j|
      sum = array[i] + array[j]
      pair = [array[i], array[j]]
      if sum == target && !pairs.include?(pair)
        pairs.push(pair)
      end
    end
  end

  pairs
end

p (pair_sum([1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1],10).size == 6)
p (pair_sum([1,2,3,1],3).size == 1)
p (pair_sum([1,3,2,2],4).size == 2)
