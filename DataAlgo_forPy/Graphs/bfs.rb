# Implement BFS
require 'set'

def bfs(graph, start)
  visited_verticies = Set.new()
  vertices_que = [start]

  until vertices_que.empty?
    current_node = vertices_que.shift

    unless visited_verticies.include?(current_node)

      visited_verticies.add(current_node)
      vertices_que.concat(graph[current_node.to_sym])
    end

  end

  visited_verticies
end

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

p bfs(graph, 'A')
