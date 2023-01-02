import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp } from "../redux/actions";
import { getAllUsers } from "../redux/selectors";

function Signup({ allUsers, currentUser, signUp }) {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && phoneNo && email && password) {
      if (allUsers.includes(email)) {
        setError("email linked to existing account");
      } else if (password !== confirmPassword) {
        setError("password not same");
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({ name, phoneNo, email, password })
        );
        signUp(name, phoneNo, email, password);
        navigate("/shop");
      }
    }
  };

  return (
    <>
      <div className="content-container">
        <h3 className="text-center">Sign Up</h3>
        <br />
        <div className="login-container bg-white">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            name="phoneNo"
            placeholder="Enter phone number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <span className="error">{error}</span>
          <br />
          <button onClick={handleSubmit}>Signup</button>
        </div>
        <br />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const allUsers = getAllUsers(state);
  const { currentUser } = state.users;
  return { allUsers, currentUser };
};

export default connect(mapStateToProps, { signUp })(Signup);
