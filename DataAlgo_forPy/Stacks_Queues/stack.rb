class Stack
  def initialize
    @items = []
  end

  def push(item)
    @items.push(item)
  end

  def pop
    @items.pop()
  end

  def is_empty?
    @items.empty?
  end

  def peek
    @items.last
  end

  def size
    @items.length
  end

end

myStack = Stack.new

p myStack.is_empty?

myStack.push(1)
myStack.push(2)
myStack.push("three")

p myStack.peek

p myStack.is_empty?

myStack.pop()
p myStack.pop()
myStack.pop()

p myStack.is_empty?
