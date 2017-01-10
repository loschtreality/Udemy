// List tree data structure

function BinaryTree(root) {
  return [root,[],[]]
}

function insertLeft(root,newBranch) {
  var t = root[1]

  if (t.length > 1) {
    root[1] = [newBranch,t,[]]
  }
  else {
    root[1] = [newBranch,[],[]]
  }
  return root
}

function insertRight(root,newBranch) {
  var t = root[2]

  if (t.length > 1) {
    root[2] = [newBranch,[],t]
  }
  else {
    root[2] = [newBranch,[],[]]
  }
  return root
}


function getRootVal(root) {
  return root[0]
}

function setRootVal(root,newVal) {
  root[0] = newVal
}

function getLeftChild(root) {
  return root[1]
}

function getRightChild(root) {
  return root[2]
}

var r = BinaryTree(3)
insertLeft(r,4)
insertLeft(r,5)
insertRight(r,6)
insertRight(r,7)
console.log(r);

var left = getLeftChild(r)
console.log(left);
setRootVal(left,9)
console.log(r);
