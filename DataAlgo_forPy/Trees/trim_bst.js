// Given the root of a binary search tree and 2 numbers min and max,
// trim the tree such that all the numbers in the new tree are between
// min and max (inclusive).

// The resulting tree should still be a valid binary search tree.
// So, if we get this tree as input:

  //         1
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
  constructor(left = null,right = null, value) {
    this.left = left
    this.right = right
    this.value = value
  }
}

const trim_bst = (tree) => {

}
