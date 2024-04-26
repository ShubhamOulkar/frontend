const inputElements = document.querySelectorAll("input");
const tipAmountEle = document.getElementById("tipamount");
const totalAmountEle = document.getElementById("totalamount");
const selectEle = document.querySelectorAll("[role='button']");
const buttonEle = document.querySelector("button[type='button']");
const events = ["click", "focus"];
const validationState = {
  state: false,
  count: 0,
  inputs: {
    bill: false,
    custom: false,
    people: false,
  },
  updateCount(isErr) {
    isErr ? this.negateCount() : (this.count += 1);
    this.updateState();
  },
  updateState() {
    if (this.count === 3) this.state = true;
    if (this.count !== 3) this.state = false;
  },
  negateCount() {
    if (this.count) this.count -= 1;
    this.updateState();
  },
  inputValue: {
    bill: 0,
    custom: 0,
    people: 0,
  },
};

buttonEle.addEventListener("click", removeOutput);

inputElements.forEach((input) => {
  changeEvent(input, callbackFun);
});

selectEle.forEach((ele) => {
  events.forEach((event) => ele.addEventListener(event, handleEvent));
});

function changeEvent(ele, callback) {
  ele.addEventListener("change", callback);
}

function callbackFun(e) {
  //   check input value
  Number(e.target.value) <= 0
    ? renderError(e.target, "Can't be zero")
    : removeError(e.target);
}

function renderError(target, errorMsg) {
  let errorEle;
  if (target.id !== "custom") {
    errorEle = target.closest(".input").querySelector(".error");
  } else {
    errorEle = target.closest(".select").querySelector(".error");
  }
  errorEle.innerText = errorMsg;

  renderErrorUI(target);
}

function removeError(target) {
  if (target.id !== "custom") {
    target.closest(".input").querySelector(".error").innerText = "";
  } else {
    target.closest(".select").querySelector(".error").innerText = "";
  }
  renderErrorFreeUI(target);
}

function renderErrorUI(target) {
  const parentEle = target.parentElement;
  parentEle.style.outline = "1px solid red";

  validationState.inputs[`${target.id}`] = false;
  validationState.updateCount(true);
  validationState.inputValue[`${target.id}`] = Number(target.value);

  if (!validationState.state) removeOutput();
}

function renderErrorFreeUI(target) {
  const parentEle = target.parentElement;
  parentEle.style.outline = "1px solid hsl(172, 67%, 45%)";
  if (!validationState.inputs[`${target.id}`])
    validationState.updateCount(false);
  validationState.inputs[`${target.id}`] = true;
  validationState.inputValue[`${target.id}`] = Number(target.value);

  if (validationState.state) calculateTip();
}

function calculateTip() {
  const tip =
    validationState.inputValue.bill *
    (validationState.inputValue.custom / 100).toFixed(2);

  tipAmountEle.innerText = `$${tip / validationState.inputValue.people}`;

  const total = validationState.inputValue.bill + tip;

  totalAmountEle.innerText = `$${total / validationState.inputValue.people}`;
}

function removeOutput() {
  tipAmountEle.innerText = "$0.00";
  totalAmountEle.innerText = "$0.00";
}

function removeSelection() {
  selectEle.forEach((ele) => {
    ele.style.setProperty("background-color", "hsl(183, 100%, 15%)");
    ele.style.setProperty("color", "hsl(187, 37%, 77%)");
  });
}

function handleEvent(e) {
  removeSelection();
  e.target.style.setProperty("background-color", "hsl(187, 37%, 77%)");
  e.target.style.setProperty("color", "hsl(183, 100%, 15%)");

  validationState.inputValue["custom"] = Number(
    e.target.innerText.replace("%", "")
  );
  if (!validationState.inputs.custom) validationState.updateCount(false);

  validationState.inputs["custom"] = true;

  e.target.closest(".select").querySelector(".error").innerText = "";

  if (validationState.state) calculateTip();
}
