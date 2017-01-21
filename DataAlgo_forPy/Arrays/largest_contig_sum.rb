# Given an array of integers (positive and negative) find the largest continuous sum.

def large_cont_sum(array)
  max = array[1]
  cont_sum = 0
  running_total = 0

  array.each do |num|
    sum = num + cont_sum
    running_total += num

    if sum > max
      cont_sum += num
      max = cont_sum
    else
      cont_sum = num
    end

    if running_total > max
      max = running_total
    end

  end

  max
end

p large_cont_sum([1,2,-1,3,4,-1]) == 9
p large_cont_sum([1,2,-1,3,4,10,10,-10,-1])  == 29
p large_cont_sum([-1,1]) == 1
