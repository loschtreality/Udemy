# Note: This problem has multiple solutions and is a classic problem in showing issues with basic recursion.
# If you are having trouble with this problem (or it seems to be taking a long time to run in some cases)
# check out the Solution Notebook and fully read the conclusion link for a detailed description of the various ways to solve this problem!

# Given a target amount n and a list (array) of distinct coin values, what's the fewest coins needed to make the change amount.

# For example:
# If n = 10 and coins = [1,5,10]. Then there are 4 possible ways to make change:
# 1+1+1+1+1+1+1+1+1+1
# 5 + 1+1+1+1+1
# 5+5
# 10

# With 1 coin being the minimum amount.

def coin_change(target_amount, coin_values)
    min_coins = target_amount

    return 1 if coin_values.include?(target_amount)

    # Filter / select values <= coin
    # Recursively call method and compare coins
    coin_values.select do |coin|
        coin <= target_amount
    end.each do |coin|
        num_coins = 1 + coin_change(target_amount - coin, coin_values)
        min_coins = num_coins if num_coins < target_amount
    end

    min_coins
end


def coin_change_dynamic(target_amount, coin_values, known_results = {})
  min_coins = target_amount

  if coin_values.include?(target_amount)
    known_results[target_amount] = 1
    return 1

  elsif known_results.has_key?(target_amount)
    return known_results[target_amount]

  else

    # Filter / select values <= coin
    # Recursively call method and compare coins
    coin_values.select do |coin|
        coin <= target_amount
    end.each do |coin|
        num_coins = 1 + coin_change(target_amount - coin, coin_values)
       if num_coins < target_amount
        min_coins = num_coins
        known_results[target_amount] = min_coins
      end
    end

  end


  min_coins
end

# p coin_change(15, [1,5,10])
p coin_change_dynamic(55, [1,5,10])
