# Implement shell sort

def shell_sort(array)
  sublist_count = array.size / 2

  while sublist_count > 0
    (0..sublist_count).each do |start|
      gap_insertion_sort(array, start, sublist_count)
    end
    sublist_count /= 2
  end

  array
end

def gap_insertion_sort(array, start, gap)
  (start + gap...array.size).each do |i|
    current_value = array[i]
    position = i

    while position >= gap && array[position - gap] > current_value
      array[position] = array[position - gap]
      position -= gap
    end

  array[position] = current_value

  end
end


p shell_sort([5,4,3,2,1]) # [1,2,3,4,5]
