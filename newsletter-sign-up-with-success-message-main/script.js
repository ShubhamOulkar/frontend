const errorEle = document.getElementsByClassName("email-error")[0];
const inputEmailEle = document.querySelector("input[type='email']");
const formEle = document.querySelector("form");
const formContainerEle = document.getElementsByClassName("form-container")[0];
const formSuccessEle = document.getElementsByClassName("form-success")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];

closeBtn.addEventListener("click", () => {
  formContainerEle.style.display = "flex";
  formSuccessEle.style.display = "none";
});

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  formContainerEle.style.display = "none";
  formSuccessEle.style.display = "flex";
});

inputEmailEle.addEventListener("input", (e) => {
  console.log(e.target.validity.valid);
  e.target.validity.valid ? removeError() : showError();
});

function showError() {
  console.log("error");
  errorEle.innerText = "Valid email required";
  inputEmailEle.style.backgroundColor = "hsla(4, 43%, 81%, 0.416)";
}

function removeError() {
  console.log("no error");
  errorEle.innerText = "";
  inputEmailEle.style.backgroundColor = "";
}
