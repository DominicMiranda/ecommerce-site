import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { login, logout } from "../redux/actions";
import { getAllUsers, getUserData } from "../redux/selectors";

import "./Login.css";

function Login({
  allUsersData,
  allUsersIds,
  activeUserId,
  activeUserDetails,
  login,
  logout,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (allUsersIds.includes(email)) {
      if (password !== allUsersData.byIds[email].password) {
        setError("Wrong Password!");
      } else {
        login(email, password);
        localStorage.setItem("user", JSON.stringify({ email, password }));
        navigate("/shop");
      }
    } else {
      navigate("/Signup");
    }
  };

  const handleLogout = () => {
    logout(activeUserId);
    localStorage.clear();
  };

  return !activeUserId ? (
    <>
      <div className="content-container">
        <h3 className="text-center">Login</h3>
        <br />
        <div className="login-container bg-white">
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
          <h4 className="error">{error}</h4>
          <br />
          <button onClick={handleSubmit}>Login</button>
        </div>
        <br />
        <h4 className="text-center">
          <NavLink to={"/Signup"}>New to this site? Sign up here</NavLink>
        </h4>
      </div>
    </>
  ) : (
    <>
      <div className="content-container">
        <h3 className="text-center">Account Details</h3>
        <br />
        <div className="login-container bg-white">
          <table id="account-details">
            <tbody>
              <tr>
                <th>Email</th>
                <td>{activeUserDetails.email}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{activeUserDetails.name}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{activeUserDetails.phone}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const allUsersData = state.users;
  const allUsersIds = getAllUsers(state);
  const activeUserId = state.users.currentUser;
  const activeUserDetails = getUserData(state, activeUserId);
  return {
    allUsersData,
    allUsersIds,
    activeUserId,
    activeUserDetails,
  };
};

export default connect(mapStateToProps, { login, logout })(Login);
