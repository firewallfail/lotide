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

const without = function(arr1, arr2) {
  let newArray = [];
  for (let element of arr1) {
    if (arr2.indexOf(element) === -1) newArray.push(element);
  }
  return newArray;
};

module.exports = without;

//test case
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
//test cases
const test1 = without([1, 2, 3], [1]) // => [2, 3]
const test2 = without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const test3 = without([1, 2, 3, "purple", "monkey", "dishwasher"], [2, "yellow", 17, "dishwasher"]); // => [1,3,"purple","monkey"]
assertArraysEqual(test1, [2, 3]);
assertArraysEqual(test2, ["1", "2"]);
assertArraysEqual(test3, [1, 3, "purple", "monkey"]);

