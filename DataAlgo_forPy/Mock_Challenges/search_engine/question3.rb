# Question
# Given a string, write a function that uses recursion to reverse it.
# Requirements
# You MUST use pen and paper or a whiteboard to answer this, no coding allowed!


def reverse_rec(str)
  return str if str.empty?

  str[str.size - 1] + reverse_rec(str[0...str.size - 1])
end


def reverse_iterative(str)
  index = str.size - 1
  result = ""

  until index < 0
    result += str[index]
    index -= 1
  end

  result
end


word = "hello"

p reverse_rec(word)
p reverse_iterative(word)
