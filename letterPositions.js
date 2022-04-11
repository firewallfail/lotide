const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  return firstArray.every((value, index) => value === secondArray[index]);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

// const test1 = letterPositions("lighthouse in the house");
// console.log(test1);
// const test2 = letterPositions("hello");

// assertArraysEqual(test2.h, [0]);
// assertArraysEqual(test2.e, [1]);
// assertArraysEqual(test2.l, [2, 3]);
// assertArraysEqual(test2.o, [4]);
