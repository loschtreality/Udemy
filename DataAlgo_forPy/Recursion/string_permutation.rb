# Given a string, write a function that uses recursion to output a list of all the possible permutations of that string.

# For example, given s='abc' the function should return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

# Note: If a character is repeated, treat each occurence as distinct,
# for example an input of 'xxx' would return a list with 6 "versions" of 'xxx'

        def permutations(string)
          output = []

          return [string] if string.size == 1

          string.each_char.with_index do |letter, idx|
            # Slice from the start of the string up to the current index (left)
            # Concat first slice with the remaining letters after the index (right)

            left = string[0...idx] # 3 dots - exclude index
            right = string[(idx + 1)..-1] # 2 dots - include everything up to the end of the string (-1)
            permString = left + right


            # Recursively create permutations
            single_permutation = permutations(permString)

            single_permutation.each do |perm_letter|
              # Loop through permutations and concat each current letter (from outer scope)
                # with the current permutation set
              # push string combination to output

              output << letter + perm_letter
            end

          end

          return output
        end

        p permutations("abc") # ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
