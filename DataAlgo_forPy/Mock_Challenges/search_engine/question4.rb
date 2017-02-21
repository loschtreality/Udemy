# Question
# Find the squareroot of a given number rounded down to the nearest integer, without using the sqrt function. For example, squareroot of a number between [9, 15] should return 3, and [16, 24] should be 4.
# Requirements
# Feel free to code this out (but its recommended that you use paper/pencil or whiteboard)


def sqrt(num)
  raise "must be higher than 0" if num.zero?
  return 1 if num == 1

  low = 0
  high = 1 + (num / 2)

  until low + 1 > high
    mid = low + (high - low)/2
    square = mid**2

    if square == num
      return mid
    elsif square < num
      low = mid
    else
      high = mid
    end
  end

  low
end

p sqrt(9)
