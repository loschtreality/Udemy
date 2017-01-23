# Given a string of opening and closing parentheses, check whether it’s balanced. We have 3 types of parentheses: round brackets: (), square brackets: [], and curly brackets: {}.

# Assume that the string doesn’t contain any other character than these, no spaces words or numbers.

# As a reminder, balanced parentheses require every opening parenthesis to be closed in the reverse order opened. For example ‘([])’ is balanced but ‘([)]’ is not.

# You can assume the input string has no spaces.


KEY_MAP = {
  ")": "(",
  "]": "[",
  "}": "{"
}

def balance_parens(string)

  if (string.length % 2 != 0 || KEY_MAP.has_key?(string[0]))
    return false
  end

  stack = []

  string.each_char do |chr|

    lastItem = stack.last
    correspondingBrace = KEY_MAP[chr.to_sym]

    if correspondingBrace.nil?
      stack << chr
    elsif lastItem == correspondingBrace
      stack.pop()
    end

  end

  stack.length == 0
end

p balance_parens("(())") # true
p balance_parens("[{()}]") # true
p balance_parens("([)]") # false
p balance_parens("])}") # false
