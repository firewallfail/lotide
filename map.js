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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word[word.length - 1]);
assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']);

const results4 = map(words, () => 42);
assertArraysEqual(results4, [42, 42, 42, 42, 42]);