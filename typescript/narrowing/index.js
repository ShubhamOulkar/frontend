// ? Narrowing : The process of refining types to more specific types then defined is called narrowing.
//  We use type guards for narrowing
function paddingLeft(padding, input) {
    if (typeof padding === "number")
        return " ".repeat(padding) + input;
    return padding + input;
}
console.log(paddingLeft(5, "shubham"));
console.log(paddingLeft("10", "shubham"));
