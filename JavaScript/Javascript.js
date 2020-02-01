// ----- Arrays
const array = [];
Array.isArray();
Array.of();
Array.from();
array.join();
array.indexOf();
array.slice();
array.concat();
array.push();
array.pop();
array.shift();
array.unshift();
array.splice();
array.forEach();
arr.filter();
arr.map();
arr.every();
arr.some();
arr.reduce();
arr.reduceRight();
arr.find();
arr.findIndex();
arr.copyWithin(target, start, end);
arr.includes();
arr.sort();
// ----- Strings
const string = "";
string.split();
string.startsWith();
string.endsWith();
string.includes();
string.repeat();
string.charAt();
string.indexOf();
string.lastIndexOf();
string.concat(separator, [...args]);
string.slice();
string.substr();
string.padStart(int, string);
string.endStart(int, string);
// ----- Numbers
parseInt();
parseFloat();
number.toFixed();
number.toPrecision();
Number.isNaN();
Number.isFinite();
Number.isInteger();
Number.isSafeInteger();
// ----- JSON
JSON.parse(json, callback);     // callback(key, value)
JSON.stringify(obj, callback);  // callback(key, value)
// ----- Object
object.toString();
object.valueOf();
object.hasOwnProperty();
object.getOwnPropertyDescriptors();
Object.keys(object);
Object.values(object);
Object.entries(object);
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
    value: value,
    writable: boolean,
    configurable: boolean, // property is deletable and changeable
    enumerable: boolean, // visible for iterators
}
Object.defineProperty(object, "property", descriptor);
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
//----- Iterator
let array = [1, 2, 3];
it = array[Symbol.iterator]();
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
//----- Promises
const promise = new Promise((res, rej) => {});
//-- Paralell use of Promises
Promise.all(promise, promise2).then(result => {
    console.log(result); // result — array of promises' results
});
Promise.race(promise, promise2).then(result => {
    console.log(result); // result - result of first resolved promise
});
//----- blur(), focus();
node.focus(); // adds focus on input/textarea
node.blur(); //  removes focus from input/textarea
//----- Labels
Labels can be assigned to for loops or blocks of code (loop1: {});
continue loop1, break loop1; // used to whether continue loop1 or break it
//----- Import/Export
import { foo as bar } from "./baz";
import { default as bar } from "./baz";
import * as foo from "foo"; // foo.bar(), foo.baz()
// ----- Regex
//Flags
i - regex isn’t case sensitive, g - all matches, m - multiline mode.
str.search(reg) — searches for first match or return -1.
str.match(reg) — without g: returns result, result[0] - first match, result[n] - other matches(if reg grouped by parentheses), result.index - position of match, result.input - str;
— with g: returns array of matches, null if there’s no matches.
str.split(reg|substring, limit) — breaks str into an array using reg, can limit up amount of items.
str.replace(reg, str|func) — replaces all the matches of reg, argument can use: $n - inserts n, $& - inserts all the matches, $` - inserts str part before of match, $’ - inserts str part after the match, func cat take the following ars: func(str, [,p1,p2,..], offset, s) — str - found match, [,p1,p2…] - parentheses content(if they’re present), offset - position where match was found, s - initial string.
regex.test(str) — returns true/false if there’s a match
regex.exec(str) — searches for matches: regex.lastIndex shows where the search is carrying out.
Classes and special symbol
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
