// ----- Advanced Types
// Partial<T> - makes all properties optinal
// Readonly<T> - makes primitive or complex type immutable object
// Record<K, T> - creates nested type with K of T values
interface PageInfo { title: string }

type Page = 'home' | 'about' | 'contact';
const ex: Record<Page, PageInfo> = {
  about: {title: 'about'},
  contact: {title: 'contact'},
  home: {title: 'home'},
};
// Pick<T, K> - constructs type by picking properties K from T
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>; // type TodoPreview = 'title' | 'completed';
// Omit<T, K> - constructs type by picking properties T and removing K
// Exclude<T, U> - constructs type by excluding from T all properties that are assignable to U
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"

type UserKeysNoMeta = Exclude<keyof IUser, '_id' | 'created'>

type T2 = Exclude<string | number | (() => void), Function>;  // string | number
// Extract<T, U> - constructs type by extracting from T all properties that are assignable to U
type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
// NonNullable<T> - exclude null and undefined from T
// Parameters<T> - Constructs a tuple type of the types of the parameters of a function type T
// ConstructorParameters<T> - Constructs a tuple type of parameters of a class constructor
// ReturnType<T> - obtain the return type of a function type
// InstanceType<T> - obtain the instance type of a constructor option type
// ThisParameterType<T> - obtain type of this in object or function
// OmitThisParameter<T>
// NonNullable<T> -- Constructs a type by excluding null and undefined from T
// ReturnType<T> -- Constructs a type consisting of the return type of function T.
// Required<T> -- makes all optional properties required

// index signatures
interface Dictionary<T> {
  [key: string]: T;
}
let keys: keyof Dictionary<number>; // string | number
let value: Dictionary<number>['foo']; // number
value += 1

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