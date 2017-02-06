class HashTable {
  constructor(size) {
    this.size = size
    this.slots = new Array(this.size).map((fillArray) => null)
    this.data = new Array(this.size).map((fillArray) => null)
  }

  put(key, data) {
    const hashValue = this.hashFunction(key, this.slots.length)

    if (!Relfect.has(hashValue, key)) {
      this.slots[hashValue] = key
      this.data[hashValue] = data
    } else {
      if (Reflect.get(hashValue, key) === key) {
        this.data[hashValue] = data
      } else {
        let nextSlot = this.rehash(hashValue, this.slots.length)

        while (this.slots[nextSlot] !== undefined && this.slots[nextSlot] !== key) {
          nextSlot = this.rehash(nextSlot, this.slots.length)
        }

        if (this.slots[nextSlot] === undefined) {
          this.slots[nextSlot] = key
          this.data[nextSlot] = data
        } else {
          this.data[nextSlot] = data
        }

      }
    }
  }

  hashFunction(key, size) {
    return key % size
  }

  rehash(oldHash, size) {
    return (oldHash + 1) % size
  }

  get(key) {
    const startSlot = this.hashFunction(key, this.slots.length)
    let data = null
    let stop = false
    let found = false
    let position = startSlot

    while (this.slots[position] !== null && !found && !stop) {
      if (this.slots[position] === key) {
        found = true
        data = this.data[position]
      } else {
        position = this.rehash(position, this.slots.length)
        if (position === startSlot) { stop = true }
      }
    }
    return data
  }
}

const h = new HashTable(5)
h[1] = 'one'
h[2] = 'two'
h[3] = 'three'

console.log(h[1])
