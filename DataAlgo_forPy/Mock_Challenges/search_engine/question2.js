// Question
// Given a dice which rolls from 1 to 5, simulate a uniform 7 sided dice!
// Requirements
// You MUST do this on pen and paper or on a whiteboard. No actual coding is allowed until you've come up with a solution by hand!


const simulate_roll = (min = 1, max = 5) => {
  return Math.trunc(Math.random() * (max - min) + min)
}

const simulate7 = () => {
  return ((simulate_roll() + simulate_roll()) % 7) + 1
}

console.log(simulate7())
