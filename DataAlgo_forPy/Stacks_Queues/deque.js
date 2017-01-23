class Deque {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  addFront(item) {
    this.items.push(item)
  }

  addRear(item) {
    this.items.unshift(item)
  }

  removeFront() {
    return this.items.pop()
  }

  removeRear() {
    return this.items.shift()
  }

  size() {
    return this.items.length
  }
}

const myDeque = new Deque()

myDeque.addFront("hello")
myDeque.addRear("world")

console.log(myDeque.size())

console.log(`${myDeque.removeFront()} ${myDeque.removeRear()}`)

console.log(myDeque.size())
