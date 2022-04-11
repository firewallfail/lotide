const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (inputString) => {
  const countedLetters = {};
  for (const letter of inputString) {
    if (countedLetters[letter]) {
      countedLetters[letter]++;
    } else if (letter !== ' ') {
      countedLetters[letter] = 1;
    }
  }
  return countedLetters;
};
module.exports = countLetters;

//Test code
const test1 = countLetters('LHL');
const test2 = countLetters("lighthouse in the house");
console.log(test1);
console.log(test2);