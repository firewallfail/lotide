const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
//same numbers
assertEqual(1, 1);
//different numbers
assertEqual(1, 17);
//different types
assertEqual(1, "Hello");
//different strings
assertEqual("2:", ":2");
//same strings
assertEqual("Hello", "Hello");