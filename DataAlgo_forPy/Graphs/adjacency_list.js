class Vertex {
  constructor(key) {
    this.id = key
    this.connectedTo = {}
  }

  addNeighbor(neighbor, weight = 0) {
    this.connectedTo[neighbor] = weight
  }

  getConnections() {
    return Reflect.ownKeys(this.connectedTo)
  }

  weight(neighbor) {
    return this.connectedTo[neighbor]
  }

  toString() {
    return `${this.id} connected to: ${Reflect.ownKeys(this.connectedTo)}`
  }
}

class Graph {
  constructor() {
      this.vertList = {}
      this.numVerticies = 0
  }

  [Symbol.iterator]() {
      const vertListKeys = Reflect.ownKeys(this.vertList)
      let index = 0
      return {
        next: () => {
          console.log("VLK[index] :", vertListKeys[index])
          let value = Reflect.get(this.vertList, vertListKeys[index])
          console.log(value, "value")
          index++
          return {
            done: index > vertListKeys.length ? true : false,
            value: value
          }
        }
      }
    }

    // Iterate through vertList values
  each(callback) {
      for (vertex of this) {
        callback(vertex)
      }
    }

  contains(target) {
      let result = null
      for (vertex of this) {
        if (vertex === target) {
          result = vertex
          break
        }
      }
      return result;
    }

  addVertex(key) {
      const newVertex = new Vertex(key)
      this.vertList[key] = newVertex
      this.numVerticies++
          return newVertex
  }

  getVertex(vertex) {
    if (this.vertList.hasOwnProperty(vertex)) {
      return this.vertList[vertex]
    } else {
      return null
    }
  }

  addEdge(fromVertex, toVertex, cost = 0) {
    if (!this.vertList.hasOwnProperty(fromVertex)) {
       this.addVertex(fromVertex)
    }
    if (!this.vertList.hasOwnProperty(toVertex)) {
       this.addVertex(toVertex)
    }

    this.vertList[fromVertex].addNeighbor(this.vertList[toVertex], cost)
  }

  getVerticies() {
    return Reflect.ownKeys(this.vertList)
  }

  contains(vertex) {
    return Reflect.get(this.vertList, vertex)
  }

}

const g = new Graph()

for (var i = 0; i < 6; i++) {
  g.addVertex(i)
}

g.addEdge(0, 1, 2)

g.each((vertex) => {
  console.log("vertex: ", vertex)
  console.log("Connections: ", vertex.getConnections())
})
