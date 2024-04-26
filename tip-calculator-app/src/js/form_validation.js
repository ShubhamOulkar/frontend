/* <form id="d" enctype="multipart/form-data">
      <input type="text" value="shubham" name="name" />
      <input type="email" value="shu@g.com" name="email" />
      <input type="password" value="123456" name="password" />

      <button type="submit">Submit</button>
    </form> */

const form = document.querySelector("#d");

// validations for this specific form
const validations = {
  name: (value) => !!value.trim(),
  email: (value) => value.includes("@"),
  password: (value) => value.length >= 12,
};

const dataIsValid = (key, value, validations) => {
  // some input fields are nor required, allow them without error.
  if (!validations[key]) return true;
  return validations[key](value);
};

// new `formIsValid` function to check any form against any set of validations
const formIsValid = (form, validations) => {
  let isValid = true;
  const data = Object.fromEntries(new FormData(form));
  console.log(data);
  Object.keys(data).forEach((name) => {
    // pass in the validations to `dataIsValid` as the third argument
    if (!dataIsValid(name, data[name], validations)) {
      console.log(name);
      isValid = false;
    }
  });
  return isValid;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (formIsValid(e.target, validations)) {
    console.log("Success");
  } else {
    console.log("Some data you have supplied is invalid!");
  }
};

form.addEventListener("submit", handleSubmit);
