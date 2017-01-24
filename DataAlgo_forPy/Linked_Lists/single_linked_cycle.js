// Given a singly linked list, write a function which takes in the first node
// in a singly linked list and returns a boolean indicating if the linked list contains a "cycle".

// A cycle is when a node's next point actually points back to a previous node in the list.
 // This is also sometimes known as a circularly linked list.

// You've been given the Linked List Node class code:


class Node {
  constructor(value = null) {
    this.nextNode = null
    this.value = value
  }
}

const cycle_check = (node) => {
  let slow = node
  let fast = node.nextNode

  while (fast) {
    if (fast.value === slow.value) {
      return true
    }

    slow = slow.nextNode
    fast = fast.nextNode.nextNode

  }

  return false
}

// CREATE CYCLE LIST
const a = new Node(1)
const b = new Node(2)
const c = new Node(3)

a.nextNode = b
b.nextNode = c
c.nextNode = a // Cycle Here!


// CREATE NON CYCLE LIST
const x = new Node(1)
const y = new Node(2)
const z = new Node(3)

x.nextNode = y
y.nextNode = z

console.log(cycle_check(a), "cycle found")
console.log(cycle_check(x) === false, "no cycle found")
