from functools import reduce


# Problem 1
#  Use map to create a function which finds the length of each
#  word in the phrase (broken by spaces) and return the values in a list.
#  The function will have an input of a string, and output a list of integers.


def word_lengths(phrase):
    return list(map(lambda word: len(word), phrase.split(' ')))


print(word_lengths('How long are the words in this phrase'))
[3, 4, 3, 3, 5, 2, 4, 6]


# Problem 2
# Use reduce to take a list of digits and return the number that they
# correspond to. Do not convert the integers to strings!

def digits_to_num(digits):
    return reduce(lambda acc, num: num + (acc * 10), digits, 0)


print(digits_to_num([3, 4, 3, 2, 1]))
# 34321

# Problem 3
# Use filter to return the words from a list of words
# which start with a target letter.


def filter_words(word_list, letter):
    return list(filter(lambda word: word[0] == letter, word_list))


l = ['hello', 'are', 'cat', 'dog', 'ham', 'hi', 'go', 'to', 'heart']
print(filter_words(l, 'h'))
# ['hello', 'ham', 'hi', 'heart']

# Problem 4
#  Use zip and list comprehension to return a list of the same length where
#  each value is the two strings from L1 and L2 concatenated
#  together with connector between them. Look at the example output below:


def concatenate(L1, L2, connector):
    return [word1 + connector + word2 for (word1, word2) in zip(L1, L2)]


print(concatenate(['A', 'B'], ['a', 'b'], '-'))
# ['A-a', 'B-b']

# Problem 5
#  Use enumerate and other skills to return a dictionary which has the values
#  of the list as keys and the index as the value.
#  You may assume that a value will only appear once in the given list.


def d_list(L):
    return { item: index for (index, item) in enumerate(L) }


print(d_list(['a', 'b', 'c']))
# {'a': 0, 'b': 1, 'c': 2}

# Problem 6
# Use enumerate and other skills from above to return the count of the number
# of items in the list whose value equals its index.


def count_match_index(L):
    match_count = 0
    for (index, value) in enumerate(L):
        if value == index:
            match_count += 1

    return match_count


print(count_match_index([0, 2, 2, 1, 5, 5, 6, 10]))  # 4
