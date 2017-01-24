# Write a function that takes a head node and an integer value n
# and then returns the nth to last node in the linked list.
# For example, given:

class Node
  attr_accessor :nextNode
  attr_reader :value

  def initialize(value)
    @nextNode = nil
    @value = value
  end
end

def nth_to_last_node(k, node)
  marker = node

  (k - 1).times { marker = marker.nextNode }

  while marker.nextNode
    node = node.nextNode
    marker = marker.nextNode
  end

  node.value
end

a = Node.new(1)
b = Node.new(2)
c = Node.new(3)
d = Node.new(4)
e = Node.new(5)

a.nextNode = b
b.nextNode = c
c.nextNode = d
d.nextNode = e

# This would return the node d with a value of 4, because its the 2nd to last node.
target_node = nth_to_last_node(2, a)
p target_node # 4
