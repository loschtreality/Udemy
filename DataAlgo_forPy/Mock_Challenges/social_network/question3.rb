# Problem
# Create a function that takes in a list of unsorted prices (integers) and a maximum possible price value, and return a sorted list of prices
# Requirements
# Your function should be able to perform this in less than O(nlogn) time.


def solution(unsorted_prices, max_price)
  prices_to_counts = Array.new(max_price + 1, 0)

  unsorted_prices.each do |price|
    prices_to_counts[price] += 1
  end

  sorted_prices = []

  prices_to_counts.each_with_index do |price, count|
    (0...count).each do |time|
      sorted_prices << price
    end
  end

  sorted_prices
end


arr = [12,58,10,33,22,100,17,43,24]
max = 100

p solution(arr, max)
