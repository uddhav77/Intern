import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex text-white fixed relative">
      <div className="flex-1 text-4xl font-bold">
        <NavLink to="/">Demo</NavLink>
      </div>

      <div className="flex-1">
        <ul className="flex mt-2.5 gap-10 text-xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/messages">Messages</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
