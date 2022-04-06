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

const middle = function(array) {
  if (array.length <= 2) return [];
  return (array.length % 2 === 0) ? array.slice(array.length / 2 - 1, array.length / 2 + 1) : [array[Math.floor(array.length / 2)]];
};

//test conditions for arrays not long enough to have a middle
const test1 = middle([1]); // => []
const test2 = middle([1, 2]); // => []
assertArraysEqual(test1, []);
assertArraysEqual(test2, []);

//tests for odd length arrays
const test3 = middle([1, 2, 3]); // => [2]
const test4 = middle([1, 2, 3, 4, 5]); // => [3]
const test5 = middle([1, 7, 5, 4, 3, 9, 7, 6, 8]);
assertArraysEqual(test3, [2]);
assertArraysEqual(test4, [3]);
assertArraysEqual(test5, [3]);

//tests for even length arrays
const test6 = middle([1, 2, 3, 4]) // => [2, 3]
const test7 = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
const test8 = middle([1, 7, 3, 4, 1, 99, 3, 4, 5, 10]) // => [1, 99]
assertArraysEqual(test6, [2, 3]);
assertArraysEqual(test7, [3, 4]);
assertArraysEqual(test8, [1, 99]);
