// -- readonly
interface Point {
  readonly x: number;
  readonly y: number;
}
// custom properties
interface SquareConfig {
  color: string;
  width: number;
  [propname: string]: string | number;
}
// functions 
const add: (baseValue: number, increment: number) => number = (x, y) => {
    return x + y;
  };
  const optionalAdd: (baseValue: number, increment?: number) => number = (x, y = 2) => {
    return x + y;
  };
  // Generics
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }
  const identity: GenericIdentityFn = (arg) =>  {
    return arg;
  }
  
  interface GivenIdentityFn<T> {
    (arg: T): T;
  }
  interface IProps {
    color: "string"
  }
  const identity: GivenIdentityFn<IProps> = (arg: IProps) =>  {
    return arg;
    // to get round invokation typification use identity(<IProps>{}) or identity({} as IProps) 
  }
  
  function loggingIdentityAlternative<T>(arg: Array<T>): Array<T> {
    // or alternative (arg: T[]): T[]
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }

// Advanced Types
  // Partial<T> -- makes propertis optinal
  // Readonly<T>
  // Record<Page, PageInfo> -- creates new nested object with <Page> properties and values of <PageInfo> type 
  interface PageInfo {
    title: string;
  }
  type Page = 'home' | 'about' | 'contact';
  const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
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
