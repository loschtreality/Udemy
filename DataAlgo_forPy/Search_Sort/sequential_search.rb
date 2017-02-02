def sequential_search(array, target)
  array.each_with_index { |num, idx| return true if num == target }
  false
end

def ordered_sequential_search(array, target)
  array.each_with_index do |num, idx|
    return true if num == target
    return fasle if num > target
  end
  false
end

p sequential_search([6,7,2,8,1,0,5], 1)
p ordered_sequential_search([1,2,3,4,5,6,7], 5)
