# Implement insertion sort

def insertion_sort(array)

  (1...array.size).each do |i|
    current_value = array[i]
    position = i

    while position > 0 && array[position - 1] > current_value
      array[position] = array[position - 1]
      position -= 1
    end

    array[position] = current_value
  end

  array
end

p insertion_sort([5,4,3,2,1]) # [1,2,3,4,5]
