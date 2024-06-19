// class Rectangle {
//   width;
//   height;

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getAreaFunction() {
//     return function area() {
//       return this.height * this.width;
//     };
//   }
// }

// const rect = new Rectangle(100, 100);
// console.log(rect);
// const area = rect.getAreaFunction();
// console.log(area());

// With strictBindCallApply off
function fn(x) {
  return Number(x);
}

// Note: No error; return type is 'any'
const n = fn.bind(null, undefined);
console.log(n());
