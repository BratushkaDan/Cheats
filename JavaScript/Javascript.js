// all valid operations: +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, = ~int, = |, = &,
let val = 123 === 123 ? true : false; // ternary operator
// Simple values are assigned/passed by value-copy: null, undefined, string, number, boolean and symbol
// Compound values objects(arrays, functions, boxed value-wrappers) are assigned/passed by reference

// "" is falsy value
// function is subtype of object with [[Call]] property

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
    pobj.a
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
//----- Iterator
let array = [1, 2, 3];
let it = array[Symbol.iterator]();
it.next();
//----- Generators
function *generator() {
    let arr = [ yield 1, yield 2, yield 3];
}
function *additional() {
    yield *[1,2,3];
}
for (let v of additional()) {
    console.log(v);
}
//----- User Iterator
const Fib = {
    [Symbol.iterator]: () => {
        let n1 = 1, n2 = 1, current;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                current = n2;
                n2 = n1;
                n1 = n1 + current;
                if (current > 150) {
                    console.log("Over.");
                    return { value: current, done: true};
                }
                return { value: current, done: false};
            },
            return(v) {
                console.log("Over.");
                return { value: v, done: true };
            }
        }
    }
};
// ----- Closures
function makeAdder(x) {
    function add(y) {
        return x + y;
    }
    return add;
}
const adder = makeAdder(1); // adder(y)
// ----- Promises
const promise = new Promise((res, rej) => {});
promise
  .then(result => {}, reject => {})
  .catch(err => {});
promise.catch(err => {});
// -- Paralell use of Promises
Promise.all(promise, promise2)
  .then(result => console.log(result)); /* result is array of promises' result */
Promise.race(promise, promise2)
  .then(result => console.log(result)); /* result - result of first resolved promise */
// ----- blur(), focus();
node.focus();
node.blur();
// ----- Labels
/*Labels can be assigned to for loops or blocks of code and used with break, continue keywords  */
// ----- Regex
//Flags
/*i - regex isn’t case sensitive, g - all matches, m - multiline mode.*/
String.prototype.search(reg) /*— searches for first match or return -1.*/
String.prototype.match(reg) /*— without g: returns result, result[0] - first match, result[n] - other matches (if reg grouped by parentheses), result.index - position of match, result.input - str;
— with g: returns array of matches, null if there’s no matches. */
String.prototype.split(reg|substring, limit) — /*breaks str into an array using reg, can limit up amount of items.*/
String.prototype.replace(reg, String.prototype|Function.prototype) /*— replaces all the matches of reg, argument can use: $n - inserts n, $& - inserts all the matches, $` - inserts str part before of match, $’ - inserts str part after the match, func cat take the following ars: func(str, [,p1,p2,..], offset, s) — str - found match, [,p1,p2…] - parentheses content(if they’re present), offset - position where match was found, s - initial string.*/
regex.test(str) /*— returns true/false if there’s a match*/
regex.exec(str) /*— searches for matches: regex.lastIndex shows where the search is carrying out.
Classes and special symbol*/
/*
\d - digit, symbol from 0 to 9, \D - not a digit,
\s - space/tab|str-break, \S - not a space
\w - word, \w - not a word,
\b - border of word, \B - not a border
Spaces are common symbols.
“.” - any symbol but a break.
To escape symbol as regular backslash should be used
Sets and ranges.
[bac] - set means that any of a, b or c can present.
[0-5] - range means that any number between 0 and 5 inclusively and present.
[\wа-яё] - range finds any english and russian letter.
Exclusion ranges: [^...]
Symbols inside of sets and ranges are not necessary to escape.
Quantifiers 
{ n } — exact quantity; { n, n + m } — quantity from-to; { n, } — quantity from n to infinity;
+ — one or more, ? —  zero or one, * — zero or more
Greedy search is the regular one, to switch to lazy search use ? after quantifiers: +?, *?, ??
( ) — parentheses are used to group up elements.
for instance, (( )\s*( )) — will store all (3) parentheses in result array, starting from exterior ones.
To use grouping without storing data inside of parentheses use “?:” g.e.:  (?: )
\n — used to repeat parentheses in regex, | — alternation.
^ — at the regex beginning is the text beginning,
^ — at the regex with m flag is the string beginning,
$ — at the end of regex defines text ending, 
$ — at the end of regex with m flag is the string ending.
*/

// ----- AJAX
const url = 'https://jsonplaceholder.typicode.com/users/10';

const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.response) {
        console.log(xhr.response);
    }
    if (xhr.status === 404) {
        console.log({status: 404, response: xhr.response});
    }
};
// xhr.onload = () => {};
xhr.onerror = () => {
    console.log(xhr.response);
};

xhr.send(/*(JSON.stringify(data) - for POST*/);

// -- Timeouts and Intervals
this.timerId = setInteval(() => {}, 1000);
clearInterval(this.timerId); // interval or timeout has to be cleaned for sure