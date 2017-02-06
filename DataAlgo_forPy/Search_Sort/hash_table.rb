class HashTable
  def initialize(size)
    @size = size
    @slots = Array.new(@size, nil)
    @data = Array.new(@size, nil)
  end

  def put(key, data)
    hashValue = self.hashFunction(key, @slots.size)

    unless hashValue.has_key?(key)
      @slots[hashValue] = key
      @data[hashValue] = data

    else
      if condition

      end

    end
  end

  def hashFunction(key, size)
    key % size
  end

  def rehash(oldHash, size)
    (oldHash + 1) % size
  end

  def get(key)

  end

end
