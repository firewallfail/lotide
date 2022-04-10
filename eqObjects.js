const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//I don't think I need this now, seems to be working with arrays and objects with new code
// const eqArrays = function(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) return false;
//   return firstArray.every((value, index) => value === secondArray[index]);
// };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   //if they lengths of the 2 objects are different they can't match
//   if (Object.keys(object1).length !== Object.keys(object2).length) return false;
//   //go through all the keps in the first object
//   for (const key in object1) {
//     //if it's an array and the arrays don't match the whole object doesn't match
//     if (Array.isArray(object1[key]) && !(eqArrays(object1[key], object2[key]))) return false;
//     // else if (!Array.isArray(object1[key]) && Object.keys((object1[key]).length > 1)) return false;
//     //if it's an object and they don't share a key it's not a match
//     else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) return false;
//   }
//   return true;
// };
const eqObjects = function(object1, object2) {
  //if they aren't the same type they can't be the same.
  if (typeof (object1) !== typeof (object2)) {
    return false;
  }
  //continue if the next level is an object / array
  if (typeof (object1) === 'object') {
    //continue if next level is 2 objects (not array)
    if (!Array.isArray(object1) && !Array.isArray(object2)) {
      //different lengths can't be a match so return false
      if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
      }
      //same length needs to loop through each key
      for (const key in object1) {
        //call itself on the 2 objects return false if ever hits pair that doesn't match
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      }
      return true;
    }
    //continue if next level is 2 arrays
    if (Array.isArray(object1) && Array.isArray(object2)) {
      //can't be equal if the 2 arrays are a different length
      if (object1.length !== object2.length) return false;
      //call itself on the 2 array indexes, returning false if a pair doesn't match
      object1.forEach(function(value, i) {
        if (!eqObjects(object1[i], object2[i])) return false;
      });
      return true;
    }
  }
  //base case, 2 things that can be directly compared
  return object1 === object2;
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


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false

//deeper nested test cases
const uglyObject = {
  a: [1, 2, 3, 4],
  b: 7,
  c: {
    a: "hello",
    b: [1, 2, 3, 4]
  },
  d: [1, {
    b: "nested",
    hello: [4, 29, 1928, [1, 2, 3]]
  }, 7, 8]
};//this and 3 are the same

const uglyObject2 = {
  a: [1, 2, 3, 4],
  b: 7,
  c: {
    a: "hello",
    b: [1, 2, 3, 4]
  }
};//this is different

const uglyObject3 = {
  a: [1, 2, 3, 4],
  b: 7,
  c: {
    a: "hello",
    b: [1, 2, 3, 4]
  },
  d: [1, {
    b: "nested",
    hello: [4, 29, 1928, [1, 2, 3]]
  }, 7, 8]
};

//seems to work with anything nested in anything
assertEqual(eqObjects(uglyObject, uglyObject2), false);
assertEqual(eqObjects(uglyObject, uglyObject3), true);

