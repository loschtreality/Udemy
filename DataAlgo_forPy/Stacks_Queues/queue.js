class Queue {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  enqueue(item) {
    this.items.unshift(item)
  }

  dequeue() {
    return this.items.pop()
  }

  size() {
    return this.items.length
  }
}

const myQueue = new Queue()

console.log(myQueue.isEmpty())

myQueue.enqueue(1)
myQueue.enqueue(2)

console.log(myQueue.dequeue())
