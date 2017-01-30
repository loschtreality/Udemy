def BinaryTree(root = 0)
  [root, [], []]
end

def insertLeft(root, newBranch)
  unless root[1].empty?
    old = root[1]
    root[1] = [newBranch, old, []]
    return root
  end

  root[1] = [newBranch, [], []]
end

def insertRight(root, newBranch)
  unless root[2].empty?
    old = root[2]
    root[2] = [newBranch, [], old]
    return root
  end

  root[2] = [newBranch, [], []]
end

def getRootVal(root)
  root.first
end

def setRootVal(root, newVal)
  root[0] = newVal
end

def getLeftChild(node)
  node[1]
end

def getRightChild(node)
  node[2]
end

r = BinaryTree(3)
insertLeft(r,4)
insertLeft(r,5)
insertRight(r,6)
insertRight(r,7)
p r

left = getLeftChild(r)
p left
setRootVal(left,9)
p r
