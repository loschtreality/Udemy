# This interview question requires you to reverse a string using recursion.
# Make sure to think of the base case here.
# Again, make sure you use recursion to accomplish this.
# Do not slice (e.g. string[0..-1]) or use iteration, there must be a recursive call for the function.


def reverse_string(string, index = string.size - 1)
  return string if string.empty?
  return string[index] if index.zero?

  string[index] + reverse_string(string, index - 1)
end


p reverse_string("hello") # "olleh"
p reverse_string("") # ""
p reverse_string("thi is a sentence") # "ecnetnes a si siht"
