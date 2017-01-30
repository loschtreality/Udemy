class BinaryTree {
  constructor(rootObj, leftChild = null, rightChild = null) {
    this.key = rootObj
    this.leftChild = leftChild
    this.rightChild = rightChild
  }

  insertLeft(newNode) {
    if (!this.leftChild) {
      this.leftChild = new BinaryTree(newNode)
    } else {
      const node = new BinaryTree(newNode)
      node.leftChild = this.leftChild
      this.leftChild = node
    }
  }

  insertRight(newNode) {
    if (!this.rightChild) {
      this.rightChild = new BinaryTree(newNode)
    } else {
      const node = new BinaryTree(newNode)
      node.rightChild = this.rightChild
      this.rightChild = node
    }
  }

  getRightChild() {
    return this.rightChild
  }

  getLeftChild() {
    return this.leftChild
  }

  setRootVal(obj) {
    this.key = obj
  }

  getRootVal() {
    return this.key
  }

}

const preorder = (tree) => {
  if (tree) {
    console.log(tree.key)
    preorder(tree.leftChild)
    preorder(tree.rightChild)
  }
}

const inorder = (tree) => {
  if (tree) {
    inorder(tree.leftChild)
    console.log(tree.key)
    inorder(tree.rightChild)
  }
}

const postorder = (tree) => {
  if (tree) {
    postorder(tree.rightChild)
    postorder(tree.leftChild)
    console.log(tree.key)
  }
}

const r = new BinaryTree('a')
r.insertLeft('b')
r.insertRight('c')
r.leftChild.insertLeft('d')
r.leftChild.insertRight('e')
r.rightChild.insertLeft('f')
r.rightChild.insertRight('g')

console.log("------ PREORDER ------")
preorder(r)
console.log("------ ------ ------ ------")

console.log("------ INORDER ------")
inorder(r)
console.log("------ ------ ------ ------")

console.log("------ POSTORDER ------")
postorder(r)
console.log("------ ------ ------ ------")
