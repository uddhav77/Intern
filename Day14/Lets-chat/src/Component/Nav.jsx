import React from "react";
import { NavLink } from "react-router-dom";
import useCurrentUser from "./useCurrentUser";

const Nav = () => {
  const { isAuth } = useCurrentUser();

  return (
    <>
      <div className="navbar">
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Home
              </NavLink>
            </li>
            {!isAuth ? (
              <li>
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  Login
                </NavLink>
              </li>
            ) : null}

            <li>
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                Register
              </NavLink>
            </li>

            <li>
              <NavLink to="/users" style={{ textDecoration: "none" }}>
                Users
              </NavLink>
            </li>

            <li>
              <NavLink to="/logout" style={{ textDecoration: "none" }}>
                Logout
              </NavLink>
            </li>

            <li>
              <NavLink to="/profile" style={{ textDecoration: "none" }}>
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
