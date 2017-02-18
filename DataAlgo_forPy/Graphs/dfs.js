// Implement DFS

const dfs = (graph, start) => {
  const visited_verticies = []
  let verticies_stack = [start]

  while (verticies_stack.length > 0) {
    const current_node = verticies_stack.pop()

      if (!visited_verticies.includes(current_node)) {
        visited_verticies.push(current_node)

      verticies_stack = [...verticies_stack, ...graph[current_node]]
      }

  }
  return visited_verticies
}

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

console.log(dfs(graph, 'A'))
