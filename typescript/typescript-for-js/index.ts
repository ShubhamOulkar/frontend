// ? type annotations in typescript : dont need to specify type for following declarations. TypeScript automatically find type for us.
let greeting = "Hello world";

const greet = "Good morning";

var wish = "Happy birthday";

let score = 100;

const marks = 100;

var speed = 100;

//? objects shaping using interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Shubham oulkar",
  id: 1,
};

const user2: User = {
  username: "Shubham",
  id: 2,
};

//? classes supports types

class NewUser {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user3: User = new NewUser("shubham", 3);

const user4: User = new NewUser("shubham", 44);

// use interface to define arguments and return type of ther function.
function createUser(user: User): User {
  return { name: user.name, id: user.id };
}

// ? 7 primitive types available in JavaScript string, number, boolean, undefined, null, symbol and BigInt.

/* 
! TypeScript extends above list by adding following primitives
! 1) any (allow anything)
! 2) never (this type is not possible)
! 3) void (functions whitch returns undefined or no return value)
! 4) unknown (ensure someone using this type declares what the type is)
*/

// ? composing types :- We can create complex types by using unions and generics.

// ! 1) Unions

type Variable = string | number;
type score = 1 | 3 | 5 | 7 | 9;
type bool = true | false;

function returnByType(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// ! 2) Generics : generics provide variables to the types. Common example is Array<Type>.

type ArrayForStrings = Array<string>; // this type array only contains strings
type ArrayForNumbers = Array<Number>; // this type array only contains numbers
type ArrayForNullsOrUndefined = Array<null | undefined>; // this type of array only allows nulls or undefined

type ObjectArray = Array<{ name: string }>;

const dataFromResponse: ObjectArray = [
  { name: "shubham" },
  { username: "shubhu" },
  { name: 44 },
];

const headings: ArrayForStrings = [
  "Shubham won 1st place in a hackthon",
  "Indians are Indians",
  55,
  true,
];

const pollResults: ArrayForNumbers = [100, 55, 550, 798, "0", false];

const countUnaccepted: ArrayForNullsOrUndefined = [
  null,
  undefined,
  undefined,
  null,
  "0",
  true,
];

//  Declare own types that use generics

interface MyTypes<Type> {
  fun0: (obj: Type) => void;
  fun1: () => Type;
}

declare const type: MyTypes<string>;

const object0 = type.fun0("0");
const object1 = type.fun0(22);
const getType = type.fun1();

// ? Structural type system :

interface Point {
  x: number;
  y: number;
}

function add(num: Point) {
  return num.x + num.y;
}

add({ x: 11, y: 20 }); // object is passed because object structue matched with type point

const point = { x: 100, y: 55 };

add(point); // object is passed because object structue matched with type point

add({ a: 55, y: 55 }); // do not pass because 'a' does not exist in Point interface

// ? optional properties
function fullName(obj: { firstName?: string; lastName?: string }) {
  if (!(obj.firstName && obj.lastName))
    return new Error("one of the arguments firstName or lastName required");
  return obj?.firstName + obj?.lastName;
}

fullName({ firstName: "Shubham" });
fullName({ lastName: "Oulkar" });
fullName({ firstName: "shubham", lastName: "oulkar" });
fullName({ firstName: "shubham", lastName: "oulkar", age: 55 });

// ? type assertion
const canvas1 = document.getElementById("mainCanvas") as HTMLCanvasElement;
//  OR
const myCanvas1 = <HTMLCanvasElement>document.getElementById("mainCanvas");
//  above generic annotation is not used in .tsx file

// ? non-null assertion operator (!)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
