// Given a binary tree, check whether it’s a binary search tree or not.

const bst_check = (tree) => {
  if (!tree) { return true }

  const left = tree.left
  const right = tree.right

  if (left !== null && left.value > right.value) {
    return false
  }
  else if (right !== null && right.value < left.value) {
    return false
  }
  else if (!bst_check(left) || !bst_check(right)) {
    return false
  }

  return true
}


class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const root = new Node(10)
const left = new Node(5)
const right = new Node(20)

root.left = left
root.right = right

console.log(bst_check(root))
