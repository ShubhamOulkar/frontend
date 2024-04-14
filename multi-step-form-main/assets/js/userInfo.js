"use-strict";

const inputElements = document.querySelectorAll("#form-0 > div > input");
const nextButtons = document.querySelectorAll("button[data-next]");
const backButtons = document.querySelectorAll("button[data-back]");
const allSteps = document.querySelectorAll(".step");
const allSideBarStatus = document.querySelectorAll(".Sidebar-state");
const submitObject = {
  name: "text",
  email: "text",
  phone: "number",
  plan: "text",
  planPrice: "$ 12/mo",
  billing: "text month/yearly",
  addOns: ["item1", "item2"],
  addOnsPrice: ["+$1/mo", "+$2/mo"],
  total: "price text",
};

//  update object from step 1
nextButtons[0].addEventListener("click", createObject);

function createObject(e) {
  if (!e.target.form.checkValidity()) return;

  submitObject["name"] = inputElements[0].value;
  submitObject["email"] = inputElements[1].value;
  submitObject["phone"] = inputElements[2].value;
  console.log(submitObject);
}

// input validation
inputElements.forEach((input) =>
  input.addEventListener("invalid", showInvalidInput)
);

inputElements.forEach((input) =>
  input.addEventListener("change", removeInvalidInput)
);

function showInvalidInput(e) {
  e.target.previousElementSibling.children[1].innerText =
    "This field is required";

  e.target.style.borderColor = "red";
}

function removeInvalidInput(e) {
  if (e.target.checkValidity()) {
    e.target.previousElementSibling.children[1].innerText = "";
    e.target.style.borderColor = "hsl(243, 100%, 62%)";
  } else {
    e.target.previousElementSibling.children[1].innerText =
      "This field is required";
  }
}

// form navigation by buttons
// set all steps display none except first step
// use inactive class to add/remove other steps

// step 1 form submission
nextButtons[0].addEventListener("click", handleForm);

backButtons.forEach((btn) => {
  btn.addEventListener("click", handleBackForm);
});

function handleForm(e) {
  let stepActivate = e.target.dataset.next;
  console.log("current step:", String(stepActivate - 1));

  if (!e.target.form.checkValidity()) return;

  allSteps.forEach((s) => {
    // inactivate current step
    if (s.dataset.step === String(stepActivate - 1))
      s.classList.toggle("inactive");

    // activate next step
    if (s.dataset.step === stepActivate) s.classList.toggle("inactive");
  });

  // show current step status on sidebar
  allSideBarStatus[stepActivate].classList.toggle("sidebar-status");

  // remove previous step status from sidebar
  allSideBarStatus[stepActivate - 1].classList.toggle("sidebar-status");
}

function handleBackForm(e) {
  let stepBack = e.target.dataset.back;
  console.log("user backed from step:", String(Number(stepBack) + 1));

  // remove all add-ons  from summary list if back button is clicked at step 4
  if (stepBack === "2")
    document.querySelectorAll(".summary-addon").forEach((ele) => ele.remove());

  allSteps.forEach((s) => {
    // inactivate current step
    if (s.dataset.step === String(Number(stepBack) + 1)) {
      // + is by default concat
      s.classList.toggle("inactive");
    }

    // go back step
    if (s.dataset.step === stepBack) s.classList.toggle("inactive");
  });

  // show current step status on sidebar
  allSideBarStatus[stepBack].classList.toggle("sidebar-status");

  // remove previous step status from sidebar
  allSideBarStatus[Number(stepBack) + 1].classList.toggle("sidebar-status");
}
