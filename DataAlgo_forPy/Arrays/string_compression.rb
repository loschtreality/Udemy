# Given a string in the form 'AAAABBBBCCCCCDDEEEE' compress it to become 'A4B4C5D2E4'. For this problem, you can falsely "compress" strings of single or double letters. For instance, it is okay for 'AAB' to return 'A2B1' even though this technically takes more space.
# The function should also be case sensitive, so that a string 'AAAaaa' returns 'A3a3'.

def str_compress(string)

  return string if string.empty?

    count = 0
    curr_char = string[0]
    result = ""

    string.each_char do |chr|
      if chr != curr_char
        result += "#{curr_char}#{count}"
        curr_char = chr
        count = 1
      else
        count += 1
      end
    end

    result += "#{curr_char}#{count}"

  result

end


p str_compress("A")
p str_compress("ABC")
p str_compress("AaBbCc")
p str_compress("AAAABBBBCCCCCDDEEEE")
p str_compress("AAAaaa")
p str_compress("RRDD")
p str_compress("")
