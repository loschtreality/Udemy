class DynamicArray
  attr_reader :count, :capacity

  def initialize
    @count = 0
    @capacity = 1
    @my_array = make_array(@capacity)
  end


  def get_item(index)
    unless 0 <= index < @count
      throw "index is out of bounds"
    end

    @my_array[index]
  end


  def append(element)
    if @capacity == @count
      self._resize(2 * @capacity)
    end

    @my_array[@count] = element
    @count += 1
  end

  def _resize(new_capacity)
    new_array = make_array(new_capacity)

    @count.times do |i|
      new_array[i] = @my_array[i]
    end

    @my_array = new_array
    @capacity = new_capacity
  end

  def make_array(new_capacity)
    Array.new(new_capacity)
  end

end


arr = DynamicArray.new
arr.append(1)
arr.append(2)
p arr.capacity
p arr.count
