# Write a function to reverse a Linked List in place.
# The function will take in the head of the list as input and return the new head of the list.
# You are given the example Linked List Node class:

class Node
  attr_accessor :nextNode
  attr_reader :value

  def initialize(value)
    @nextNode = nil
    @value = value
  end
end

def reverse(head)
  previousLink = nil
  currentLink = head
  nextLink = head.nextNode

  while currentLink
    currentLink.nextNode = previousLink
    previousLink = currentLink
    currentLink = nextLink
    nextLink = (currentLink.nil? ? nil : currentLink.nextNode)
  end

end

# Create a list of 4 nodes
a = Node.new(1)
b = Node.new(2)
c = Node.new(3)
d = Node.new(4)

# Set up order a,b,c,d with values 1,2,3,4
a.nextNode = b
b.nextNode = c
c.nextNode = d

p "Before Reverse"
p a.nextNode.value
p b.nextNode.value
p c.nextNode.value
p "---------------"
p "After Reverse:"

# expect:
# 2
# 3
# 4

reverse(a)

p d.nextNode.value
p c.nextNode.value
p b.nextNode.value

# expect:
# 3
# 2
# 1
