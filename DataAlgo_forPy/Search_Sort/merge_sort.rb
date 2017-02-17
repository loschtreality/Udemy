# Implement Merge Sort

def merge_sort(array)
  return array if array.size <= 1

  mid = array.size / 2
  left = array[0...mid]
  right = array[mid..-1]

  merge_sort(left)
  merge_sort(right)

  i = 0
  j = 0
  k = 0

  while i < left.size && j < right.size
      if left[i] < right[j]
        array[k] = left[i]
        i += 1

      else
        array[k] = right[j]
        j += 1
      end

      k += 1
  end

  while i < left.size
    array[k] = left[i]
    i += 1
    k += 1
  end

  while j < right.size
    array[k] = right[j]
    j += 1
    k += 1
  end

  array
end


p merge_sort([6,4,1,2,4,6,2,10])
