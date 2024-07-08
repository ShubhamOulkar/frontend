// export default function addComma(value) {
//   let newValue = value
//     .split("")
//     .reverse()
//     .map((a, i, arr) => ((i + 1) % 3 === 0 && i + 1 < arr.length ? "," + a : a))
//     .reverse()
//     .join("");

//   return newValue;
// }

export default function addComma(value) {
  if (typeof value !== "string") {
    throw new Error("Value must be a string");
  }

  let newValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return newValue;
}
