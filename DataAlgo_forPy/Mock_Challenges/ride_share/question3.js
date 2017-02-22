// Problem
// Given a binary tree, check whether it’s a binary search tree or not.
// Requirements
// Use paper/pencil, do not code this in an IDE until you've done it manually
// Do not use built-in Python libraries to do this, but do mention them if you know about them


class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}


const is_bst = (root, minVal = -Infinity, maxVal = Infinity) => {

  if (root === null) return true

  if (!(minVal <= root.value <= maxVal)) {
    return false
  }

  return (
    is_bst(root.left, minVal, root.value)
    &&
    is_bst(root.right, root.value, maxVal)
  )
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)
const g = new Node(7)

a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g

console.log(is_bst(a))
