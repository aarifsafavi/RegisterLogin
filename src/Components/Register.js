import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    if (users.some((u) => u.email === email)) {
      alert("Email is already registered");
    } else {
      // Add new user to the local storage
      const newUser = { name, email, pass };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      alert("Registration successful");
      // Redirect or navigate to the login page
      navigate("/");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>

      <form className=" register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Full Name"
          id="name"
        />

        <label htmlFor="email">Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="user@xmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />

        <button type="submit">Register</button>
      </form>
      <Link to="/">
        <button
          className="link-button"
          // onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here!
        </button>
      </Link>
    </div>
  );
};

export default Register;
