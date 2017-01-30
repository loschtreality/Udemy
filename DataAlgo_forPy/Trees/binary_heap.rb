class BinaryHeap

  def initialize
    @heapList = [0]
    @currentSize = 0
  end

  def percUp(i)
    while (i / 2) > 0
      if self.heapList[i] < self.heapList[(i/2)]
        temp = self.heapList[(i/2)]
        self.heapList[(i/2)] = self.heapList[i]
        self.heapList[i] = temp
      end
      i = (i / 2)
    end
  end

  def percDown(i)
    while (i * 2) <= self.currentSize
      mc = self.minChild(i)
      if self.heapList[i] > self.heapList[mc]
        temp = self.heapList[i]
        self.heapList[i] = self.heapList[mc]
        self.heapList[mc] = temp
      end
      i = mc
    end
  end

  def minChild(i)
    if (i * 2) + 1 > self.currentSize
      return i * 2
    elsif self.heapList[(i * 2)] < self.heapList[(i*2)+1]
      return i * 2
    else
      return (i * 2) + 1
    end
  end

  def insert(k)
    self.heapList.push(k)
    self.currentSize += 1
    self.percUp(self.currentSize)
  end

  def delMin
    retval = self.heapList[1]
    self.heapList[1] = self.heapList[self.currentSize]
    self.currentSize = self.currentSize - 1
    self.heapList.pop
    self.percDown(1)
    retval
  end

  def buildHeap(alist)
    i = alist.size
    self.currentSize = alist.size
    self.heapList #=  [0] + alist[:]
    while (i > 0)
      self.percDown(i)
      i -= 1
    end
  end

end
