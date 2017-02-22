# Problem
# Write a function that given a target amount of money and a list of possible coin denominations, returns the number of ways to make change for the target amount using the coin denominations
# Requirements
# Write out your work on paper/pencil, then see if you can code up your solution


def solution(n, coins)
  # arr = [1] + [0] * n

  coins.each do |coin|
    (1...coins.size).each do |i|
      arr[i] += arr[i - coin]
    end
  end

  return 0 if n.zero?

  return arr[n]
end
