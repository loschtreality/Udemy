# Implement selection sort

def selection_sort(array)
  reference_index = 0

  until reference_index == array.size - 1
    minimum = array[reference_index]
    minimum_index = reference_index

    (reference_index...array.size).each do |i|
      if array[i] < minimum
        minimum = array[i]
        minimum_index = i
      end
    end

    if minimum_index != reference_index
      array[reference_index], array[minimum_index] = array[minimum_index], array[reference_index]
    end

    reference_index += 1
  end

  array
end

p selection_sort([5,4,3,2,1]) # [1,2,3,4,5]
