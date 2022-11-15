const fizzBuzz = require("./fizzbuzz.js");

const fizzBuzzUntil = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(fizzBuzz(i));
  }
};

module.exports = fizzBuzzUntil;
