# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brenthall/lotide`

**Require it:**

`const _ = require('@brenthall/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArrayEqual : Asserts strict equality of 2 arrays
* assertEqual : Asserts strict equality of 2 primitives
* assertObjectsEqual : Asserts strict equality of 2 objects
* countLetters : Counts the number of letters in a string
* countOnly : Counts the number of times specified elements show up in an array
* eqArrays : Checks if 2 arrays are the same
* eqObjects : Checks if 2 objects are the same
* findKey : Finds the first key containing a matching key value pair
* findKeyByValue : Finds a key based on a value
* flatten : Converts a multi dimensional array into a single dimensional array
* head : Returns the first value of a given array
* letterPositions : Returns all the indicies of a given letter
* map : Iterates over an array modifying it based on a passed callback
* middle : Returns the middle index of an array or middle 2 indicies on an even length array
* tail : Returns all elements except the first in an array
* takeUntil : Returns everything in an array up until the first index that the callback returns true
* without : Returns an array without unwanted elements