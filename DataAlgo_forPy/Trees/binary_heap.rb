class BinaryHeap

  def initialize
    @heapList = [0]
    @currentSize = 0
  end

  def percUp(index)
    while (index / 2) > 0
      parentIndex = index / 2
      childElement = @heapList[index]
      parentElement = @heapList[parentIndex]
      if childElement < parentElement
        # must switch by referencing instace var (@) or local variables will be switched
        @heapList[parentIndex], @heapList[index] = @heapList[index], @heapList[parentIndex]
      end
      index /= 2
    end
  end

  def percDown(i)
    while (i * 2) <= @currentSize
      mc = self.minChild(i)
      if @heapList[i] > @heapList[mc]
        temp = @heapList[i]
        @heapList[i] = @heapList[mc]
        @heapList[mc] = temp
      end
      i = mc
    end
  end

  def minChild(i)
    if (i * 2) + 1 > @currentSize
      return i * 2
    elsif @heapList[(i * 2)] < @heapList[(i*2)+1]
      return i * 2
    else
      return (i * 2) + 1
    end
  end

  def insert(k)
    @heapList.push(k)
    @currentSize += 1
    self.percUp(@currentSize)
  end

  def delMin
    retval = @heapList[1]
    @heapList[1] = @heapList[@currentSize]
    @currentSize = @currentSize - 1
    @heapList.pop
    self.percDown(1)
    retval
  end

  def buildHeap(alist)
    i = alist.size
    @currentSize = alist.size
    @heapList = [0] + alist.dup
    while (i > 0)
      self.percDown(i)
      i -= 1
    end
  end

end

tree = BinaryHeap.new
tree.insert(5)
tree.insert(10)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(21)
tree.insert(8)
tree.insert(9)

p tree
