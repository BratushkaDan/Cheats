// ----- Closures https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
function makeAdder(x) {
  function add(y) {
    return x + y;
  }
  return add;
}
const adder = makeAdder(1); // adder(y)

/* Lexical scope */
function foo() {
    console.log(a)
}
function bar() {
    var a = 3;
    foo();
}
var a = 2;

bar(); // 2 - a looks for up-most call environment (lexical scope)
/* Block Scope */
{
    let a = 2;
    console.log(a) // 2;
}
console.log(a); // ReferenceError

/* function keyword Function vs arrow Function */
let obj = {
    count: 0,
    cool: function coolFn() {
        let self = this;
        if (self.count < 1) {
            setTimeout(function timer() { // timer function has own lexical scope so self = this binding is necessary
                self.count++;
                console.log('Awesome?')
            }, 100)
        }
    }
};
let obj2 = {
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout(() => {  // arrow functions never have own lexical scope so this refers to upper lexical scope
                this.count++;
                console.log('Awesome?');
            }, 100)
        }
    }
};
let obj3 = { // same as previous two
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout(function timer() { // timer function has own lexical scope so self = this binding is necessary
                this.count++;
                console.log('Awesome?')
            }.bind(this), 100)
        }
    }
};
// Normal instance methods are defined once and used by all instances, properties and arrow functions, which are technically properties too will be duplicated on every instance. Obviously, this duplication is a big overhead if we deal with hundreds or more instances.

// You can’t refer to the this of the surrounding scope inside an ordinary function, whereas Arrow Function solves that problem.

// ----- Arrays
Array.isArray(Array.prototype);
Array.of();
Array.from("foo"); // ["f", "o", "o"], deduces array-like objects, maps and sets
Array.from("foo", str => str.repeat(3)); // ["fff", "ooo", "ooo"]
Array.prototype.join();
Array.prototype.concat();
Array.prototype.indexOf();
Array.prototype.slice(from, to); // [from:to)     // can copy an array with no arguments
Array.prototype.push(); // returns position
Array.prototype.pop(); // returns element
Array.prototype.shift(); // returns element
Array.prototype.unshift(); // returns position
Array.prototype.splice(start, deletecount, ...args); // returns an array of deleted elements
// only start specified deletes element at index start, deletecount = 0 inserts args before start
Array.prototype.forEach();
Array.prototype.map(e, i, arr);
Array.prototype.filter(e, i);
Array.prototype.every(e, i);
Array.prototype.some(e, i);
Array.prototype.reduce((accumulator, currentValue) => accumulator + currentValue);
Array.prototype.reduceRight();
Array.prototype.find(e, i);
Array.prototype.findIndex(e, i);
Array.prototype.copyWithin(target, start, end); /* [start:end) */ // target - index at which to copy sequence to ( can be negative)
// start - index at which to copy sequence from, default = 0
// end - index at which to end copying elements from, default = last index
Array.prototype.includes();
Array.prototype.sort((first, second) => second - first); // desc
Array.prototype.flat(depth);

// ----- Strings
/*string is immutable, what is opposed to an array, though some methods can be borrowed from the array*/
console.log(Array.prototype.map.call("Hello, World!", val => val.repeat(2)));
const string = "";
string.split();
string.startsWith();
string.endsWith();
string.includes();
string.repeat();
string.charAt();
string.charCodeAt();
string.trim();
string.trimStart();
string.trimEnd();
string.indexOf();
string.lastIndexOf();
string.concat(separator, [...args]);
string.slice();
// LEGACY FUNCTION substr
string.substr(idx, extent); // returns string from idx to end, or from idx + extent chars after
string.padStart(int, string); // replace everything to int with string(repeat)
string.padEnd(int, string);// replace everything from int to end with string(repeat)

// ----- Numbers
// is number 5e10 // 50000000000
Number.prototype.toExponential(); // returns number in exponential form
parseInt(10.3);
parseInt('FF', 16);

parseFloat(10.4);
Math.trunc(13.37); /* returns integer part of number */

let num1 = 42.59;
// output for the two following functions is string type
// how many fractional decimal places
num1.toFixed(0); // "43"
num1.toFixed(1); // "42.6"
num1.toFixed(2); // "42.59"
num1.toFixed(3); // "42.590"
// how many significant digits
num1.toPrecision(1); // "4e+1"
num1.toPrecision(2); // "43"
num1.toPrecision(3); // "42.6"
num1.toPrecision(4); // "42.59"
num1.toPrecision(5); // "42.590"

Number.isNaN();
Number.isFinite();
Number.isInteger();
Number.isSafeInteger();

// ----- Object
const object = {
    [Date.now() + 'this is still an object parameter']: 'hey'
};
Object.prototype.toString();
Object.prototype.valueOf(); // gets underlying value of primitive (by default primitives are box wrapped by JS automatically in order to easily access things as .length or .toUpperCase() e.g.
Object.prototype.hasOwnProperty();
Object.prototype.getOwnPropertyDescriptors();
Object.keys(Object.prototype);
Object.values(Object.prototype);
Object.entries(Object.prototype);
Object.is(object, object2);
Object.assign(object2, object);

// ----- Maps
const map = new Map();
map.set(key, value);
map.get(key);
map.delete(key);
map.clear();
map.size;
map.has(key);
const wmap = new WeakMap(); // no size(), clear() and isn't iterable
wm.set(key, value); // key is object, if key == null, then y becomes null.

// ----- Sets
const set = new Set();
set.add(value);
set.delete(value);
set.has(value);
set.clear();
set.size;
const wset = new WeakSet();

// ----- Descriptors
const descriptor = {
    value,
    writable: true, // property may be changed with assignment operator
    configurable: true, // property is deletable and type of this property descriptor may be changed
    enumerable: false, // visible for iterators
}
Object.defineProperty(Object.prototype, "property", descriptor);

// ----- Proxy
let obj = { a: 1 },
    handlers = {
        get(target, key, context) {
            console.log(`accessing: ${key}`);
            return Reflect.get(
                target, key, context
            );
        }
    },
    pobj = new Proxy(obj, handlers);
    obj.a;
    pobj.a;

//----- Revocable Proxy
let obj = { a: 1 },
    handlers = {
        get(target, key, context) {
            console.log(`accessing: ${key}`);
            return target[key];
        }
    },
    { proxy: pobj, revoke: prevoke } = Proxy.revocable(obj, handlers);
    pobj.a
    prevoke();

//----- Symbols
    // symbols are special 'unique' (not strictly guaranteed) values that can be used as properties on objects with little fear of any collision.
let sym = Symbol("Hello, World!"); // no 'new' keyword for construction
obj[sym] = 123;

// -- Paralell use of Promises
Promise.all(promise, promise2)
  .then(result => console.log(result)); /* result is array of promises' result */
Promise.race(promise, promise2)
  .then(result => console.log(result)); /* result - result of first resolved promise */

// ----- blur(), focus();
node.focus();
node.blur();

// -- Timeouts and Intervals
this.timerId = setInteval(() => {}, 1000);
clearInterval(this.timerId); // interval or timeout has to be cleaned for sure
