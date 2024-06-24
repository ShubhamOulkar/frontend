interface UserDefaults {
  // The absence of a value represents 'system'
  colorThemeOverride?: "dark" | "light";
}

const score: number = 100;

function getUserSettings() {}

const settings = getUserSettings();
settings.colorThemeOverride = "dark";
settings.colorThemeOverride = "light";

// But not:
settings.colorThemeOverride = undefined;

function fn(n: number) {
  if (n > 5) {
    return true;
  } else {
    return false;
  }
  return true;
}

function verifyAge(age: number) {
  // Forgot 'return' statement
  if (age > 18) {
    verified: true;
  }
}

const a = 6;

switch (a) {
  case 0:
    console.log("even");

  case 2:
    console.log("odd");
    break;
}

function add(a, b) {
  return a + b;
}

class Album {
  setup() {}
}

class MLAlbum extends Album {
  override setup() {}
}

class SharedAlbum extends Album {
  setup() {}
}

function title(str: "blue" | "black"): string {
  if (str === "blue") return str;
}

try {
  // ...
} catch (err: unknown) {
  // We have to verify err is an
  // error before using it as one.
  if (err instanceof Error) {
    console.log(err.message);
  }
}
