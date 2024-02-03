import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passLogin, setpassLogin] = useState(""); // Corrected variable name
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === emailLogin);

    if (!user || user.pass !== passLogin) {
      // Corrected variable name
      alert("Incorrect email or password");
    } else {
      alert("Login successful");
      // Redirect or navigate to the home page
      navigate("/home");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className=" login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={emailLogin}
          onChange={(e) => setEmailLogin(e.target.value)}
          type="email"
          placeholder="user@xmail.com"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          value={passLogin}
          onChange={(e) => setpassLogin(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          required
        />

        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <button
          className="link-button"
          //  onClick= {() => props.onFormSwitch('register')}
        >
          Dont't have an account? Register here!
        </button>
      </Link>
    </div>
  );
};

export default Login;
