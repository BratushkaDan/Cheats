// functions 
var add = function (x, y) {
    return x + y;
};
var optionalAdd = function (x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
};
var identity = function (arg) {
    return arg;
};
var identityTwo = function (arg) {
    return arg;
    // to get round invokation typification use identity(<IProps>{}) or identity({} as IProps) 
};
function loggingIdentityAlternative(arg) {
    // or alternative (arg: T[]): T[]
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var x = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' }
};
// NonNullable<T> -- Constructs a type by excluding null and undefined from T
// ReturnType<T> -- Constructs a type consisting of the return type of function T.
// Required<T> -- makes all optional properties required
