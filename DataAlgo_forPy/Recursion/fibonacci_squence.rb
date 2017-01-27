# Implement a Fibonnaci Sequence in three different ways:

# Recursively
# Dynamically (Using Memoization to store results)
# Iteratively

# Function Output:
# Your function will accept a number n and return the nth number of the fibonacci sequence

def recursive_fib(num)
  return 1 if num <= 2

  recursive_fib(num - 1) + recursive_fib(num - 2)
end

# p recursive_fib(10) # 55

def iterative_fib(num)
  fib_sum = 0
  prev = 0
  next_num = 1

  until num <= 0
    fib_sum += next_num
    prev = next_num
    next_num = fib_sum + prev
    num -= 2
  end

  fib_sum
end

# p iterative_fib(10) # 55

CACHED_NUMS = {}

def dynamic_fib(num)
  # Base Case
  return num if num <= 1

  # Check Cache
  return CACHED_NUMS[num] if CACHED_NUMS.has_key?(num)

  # Set Cache
  CACHED_NUMS[num] = dynamic_fib(num - 1) + dynamic_fib(num - 2)

  return CACHED_NUMS[num]
end

p dynamic_fib(10) # 55
