// setting ts file
var greet = "hello world";
console.log(greet);
function getShape(shape) {
    var xpos = shape.xPos;
    var ypos = shape.yPos;
    return xpos + ypos;
}
var shape = getShape({ kind: "rect", xPos: 100 });
console.log("shape: ", shape);
function getShape0(shape) {
    var xpos = shape.xPos === undefined ? 0 : shape.xPos;
    return shape.xPos + shape.yPos;
}
function getStudent(student) {
    //   student.name = "shubham";
    return student;
}
var student = getStudent({
    name: "shubham",
    standard: "10th",
    age: 14,
});
console.log("student: ", student);
function getStudentWrittable(student) {
    student.name = "Shubham";
    student.standard = "12th";
    student.age = 16;
    return student;
}
console.log("student modified at runtime: ", getStudentWrittable({ name: "shubham", standard: "10th", age: 14 }));
var Salary1 = {
    baseSalary: 100000,
    bonus: 20000,
};
var Salary2 = {
    contractSalary: 110000,
};
function calculateTotal(obj) {
    var calculateTotal = 0;
    for (var i in obj) {
        calculateTotal += obj[i];
    }
    return calculateTotal;
}
var salary1 = calculateTotal(Salary1);
var salary2 = calculateTotal(Salary2);
console.log("Salary 1:", salary1, "Salary 2:", salary2);
