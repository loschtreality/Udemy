# Problem
# Given a binary tree, check whether it’s a binary search tree or not.
# Requirements
# Use paper/pencil, do not code this in an IDE until you've done it manually
# Do not use built-in Python libraries to do this, but do mention them if you know about them


class Node
  attr_accessor :left, :right, :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end


def is_bst?(root, minVal = -Infinity, maxVal = Infinity)
  return true if root.nil?

  unless minVal <= root.value <= maxVal
    return false
  end

  is_bst?(root.left, minVal, root.value) && is_bst?(root.right, root.value, maxVal)
end


a = Node.new(1)
b = Node.new(2)
c = Node.new(3)
d = Node.new(4)
e = Node.new(5)
f = Node.new(6)
g = Node.new(7)

a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g


p is_bst?(a) == true
