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
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value, right = nil, left = nil)
    @value = value
    @right = right
    @left = left
  end
end

def level_order_print(tree)
  return nil if tree.nil?

  nodes = [tree]

  current_count = 1
  next_count = 0

  until nodes.empty?
    current_node = nodes.shift
    current_count -= 1

    print current_node.value

    if current_node.left
      nodes << current_node.left
      next_count += 1
    end

    if current_node.right
      nodes << current_node.right
      next_count += 1
    end

    if current_count.zero?
      p '' # print new line
      current_count, next_count = next_count, current_count
    end
  end

end


root = Node.new(1)
left = Node.new(2)
right = Node.new(3)
sub_left = Node.new(4)
sub_right_left = Node.new(5)
sub_right_right = Node.new(6)

root.left = left
root.right = right
left.left = sub_left
right.left = sub_right_left
right.right = sub_right_right

level_order_print(root)
