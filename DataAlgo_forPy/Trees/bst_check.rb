# Given a binary tree, check whether it’s a binary search tree or not.

def bst_check(tree)
  return true if tree.nil?

  left = tree.left
  right = tree.right

  if !left.nil? && left.value > right.value
    return false

  elsif !right.nil? && right.value < left.value
    return false

  elsif !bst_check(left) || !bst_check(right)
    return false

  end

  true
end

class Node
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

root = Node.new(10)
left = Node.new(5)
right = Node.new(20)

root.left = left
root.right = right

# p root

p bst_check(root)
