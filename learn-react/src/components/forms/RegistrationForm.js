import { useState } from "react";
import "./RegistrationForm.css";
import Input from "../Input";

export default function RegistrationForm() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirm: false,
    isValid: false,
  });

  const [errors, setErros] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: [],
    confirm: "",
    passStrangth: false,
  });

  const handleForm = (e) => {
    e.preventDefault();
    // check fields are valid

    // set register to default values
    setRegister({
      name: "",
      email: "",
      password: "",
      confirm: false,
      isConfirm: false,
    });
  };

  const handleName = (e) => {
    // check name length
    let nameLen = e.target.value.trim().length;
    if (nameLen > 0 && nameLen <= 3) {
      setErros({
        ...errors,
        nameErr: "Username should be at least 3 characters.",
      });
    } else {
      setErros({
        ...errors,
        nameErr: "",
      });
    }
    setRegister({ ...register, name: e.target.value.trim() });
  };

  const handleEmail = (e) => {
    // check valid email address

    if (
      !e.target.value.match(/^[a-zA-z0-9_-]+@[a-zA-z0-9_-]+.[a-zA-z0-9_-]+$/) &&
      e.target.value.length > 0
    ) {
      setErros({
        ...errors,
        emailErr: "Invalid email address (only '_' and '-' allowed.)",
      });
    } else {
      setErros({ ...errors, emailErr: "" });
    }

    setRegister({ ...register, email: e.target.value.trim() });
  };

  const handlePassword = (e) => {
    // check password
    const { error, passwordStrangth } = checkPassword(e.target.value.trim());

    // no errors then password is strong
    if (!error.length && passwordStrangth) {
      setErros({ ...errors, passwordErr: [], passStrangth: true });
    } else {
      setErros({ ...errors, passwordErr: error, passStrangth: false });
    }

    setRegister({ ...register, password: e.target.value.trim() });
  };

  const confirmPassword = (e) => {
    if (register.password === e.target.value && e.target.value.length >= 8) {
      setRegister({ ...register, confirm: true });
      setErros({ ...errors, confirm: "password matched" });
    } else if (
      register.password !== e.target.value &&
      e.target.value.length > 0
    ) {
      setRegister({ ...register, confirm: false });
      setErros({ ...errors, confirm: "password not matched" });
    } else {
      setRegister({ ...register, confirm: false });
      setErros({ ...errors, confirm: "" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <h1>This is registration form</h1>
          <form onSubmit={handleForm}>
            <fieldset className="fields">
              <div>
                <Input
                  type={"text"}
                  name={"name"}
                  placeHolder={"username"}
                  value={register.name}
                  onChange={handleName}
                  label={"Username: "}
                  error={errors.nameErr ? <span>{errors.nameErr}</span> : ""}
                />
              </div>
              <div>
                <Input
                  type={"email"}
                  name={"email"}
                  placeHolder={"email address"}
                  value={register.email}
                  onChange={handleEmail}
                  label={"Email: "}
                  error={errors.emailErr ? <span>{errors.emailErr}</span> : ""}
                />
              </div>
              <div className={register.confirm ? "matched" : ""}>
                <Input
                  type={"password"}
                  name={"password"}
                  placeHolder={"user password"}
                  value={register.password}
                  onChange={handlePassword}
                  label={"Password: "}
                  error={
                    errors.passStrangth ? (
                      <span className="strongPass">Password is strong</span>
                    ) : (
                      ""
                    )
                  }
                />
                {register.password && errors.passwordErr.length ? (
                  <ul>
                    {errors.passwordErr.map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className={register.confirm ? "matched" : ""}>
                <Input
                  type={"password"}
                  name={"confirm"}
                  placeHolder={"confirm password"}
                  onChange={confirmPassword}
                  label={"Confirm password: "}
                  error={errors.confirm ? <span>{errors.confirm}</span> : ""}
                />
              </div>
              <button type="submit">Register user</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

function checkPassword(password) {
  const error = [];
  let passwordStrangth = 0;

  if (password.length < 8) {
    error.push("Password at least 8 character");
    passwordStrangth -= 1;
  } else {
    passwordStrangth += 1;
  }

  if (!password.match(/[a-zA-Z]/)) {
    error.push("Password should contain at least 1 letter");
    passwordStrangth -= 1;
  } else {
    passwordStrangth += 1;
  }

  if (password.search(/[0-9]/) === -1) {
    error.push("Password should contain at least 1 number");
    passwordStrangth -= 1;
  } else {
    passwordStrangth += 1;
  }

  if (!password.match(/[^a-zA-Z0-9]/)) {
    error.push("Password should contain at least 1 character");
    passwordStrangth -= 1;
  } else {
    passwordStrangth += 1;
  }

  return { error, passwordStrangth: passwordStrangth === 4 };
}
