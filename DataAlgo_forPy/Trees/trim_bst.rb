# Given the root of a binary search tree and 2 numbers min and max,
# trim the tree such that all the numbers in the new tree are between
# min and max (inclusive).
#
# The resulting tree should still be a valid binary search tree.
# So, if we get this tree as input:
#
#           1
#        /      \
#       3        10
#     /  \         \
#    1    6         14
#       /  \      /
#     4     7    13
#
# and we’re given min value as 5 and max value as 13,
# then the resulting binary search tree should be:
#           8
#        /   \
#       6      10
#        \       \
#         7       13

class Node
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value, left = nil, right = nil)
    @left = left
    @right = right
    @value = value
  end
end

def trim_bst(tree, min, max)
  return nil if tree.nil?

  tree.left = trim_bst(tree.left, min, max)
  tree.right = trim_bst(tree.right, min, max)

  if min <= tree.value && tree.value <= max
    return tree
  end

  if tree.value < min
    return tree.right
  end

  if tree.value > max
    return tree.left
  end


end


root = Node.new(8)
left = Node.new(3)
right = Node.new(10)

root.left = left
root.right = right

left_left = Node.new(1)
left_right = Node.new(6)
right_right = Node.new(14)

left.left = left_left
left.right = left_right
right.right = right_right

left_two_right_left = Node.new(4)
left_two_right_right = Node.new(7)
right_two_right_left = Node.new(13)

left_right.left = left_two_right_left
left_right.right = left_two_right_right
right_right.left = right_two_right_left

p trim_bst(root, 5, 13)
