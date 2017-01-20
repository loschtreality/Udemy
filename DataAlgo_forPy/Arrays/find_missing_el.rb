# Consider an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.
# Here is an example input, the first array is shuffled and the number 5 is removed to construct the second array.
# Input:
# finder([1,2,3,4,5,6,7],[3,7,2,1,4,6])

# Output:
# 5 is the missing number


def finder(first_array, second_array)
  return "No missing numbers" if first_array.size == second_array.size

  xOr = 0

  first_array.each { |num| xOr ^= num }

  second_array.each { |num| xOr ^= num }

  xOr
end

p (finder([1,2,3,4,5,6,7],[3,7,2,1,4,6]) === 5)
p (finder([5,5,7,7],[5,7,7]) === 5)
p (finder([1,2,3,4,5,6,7],[3,7,2,1,4,6]) === 5)
p (finder([9,8,7,6,5,4,3,2,1],[9,8,7,5,4,3,2,1]) === 6)
