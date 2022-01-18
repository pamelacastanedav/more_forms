import React, { useState } from "react";

const UserForm = (props) => {
  //error is for validations
  const [firstname, setFirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");

  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  //validation check
  const checkFirstname = (e) => {
    setFirstname(e.target.value);
    if (e.target.value.length < 1) {
      setFirstnameError("Name is required!");
    } else if (e.target.value.length < 3) {
      setFirstnameError("Name must be 3 characters or longer!");
    } else {
      setFirstnameError("");
    }
  };
  const checkLastname = (e) => {
    setLastname(e.target.value);
    if (e.target.value.length < 1) {
      setLastnameError("Last name is required!");
    } else if (e.target.value.length < 3) {
      setLastnameError("Last name must be 3 characters or longer!");
    } else {
      setLastnameError("");
    }
  };
  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 5) {
      setEmailError("Email must be 5 characters or longer!");
    } else {
      setEmailError("");
    }
  };
  const checkPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 8) {
      setPasswordError("PASSWORD must be 8 characters or longer!");
    } else {
      setPasswordError("");
    }
  };
  const checkConfirm = (e) => {
    setConfirm(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmError("Confirmation is required!");
    } else if (password != e.target.value) {
      setConfirmError("Passwords do not match!");
    } else {
      setConfirmError("");
    }
  };

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      firstname,
      lastname,
      username,
      email,
      password,
      confirm,
    };

    console.log("Welcome", newUser);
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input type="text" value={firstname} onChange={checkFirstname} />
          {firstnameError ? (
            <p style={{ color: "red" }}>{firstnameError}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" value={lastname} onChange={checkLastname} />
          {lastnameError ? <p style={{ color: "red" }}>{lastnameError}</p> : ""}
        </div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError ? <p style={{ color: "red" }}>{usernameError}</p> : ""}
        </div>
        <div>
          <label>Email Address: </label>
          <input type="text" value={email} onChange={checkEmail} />
          {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
        </div>
        <div>
          <label>Password: </label>
          <input type="text" value={password} onChange={checkPassword} />
          {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="text" value={confirm} onChange={checkConfirm} />
          {confirmError ? <p style={{ color: "red" }}>{confirmError}</p> : ""}
        </div>
        <input type="submit" value="Create User" />
      </form>
      <div>
        <p>First name:{firstname}</p>
        <p>Last name:{lastname}</p>
        <p>Username :{username}</p>
        <p>Email: {email}</p>
        <p>password: {password}</p>
        <p>confirm password {confirm}</p>
      </div>
    </div>
  );
};

export default UserForm;
