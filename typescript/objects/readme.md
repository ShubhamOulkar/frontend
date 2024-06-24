### create optional property on object by using '?'

```ts
interface Shape {
  kind: "rect" | "square";
  xPos?: number;
  yPos?: number;
}
```

    But under strictNullChecks setting ts will tell us they are undefined.
    So we do check for undefined type. We can handle undefined state by
    using non-null assertion operator (!) or by default value or by using
    type guard statements.

```ts
function getShape(shape: Shape) {
  let xpos = shape.xPos === undefined ? 0 : shape.xPos;
  return shape!.Xpos;
}
```

```ts
function getShape(shape: { kind: "rect" | "square"; xPos: 0; yPos: 0 }) {
  let xpos = shape.xPos === undefined ? 0 : shape.xPos;
  return shape!.xPos;
}
```

### `readonly` property

    create readonly property by using readonly keyword on property name.
    These properties are not writtable at runtime. But we can modify them
    by using mapping modifiers.

```ts
/** readonly property */
interface Student {
  readonly name: string;
  readonly standard: string;
  readonly age: number;
}

/** Mapping modifier for readonly properties */
type RemoveReadonly<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type WrittableStudent = RemoveReadonly<Student>;
```

### Index signature describe the type of possible values.

    Syntax :- {[key: keyType]: valueType}

    only string, number, symbol, template string literal and its unions
    are allowded as Type of keys. All Type are allowded as valueType.

{[key: string]: number} is same as {[key: string | number]: number},
because keys are always coerced as strings.
