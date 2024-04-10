"use-strict";

const inputElements = document.querySelectorAll("input");
const nextButtons = document.querySelectorAll("button[data-next]");
const backButtons = document.querySelectorAll("button[data-back]");
const allSteps = document.querySelectorAll("#step");
const allSideBarStatus = document.querySelectorAll("#Sidebar-state");

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

nextButtons.forEach((btn) => {
  btn.addEventListener("click", handleForm);
});

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
  console.log("current step:", String(Number(stepBack) + 1));

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
