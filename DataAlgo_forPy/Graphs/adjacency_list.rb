class Vertex
  def initialize(key)
    @id = key
    @connectedTo = {}
  end

  def addNeighbor(neighbor, weight)
    @connectedTo[neighbor] = weight
  end

  def getConnections
    @connectedTo.keys
  end

  def weight(neighbor)
    @connectedTo[neighbor]
  end

  def toString
    "#{@id} is connected to #{getConnections}"
  end

end


class Graph
  def initialize
    @vertList = {}
    @numVerticies = 0
  end

  def each(&prc)
    @vertList.each do |identification, connections|
      prc.call(identification, connections)
    end
  end

  def contains?(target)
    @vertList.has_key?(target)
  end

  def addVertex(key)
    newVertex = Vertex.new(key)
      @vertList[key] = newVertex
      @numVerticies += 1
    newVertex
  end

  def getVertex(key)
    @vertList[key] || nil
  end

  def addEdge(from_vertex, to_vertex, cost)
    unless @vertList.has_key?(from_vertex)
      @vertList.addVertex(from_vertex)
    end

    unless @vertList.has_key?(to_vertex)
      @vertList.addVertex(to_vertex)
    end

    @vertList[from_vertex].addNeighbor(@vertList[to_vertex], cost)
  end

  def getVerticies
    @vertList.keys
  end


end


g = Graph.new

6.times do |i|
  g.addVertex(i)
end

g.addEdge(0, 1, 2)

g.each do |vertex, connections|
  p "#{vertex} has connections #{connections.toString}"
end
