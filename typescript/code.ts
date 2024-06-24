class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getAreaFunction() {
    return function () {
      return this.height * this.width;
    };
  }
}

const rect = new Rectangle(100, 100);
console.log(rect);
const area = rect.getAreaFunction();
console.log(area());
