# Given a singly linked list, write a function which takes in the first node
# in a singly linked list and returns a boolean indicating if the linked list contains a "cycle".

# A cycle is when a node's next point actually points back to a previous node in the list.
 # This is also sometimes known as a circularly linked list.

# You've been given the Linked List Node class code:

class Node
  attr_accessor :nextNode

  def initialize(value)
    @nextNode = nil
    @value = value
  end
end

def cycle_check(node)
  slow = node
  fast = node.nextNode

  while fast
    return true if fast == slow

    slow = slow.nextNode
    fast = fast.nextNode.nextNode
  end

  false
end

# CREATE CYCLE LIST
a = Node.new(1)
b = Node.new(2)
c = Node.new(3)

a.nextNode = b
b.nextNode = c
c.nextNode = a # Cycle Here!


# CREATE NON CYCLE LIST
x = Node.new(1)
y = Node.new(2)
z = Node.new(3)

x.nextNode = y
y.nextNode = z

print "cycle found: "
p cycle_check(a) == true
print "\n no cycle found: "
p cycle_check(x) == false
