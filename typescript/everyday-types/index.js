var arr;
var arrr;
var constant = 100;
var names = ["Shubham"];
var name0 = { name: "Shubham" };
// contextual typing : name parameter in arrow function got type string
names.forEach(function (name) {
    name;
});
// but you can annotet type on them as follows
names.forEach(function (name) {
    name;
});
// The parameter's type annotation is an object type
//  if dont specify type then it is assumed as 'any'
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// ? optional properties
function fullName(obj) {
    if (!(obj.firstName && obj.lastName))
        return new Error("one of the arguments firstName or lastName required");
    return (obj === null || obj === void 0 ? void 0 : obj.firstName) + (obj === null || obj === void 0 ? void 0 : obj.lastName);
}
fullName({ firstName: "Shubham" });
fullName({ lastName: "Oulkar" });
fullName({ firstName: "shubham", lastName: "oulkar" });
fullName({ firstName: "shubham", lastName: "oulkar", age: 55 });
var bear = getBear();
bear.name;
bear.honey;
// ? type assertion
var canvas = document.getElementById("mainCanvas");
//  OR
var myCanvas = document.getElementById("mainCanvas");
//  above generic annotation is not used in .tsx file because type assertions are removed at compile time.
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
