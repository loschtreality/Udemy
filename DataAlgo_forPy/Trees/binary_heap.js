// Min Heap
class BinaryHeap {
  constructor() {
    this.heapList = [0] // Array with single element 0
    this.current_size = 0
  }

  percUp(index) {
    const left = index / 2
    const right = (index / 2) - 1

    if (index === 0) { return; }

    this.percUpCheck(left, right, index)
  }

  percUpCheck(left, right, currentIndex) {
    let smallest = currentIndex

    if (left <= this.current_size && this.heapList[left] < this.heapList[smallest]) {
      smallest = left
    } else if (right <= this.current_size && this.heapList[right] < this.heapList[smallest]) {
      smallest = right
    }

    if (smallest !== currentIndex) {
      [this.heapList[currentIndex], this.heapList[smallest]] = [this.heapList[smallest], this.heapList[currentIndex]]
      this.percUp(smallest)
    }
  }

  percDown(index) {

  }

  minChild(index) {

  }

  insert(node) {
    this.heapList.push(node)
    this.current_size++

    if (this.current_size === 1) { return; }
    this.percUp(this.current_size)
  }

  deleteMin() {

  }

  buildHeap(alist) {

  }


}

const tree = new BinaryHeap()
tree.insert(5)
tree.insert(10)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(21)
tree.insert(8)
tree.insert(9)
console.log(tree)
