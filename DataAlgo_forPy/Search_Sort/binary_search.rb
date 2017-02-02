def binary_search(array, target)
  first = 0
  last = array.size - 1
  found = false

  while first <= last && !found
    mid = (first + last) / 2

    if target == array[mid]
      found = true
    elsif target > array[mid]
      first = mid + 1
    else
      last = mid - 1
    end

  end

  found
end

def recursive_bsearch(array,target)
  return false if array.empty?

  mid = array.size / 2
  element = array[mid]
  left = array[0...mid]
  right = array[(mid+1)...-1]

  case target <=> element
  when 0
    true
  when 1
    recursive_bsearch(right, target)
  when -1
    recursive_bsearch(left, target)
  end
end



p binary_search([1,2,3,4,5,6,7], 5)
p recursive_bsearch([1,2,3,4,5,6,7], 5)
