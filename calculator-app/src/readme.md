# Calculator logic

```js
const handleButtonClick = (buttonValue) => {
  if (buttonValue >= "0" && buttonValue <= "9") {
    setValue((prev) => (prev === "0" ? buttonValue : prev + buttonValue));
  } else if (buttonValue === "« DEL") {
    setValue((prev) => (prev === "0" ? "0" : prev.slice(0, -1) || "0"));
  } else if (buttonValue === "RESET") {
    setValue("0");
  } else if (buttonValue === "=") {
    console.log(value);
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  } else {
    setValue((prev) => (prev === "0" ? buttonValue : prev + buttonValue));
  }
};
```
