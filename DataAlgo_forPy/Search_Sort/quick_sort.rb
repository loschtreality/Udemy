# Implement Quick Sort (in place)

def quick_sort(array)
  quick_sort_help(array, 0, array.size - 1)
end

def quick_sort_help(array, first, last)
  if first < last
    split_point = partition(array, first, last)

    quick_sort_help(array, first, split_point - 1)
    quick_sort_help(array, split_point + 1, last)
  end

end

def partition(array, first, last)
  pivot_value = array[first]

  left_mark = first + 1
  right_mark = last

  done = false

  until done

    while left_mark <= right_mark && array[left_mark] <= pivot_value
      left_mark += 1
    end

    while right_mark >= left_mark && array[right_mark] >= pivot_value
      right_mark -= 1
    end

    if right_mark < left_mark
      done = true
    else
      array[left_mark], array[right_mark] = array[right_mark], array[left_mark]
    end

    array[first], array[right_mark] = array[right_mark], array[first]

  end

  right_mark
end

arr = [5,7,1,9,10,6,4,2]
 quick_sort(arr)
p arr
