// Question
// Given a dice which rolls 1 to 7 (with uniform probability), simulate a 5 sided dice. Preferably, write your solution as a function.
// Requirements
// You MUST do this on pen and paper or on a whiteboard. No actual coding is allowed until you've solved it on pen and paper!


const simulate_roll = (min = 1, max = 7) => {
  return Math.trunc(Math.random() * (max - min) + min)
}


const simulate5 = () => {
  return (simulate_roll() % 5) + 1
}

console.log(simulate5())
