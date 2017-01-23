// Given the Stack class below, implement a Queue class using two stacks! Note, this is a "classic" interview problem. Use a JS array data structure as your Stack.

class Queue2Stacks {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue(item) {
    this.stack1.push(item)
  }

  dequeue() {
    if (this.stack2.length === 0) {
      // amortize and outbound stack
      // need to pop to put in reverse order

      while (this.stack1.length > 0) {
        const item = this.stack1.pop()
        this.stack2.push(item)
      }
    }

    return this.stack2.pop()
  }

}

const q2s = new Queue2Stacks

for (var i = 0; i < 5; i++) {
  q2s.enqueue(i)
}

for (var i = 0; i < 5; i++) {
  console.log(q2s.dequeue(i))
}
