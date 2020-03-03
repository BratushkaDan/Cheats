function makeAdder(x) {
  function add(y) {
    return x + y;
  }
  return add;
}
const adder = makeAdder(1); // adder(y)

// "" is falsy value
// function is subtype of object with [[Call]] property

// string is immutable, what is opposed to an array, though some methods can be borrowed from the array
let str = "Hello, World!";
console.log(Array.prototype.map.call(str, val => val.repeat(2)));

let num = 5e10;
num; // 50000000000
num.toExponential();

let num1 = 42.59;
// output for both functions is string type
// how many fractional decimal places
num1.toFixed(0); // 43
num1.toFixed(1); // 42.6
num1.toFixed(2); // 42.59
num1.toFixed(3); // 42.590
// how many significant digits
num1.toPrecision(1); // 4e+1
num1.toPrecision(2); // 43
num1.toPrecision(3); // 42.6
num1.toPrecision(4); // 42.59
num1.toPrecision(5); // 42.590

// Simple values are assigned/passed by value-copy: null, undefined, string, number, boolean and symbol
// Compound values objects(arrays, functions, boxed value-wrappers) are assigned/passed by reference
