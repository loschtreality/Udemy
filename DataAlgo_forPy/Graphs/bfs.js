// Implement BFS

const bfs = (graph, start) => {
  const visited_verticies = new Set()
  let verticies_que = [start]

  while (verticies_que.length > 0) {
    const current_node = verticies_que.shift()

    if (!visited_verticies.has(current_node)) {
      visited_verticies.add(current_node)

      verticies_que = [...verticies_que, ...graph[current_node]]
    }
  }

  return visited_verticies;
}

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

console.log(bfs(graph, 'A'))
