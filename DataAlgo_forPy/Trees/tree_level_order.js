// Given a binary tree of integers, print it in level order.

// The output will contain space between the numbers in the same level,
// and new line between different levels.
// For example, if the tree is:

//          1
//        /   \
//       2      3
//     /       /  \
//    4       5    6

//    output:
//    1
//    2 3
//    4 5 6

  class Node {
    constructor(value, left = null, right = null) {
      this.value = value
      this.left = left
      this.right = right
    }
  }

const tree_level_order = (tree) => {
  if (tree === null) { return null }

  const nodes = [tree]

  let current_count = 1
  let next_count = 0

  while (nodes.length > 0) {
    let current_node = nodes.shift()
    current_count--

    console.log(current_node.value)

    if (current_node.left) {
      nodes.push(current_node.left)
      next_count++
    }

    if (current_node.right) {
      nodes.push(current_node.right)
      next_count++
    }

    if (current_count === 0) {
      console.log("\n")
      current_count = next_count
      next_count = 0
    }
  }

}


const root = new Node(1)
const left = new Node(2)
const right = new Node(3)
const sub_left = new Node(4)
const sub_right_left = new Node(5)
const sub_right_right = new Node(6)

root.left = left
root.right = right
left.left = sub_left
right.left = sub_right_left
right.right = sub_right_right

console.log(tree_level_order(root));
