// Write a function to reverse a Linked List in place.
// The function will take in the head of the list as input and return the new head of the list.
// You are given the example Linked List Node class:

class Node {
  constructor(value) {
    this.nextNode = null
    this.value = value
  }
}

const reverse = (head) => {
  let previousLink = null
  let currentLink = head
  let nextLink = head.nextNode

  while (currentLink) {
    currentLink.nextNode = previousLink
    previousLink = currentLink
    currentLink = nextLink
    nextLink = currentLink === null ? null : currentLink.nextNode
  }

  return currentLink
}


// Create a list of 4 nodes
const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)

// Set up order a,b,c,d with values 1,2,3,4
a.nextNode = b
b.nextNode = c
c.nextNode = d

console.log("Before Reverse:")
console.log(a.nextNode.value)
console.log(b.nextNode.value)
console.log(c.nextNode.value)
console.log("----------------")
console.log("After Reverse:")

// expect:
// 2
// 3
// 4

reverse(a)

console.log(d.nextNode.value)
console.log(c.nextNode.value)
console.log(b.nextNode.value)

// expect:
// 3
// 2
// 1
