# Implement DFS
require 'set'

def dfs(graph, start)
  visted_verticies = Set.new()
  vertices_stack = [start]

  until vertices_stack.empty?
    current_node = vertices_stack.pop

    unless visted_verticies.include?(current_node)
      visted_verticies.add(current_node)
      vertices_stack.concat(graph[current_node.to_sym])
    end

  end

  visted_verticies
end


graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

p dfs(graph, "A")
