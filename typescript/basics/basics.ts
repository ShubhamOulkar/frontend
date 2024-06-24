const message = "hello!";

message();

const user5 = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined

const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  //This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
