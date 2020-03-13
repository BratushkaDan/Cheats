interface IPoint {
  readonly x: number;
  readonly y: number;
}

// custom properties
interface ICustomObject {
  [propname: string]: string | number;
}
interface EntityArray<T> {
  [index: number]: T;
}

// functions
const mapTuple: <T>(baseValue: T, increment: T) => [T, T] = (x, y) => [x, y];

interface IMapTuple<T, U extends T> {
  (first: T, second?: U): [T, U]
}
interface IMapArray {
  <T, U extends T>(first: T, second?: U): Array<T | U>
}
const mapTuple2: IMapTuple<any, any> = (arg1, arg2 = 2) => [arg1, arg2];
// template argument deduction
const mapArray: IMapArray = (arg1, arg2) => [arg1, arg2];

// ----- Advanced Types
// Partial<T> - makes all properties optinal
// Readonly<T> - makes primitive or complex type immutable object
// Record<K, T> - creates nested type with K of T values
// Pick<T, K> - constructs type by picking properties K from T
// Omit<T, K> - constructs type by picking properties T and removing K
// Exclude<T, U> - constructs type by excluding from T all properties that are assignable to U
// Extract<T, U> - constructs type by extracting from T all properties that are assignable to U
// NonNullable<T> - exclude null and undefined from T
// Parameters<T> - Constructs a tuple type of the types of the parameters of a function type T
// ConstructorParameters<T> - Constructs a tuple type of parameters of a class constructor
// ReturnType<T> - obtain the return type of a function type
// InstanceType<T> - obtain the instance type of a constructor option type
// ThisParameterType<T> - obtain type of this in object or function
// OmitThisParameter<T>


interface PageInfo { title: string }

type Page = 'home' | 'about' | 'contact';
const x: Record<Page, PageInfo> = {
  about: {title: 'about'},
  contact: {title: 'contact'},
  home: {title: 'home'},
};

// Pick<T,K>
interface Todo_ {
  title: string;
  description: string;
  completed: boolean;
}

// typeof - value of type, instanceof - is instance of class

type TodoPreview = Pick<Todo_, 'title' | 'completed'>; // type TodoPreview = 'title' | 'completed';
// Exclude<T,U>
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number
// Extract<T,U>
type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
// NonNullable<T> -- Constructs a type by excluding null and undefined from T
// ReturnType<T> -- Constructs a type consisting of the return type of function T.
// Required<T> -- makes all optional properties required

enum TrafficLight {
  Green, Yellow, Red
}
const enum SocialMedia {
  INSTAGRAM = "INSTAGRAM",
  FACEBOOK = "FACEBOOK",
  YOUTUBE = "YOUTUBE",
  LINKEDIN = "LINKEDIN"
} /* const enum is resolved at compile time while non-const enum is kept after compilation */

type AlertType = 'success' | 'warning' | 'error';

interface IPerson {
  name: string
  age: number
}

type PersonKeys = keyof IPerson;
let key: PersonKeys = 'name';

type IUser = {
  _id: number
  name: string
  email: string
  created: Date
}

interface IGetObjectValue {
  <T/* extends IUser*/, U extends keyof T/*IUser*/>(object: T, key: U): T[keyof T]
}

const getObjectValue: IGetObjectValue = (obj, key) => obj[key];

type Species = 'dog' | 'cat' | 'bird';

interface IObj {
  species: Species;
}
const obj1: IObj = {
  species: 'cat',
};

type UserKeysNoMeta = Exclude<keyof IUser, '_id' | 'created'>

interface IState {}
interface IDispatch {}
interface IOwnProps {}
type IProps = IState & IDispatch & IOwnProps;

interface If<T> {
  (arg: T): T[]
}
const f: If<number> = arg => [arg];

// provide type to function
interface IFunc {
  <T>(arg: T): T[]
}

const f1: IFunc = arg => [arg];
f1<number>(123); // providing type
f1(123); // inferring type

const isString = (test: any): test is string => typeof test === 'string';
const hasParam: <T>(object: T, prop: 'string') => boolean = (obj, prop) => prop in obj;
/* protected constructor, getters and setters */
class Person {
  protected constructor(protected _name: string) {}
  public get name() {
    return this._name;
  }
  public set name(newName: string) {
    this._name = newName;
  }
}
class WorkerPerson extends Person {
  constructor(protected _name: string, protected _salary: number) {
    super(_name);
  }
  public get salary() {
    return this._salary;
  }
  public set salary(salary: number) {
    this._salary = salary;
  }
}
// we can implement interfaces(including their public properties and using generics)
// polymorphic interface behavior:
interface IConnector {
  connected: boolean;
  doConnect(): void;
}
class BluetoothConnector implements IConnector {
  public connected: boolean = false;
  public doConnect(): void {
    console.log("Starting Bluetooth connection...");
    setTimeout(() => console.log("Connected!"), 1000);
    this.connected = true;
  }
}
class WifiConnector implements IConnector {
  public connected: boolean = false;
  public doConnect(): void {
    console.log("Starting WiFi connection...");
    setTimeout(() => console.log("Connected!"), 1000);
    this.connected = true;
  }
}
class GPSConnector implements IConnector {
  public connected: boolean = false;
  public doConnect(): void {
    console.log("Starting GPS connection...");
    setTimeout(() => console.log("Connected!"), 1000);
    this.connected = true;
  }
}

interface INetworkWrapper {
  <T extends IConnector>(connector: T): void
}
const networkWraper: INetworkWrapper = (connector) => {
  connector.doConnect();
};
const bt = new BluetoothConnector();
networkWraper<BluetoothConnector>(bt);

// abstract class
interface IEngine<T> {
  toString(): string
}
abstract class Machine {
  protected constructor(protected _engine: IEngine<{}>, protected _manufacturer: string) {}

  summary(): string {
    return `${this._manufacturer} makes this machine running on engine ${this._engine}.`
  }
  abstract man(): string;
}
class Car extends Machine {
  constructor(protected _engine: IEngine<{}>, protected _manufacturer: string) {
    super(_engine, _manufacturer);
  }
  man() {
    return 'more info :P';
  }
}
// Accessor
class Auto {
  private _speed: number = 0;
  private MAX_SPEED = 100;
  get speed(): number {
    return this._speed;
  }
  set speed(speed: number) {
    this._speed = speed;
  }
}
// index signatures
interface Dictionary<T> {
  [key: string]: T;
}
let keys: keyof Dictionary<number>; // string | number
let value: Dictionary<number>['foo']; // number

type IReadonly<T> = { readonly [P in keyof T]: T[P] }
type IPartial<T> = { [P in keyof T]?: string | number }
type IPick<T, K extends keyof T> = { [P in K]: T[P] }
type Diff<T, U> = T extends U ? never : T;  // Remove types from T that are assignable to U
type Filter<T, U> = T extends U ? T : never;  // Remove types from T that are not assignable to U
type INonNullable<T> = Diff<T, null | undefined>;
type IReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type IFuncion = { (num: number): number }
const func: IFuncion = (num) => num ** 2;
let T20: IReturnType<typeof func> = 123;
let T21: IReturnType<IFuncion> = 123;
type Unpacked<T> =
  T extends Array<infer U> ? U :
    T extends (...args: any[]) => infer U ? U :
      T extends Promise<infer U> ? U :
        T;

type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]; /* [keyof T] returns types, by default it is complex type and this returns union of types */
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>


// conditional types
interface ICallUser {
  <T>(arg: T extends Function ? string : null): void
}
type TypeName<T> =
  T extends string ? "string" :
    T extends number ? "number" :
      T extends boolean ? "boolean" :
        T extends undefined ? "undefined" :
          T extends Function ? "function" :
            "object";

// namespaces:
export namespace Validation {
  export namespace ddt {
    export class Example {}
  }
  export const validate = <T>(s: T): Partial<T> => {
    console.log(`Validating..`);
    return s;
  };
  export const StringValidator = (s: string) => {
    return validate(s);
  }
}

// Global namespacing
declare namespace cats {
  interface Kitty {}
}