class Stack {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length
  }
}

const myStack = new Stack()

console.log(myStack.isEmpty())

myStack.push(1)
myStack.push("two")
myStack.push({ three: "three" })

console.log(myStack.peek())
console.log(myStack.size())

myStack.pop()
myStack.pop()
console.log(myStack.pop())

console.log(myStack.isEmpty())
