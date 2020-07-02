/* eval() and with () {} - performance killers */
eval("") // executes javascript code inside of string, CHEATS Lexical Environment
// of course, javascript has a number of performance optimizations, such as static analysis
obj = {a: 1, b: 2, c: 3}
with (obj) { // treats object as a lexical environment - assigns variable if it has such a property name, else property remains undefined and other this.[variable] gets the value.
  c = 4;
  d = 5;
}
console.log(obj) // {a: 1, b: 2, c: 4}
console.log(obj.d) // undefined
console.log(d) // 5

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

/* Type coercion */
// everything below is true
0 == "\n"
"0" == false
0 == false
"" == false
[] == false
"" == 0
"" == []
0 == []

let a, b, c, d, e, f;
a = "0"; // !! a - true
b = []; // !!b - true
c = {}; // !!c - true

d = ""; // !!d - false
e = 0; // !!e - false
f = null; // !!f - false

/* try/catch */

function foo() {
  try {
    return 42
  }
  catch (e) {}
  finally {
    console.log("Hello")
  }
}
console.log(foo())
// Hello <- Finally runs before the function getting returned value
// 42

/* empyting an array */
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []

/* */