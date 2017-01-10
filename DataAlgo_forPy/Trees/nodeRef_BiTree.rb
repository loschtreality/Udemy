class BinaryTree

  attr_accessor  :key, :leftChild, :rightChild

  def initialize(rootObj = nil, left = nil, right = nil)
    @key = rootObj
    @leftChild = left
    @rightChild = right
  end

  def insertLeft(newNode)
    if self.leftChild.nil?
      self.leftChild = BinaryTree.new(newNode)
    else
      branch = BinaryTree.new(newNode,self.leftChild)
      self.leftChild = branch
    end
  end

  def insertRight(newNode)
    if self.rightChild.nil?
      self.rightChild = BinaryTree.new(newNode)
    else
      branch = BinaryTree.new(newNode,self.rightChild)
      self.rightChild = branch
    end
  end

end

r = BinaryTree.new('a')
r.insertLeft('b')
r.insertRight('c')
r.leftChild.insertLeft('d')
r.leftChild.insertRight('e')
r.rightChild.insertLeft('f')
r.rightChild.insertRight('g')

# Traversal Methods - Preorder, Inorder, Postorder

 #Visit root node, recursive preorder left subtree, recursive preorder right subtree
def preorder(tree)
  if tree
  p tree.key
  preorder(tree.leftChild)
  preorder(tree.rightChild)
  end
end

#Inorder traversal on left subtree, visit root node, recursive inorder traversal right subtree
def inorder(tree)
  if tree
  inorder(tree.leftChild)
  p tree.key
  inorder(tree.rightChild)
  end
end

# Recursive postorder traversal left subtree and right subtree followed by root node
def postorder(tree)
  if tree
  postorder(tree.leftChild)
  postorder(tree.rightChild)
  p tree.key
  end
end

puts "------ PREORDER ------"
preorder(r)
puts "------ ------ ------ ------"

puts "------ INORDER ------"
inorder(r)
puts "------ ------ ------ ------"

puts "------ POSTORDER ------"
postorder(r)
puts "------ ------ ------ ------"
