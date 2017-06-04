import random

# Iterators and Generators Homework

# Problem 1:
# Create a generator that generates the squares of numbers up to some number N.


def gen_squares(n):
    for num in range(n):
        yield pow(2, num + 1)


for num in gen_squares(4):
    print(num)


# Problem 2
# Create a generator that yields "n" random numbers between
# a low and high number (that are inputs).
# Note: Use the random library. For example:

# random.randint(1,10)

def rand_num(low, high, n):
    for _num in range(n):
        yield random.randint(low, high)


for num in rand_num(1, 10, 12):
    print(num)


# Problem 3:
# Use the iter() function to convert the string below
s = 'hello'

# code here
iter(s)

# Problem 4
# Explain a use case for a generator using a yield statement where you would
# not want to use a normal function with a return statement.

# Where the method is taking a high input and requires a large temporary buffer

# Extra Credit!
# Can you explain what gencomp is in the code below? (Note: We never covered
# this in lecture! You will have to do some googling/Stack Overflowing!)

my_list = [1, 2, 3, 4, 5]

gencomp = (item for item in my_list if item > 3)

for item in gencomp:
    print(item)

# This method is a filter function utilizing a generator. The item is
# returned if the number is greater than 3
