class Deque
  def initialize
    @items = []
  end

  def is_empty?
    @items.empty?
  end

  def addFront(item)
    @items.unshift(item)
  end

  def addRear(item)
    @items.push(item)
  end

  def removeFront
    @items.unshift()
  end

  def removeRear
    @items.pop()
  end

  def size
    @items.length
  end
end

myDeque = Deque.new()

myDeque.addFront("hello")
myDeque.addRear("world")

p myDeque.size

p "#{myDeque.removeFront()} #{myDeque.removeRear()}"

p myDeque.size
