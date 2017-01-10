class DynamicArray {
  constructor() {
    this.count = 0
    this.capacity = 1
    this.my_array = this.make_array(this.capacity)
  }

  get_item(index) {
    if (0 <= index && index < this.count) {
       throw "Index is out of bound"
    }
    return this.my_array[index]
  }


  append(element) {
    if (this.capacity === this.count) {
      this.resize(2 * this.capacity)
    }

    this.my_array[this.count] = element
    this.count++
  }

  resize(new_capacity) {
    const new_array = this.make_array(new_capacity)

    for (let i = this.count; i < this.capacity; i++) {
      new_array[i] = this.my_array[i]
    }

    this.my_array = new_array
    this.capacity = new_capacity
  }

  make_array(new_capacity) {
    return new Array(new_capacity)
  }

}

const arr = new DynamicArray
arr.append(1)
arr.append(2)
arr.append(3)
arr.append(3)
arr.append(3)
console.log("capacity", arr.capacity)
console.log("count", arr.count)
