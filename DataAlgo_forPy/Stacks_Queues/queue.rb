class Queue
  def initialize
    @items = []
  end

  def enqueue(item)
    @items.unshift(item)
  end

  def dequeue
    @items.pop()
  end

  def is_empty?
    @items.empty?
  end

  def size
    @items.length
  end

end

myQueue = Queue.new

p myQueue.is_empty?

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue("three")

p myQueue.size

p myQueue.dequeue
myQueue.dequeue
myQueue.dequeue

p myQueue.is_empty?
