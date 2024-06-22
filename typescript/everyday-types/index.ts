let arr: boolean[];

let arrr: Array<boolean>;

var constant: string = 100;

const names = ["Shubham"];

const name0 = { name: "Shubham" };

// contextual typing : name parameter in arrow function got type string
names.forEach((name) => {
  name;
});

// but you can annotet type on them as follows
names.forEach((name: string) => {
  name;
});

// The parameter's type annotation is an object type
//  if dont specify type then it is assumed as 'any'
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// ? optional properties
function fullName(obj: {
  firstName?: string | null;
  lastName?: string | null;
}) {
  if (!(obj.firstName && obj.lastName))
    return new Error("one of the arguments firstName or lastName required");
  return obj?.firstName + obj?.lastName;
}

fullName({ firstName: "Shubham" });
fullName({ lastName: "Oulkar" });
fullName({ firstName: "shubham", lastName: "oulkar" });
fullName({ firstName: "shubham", lastName: "oulkar", age: 55 });

// extend interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = getBear();
bear.name;
bear.honey;

// ? type assertion
const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
//  OR
const myCanvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
//  above generic annotation is not used in .tsx file because type assertions are removed at compile time.

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

const obj = { counter: 0 };
if (typeof obj.counter === "number") {
  obj.counter = 1;
}

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" as "GET" } as const;
handleRequest(req.url, req.method as "GET");

// ? non-null assertion operator (!)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
