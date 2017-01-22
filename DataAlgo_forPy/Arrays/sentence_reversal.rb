# Given a string of words, reverse all the words. For example:
# Given:
# 'This is the best'
#
# Return:
# 'best the is This'
#
# As part of this exercise you should remove all leading and trailing whitespace. So that inputs such as:
# '  space here'  and 'space here      '
#
# both become:
# 'here space'


def reversal(sentence)
  sentence.split(' ').reverse.join(' ')
end

p reversal('abc')
p reversal('abc def')
p reversal('  space here')
p reversal('This is the best')
