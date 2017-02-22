# Problem
# Given a list of account ID numbers (integers) which contains duplicates , find the one unique integer. (the list is guaranteed to only have one unique (non-duplicated) integer
# Requirements
# Do not use built-in Python functions or methods


def find_unique(array)
  unique_id = 0

  array.each do |num|
    unique_id ^= num
  end

  unique_id
end

p find_unique([5,1,2,1,2,6,7,2,6,7]) 
