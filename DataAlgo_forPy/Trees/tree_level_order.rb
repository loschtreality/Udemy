# Given a binary tree of integers, print it in level order.

# The output will contain space between the numbers in the same level,
# and new line between different levels.
# For example, if the tree is:

#          1
#        /   \
#       2      3
#     /       /  \
#    4       5    6

#    output:
#    1
#    2 3
#    4 5 6

class Node
  def initialize(left = nil, right = nil, value)
    @left = left
    @right = right
    @value = value
  end
end

def level_order_print(tree)

end
