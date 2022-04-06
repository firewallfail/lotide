const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  return firstArray.every((value, index) => value === secondArray[index]);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const key in object1) {
    if (Array.isArray(object1[key]) && !(eqArrays(object1[key], object2[key]))) return false;
    else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const test1 = eqObjects(ab, ba); // => true
assertEqual(test1, true);

const abc = { a: "1", b: "2", c: "3" };
const test2 = eqObjects(ab, abc); // => false
assertEqual(test2, false);

const abd = { a: "1", b: "2", d: "3" };
const test3 = eqObjects(abd, abc); // => false
assertEqual(test3, false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cd3 = { c: "1", d: 4 };
assertEqual(eqObjects(cd2, cd3), false); // => false
