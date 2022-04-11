const eqArrays = function(object1, object2) {
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
        if (!eqArrays(object1[key], object2[key])) {
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
      for (let i = 0; i < object1.length; i++) {
        if (!eqArrays(object1[i], object2[i])) return false;
      }
      return true;
    }
  }
  //base case, 2 things that can be directly compared
  return object1 === object2;
};

module.exports = eqArrays;
