// importing remote modules installed using npm install [packageName]
// file path is not required when requiring packages installed using npm
var _ = require("underscore");

// importing local modules
// file path required with requiring local module
var m2 = require("./module2");

// m2 contains the object retured from file module2.js
console.log(m2);

// accessing the properties of m2
console.log("Value of a = " + m2.a);

// executing function from module 2
m2.printB();

console.log("Underscore Library: " + _);