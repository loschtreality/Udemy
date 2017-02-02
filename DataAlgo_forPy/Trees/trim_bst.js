// Given the root of a binary search tree and 2 numbers min and max,
// trim the tree such that all the numbers in the new tree are between
// min and max (inclusive).

// The resulting tree should still be a valid binary search tree.
// So, if we get this tree as input:

  //         8
  //      /      \
  //     3        10
  //   /  \         \
  //  1    6         14
  //     /  \      /
  //   4     7    13

// and we’re given min value as 5 and max value as 13,
// then the resulting binary search tree should be:
//           8
//        /   \
//       6      10
//        \       \
//         7       13

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const trim_bst = (tree, min, max) => {
  if (!tree) { return null }

  tree.left = trim_bst(tree.left, min, max)
  tree.right = trim_bst(tree.right, min, max)

  if (min <= tree.value && tree.value <= max) {
    return tree
  }

  if (tree.value < min) {
    return tree.right
  }

  if (tree.value > max) {
    return tree.left
  }
}

const root = new Node(8)
const left = new Node(3)
const right = new Node(10)

root.left = left
root.right = right

const left_left = new Node(1)
const left_right = new Node(6)
const right_right = new Node(14)

left.left = left_left
left.right = left_right
right.right = right_right

const left_two_right_left = new Node(4)
const left_two_right_right = new Node(7)
const right_two_right_left = new Node(13)

left_right.left = left_two_right_left
left_right.right = left_two_right_right
right_right.left = right_two_right_left

console.log(trim_bst(root, 5, 13))
