# Implement bubble sort

def buble_sort(array)
  not_sorted = true

  while not_sorted
    swapped = false

    (0...array.length - 1).each do |i|
      if array[i] > array[i + 1]
        swapped = true
        array[i], array[i + 1]  = array[i + 1], array[i]
      end
    end

    not_sorted = false unless swapped
  end

  array
end

p buble_sort([5,4,3,2,1]) # [1,2,3,4,5]
