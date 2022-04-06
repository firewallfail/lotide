const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  return firstArray.every((value, index) => value === secondArray[index]);
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const key in object1) {
    if (Array.isArray(object1[key]) && !(eqArrays(object1[key], object2[key]))) return false;
    else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//const test1 = eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
const test2 = eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc);

const abd = { a: "1", b: "2", d: "3" };
const test3 = eqObjects(abd, abc); // => false
assertObjectsEqual(abd, abc);
