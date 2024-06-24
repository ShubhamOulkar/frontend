// setting ts file
let greet: string = "hello world";
console.log(greet);

/** Optional properties in objects */
interface Shape {
  kind: "rect" | "square";
  xPos?: number;
  yPos?: number;
}

function getShape(shape: Shape): number {
  let xpos = shape.xPos;
  let ypos = shape.yPos;
  return xpos! + ypos!;
}

const shape: number = getShape({ kind: "rect", xPos: 100 });
console.log("shape: ", shape);

function getShape0(shape: { kind: "rect" | "square"; xPos: 0; yPos: 0 }) {
  let xpos = shape.xPos === undefined ? 0 : shape.xPos;
  return shape.xPos + shape.yPos;
}

/** readonly property */
interface Student {
  readonly name: string;
  readonly standard: string;
  readonly age: number;
}

function getStudent(student: Student): Student {
  //   student.name = "shubham";
  return student;
}

const student: Student = getStudent({
  name: "shubham",
  standard: "10th",
  age: 14,
});

console.log("student: ", student);

/** Mapping modifier for removing readonly properties */
type RemoveReadonly<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type WrittableStudent = RemoveReadonly<Student>;

function getStudentWrittable(student: WrittableStudent): object {
  student.name = "Shubham";
  student.standard = "12th";
  student.age = 16;

  return student;
}

console.log(
  "student modified at runtime: ",
  getStudentWrittable({ name: "shubham", standard: "10th", age: 14 })
);

/*
interface TemplateStringIndexSignature {
  [`key:${string}`]: string;
}

const example: TemplateStringIndexSignature = {
  "key-name": "Alice",
  "key-city": "Wonderland",
};
*/

// ? Index signatures

interface NumberDictionary {
  [index: string]: number | string;

  length: number; // ok
  name: string; // ok only union with string type
}

const Salary1 = {
  baseSalary: 100_000,
  bonus: 20_000,
};

const Salary2 = {
  contractSalary: 110_000,
};

type allowed = {
  [key: string]: number;
};

function calculateTotal(obj: allowed): number {
  let calculateTotal: number = 0;
  for (let i in obj) {
    calculateTotal += obj[i];
  }
  return calculateTotal;
}

const salary1 = calculateTotal(Salary1);
const salary2 = calculateTotal(Salary2);

console.log("Salary 1:", salary1, "Salary 2:", salary2);
