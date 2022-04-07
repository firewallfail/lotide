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

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) return results;
    results.push(item);
  }
  //return the full array if callback condition is never met
  return array;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

const results3 = takeUntil(data1, x => x > 400);
assertArraysEqual(results3, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
