import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-400 py-8 flex text-white">
        <div className="text-4xl font-bold ml-20">
          <NavLink to="/">MyShop</NavLink>
        </div>

        <div className="flex-1">
          <ul className="flex mt-2.5 justify-center gap-10 text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/mycart">Mycart</NavLink>
            </li>

            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
