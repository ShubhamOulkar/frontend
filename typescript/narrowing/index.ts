// ? Narrowing : The process of refining types to more specific types then defined is called narrowing.
//  We use type guards for narrowing

function paddingLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") return " ".repeat(padding) + input;
  return padding + input;
}

console.log(paddingLeft(5, "shubham"));
console.log(paddingLeft("10", "shubham"));

/*
! typeof type guards : number, string, boolean, bigint, symbol, undefined, object (Array, null are objects), functions.
 */

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    //   (property) Container.value: number

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

//?  in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

// ? Discriminated union
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  baseLength: number;
  heightLength: number;
}

type Shape = Circle | Square | Triangle;

function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === "rect") {
    //   This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.
    // ...
  }
}

function getArea(shape: Shape) {
  //   if (shape.kind === "circle") {
  //     return Math.PI * shape.radius ** 2;
  //   }
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return 0.5 * shape.baseLength * shape.heightLength;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
