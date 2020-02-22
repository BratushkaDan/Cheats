// console.assert(1 == 2, "1 not equal 2");

const createProgrammer = (name) => {
  let programmer = { name }; /* key is not required, because it will have 'name' name */
  return { ...programmer, ...canCode(programmer) };
};
const canCode = (object) => {
  const {name} = object;
  return {
    code: () => console.log(`${name} is coding...`)
  }
};
const canCode1 = ({name}) => {
  return {
    code: () => console.log(`${name} is coding...`)
  }
};

const showMessage = (options) => {
    let innerWidth = options.width || 200; /* 200 if !options.width */
};

let square = x => x ** 2;
// all valid operations: +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, = ~int, = |, = &,
// ternary operator <condition> ? <value1> : <value2>;

// this keyword is a reference to a context function is called in