// Write a function that takes a head node and an integer value n
// and then returns the nth to last node in the linked list.
// For example, given:

class Node {
  constructor(value) {
    this.nextNode = null
    this.value = value
  }
}

const nth_to_last_node = (k, node) => {
  let marker = node

  for (var i = 0; i < k; i++) {
    marker = node.nextNode
  }

  while (marker.nextNode) {
    node = node.nextNode
    marker = marker.nextNode
  }

  return node.value
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)

a.nextNode = b
b.nextNode = c
c.nextNode = d
d.nextNode = e

// This would return the node d with a value of 4, because its the 2nd to last node.
const target_node = nth_to_last_node(2, a)
console.log(target_node) // 4
