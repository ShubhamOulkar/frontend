export default function addComma(value) {
  let newValue = value
    .split("")
    .reverse()
    .map((a, i, arr) => ((i + 1) % 3 === 0 && i + 1 < arr.length ? "," + a : a))
    .reverse()
    .join("");

  return newValue;
}
