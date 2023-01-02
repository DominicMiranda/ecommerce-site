import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import {
  setQueryString,
  resetQueryString,
  login,
  loadLocalCart,
  signUp,
} from "../redux/actions";
import "./Navbar.css";

function Navbar({
  currentUser,
  allIds,
  setQueryString,
  resetQueryString,
  login,
  loadLocalCart,
  signUp,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const pages = ["Cart", "Login"];

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user")) || null;
    if (localUser) {
      allIds.includes(localUser.email)
        ? login(localUser.email, localUser.password)
        : signUp(
            localUser.name,
            localUser.phoneNo,
            localUser.email,
            localUser.password
          );
    }

    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (localCart.length) {
      loadLocalCart(localUser.email, localCart);
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setQueryString(searchQuery);
      navigate("/shop");
    }
  };

  return (
    <>
      <div className="header">
        <nav className="navbar">
          <NavLink
            to="/shop"
            className="item"
            onClick={() => {
              setSearchQuery("");
              resetQueryString();
            }}
          >
            <h1>Ecommerce Site</h1>
          </NavLink>
          <div className="search-group ">
            <input
              type="text"
              placeholder=" Search for products"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </div>
          {pages.map((page) => (
            <NavLink
              to={`/${page}`}
              key={page}
              className="item"
              style={{ marginTop: "5px" }}
            >
              <h4>
                {page === "Login"
                  ? currentUser
                    ? `Account: ${currentUser}`
                    : page
                  : page}
              </h4>
            </NavLink>
          ))}
        </nav>
        <hr />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const { currentUser, allIds } = state.users;
  return { currentUser, allIds };
};
export default connect(mapStateToProps, {
  setQueryString,
  resetQueryString,
  login,
  loadLocalCart,
  signUp,
})(Navbar);
