# Question
# Given a dice which rolls from 1 to 5, simulate a uniform 7 sided dice!
# Requirements
# You MUST do this on pen and paper or on a whiteboard. No actual coding is allowed until you've come up with a solution by hand!


def simulate_roll(min = 1, max = 5)
  rand(max)
end

def simulate7
  (simulate_roll() + simulate_roll() % 7)
end

p simulate7
