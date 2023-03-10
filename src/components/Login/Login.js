import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import ReactDOM from "react-dom";
import "../../css/App.css";

function Login() {
  const navigate = useNavigate();
  const database = [
    {
      email: "admin@gmail.com",
      password: "123",
    },
    {
      email: "user@gmail.com",
      password: "123",
    },
  ];
  const [isSubmitted, setIsSubmitted] = useState();

  function handleSubmit(event) {
    // prevent reload page
    event.preventDefault();
    var email = document.forms[0].email.value;
    var password = document.forms[0].password.value;

    const userData = database.find((user) => user.email === email);

    if (userData) {
      if (userData.password !== password) {
        // Invalid password
        alert("Incorrect password. Please input again");
      } else {
        console.log(123);
        setIsSubmitted(true);
        navigate("/form");
      }
    } else {
      // Username not found
      alert("Incorrect Email. Please input again");
    }
  }
  if (isSubmitted) {
  }

  return (
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="loggin-group">
            <label className="text">Email:</label>
            <input
              required
              name="email"
              type="email"
              className="form-control"
              placeholder="example@kyanon.digital"
            />
          </div>
          <div className="loggin-group">
            <label className="text">Password:</label>
            <input
              required
              name="password"
              type="password"
              className="form-control"
              placeholder="******"
            />
          </div>
          <div className="submit-area">
            <div className="checkbox">
              <input size="20" type={"checkbox"} />{" "}
              <label htmlFor="showPassword"> Show password</label>
            </div>
            <button type="submit" className="button">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
