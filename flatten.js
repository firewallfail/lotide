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

const flatten = function(arr) {
  let flattenedArray = []
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let smallElement of element) {
        flattenedArray.push(smallElement);
      }
    }
    else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;

// //test case
// const test1 = flatten([1, 2, 3, [4, 5, 6], 7, 8, [9, 10], 11, 12]);
// assertArraysEqual(test1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// const test2 = flatten([1, 2, 3, [4, 5, 6], 7, 8, [9, 10], 11, 12]);
// assertArraysEqual(test1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);