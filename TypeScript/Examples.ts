interface IPoint {
  readonly x: number;
  readonly y: number;
}

// custom properties
interface ICustomObject {
  [propname: string]: string | number;
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
// Partial<T> -- makes propertis optinal
// Readonly<T>
// Record<Page, PageInfo> -- creates new nested object with <Page> properties and values of <PageInfo> type
interface PageInfo {
  title: string;
}

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
enum SocialMedia {
  INSTAGRAM = "INSTAGRAM",
  FACEBOOK = "FACEBOOK",
  YOUTUBE = "YOUTUBE",
  LINKEDIN = "LINKEDIN"
}

type AlertType = 'success' | 'warning' | 'error';

interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person;
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

const obj1 = {
  width: 200,
  height: 200
};

type UserKeysNoMeta = Exclude<keyof IUser, '_id' | 'created'>
type UserKeysNoMeta1 = Pick<IUser, 'name' | '_id'>